import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/CNAOUR.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CNAOUR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        {/* <img style={{height: "100px"}} src={logo} alt="CNAOUR" /> */}
        <div className={styles.subHeader}>
          header
          <div className={styles.subHeader2}>scjkc</div>
        </div>
      </div>
      <main className={styles.main}>
      <h1 data-text="black mirror"><span>black mirror</span></h1>
        {/* <h1 className={styles.title}>
          for the better expirience turn up your volume.
        </h1> */}
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Made With love by CNAOUR
      </footer>
    </div>
  )
}
