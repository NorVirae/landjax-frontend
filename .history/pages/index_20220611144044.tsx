import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image' 
import Navbar from '../src/components/Navbar'
import '../styles/Home.module.css'
import from '../styles/Home.module.css'


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
            <h2>WELCOME TO LANDJAX YOUR</h2>
            <h3>HOUSES AND LANDS</h3>
            <h4>DREAM PLACE</h4>

          </div>

        </section>
        

          
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
