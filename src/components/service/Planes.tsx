import { BadgeCheckIcon, CheckCircleIcon } from '@heroicons/react/outline'
import React, { FunctionComponent } from 'react'
import { Feature, Plan } from '../../redux/slice/serviceSlice'
import { formatterSoles } from '../../utils/helpers/formatSoles'
import PlanDetail from './PlanDetail'

const Planes: FunctionComponent<{
    plans: Plan[],
    title: string,
}> = ({ plans, title }) => {

    return (
        <section id="prices" className="py-20 bg-indigo-50 dark:bg-dark dark:text-gray-100">
            <div className="container px-4 mx-auto ">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracking-wider uppercase text-indigo-50 dark:text-violet-400">Planes</span>
                    <h2 className="text-4xl font-bold lg:text-5xl text-gray-800 dark:text-white"> <span className='text-indigo-700 dark:text-indigo-500 underline'>Plan</span>  de {title}</h2>
                </div>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  max-w-7xl mx-auto gap-6">

                    {
                        plans?.map((plan: Plan) => { return (<PlanDetail key={plan.id} plan={plan} />) })
                    }
                </div>
            </div>
        </section>
    )
}

export default Planes