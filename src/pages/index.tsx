import type { NextPage } from 'next'
import Image from 'next/image';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Next Rocket" content="Next Rocket Peru es una empresa">
      <header className=" max-w-7xl h-screen mx-auto ">
        <div className='flex  md:flex-row flex-col justify-center items-center h-full'>
          <div className='px-4 py-2  max-w-lg flex flex-col '>
            <h1 className='text-8xl font-mono font-bold'><span className='text-red-500'>Next</span><span className='text-indigo-900'>Rocket</span> </h1>
            <p className='text-2xl'>Creamos páginas web y las posicionamos en Google, para negocios que están listos para crecer. </p>
            <a href='#' className='bg-red-500  py-2 px-5 text-white w-1/2 rounded-2xl mt-5 text-center hover:bg-red-600 border-2 border-red-200 focus:border-red-700'>
              <span className='text-white text-xl '>Contactos</span>
            </a>

          </div>
          <div className='w-2/3 md:w-1/3'>
            <Image
              src="/assets/images/rocket.png"
              alt="Next Rocket"
              width={200}
              height={120}
              layout={'responsive'}
            />
          </div>
        </div>

      </header>
    </Layout>
  )
}

export default Home
