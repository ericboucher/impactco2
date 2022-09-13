import React, { useState } from 'react'
import styled from 'styled-components'

import { slugs, getMonth } from 'utils/months'
import MagicLink from 'components/base/MagicLink'
import TextInput from 'components/base/TextInput'
import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
`
const FilterButton = styled(Button)`
  padding: 0.5em;
  font-size: 0.875rem;
  border-radius: 0.625em;

  svg {
    width: 1rem;
    height: auto;
  }
`
const SearchInput = styled(TextInput)`
  width: 12rem;
  margin: 0;
  font-size: 0.875rem;
`
export default function Search(props) {
  const [order, setOrder] = useState(false)
  const [search, setSearch] = useState(false)

  return (
    <Wrapper>
      <SearchInput
        value={props.search}
        onChange={({ value }) => props.setSearch(value)}
        placeholder={'Recherchez'}
      />
      <FilterButton onClick={() => alert('Pas encore développé')}>
        <svg x='0px' y='0px' viewBox='0 0 489.389 489.389'>
          <path
            d='M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9
			l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9
			C270.694,347.002,269.694,333.402,261.294,326.102z'
          />
          <path
            d='M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1
			c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8
			c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z'
          />
        </svg>
      </FilterButton>
    </Wrapper>
  )
}
