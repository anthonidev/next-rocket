import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import Planes from '../../components/service/Planes';
import { getService } from '../../redux/api/service';
import { AppDispatch, RootState } from '../../redux/store';
import { formatterSoles } from '../../utils/helpers/formatSoles';

const Service = () => {
    const router = useRouter()
    const { slug } = router.query
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (slug !== undefined) {
            dispatch(getService(slug))
        }
    }, [router.asPath, slug, dispatch])

    const service = useSelector((state: RootState) => state.service.service)
    return (
        <Layout title='Servicios | Next Rocket' content='Next Rocket es una empresa que se especializa en crear paginas web'>
            <div className='md:py-32 my-10'>



                <section className='max-w-7xl mx-auto flex md:flex-row  flex-col-reverse'>
                    <div className='max-w-lg mx-3 '>
                        <h1 className='
                         text-6xl md:text-7xl font-roboto  font-extrabold  tracking-wide leading-tight text-indigo-900
                        dark:text-indigo-100
                        '> {service?.title} en <span className='text-red-500'>Perú</span> </h1>
                        <span>
                            <p className='md:text-xl text-lg text-gray-600  mb-7 font-roboto dark:text-gray-200'>
                                {service?.description}
                            </p>
                        </span>
                        <div className='mt-5 mb-16'>
                            <Link href='#prices'>
                                <a className='
                            py-2 px-14 transition ease-out duration-500  rounded-md bg-gray-700 text-gray-100 text-xl md:text-2xl hover:text-white hover:bg-gray-900
                            dark:bg-red-700 dark:text-indigo-100 dark:hover:bg-red-800 dark:hover:text-white
                            ' >
                                    Empezar
                                </a>
                            </Link>
                        </div>

                    </div>
                    <div className='w-full ' >
                        <Image

                            src="/assets/images/landingPage.png"
                            alt="Next Rocket"
                            width={200}
                            height={120}
                            layout={'responsive'}
                            className='object-cover aspect-video rounded'
                        />

                    </div>
                </section>
                {
                    service && <Planes plans={service.plans} title={service.title}/>
                }
                
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h2 className="text-4xl font-bold lg:text-5xl text-blue-900"> <span className='text-red-500'>Beneficios</span> de tener una {service?.name}</h2>


                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">


                            {
                                service?.benefits.map((benefit) => {
                                    return (
                                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                            </span>

                                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{benefit.title}</h1>

                                            <p className="text-gray-500 dark:text-gray-300">
                                                {benefit.subtitle}
                                            </p>

                                        </div>

                                    )
                                }
                                )
                            }



                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full px-4 pt-16">
                        <h2 className="text-4xl font-bold lg:text-5xl text-white"> <span className='text-red-500'>Servicio</span> y funcionalidades incluidas</h2>

                        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">

                            {
                                service?.func_services.map((func_service) => {
                                    return (
                                        <Disclosure key={func_service.id}>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>What is your refund policy?</span>
                                                <ChevronUpIcon
                                                    className={`${service ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    )
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