import React, { useState, useEffect, useContext } from 'react'
import { useTheme } from 'styled-components'

import Fuse from '../../../node_modules/fuse.js/dist/fuse.basic.esm.min.js'
import { formatName, formatTotal } from 'utils/formatters'
import DataContext from 'components/providers/DataProvider'
import Section from 'components/base/Section'
import Wrapper from 'components/misc/category/Wrapper'
import Top from 'components/misc/category/Top'
import Instruction from 'components/misc/category/Instruction'
import Bottom from 'components/misc/category/Bottom'
import BarChart from 'components/charts/BarChart'
import Legend from 'components/charts/Legend'
import Search from './saisons/Search'

export default function Distance(props) {
  const theme = useTheme()

  const { equivalents, categories } = useContext(DataContext)

  const [displayAll, setDisplayAll] = useState(false)

  const [search, setSearch] = useState('')

  const [results, setResults] = useState([])
  const [fuse, setFuse] = useState(null)
  useEffect(() => {
    if (equivalents) {
      setFuse(
        new Fuse(equivalents, {
          keys: [
            {
              name: 'name.fr',
              weight: 1,
            },
            {
              name: 'slug',
              weight: 0.7,
            },
            {
              name: 'subtitle.fr',
              weight: 0.4,
            },
          ],
          threshold: 0.3,
          ignoreLocation: false,
        })
      )
    }
  }, [equivalents])

  useEffect(() => {
    if (fuse && search.length > 0) {
      setResults(
        fuse.search(search.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      )
    } else {
      setResults(null)
    }
  }, [search, fuse])

  const [equivalentsOfTheMonth, setEquivalentsOfTheMonth] = useState([])
  useEffect(() => {
    props.category &&
      setEquivalentsOfTheMonth(
        equivalents
          .filter((equivalent) => equivalent.category === props.category.id)
          .filter((equivalent) => equivalent.default || displayAll)
          .filter(
            (equivalent) =>
              results || equivalent.months.includes(props.month.index)
          )
          .filter(
            (equivalent) =>
              !results ||
              results.find((result) => result.item.slug === equivalent.slug)
          )
          .map((equivalent) => ({
            id: `${equivalent.slug}`,
            title: `1 kg de ${formatName(equivalent.name.fr)}`,
            subtitle: displayAll ? formatName(equivalent.subtitle?.fr) : null,
            emoji: equivalent.emoji,
            value: formatTotal(equivalent),
            color:
              theme.colors[
                equivalent.months.includes(props.month.index) ? 'main' : 'error'
              ],
            to: `/categories/${
              categories.find((category) => category.id === equivalent.category)
                .slug
            }/${equivalent.slug}`,
            onClick: () =>
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Navigation via graph categorie',
                equivalent.slug,
              ]),
          }))
          .sort((a, b) => (a.value > b.value ? 1 : -1))
      )
  }, [
    equivalents,
    categories,
    props.category,
    displayAll,
    props.month,
    results,
    theme,
  ])

  return (
    <Section>
      <Section.Content>
        <Wrapper
          name={`Les fruits et légumes de ${props.month.long}`}
          slug={props.category.slug}
        >
          <Search month={props.month} search={search} setSearch={setSearch} />
          <Top>
            <Instruction />
            <Top.Checkboxes visible></Top.Checkboxes>
          </Top>
          <BarChart
            items={equivalentsOfTheMonth}
            max={equivalentsOfTheMonth[equivalentsOfTheMonth.length - 1]?.value}
          />
          <Legend
            items={[
              { label: 'en saison', color: theme.colors.main },
              { label: 'hors saison', color: theme.colors.error },
            ]}
          />
          <Bottom category={props.category} />
        </Wrapper>
      </Section.Content>
    </Section>
  )
}
