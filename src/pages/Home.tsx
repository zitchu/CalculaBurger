import React from 'react' 
import {Parallax, ParallaxLayer} from '@react-spring/parallax' 
import {motion} from 'framer-motion'
import Sidebar from '../components/Sidebar/Sidebar';


export default function Home() {
    const [move, setMove] = React.useState(false);
    return   (
        <div className='text-xl bg-white h-full w-full'>
            <div className='w-full bg-black h-full items-center justify-center p-4 m-4 text-center'>
            <Parallax className='bg-black animation' pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer className='z-10 fixed' offset={0} speed={1}><div> <Sidebar /></div> </ParallaxLayer>
                <ParallaxLayer offset={0} speed={3}>
                    <div className="animation_layer parallax" id='back2'></div>
                </ParallaxLayer>
                
                <ParallaxLayer offset={0} speed={0.4}>
                    <div className="animation_layer parallax" id='plano1'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.6}>
                    <div className="animation_layer parallax" id='plano2'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={3}>
                    <motion.div className='text-gradient font-sans contentando text-bold text-8xl' animate={{ y: move ? 600 : -500}} transition={{ type:"tween", duration: 3}}>
                    Hamburger do Zitchu
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="animation_layer parallax" id='plano3'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="animation_layer parallax" id='plano4'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2}>
                    <div className=' -mt-20 text-white'> Contentando</div>
                </ParallaxLayer>
            </Parallax>
            </div>
        </div>
    )
}