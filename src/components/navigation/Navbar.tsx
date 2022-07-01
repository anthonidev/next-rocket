import { useTheme } from 'next-themes';
import React from 'react'

const Navbar = () => {
    const {theme,setTheme} = useTheme();
    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
    return (
        <nav className='flex justify-between'>
            <li>
                <a href='#'>Home</a>

            </li>
            <button onClick={changeTheme} className='bg-red-500 w-8/12 rounded-full py-2 px-5 text-white'>Toggle theme</button>
        </nav>
    )
}

export default Navbar