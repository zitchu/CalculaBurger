import React from 'react'
import { Link } from 'react-router-dom'

function Contatos() {
    return (
        <div className='text-white bg-indigo-600'>
            <h1>Contatos</h1>
            <Link to='/Contatos/1'>Contato 1</Link>
            <Link to='/Contatos/2'>Contato 2</Link>
            <Link to='/Contatos/3'>Contato 3</Link>
        </div>
    )
}

export default Contatos