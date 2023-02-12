import Head from 'next/head';
import Logo from '../public/bohuslind-logo-web.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bohuslind Solutions AB</title>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <div id="page">
        <div id="logo">
          <Logo id="logosvg" />
        </div>
        <span>EU VAT SE559359356801</span>
      </div>
    </>
  )
}
