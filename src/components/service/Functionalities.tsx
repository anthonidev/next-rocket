import { Disclosure } from '@headlessui/react'
import { BadgeCheckIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { FunctionComponent } from 'react'
import { FuncService } from '../../redux/slice/serviceSlice'

const Functionalities: FunctionComponent<{
    title: string,
    func_services: FuncService[],
}> = ({ title, func_services }) => {
    return (
        <section className='bg-blue-50 dark:bg-dark'>
            <div className="max-w-7xl mx-auto py-16 ">
                <h2 className="text-4xl font-bold mb-16 lg:text-5xl text-gray-800 text-center dark:text-white"> <span className='text-indigo-700 underline'>Servicio</span> y funcionalidades incluidas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 justify-items-center">

                    {
                        func_services.map((func_service, index) => {
                            return (
                                <Disclosure as={"div"} className="flex-col flex max-w-md w-full " key={func_service.id}>
                                    <Disclosure.Button className="flex  justify-between items-center rounded-lg  px-4 py-2 text-left text-sm font-medium text-blue-900 dark:hover:bg-indigo-900/20 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                        <div className='flex flex-col border-y-2 border-blue-800 items-center'>
                                            <span className="text-indigo-900 text-lg md:text-3xl dark:text-indigo-200 ">0{index + 1}</span>
                                            <span className='dark:text-indigo-300 ' >{func_service.sub_title}</span>
                                        </div>
                                        <span className='md:text-2xl text-center text-xl dark:text-indigo-300'>{func_service.title}</span>
                                        <ChevronUpIcon
                                            className={`${func_services ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-indigo-900`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm  ">
                                        {
                                            func_service.func_list.map((func) => {
                                                return (
                                                    <div key={func.id} className="px-4 flex my-2 justify-start items-center  text-gray-500 dark:text-green-500 font-medium font-roboto  ">
                                                        <BadgeCheckIcon className="w-5 h-5 mr-3" />
                                                        <span className='md:text-xl text-lg '>{func.name}</span>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </Disclosure.Panel>
                                </Disclosure>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Functionalities