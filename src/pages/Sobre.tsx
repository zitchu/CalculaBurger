import React from 'react' 
import {Parallax, ParallaxLayer} from '@react-spring/parallax' 
import {motion} from 'framer-motion'
import Sidebar from '../components/Sidebar/Sidebar';


export default function Sobre() {
    const [move] = React.useState(false);
    return   (
        <div className='text-xl bg-white h-full w-full overflow-x-hidden'>
            <div className='w-full bg-white h-full items-center justify-center p-4 m-4 text-center'>
            <Parallax className='bg-black animation' pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer className='z-10 fixed' offset={0} speed={1}>
                    <div> 
                        <Sidebar />
                    </div> 
                </ParallaxLayer>
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
                    <motion.div className='text-white text-shadow font-sans contentando text-bold text-8xl' animate={{ y: move ? 600 : -500}} transition={{ type:"tween", duration: 3}}>
                    Minha jornada
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="animation_layer parallax" id='plano3'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="animation_layer parallax" id='plano4'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2}>
                    <div className=' -mt-20 text-white flex flex-wrap'>
                    <div className='basis-3/12'></div>
                    <div className='basis-6/12 pb-4 mb-4 overflow-auto h-full'>
                        <h1>Esse projeto</h1>
                        <p className="text-justify m-4 p-4 leading-8">
                        Minha jornada de reconstrução pessoal e profissional foi um capítulo transformador em minha vida.
                        Em 2020, vi-me diante de uma encruzilhada: deixar para trás minha carreira como bibliotecário, que por tantos anos me deu
                        segurança e motivação, mas que já nesse momento se apontava em declínio (menos vagas, bibliotecas grandes sendo fechadas, 
                        falta de apoio do governo de forma geral), além de que havia me tornado há pouco desempregado. Nesse momento, a 
                        especialização em Marketing também não contou muito, pois rendia pouquíssimas entrevistas e, em vários meses buscando, 
                        nenhuma oportunidade.
                        </p>
                        <p className="text-justify m-4 p-4 leading-8">
                        Então, abraçar a incerteza e dar um salto no desconhecido foi intimidante, mas necessário. Iniciar já depois dos 30 em uma 
                        área totalmente nova para mim, onde eu não encontrava qualquer semelhança com outros cursos superiores que possuía, era 
                        uma barreira e tanto. Fazer isso tudo num momento em que havia há pouco perdido meu pai e logo depois começava a pandemia 
                        fez tudo ficar mais difícil e ao mesmo tempo mais necessário. Um animal acoado que não tem para onde recuar passa a poder 
                        andar somente para frente. Era o caminho certo a seguir.
                        </p>
                        <p className="text-justify m-4 p-4 leading-8">
                        Então encontrei minha oportunidade de reinventar-me como programador, desenvolver algo que pudesse ser não só útil como me 
                        dar um futuro, aprendendo a linguagem da tecnologia. Desbravei um mundo repleto de códigos, algoritmos e inovação. Cada 
                        desafio superado fortaleceu minha determinação. A reconstrução foi muito mais do que aprender novas habilidades; foi uma 
                        jornada de autodescoberta e superação. Encontrei uma paixão genuína por criar soluções tecnológicas e transformar ideias 
                        em realidade.
                        </p>
                        <p className="text-justify m-4 p-4 leading-8">
                        Hoje, olhando para trás, vejo que cada passo foi valioso. Aprendi que a mudança é uma oportunidade para crescimento e 
                        que se reinventar é a essência da evolução. Abandonar minha antiga carreira foi apenas o início de uma nova jornada de 
                        autodescoberta e realização pessoal. Sou grato por cada desafio, pois me tornaram a pessoa que sou hoje - um programador 
                        apaixonado, pronto para enfrentar os desafios que o futuro reserva, encontrar problemas que possa resolver e obter soluções
                        que ajudem as pessoas a encontrarem o que buscam.
                        </p>
                    </div>
                    <div className='basis-3/12'></div>
                    </div>
                </ParallaxLayer>
            </Parallax>
            </div>
        </div>
    )
}