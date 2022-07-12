import { BadgeCheckIcon } from '@heroicons/react/outline'
import React, { FunctionComponent } from 'react'
import { Feature, Plan } from '../../redux/slice/serviceSlice'
import { formatterSoles } from '../../utils/helpers/formatSoles'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
const PlanDetail: FunctionComponent<{
    plan: Plan,
}> = ({ plan }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="flex justify-center items-center  ">
            <div
                className={`${plan.is_recomented ? 'dark:bg-dark-300 dark:border-green-700 border-indigo-500 border-2  hover:bg-indigo-100 hover:border-indigo-500 md:hover:scale-110  md:scale-105 bg-indigo-50' : ' dark:bg-gray-900 bg-white md:hover:scale-105  '}
               transition-all ease-in-out duration-500    flex flex-col p-6 space-y-6 rounded shadow sm:p-8 
                `}>
                {
                    plan.is_recomented && (
                        <div className='flex justify-end sm:-m-8'>
                            <span className='bg-indigo-200 rounded p-2 dark:bg-green-600 dark:text-green-100 text-indigo-900'>
                                Recomendado
                            </span>
                        </div>
                    )
                }
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
                        plan.features.map((feature: Feature) => {
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
                <div className=' font-roboto text-gray-600 dark:text-gray-400 text-xs'>
                    <span>Renovacion anual:</span>
                    <span> {formatterSoles.format(plan.renovation_price)}</span>

                </div>
                <button
                    type="button"
                    onClick={openModal}
                    className="inline-block  bg-indigo-300 hover:bg-indigo-400 px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-indigo-100 dark:hover:bg-indigo-200 dark:text-gray-900">
                    Solicitar
                </button>

            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        className="text-lg font-medium leading-6"
                                    >
                                        <h3 className=' text-gray-900 dark:text-gray-100'>Plan {plan.name}</h3>
                                        <p className='text-sm text-gray-600 dark:text-gray-400'>Ideal para {plan.subtitle}</p>

                                    </Dialog.Title>
                                    <form className=" mt-5 flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid" data-dashlane-rid="5ee2fc663347e4a8" data-form-type="contact">
                                        <label className="block" data-dashlane-label="true">
                                            <span className="mb-1">Nombre Completo</span>
                                            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:bg-gray-800" data-dashlane-rid="73a585644faa08c7" data-form-type="name" data-kwimpalastatus="dead" />
                                        </label>
                                        <label className="block" data-dashlane-label="true">
                                            <span className="mb-1">Correo Electronico</span>
                                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:bg-gray-800" data-dashlane-rid="c5c48f274b1637e6" data-form-type="email" data-kwimpalastatus="dead" />
                                        </label>
                                        <label className="block" data-dashlane-label="true">
                                            <span className="mb-1">Numero Telefonico</span>
                                            <input type="text" placeholder="958234324" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:bg-gray-800" data-dashlane-rid="c5c48f274b1637e6" data-form-type="email" data-kwimpalastatus="dead" />
                                        </label>
                                        <label className="block" data-dashlane-label="true">
                                            <span className="mb-1">Message</span>
                                            <textarea rows={3} className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:bg-gray-800" data-dashlane-rid="043824808b5a6b01" data-form-type="other"></textarea>
                                        </label>
                                        <button type="button" onClick={closeModal} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-indigo-400 dark:text-gray-900 focus:ring-indigo-400 hover:ring-indigo-400" data-dashlane-label="true" data-dashlane-rid="34a77a8d545ba77b" data-form-type="action">Submit</button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    )
}

export default PlanDetail