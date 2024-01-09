import React from 'react'
import styled from 'styled-components'
import { Category as CategoryType } from 'types/category'
import Emoji from 'components/base/Emoji'
import Link from 'components/base/buttons/Link'

const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.25rem;
  position: relative;
  width: calc(33.3333% - 1rem);

  ${(props) => props.theme.mq.small} {
    width: calc(50% - 0.5rem);
  }
`
const StyledEmoji = styled(Emoji)`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.5rem;
  }
`

const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
  text-align: center;
`

export default function Category({ category }: { category: CategoryType }) {
  return (
    <Wrapper>
      <StyledEmoji>{category.emoji}</StyledEmoji>
      <Title className='text-xl'>{category.name}</Title>
      <Link asButton size='sm' href={`/${category.slug}`}>
        Visualiser
      </Link>
    </Wrapper>
  )
}
