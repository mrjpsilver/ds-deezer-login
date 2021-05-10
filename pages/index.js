import Head from 'next/head'
import { getAllShowsForHome } from 'data/shows'
import Page from 'components/Page'
import ShowList from 'components/ShowList'

export default function Home({ shows }) {
  return (
    <Page>
      <Head>
        <title>ds-next / Home</title>
      </Head>
      <h2>Home</h2>
      {shows.length > 0 && <ShowList shows={shows} />}
    </Page>
  )
}

export async function getServerSideProps() {
  const shows = (await getAllShowsForHome()) || []
  return {
    props: { shows },
  }
}
