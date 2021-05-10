import styled from 'styled-components'
import Head from 'next/head'

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2em;
`

export default function Page({ title, children }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Wrapper>
  )
}
