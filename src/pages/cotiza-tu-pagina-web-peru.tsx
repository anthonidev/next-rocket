import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout/Layout'

const Cotizador = () => {
    return (
        <Layout title="Next Rocket" content="Next Rocket Peru es una empresa">
            <div>
                <div className=' bg-gradient-to-r from-blue-800 via-indigo-700 to-red-400  py-32'>
                    <div className='max-w-7xl mx-auto flex justify-center'>
                        <div className='max-w-lg mx-3 '>
                            <h1 className='text-7xl  font-bold text-white tracking-wide leading-tight'>Cotiza tu pagina web en <span className='text-red-500'>Perú</span> </h1>
                            <span>
                                <p className='text-2xl text-white'>
                                    Obtén tu presupuesto ¡al instante!
                                </p>
                                <span className='text-lg text-white'>


                                    Con nuestro Cotizador Online podrás acortar los pasos hacia tu nueva página web. ¿Empezamos?

                                </span>

                            </span>
                            <div className='mt-5'>
                                <button className='py-2 px-10 bg-white rounded-md' >Empezar</button>

                            </div>

                        </div>
                        <div className='w-2/3' >
                            <Image

                                src="/assets/images/cotiza.jpg"
                                alt="Next Rocket"
                                width={180}
                                height={130}
                                layout={'responsive'}
                                className='object-cover aspect-video rounded'
                            />

                        </div>
                    </div>

                </div>
                <div className='bg-gray-100'>
                    <div className='max-w-7xl mx-auto '>
                        <h1 className='text-7xl py-10 font-bold tracking-wider font-mono text-indigo-900'>Cotiza tu proyecto web  <span className='text-red-500'>ONLINE</span></h1>
                    </div>
                </div>
                <div className='bg-gray-100 py-20 '>
                    <div className='max-w-7xl mx-auto grid grid-cols-2 gap-5'>
                        <div className='bg-white  px-10 py-5 rounded shadow-sm '>
                            <h2 className='text-2xl font-semibold text-indigo-900'>Arma tu web a medida</h2>
                            <h3 className='text-xl font-semibold text-indigo-900 mt-5'>Plan Base</h3>
                        </div>
                        <div className='bg-white py-5 px-10 rounded shadow-sm'>
                            <h2 className='text-2xl font-semibold text-indigo-900'>Inversión Estimada</h2>
                            <div className='flex justify-between'>
                                <h3 className='text-xl font-semibold text-indigo-900 mt-5'>Sub Total</h3>
                                <h3 className='text-xl font-semibold text-indigo-900 mt-5'>$1.000.000</h3>
                            </div>
                            <div className='flex justify-between'>
                                <h3 className='text-xl font-semibold text-indigo-900 mt-5'>Sub Total</h3>
                                <h3 className='text-xl font-semibold text-indigo-900 mt-5'>$1.000.000</h3>
                            </div>
                            <div className='flex justify-between'>
                                <h3 className='text-xl font-semibold text-indigo-900 mt-5'>Sub Total</h3>
                                <h3 className='text-xl font-semibold text-indigo-900 mt-5'>$1.000.000</h3>
                            </div>
                            <div className='flex justify-between '>
                                <button className='py-2 px-10 bg-indigo-500 rounded '>
                                    <span className='text-red-200 font-bold text-lg'>Contactar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cotizador