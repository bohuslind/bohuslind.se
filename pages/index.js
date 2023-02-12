import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../public/bohuslind-logo-web.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bohuslind Solutions AB</title>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <div id="page">
        <div id="logo">
          <Logo width="100%" height="100%"/>
        </div>
        <span>EU VAT SE559359356801</span>
      </div>

      <style jsx>{`
        #page {
          align-self: stretch;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          flex: 1;
        }

        #logo {
          max-width: 420px;
          padding-top: 40px;
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        #logo > svg {
          width: 100%;
          height: 100%;
        }

        span {
          padding: 40px 0;
          display: block;
          font-size: 0.9em;
        }
      `}</style>

      <style jsx global>{`
        @keyframes animateBg {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }

        * {
          margin: 0;
          padding: 0;
        }

        html {
          height: 100%;
          background-color: #000000;
          overflow: hidden;
        }

        body {
          height: 100%;
          padding-top: env(safe-area-inset-top);
          padding-bottom: env(safe-area-inset-bottom);
          background-size: 400% 100%;
          animation: animateBg 20s linear infinite;
          background-image: linear-gradient(115deg,#99d5ed,#99dec9,#ffcc99,#99d5ed,#99dec9);
          font-family: 'Noto Sans Mono', sans-serif;
          transform: translateZ(0);
        }

        body > div,
        body > div > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}
