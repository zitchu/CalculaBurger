import React from 'react' 
import { motion } from 'framer-motion' 


export default function Home() {
    return   (
        <div className='text-xl'>
            <div>
            <div className='bg-sea1 min-h-screen w-full bg-no-repeat bg-fixed items-center justify-center bg-cover bg-center' />
            <div className='-mt-10 h-20 w-full bg-gradient-to-b from-transparent via-green-500 to-transparent absolute text-center items-center pt-6'>

            <a href="#" className="neon-button">Neon</a>
            <a href="#" className="neon-button2">Bio</a>
            <a href="#" className="neon-button3">Bio</a>
            </div>
            <div className='bg-sea2 min-h-screen w-full bg-no-repeat bg-fixed items-center justify-center bg-cover bg-center' />
            <div className='-mt-10 h-20 w-full bg-gradient-to-b from-transparent via-green-500 to-transparent absolute text-center items-center pt-6'>

            <a href="#" className="neon-button">Neon</a>
            <a href="#" className="neon-button2">Bio</a>
            <a href="#" className="neon-button3">Bio</a>
            </div>
            <div className='bg-sea3 min-h-screen w-full bg-no-repeat bg-fixed items-center justify-center bg-cover bg-center' />
            </div>
            <div className='container'>
                <motion.div animate={{ x:100, scale: 1}} initial={{scale:0}} >
                    <div className='bg-red-500 rounded-lg h-32 w-32'></div>
                </motion.div>
            </div>
        </div>
    )
}
