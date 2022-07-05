import Image from 'next/image'
import React, { FunctionComponent } from 'react'

const Benefits: FunctionComponent<{
    benefits: any[],
    title: string
}> = ({ benefits, title }) => {
    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container px-6 py-10 mx-auto">
                <h2 className=" mx-auto text-4xl font-bold lg:text-5xl text-gray-800 text-center dark:text-white"> <span className='text-indigo-800 dark:text-indigo-500 underline'>Beneficios</span> de tener una {title}</h2>
                <h2 className="text-4xl font-bold lg:text-xl text-center text-gray-600 dark:text-gray-400"> Saca ventaja a tu competencia, digitalizando tu negocio. </h2>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {
                        benefits.map((benefit) => {
                            return (
                                <div key={benefit.id} className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-900">

                                    <Image
                                        className="aspect-video object-cover dark:invert "
                                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${benefit.image}`}
                                        layout="fixed"
                                        height="75"
                                        width="75"
                                        alt={benefit.title}
                                    />
                                    <h1 className="text-2xl md:text-3xl font-semibold text-indigo-900 tracking-wider capitalize dark:text-indigo-500">{benefit.title}</h1>

                                    <p className="text-gray-600 dark:text-indigo-200 font-roboto text-lg">
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
    )
}

export default Benefits