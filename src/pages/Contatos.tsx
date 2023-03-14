import React from 'react'
import { Link } from 'react-router-dom'

export default function Contatos() {
    return (
        <div className='text-white bg-indigo-600 text-xl h-full w-full'>
            <div className='mt-10 h-full relative p-10'>
                <Link to='/Contatos/1' className='p-2'>Contato 1</Link>
                <Link to='/Contatos/2' className='p-2'>Contato 2</Link>
                <Link to='/Contatos/3' className='p-2'>Contato 3</Link>
            </div>
            <div className='mt-0'>
                <div>
                    <h1>Contatos</h1>
                </div>
                <div>
                    Conteúdo
                </div>
            </div>
        </div>
    )
}