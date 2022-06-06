import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SoundBar from "../components/soundBar"
import SoundBar2 from "../components/soundBar2"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CNAOUR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="d-flex justify-center align-center p-4 fixed z-20 top-0 left-0 w-full text-center" style={{ backgroundImage: "linear-gradient(to bottom,#000 0%,rgba(0,0,0,0) 100%)", paddingTop: "50px" }}>
        <div className="relative mx-0 my-auto px-0 py-auto w-full ">
          <span className='font-reloadNormal text-4xl text-white'>cnaour</span>
          <div className="absolute z-1 top-0 left-0 pr-4 md:pl-14 bg-red-100"><SoundBar /></div>
          <div className="absolute z-1 top-0 right-0 pl-4 md:pr-14 "><svg height={40} width={40} viewBox="0 0 576 512" fill="white"><path d="M342.91 193.57c-7.81-3.8-17.5-.48-21.34 7.5-3.81 7.97-.44 17.53 7.53 21.34C343.22 229.2 352 242.06 352 256s-8.78 26.8-22.9 33.58c-7.97 3.81-11.34 13.38-7.53 21.34 3.86 8.05 13.54 11.29 21.34 7.5C368.25 306.28 384 282.36 384 256s-15.75-50.29-41.09-62.43zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34zM421.51 1.83c-7.89-4.08-17.53-1.12-21.66 6.7-4.13 7.81-1.13 17.5 6.7 21.61 84.76 44.55 137.4 131.1 137.4 225.85s-52.64 181.3-137.4 225.85c-7.82 4.11-10.83 13.8-6.7 21.61 4.1 7.75 13.68 10.84 21.66 6.7C516.78 460.06 576 362.67 576 255.99c0-106.67-59.22-204.06-154.49-254.16zM480 255.99c0-66.12-34.02-126.62-88.81-157.87-7.69-4.38-17.59-1.78-22.04 5.89-4.45 7.66-1.77 17.44 5.96 21.86 44.77 25.55 72.61 75.4 72.61 130.12s-27.84 104.58-72.61 130.12c-7.72 4.42-10.4 14.2-5.96 21.86 4.3 7.38 14.06 10.44 22.04 5.89C445.98 382.62 480 322.12 480 255.99z"></path></svg></div>
        </div>
      </header>
      <main className={styles.main}>
        {/* <h1 className="blackMirror" data-text="i'm a front-end developer"><span>i'm a front-end developer</span></h1> */}
        <div className="flex flex-col justify-center align-center text-center " style={{ width: "250px" }}>
          <div className=' flex justify-center pb-6'>
            <SoundBar2 />
          </div>
          <div>
            <h1 className="font-reloadLight text-white text-lg">
              for the better expirience, turn up your volume.
            </h1>
          </div>
          <div className='flex justify-center'>
            {/* <svg class="a-circle" fill="white" aria-hidden="true"><circle r="60px"></circle></svg> */}
            {/* <svg class="a-circle" fill="white" aria-hidden="true"><circle r="60px"></circle></svg> */}
            {/* <svg class="a-circle" fill="white" aria-hidden="true"><circle r="60px"></circle></svg> */}
            <div>
              <svg aria-hidden="true">
                <circle  cx="50%" cy="50%" r="30px" strokeWidth="0,5px" fill="none" transform="translateZ(0)" stroke="rgba(255,255,255,.35)" style={{
                  fill : "none",
                  animation: "scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32)",
                  transform: "translateZ(10px)",
                  // animation: "circle-pulse 6s infinite linear",
                  animationDuration: "6s",
                  animationTimingFunction: "linear",
                  animationDelay: "0s",
                  animationIterationCount: "infinite",
                  animationDirection: "normal",
                  animationFillMode: "none",
                  animationPlayState: "running",
                  // animationName: "circle-pulse",
                }}>
                </circle>
              </svg>
              
            </div>{/* <button className="bg-white px-8 w-40 py-4 m-4"><span className='font-reloadLight text-black text-xl'>start</span></button> */}
            {/* <div className="rounded-full w-16 h-16 pt-5 bg-white d-flex flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg></div> */}
          </div>
        </div>
        <div className='fixed left-0 bottom-0  w-full pb-16 flex justify-center xl:justify-end md:pr-14'>
          <div>
            <span className='font-reloadLight text-white text-lg flex flex-row justify-center items-center '><svg viewBox="0 0 640 512" fill="white" height={24} width={24} className="mr-4"><path d="M633.82 458.1l-69-53.33C592.42 360.8 608 309.68 608 256c0-95.33-47.73-183.58-127.65-236.03-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 42.78-11.96 83.59-33.22 119.06l-38.12-29.46C503.49 318.68 512 288.06 512 256c0-63.09-32.06-122.09-85.77-156.16-11.19-7.09-26.03-3.8-33.12 7.41-7.09 11.2-3.78 26.03 7.41 33.13C440.27 165.59 464 209.44 464 256c0 21.21-5.03 41.57-14.2 59.88l-39.56-30.58c3.38-9.35 5.76-19.07 5.76-29.3 0-31.88-17.53-61.33-45.77-76.88-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61 11.76 6.46 19.12 18.18 20.4 31.06L288 190.82V88.02c0-21.46-25.96-31.98-40.97-16.97l-49.71 49.7L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM32 184v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V352.6L43.76 163.84C36.86 168.05 32 175.32 32 184z"></path></svg>continue without sound<svg xmlns="http://www.w3.org/2000/svg" fill="white" width={20} height={20} className="ml-4 " viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></span>
          </div>
        </div>
      </main>
      {/* 
      <footer className={styles.footer}>
        <span className='font-reloadLight text-graye text-xl'>© COPYRIGHT cnaour 2022</span>
      </footer> */}
    </div>
  )
}
