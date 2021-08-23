import Head from 'next/head'
import { useEffect } from 'react'
import Script from 'next/script'
import Page from 'components/Page'

export default function Home({ appId }) {
  useEffect(() => {
    DZ.init({
      appId,
      channelUrl: 'http://localhost:3000/channel.html'
    });
  }, [])

  const handleLoginClick = () => {
    DZ.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        DZ.api('/user/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {perms: 'basic_access,email'});
  }

  return (
    <Page>
      <Head>
        <title>ds-deezer-login / Home</title>
      </Head>
      <Script
        src="https://e-cdns-files.dzcdn.net/js/min/dz.js"
        strategy="beforeInteractive"
      />
      <h2>Home</h2>
      <button onClick={handleLoginClick}>Login with Deezer</button>
    </Page>
  )
}

export async function getServerSideProps() {
  const appId = process.env.DEEZER_APP_ID
  return {
    props: { appId },
  }
}
