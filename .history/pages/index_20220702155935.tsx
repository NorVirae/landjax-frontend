import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image' 
import Navbar from '../src/components/Navbar'
import HouseImg from '../src/assets/24.png'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Land Jax</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <section className='carousel__container'>
          <Navbar />
          
          <div className='carousel__welcome-screen'>
            <h2 className='carousel__welcome-text'>WELCOME TO LANDJAX YOUR</h2>
            <h3 className='carousel__house-lands'>HOUSES AND LANDS</h3>
            <h4 className='carousel__dream-place'>DREAM PLACE</h4>

          </div>

        </section>
        
        <section className='house__preview'>

          <div className='house__preview-inner'>
            <Image src={HouseImg} height={"200rem"} width="200rem" className='image-preview'/>
            
          </div>

        </section>

          
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
