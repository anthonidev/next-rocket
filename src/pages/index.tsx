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

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Servicios
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Diseñamos</span>
              </span>{' '}
              páginas web optimizadas para Google
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Somos peruanos especialistas en diseño y posicionamiento Web
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">Diseño de páginas web</h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super mario
                  des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">Desarrollo de tiendas online</h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  Diseño de Landing Pages
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny Bike
                  epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">Páginas web económicas</h6>
                <p className="text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack never
                  stopped old Big Bear.
                </p>
              </div>
            </div>
          </div>

        </div>



        {
          <ContactForm />
        }
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Innovative analytics
                  <br className="hidden md:block" />
                  that you{' '}
                  <span className="inline-block text-deep-purple-accent-400">
                    will love
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae. explicabo.
                </p>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="relative">
              <svg
                className="absolute w-full text-teal-accent-400"
                fill="currentColor"
                viewBox="0 0 600 392"
              >
                <rect x="0" y="211" width="75" height="181" rx="8" />
                <rect x="525" y="260" width="75" height="132" rx="8" />
                <rect x="105" y="83" width="75" height="309" rx="8" />
                <rect x="210" y="155" width="75" height="237" rx="8" />
                <rect x="420" y="129" width="75" height="263" rx="8" />
                <rect x="315" y="0" width="75" height="392" rx="8" />
              </svg>
              <svg
                className="relative w-full text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 600 392"
              >
                <rect x="0" y="311" width="75" height="81" rx="8" />
                <rect x="525" y="351" width="75" height="41" rx="8" />
                <rect x="105" y="176" width="75" height="216" rx="8" />
                <rect x="210" y="237" width="75" height="155" rx="8" />
                <rect x="420" y="205" width="75" height="187" rx="8" />
                <rect x="315" y="83" width="75" height="309" rx="8" />
              </svg>
            </div>
          </div>
        </div>


        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  I'll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with this model shoot me an
                  email clear.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
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
