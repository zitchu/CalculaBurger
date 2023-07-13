import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>

        <nav className={`${open ? "h-20" : "h-12"} 'transition duration-300 w-full items-center text-yellow-500 font-sans flex flex-col navbar p-2 z-9999'`}>
            <button className={`rounded hover:bg-transparent ${open && "rotate-180 "} hover:text-red-800 duration-500`} onClick={() => setOpen(!open)}><FontAwesomeIcon  icon={faBars} /></button> 
                <div className={`text-xl  ${!open && "scale-0"}  rounded-lg px-2 transition-all duration-300`}>
                    <button className='text-xl hover:bg-yellow-600 hover:text-white rounded-lg p-2 transition-all duration-300'><Link to='/'>Home</Link></button>
                    <button className='text-xl hover:bg-yellow-600 hover:text-white rounded-lg p-2 transition-all duration-300'><Link to='/admin'>Admin</Link></button>
                    <button className='text-xl hover:bg-yellow-600 hover:text-white rounded-lg p-2 transition-all duration-300'><Link to='/calculadora'>Calculadora</Link></button>
                    <button className='text-xl hover:bg-yellow-600 hover:text-white rounded-lg p-2 transition-all duration-300'><Link to='/Contatos/:id'>Contatos</Link></button>
                </div>
        </nav>
        </div>
    )
}

export default Sidebar;




{/*<button onClick={showSidebar}>
            <FontAwesomeIcon icon={faBars} />
                {sidebar && <Barralateral />}</button>
            <div>
                <button className='text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300'><Link to='/'>Home</Link></button>
                <button className='text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300'><Link to='/admin'>Admin</Link></button>
                <button className='text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300'><Link to='/calculadora'>Calculadora</Link></button>
                <button className='text-xl hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300'><Link to='/Contatos/:id'>Contatos</Link></button>
            </div> */}