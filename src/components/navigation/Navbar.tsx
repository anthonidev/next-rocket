import { useTheme } from 'next-themes';
import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <nav >
            <ul className='flex justify-between max-w-7xl mx-auto py-2 px-3'>
                <li>
                    <a href='#' className='font-bold underline underline-offset-4 decoration-2 decoration-red-500 '>
                        <span className='text-2xl text-red-500'>Next</span>
                        <span className='text-indigo-900 text-3xl dark:text-indigo-100'>Rocket</span>
                    </a>
                </li>
               
                <li className='md:flex justify-between items-center space-x-10 text-indigo-800 font-semibold text-lg hidden dark:text-indigo-100 '>
                    <a href='#' className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Inico</a>
                    <a href='#' className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Servicios</a>
                    <a href='#' className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Portafolio</a>
                    <a href='#' className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Precios</a>
                    <a href='#' className='hover:text-red-500 border-b-2 border-transparent hover:border-red-500 hover:border-b-2 '>Contacto</a>
                </li>
                {
                    theme !== undefined && theme === "light" ?
                        <li >
                            <button onClick={changeTheme} className='border p-1 rounded-md border-violet-200' >
                                <MoonIcon className='w-6 h-6 text-violet-500' />
                            </button>
                        </li>
                        :
                        <li>
                            <button onClick={changeTheme} className='border p-1 rounded-md border-yellow-200' >
                                <SunIcon className='w-6 h-6 text-yellow-500' />
                            </button>
                        </li>

                }
            </ul>



        </nav>
    )
}

export default Navbar