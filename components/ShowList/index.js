import styled from 'styled-components'
import Link from 'next/link'

const List = styled.ul``

const Item = styled.li``

export default function ShowList({ shows }) {
  return (
    <List>
      {shows.map(({ id, title }) => (
        <Item key={id}>
          <Link as={`/shows/${id}`} href="/shows/[id]">
            <a>{title}</a>
          </Link>
        </Item>
      ))}
    </List>
  )
}
