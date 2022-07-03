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

          <div className='house__preview-overlay'>

          </div>

          <div className='house__preview-inner'>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>
            <Image src={HouseImg} height={"250rem"} objectFit={"cover"} width="200rem" className='house__image-preview'/>

          </div>

          <section className='house__intro'>
            <p className='house__live'> WHERE DO YOU LIVE?</p>
            <p className='house__asset'> GET AN ASSET WITH <span className='house__land-annouce'>LANDJAX</span></p>

            <div className='house__form-group'>
              <label className='house__form-label'>Enter an Address, city, Neighborhood, zip code</label>
              <input className="house__form-control" placeholder='Enugu, Nigeria' />
            </div>
            <div className='house__btn-ecom-container'>
              <button className='house__btn-buy-prop'>Buy Properties</button>
              <button className='house__btn-sell-prop'>Sell Properties</button>
            </div>
            

          </section>

        </section>

        <section>
          <div className='future__header'>
            <p>Move into your future Home</p>
            <button>
              see all properties
            </button>
          </div>

          <div className='future__houses-card-container'>
            <section className='future__house-card'>
              
            </section>
          </div>
        </section>
          
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
