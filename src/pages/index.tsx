import type { NextPage } from 'next'
import Image from 'next/image';
import ContactForm from '../components/form/ContactForm';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Next Rocket" content="Next Rocket Peru es una empresa">
      <div >
        <div className=' relative bg-white dark:bg-dark-100 h-screen'>
          <img
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full brightness-[0.30] "
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt="Couple on a bed with a dog"
          />

          <div className="absolute  h-full  flex justify-center items-center w-full">
            <div className=" max-w-xl text-center sm:text-left">
              <h1 className="text-7xl text-gray-50 font-extrabold sm:text-6xl lg:text-8xl text-center">
                <strong className="font-extrabold text-3xl text-red-300 sm:block">
                  Agencia Digital
                </strong>
                Next Rocket
              </h1>
              <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-2xl lg:text-3xl tracking-wide font-roboto text-gray-200 text-center">
                Creamos páginas web y las posicionamos en Google, para negocios que están listos para crecer.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 text-center justify-center ">
                <a className="block w-full px-12 py-3 text-xl tracking-wider font-medium text-white   rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                  Ver Servicios
                </a>

                <a className="block w-full px-12 py-3 text-xl tracking-wider font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                  Escribénos
                </a>
              </div>
            </div>
          </div>
        </div>

        {
          <ContactForm />
        }

        <header className=" max-w-7xl  mx-auto ">
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
      </div>

    </Layout>
  )
}

export default Home
