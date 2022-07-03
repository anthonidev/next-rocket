import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import { getService } from '../../redux/api/service';
import { AppDispatch, RootState } from '../../redux/store';

const Service = () => {
    const router = useRouter()
    const { slug } = router.query
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (slug !== undefined) {
            dispatch(getService(slug))
        }
    }, [router.asPath, slug, dispatch])

    const section = useSelector((state: RootState) => state.service.service)
    return (
        <Layout title='Servicios | Next Rocket' content='Next Rocket es una empresa que se especializa en crear paginas web'>
            <div className=' bg-gradient-to-r from-blue-800 via-indigo-700 to-red-400  py-32'>
                <div className='max-w-7xl mx-auto flex justify-center'>
                    <div className='max-w-lg mx-3 '>
                        <h1 className='text-7xl  font-bold text-white tracking-wide leading-tight'> {section?.title} en <span className='text-red-500'>Perú</span> </h1>
                        <span>
                            <p className='text-xl text-white my-3'>
                                {section?.description}
                            </p>


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
                <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mx-auto mb-16 text-center">
                            <span className="font-bold tracking-wider uppercase dark:text-violet-400">Planes</span>
                            <h2 className="text-4xl font-bold lg:text-5xl text-white"> <span className='text-red-500'>Plan de</span>  {section?.title}</h2>
                        </div>
                        <div className="flex flex-wrap items-stretch -mx-4">

                            {
                                section?.plans.map((plan) => {
                                    return (<div key={plan.id} className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 ">
                                        <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900 bg-white">
                                            <div className="space-y-2">
                                                <h4 className="text-2xl font-bold">{plan.name}</h4>
                                                <span className="text-5xl font-bold">S/{plan.price}</span>
                                            </div>
                                            <p className="mt-3 leading-relaxed dark:text-gray-400">{plan.subtitle}</p>
                                            <ul className="flex-1 mb-6 dark:text-gray-400">
                                                {
                                                    plan.features.map((feature) => {
                                                        return (
                                                            <li key={feature.id} className="flex mb-2 space-x-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                                </svg>
                                                                <span>{feature.name}</span>
                                                            </li>
                                                        )
                                                    }
                                                    )
                                                }
                                            </ul>
                                            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-400 dark:text-gray-900">Get Started</button>
                                        </div>
                                    </div>)
                                })
                            }



                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    )
}

export default Service