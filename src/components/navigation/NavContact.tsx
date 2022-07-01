import { MailIcon, PhoneIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'
import React from 'react'

const NavContact = () => {
    return (
        <nav className='bg-gray-900 py-1 px-3 hidden md:block'>
            <ul className='flex justify-end max-w-7xl mx-auto items-center space-x-10 text-sm'>
                <li>
                    <a href='#' className='text-red-400 flex space-x-2 items-center'>
                        <QuestionMarkCircleIcon className='w-5 h-5' />
                        <span>¿Preguntas?</span> </a>
                </li>
                <li>
                    <a href='#' className='text-red-400 flex space-x-2 items-center'>
                        <MailIcon className='w-5 h-5' />
                        <span>Hola@nextrocket.tech</span></a>
                </li>
                <li>
                    <a href='#' className='text-red-400 flex space-x-2 items-center '>
                        <PhoneIcon className='w-5 h-5' />
                        <span> +51 958-920-823</span></a>
                </li>


            </ul>
        </nav>
    )
}

export default NavContact