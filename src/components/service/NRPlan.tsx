import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NRPlan = () => {
    return (
        <section className='max-w-7xl mx-auto flex md:flex-row  flex-col-reverse py-20'>
            <div className='max-w-lg mx-3 flex flex-col justify-center '>
                <h1 className='
             text-6xl md:text-5xl font-roboto  font-extrabold  tracking-wide leading-tight text-indigo-900
            dark:text-indigo-100
            '>¿Buscas un plan  <span className='text-red-500'>personalizado?</span> </h1>
                <span>
                    <p className='md:text-xl text-lg text-gray-600  mb-7 font-roboto dark:text-gray-200'>
                        Usa nuestro cotizador online y obtén el plan a la medida de tus necesidades en minutos.
                    </p>
                </span>
                <div className='mt-5 mb-16'>
                    <Link href='#prices'>
                        <a className='
                py-2 px-14 transition ease-out duration-500  rounded-md bg-gray-700 text-gray-100 text-xl md:text-2xl hover:text-white hover:bg-gray-900
                dark:bg-red-700 dark:text-indigo-100 dark:hover:bg-red-800 dark:hover:text-white
                ' >
                            Crealo en un minutos
                        </a>
                    </Link>
                </div>

            </div>
            <div className='w-full ' >
                <Image

                    src="/assets/images/moreplan.png"
                    alt="Next Rocket"
                    width={200}
                    height={120}
                    layout={'responsive'}
                    className='object-cover aspect-video rounded'
                />

            </div>
        </section>
    )
}

export default NRPlan