import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className=' gap-2 bg-transparent text-white font-sans flex navbar fixed'>
            <button className='hover:bg-white hover:text-black rounded-lg p-2'>
                <Link to='/'>Home</Link>
                </button>
                <button className='hover:bg-white hover:text-black rounded-lg p-2'><Link to='/admin'>Admin</Link></button>
                <button className='hover:bg-white hover:text-black rounded-lg p-2'><Link to='/calculadora'>Calculadora</Link></button>
                <button className='hover:bg-white hover:text-black rounded-lg p-2'><Link to='/Contatos/:id'>Contatos</Link></button>
        </nav>
    )
}

export default Sidebar;