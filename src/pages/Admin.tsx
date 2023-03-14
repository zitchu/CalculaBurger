import React from 'react'
import {motion} from 'framer-motion'

export default function Admin() {
    const [move, setMove] = React.useState(false);
    return (
        <div className='text-xl bg-[#2b2b2b] text-[#bdff38]'>
            <div className='h-full p-4 m-4'>
            <div className='bg-sea1 min-h-screen w-full bg-no-repeat bg-fixed items-center justify-center bg-cover bg-center foto' />
            <div className='-mt-10 h-20 w-full bg-gradient-to-b from-transparent via-verde to-transparent absolute text-center items-center pt-6'>
                <button className="neon-button">Neon</button>
                <button className="neon-button2">Bio</button>
                <button className="neon-button3">Bio</button>
            </div>
            <div className='bg-sea2 min-h-screen w-full bg-no-repeat bg-fixed items-center justify-center bg-cover bg-center foto' />
            <div className='-mt-10 h-20 w-full bg-gradient-to-b from-transparent via-verde to-transparent absolute text-center items-center pt-6'>

                <button className="neon-button">Neon</button>
                <button className="neon-button2">Bio</button>
                <button className="neon-button3">Bio</button>
            </div>
            <div className='bg-sea3 min-h-screen w-full bg-no-repeat bg-fixed items-center justify-center bg-cover bg-center foto' />
            </div>
            <div className='container flex items-center justify-center text-center'>
                <motion.div animate={{ x: move ? 400 : 100}} transition={{ type:"tween", duration: 1}} onClick={() => {
                    setMove(!move);
                }}whileDrag={{ scale:0.9}} drag="x">
                    <div className='bg-red-500 rounded-lg h-32 w-32'></div>
                </motion.div>
            </div>
        </div>
    )
}


