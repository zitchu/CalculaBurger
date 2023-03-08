import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='p-2 gap-2 flex'>
            <Link to='/'>Home</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/calculadora'>Calculadora</Link>
            <Link to='/Contatos/:id'>Contatos</Link>
        </nav>
    )
}

export default Sidebar;