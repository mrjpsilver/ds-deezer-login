import Head from 'next/head'
import { getShowById } from 'data/shows'
import Page from 'components/Page'

export default function Show({ show, preview }) {
  return (
    <Page>
      <Head>
        <title>ds-next / {show.title}</title>
      </Head>
      <div>
        <h2>{show.title}</h2>
        <p>{show.description}</p>
      </div>
    </Page>
  )
}

export async function getServerSideProps({ params, preview = false }) {
  const { show } = await getShowById(params.id, preview)
  
  if (!show) {
    return {
      notFound: true,
    }
  }

  return {
    props: { preview, show },
  }
}
