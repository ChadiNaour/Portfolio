import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CNAOUR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="d-flex justify-center align-center p-4 bg-blue-600 fixed z-20 top-0 left-0 pt-6 w-full text-center">
        <div className="relative bg-red-200 mx-0 my-auto px-0 py-auto w-full">
          cnaour
          <div className="bg-green-200 absolute z-1 -top-2 right-0 pr-4">volume</div>
        </div>
      </header>
      <main className={styles.main}>
        {/* <h1 className="blackMirror" data-text="blackMirror"><span>black mirror</span></h1> */}
        <div>
          <h1 className="">
            for the better expirience turn up your volume.
          </h1>
        </div>
      </main>

      <footer className={styles.footer}>
        Made With love by cnaour
      </footer>
    </div>
  )
}
