import React from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax' 
import {motion} from 'framer-motion'
import Sidebar from '../components/Sidebar/Sidebar';
import Calc from './Calc';

export default function Calculadora() {
    const [move] = React.useState(false);
    return (
        <div className='text-black text-xl min-h-full'>
            <Parallax className='bg-red-800 animation' pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer className='z-9999 fixed' offset={0} speed={1}> <div> <Sidebar /></div> </ParallaxLayer>
                <ParallaxLayer className="bg-gradient2" offset={0} speed={3}>
                    <motion.div
                    className="text-gradient font-sans contentando text-bold text-8xl"
                    animate={{ y: move ? 1200 : 200 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    >
                        Role para baixo
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={3}>
                    <motion.div className='text-red-800 font-sans contentando text-bold text-8xl' animate={{ y: move ? 600 : -500}} transition={{ type:"tween", duration: 3}}>
                    Calculadora
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8} >
                    <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 4}}>
                    <div className="burger_layer parallax" id='burg8'></div>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.7}>
                <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 3.5}}><div className="burger_layer parallax" id='burg7'></div></motion.div>
                </ParallaxLayer>
                
                <ParallaxLayer offset={0} speed={0.6}>
                <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 3}}><div className="burger_layer parallax" id='burg6'></div></motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5}>
                <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 2.5}}><div className="burger_layer parallax" id='burg5'></div></motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.4}>
                    <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 2}}><div className="burger_layer parallax" id='burg4'></div></motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 1.5}}><div className="burger_layer parallax" id='burg3'></div></motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2}>
                    <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 1}}><div className="burger_layer parallax" id='burg2'></div></motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.1}>
                    <motion.div animate={{ y: move ? 0 : 50}} transition={{ type:"tween", duration: 0.5}}><div className="burger_layer parallax" id='burg1'></div></motion.div>
                </ParallaxLayer>
                
                <ParallaxLayer offset={0} speed={0}>
                    <motion.div
                    className="text-gradient bg-yellow-600 font-sans contentando text-bold text-8xl"
                    animate={{ y: move ? 0 : 180 }}
                    transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1 , repeat: Infinity}}
                    >
                        🢃
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2}>
                    <div className=' -mt-20 text-white h-full bg-transparent'> <Calc /></div>
                </ParallaxLayer>
            </Parallax>
            
        </div>
    )
}
