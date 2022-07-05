import { BadgeCheckIcon, CheckCircleIcon } from '@heroicons/react/outline'
import React, { FunctionComponent } from 'react'
import { Feature, Plan } from '../../redux/slice/serviceSlice'
import { formatterSoles } from '../../utils/helpers/formatSoles'

const Planes: FunctionComponent<{
    plans: Plan[],
    title: string,
}> = ({ plans, title }) => {

    const renderPlan = (plan: Plan) => {

        return plan.is_recomented ? (
            <div key={plan.id} className="flex justify-center items-center  ">

                <div
                    className="
                    md:hover:scale-110 md:scale-105 transition-all ease-in-out duration-500    flex flex-col p-6 space-y-6 rounded shadow sm:p-8 
                    dark:bg-dark-300 dark:border-green-700 border-indigo-500 border-2 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-500
                    ">
                    <div className='flex justify-end sm:-m-8  '>
                        <span className='bg-indigo-200 rounded p-2 dark:bg-green-600 dark:text-green-100 text-indigo-900'>
                            Recomendado
                        </span>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-indigo-900 underline dark:text-indigo-100">{plan.name}</h4>
                        <span className="text-5xl font-bold text-dark dark:text-indigo-500">{formatterSoles.format(plan.price)}</span>
                        <p className='flex justify-end space-x-3 text-gray-500 dark:text-indigo-200 text-xs '>
                            <span>Precio normal:</span>
                            <p className="  decoration-double">{formatterSoles.format(plan.compare_price)}</p>
                        </p>
                    </div>
                    <p className=" leading-relaxed dark:text-gray-400 text-left font-roboto font-bold text-gray-500">{plan.subtitle}</p>
                    <ul className="flex-1 mb-6 dark:text-gray-400 ">
                        {
                            plan.features.map((feature:Feature) => {
                                return feature.is_main ? (
                                    <li
                                        key={feature.id}
                                        className="flex mb-2 space-x-2 items-center text-indigo-600 font-bold tracking-wider dark:text-green-500">
                                        <BadgeCheckIcon className="w-4 h-4 " />
                                        <span>{feature.name}</span>
                                    </li>
                                ) : (
                                    <li
                                        key={feature.id}
                                        className="flex mb-2 space-x-2 items-center text-gray-600 dark:text-gray-300">
                                        <BadgeCheckIcon className="w-4 h-4 " />
                                        <span>{feature.name}</span>
                                    </li>
                                )

                            }
                            )
                        }
                    </ul>
                    <div className='text-sm font-roboto text-gray-600 dark:text-gray-400'>
                        <span>Renovacion anual:</span>
                        <span> {formatterSoles.format(plan.renovation_price)}</span>

                    </div>
                    <button
                        type="button"
                        className="inline-block bg-indigo-300 hover:bg-indigo-400 px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-indigo-100 dark:hover:bg-indigo-200 dark:text-gray-900">
                        Solicitar
                    </button>

                </div>
            </div>
        ) : (
            <div key={plan.id} className="flex justify-center items-center  ">
                <div
                    className=" md:hover:scale-105 transition-all ease-in-out duration-500  
                      flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900 bg-white hover:bg-indigo-50  ">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-indigo-900 underline dark:text-indigo-100">{plan.name}</h4>
                        <span className="text-5xl font-bold text-dark dark:text-indigo-500">{formatterSoles.format(plan.price)}</span>
                        <p className='flex justify-end space-x-3 text-gray-500 dark:text-indigo-200 text-xs '>
                            <span>Precio normal:</span>
                            <p className="  decoration-double">{formatterSoles.format(plan.compare_price)}</p>
                        </p>
                    </div>
                    <p className=" leading-relaxed dark:text-gray-400 text-left font-roboto font-bold text-gray-500">{plan.subtitle}</p>
                    <ul className="flex-1 mb-6 dark:text-gray-400 ">
                        {
                            plan.features.map((feature:Feature) => {
                                return feature.is_main ? (
                                    <li
                                        key={feature.id}
                                        className="flex mb-2 space-x-2 items-center text-indigo-600 font-bold tracking-wider dark:text-green-500">
                                        <BadgeCheckIcon className="w-4 h-4 " />
                                        <span>{feature.name}</span>
                                    </li>
                                ) : (
                                    <li
                                        key={feature.id}
                                        className="flex mb-2 space-x-2 items-center text-gray-600 dark:text-gray-300">
                                        <BadgeCheckIcon className="w-4 h-4 " />
                                        <span>{feature.name}</span>
                                    </li>
                                )

                            }
                            )
                        }
                    </ul>
                    <div className='text-sm font-roboto text-gray-600 dark:text-gray-400'>
                        <span>Renovacion anual:</span>
                        <span> {formatterSoles.format(plan.renovation_price)}</span>

                    </div>
                    <button
                        type="button"
                        className="inline-block bg-indigo-300 hover:bg-indigo-400 px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-indigo-100 dark:hover:bg-indigo-200 dark:text-gray-900">
                        Solicitar
                    </button>

                </div>
            </div>
        )
    }

    return (
        <section id="prices" className="py-20 bg-indigo-50 dark:bg-dark dark:text-gray-100">
            <div className="container px-4 mx-auto ">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracking-wider uppercase text-indigo-50 dark:text-violet-400">Planes</span>
                    <h2 className="text-4xl font-bold lg:text-5xl text-gray-800 dark:text-white"> <span className='text-indigo-700 dark:text-indigo-500 underline'>Plan</span>  de {title}</h2>
                </div>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  max-w-7xl mx-auto gap-6">

                    {
                        plans?.map((plan: Plan) => { return renderPlan(plan) })
                    }
                </div>
            </div>
        </section>
    )
}

export default Planes