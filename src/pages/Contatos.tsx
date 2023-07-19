import React from 'react'
import { Link } from 'react-router-dom'

export default function Contatos() {
    return (
        <div className='text-white bg-red-800 text-xl h-full w-full'>
            <div className="text-white bg-red-800 flex absolute text-2xl h-full w-full">
                <div className="mt-0 flex flex-grow flex-col items-center justify-evenly gap-4">
                    <div className="flex items-center p-2 ">
                        <img src="https://avatars.githubusercontent.com/u/64271716?v=4" className="rounded-full w-20 h-20 relative m-2 hover:scale-125" alt='foto Jean' />
                        <p>
                            Jeanluiz Ferreira Porto Monteiro
                        </p>
                    </div>
                    <div className="place-self-center justify-between flex">
                        <a
                        href="https://www.linkedin.com/in/jeanluiz-ferreira-porto-monteiro-a19185105/"
                        className="cursor-pointer rounded shadow-md bg-yellow-600 text-white hover:scale-110 hover:bg-red-800 p-2 m-2"
                        target="blank"
                        >
                            Linked-In
                        </a>
                        <a
                        href="https://github.com/zitchu"
                        className="cursor-pointer rounded shadow-md bg-yellow-600 text-white hover:scale-110 hover:bg-red-800 p-2 m-2"
                        target="blank"
                        >
                            Github/zitchu
                        </a>
                        <a
                        href="https://www.instagram.com/zitchu/"
                        className="cursor-pointer rounded shadow-md bg-yellow-600 text-white hover:scale-110 hover:bg-red-800 p-2 m-2"
                        target="blank"
                        >
                        Instagram@Zitchu
                        </a>
                    </div>
                </div>
        </div>
        </div>
    )
}