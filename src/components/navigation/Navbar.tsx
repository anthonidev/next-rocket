import { useTheme } from 'next-themes';
import React, { Fragment, useEffect } from 'react'
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline';
import { Menu, Popover, Transition } from '@headlessui/react'
import Link from 'next/link';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../redux/api/service';
import { useRouter } from 'next/router';
const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getServices())
    }, [dispatch])
    const services = useSelector((state: RootState) => state.service.services);
    const { pathname } = useRouter()
    console.log(pathname);

    return (
        <nav className=' sticky top-0 z-30 bg-white dark:bg-dark' >
            <ul className='flex justify-between max-w-7xl mx-auto py-2 px-3'>
                <li>
                    <Link href='/'>
                        <a className='font-bold underline underline-offset-4 decoration-2 decoration-red-500 '>
                            <span className='text-2xl text-red-500'>Next</span>
                            <span className='text-indigo-900 text-3xl dark:text-indigo-100'>Rocket</span>
                        </a>
                    </Link>
                </li>

                <li className='md:flex justify-between items-center space-x-10 text-indigo-800 font-semibold text-lg hidden dark:text-indigo-100 '>
                    <Link href='/'>
                        <a className={`hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 focus:outline-none ${pathname === '/' && 'border-red-500 text-red-500'}`}>Inico</a>
                    </Link>

                    <Menu as={'div'} className='relative '>
                        <Menu.Button className={`hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 focus:outline-none ${pathname === '/service/[slug]' && 'border-red-500 text-red-500'}`}>Servicios</Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className={`dark:bg-dark-100 py-3 px-5 absolute 
                             flex flex-col -right-20 mt-2 w-56 origin-top-right
                              rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                                {
                                    services?.map((service) => {
                                        return (
                                            <Menu.Item key={service.id} as="div" className="my-2 flex flex-col space-y-3  items-center">
                                                <Link href={`/service/${service.slug}`} key={service.id}>
                                                    <a className=' hover:text-red-500 focus:outline-none tracking-wider hover:bg-red-50 dark:hover:bg-dark py-2 px-3 rounded'>{service.name}</a>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }


                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Portafolio</a>
                    <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Precios</a>
                    <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Contacto</a>
                </li >
                {
                    theme !== undefined && theme === "light" ?
                        <li className='hidden md:block'  >
                            <button onClick={changeTheme} className='border-2 p-1 rounded-md border-violet-200' >
                                <MoonIcon className='w-6 h-6 text-violet-500' />
                            </button>
                        </li>
                        :
                        <li className='hidden md:block' >
                            <button onClick={changeTheme} className='border-2 p-1 rounded-md border-yellow-200' >
                                <SunIcon className='w-6 h-6 text-yellow-500' />
                            </button>
                        </li>

                }
                <li className=' md:hidden'>
                    <Popover className="">
                        <Popover.Button className='border-2 m-2 p-1 rounded-md border-indigo-200 dark:border-red-200 dark:focus:border-red-500 focus:border-indigo-500' >
                            <MenuIcon className='w-6 h-6  dark:text-indigo-100 text-indigo-800 ' />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Popover.Panel className="fixed  left-0 top-0 bot-0 right-0 w-full h-screen bg-white z-10 dark:bg-gray-900 ">
                                <div className=''>
                                    <div className='flex justify-end'>
                                        <Popover.Button className='border-2 m-2 p-1 rounded-md border-red-200 dark:border-red-500 dark:focus:border-red-500 focus:border-indigo-500' >
                                            <XIcon className='w-6 h-6 dark:text-red-100 text-red-800 focus:dark:text-red-500 ' />
                                        </Popover.Button>
                                    </div>
                                    <h1 className='text-center'>
                                        <a href='#' className='font-bold underline underline-offset-4 decoration-2 decoration-red-500 '>
                                            <span className='text-2xl text-red-500'>Next</span>
                                            <span className='text-indigo-900 text-3xl dark:text-indigo-100'>Rocket</span>
                                        </a>
                                    </h1>
                                    <ul className='flex justify-center flex-col items-center'>
                                        <li>
                                            <Link href={'/'}>
                                                <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Inico</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/servicios'}>
                                                <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Servicios</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/portafolio'}>
                                                <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Portafolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/precios'}>
                                                <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Precios</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/contacto'}>
                                                <a className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Contacto</a>
                                            </Link>
                                        </li>


                                    </ul>


                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </li>
            </ul>



        </nav >
    )
}

export default Navbar