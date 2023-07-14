import React from 'react'
import { Link } from 'react-router-dom'

export default function Contatos() {
    return (
        <div className='text-white bg-red-800 text-xl h-full w-full'>
            <div className='h-full relative p-10'>
                <Link to='/Calculadora' className='hover:bg-yellow-600 hover:text-white rounded-lg p-2 transition-all duration-300'>voltar para calculadora</Link>
{/*                 <Link to='/Contatos/2' className='p-2'>Contato 2</Link>
                <Link to='/Contatos/3' className='p-2'>Contato 3</Link> */}
            </div>
            <div className='mt-0'>
                <div className='p-4'>
                    <h2 className='text-center text-3xl pb-8'>Modo de fazer:</h2>
                        <div className='text-left  text-md'>
                            <h3 className="text-2xl text-yellow-500 pb-2">Carne</h3>
                            <h4>Inicie misturando as carnes até conseguir uma massa homogênea, caso prefira pode acrescentar <br /> um fio de azeite para dar mais liga.
                            Separe pequenos montinhos de carne mais o menos entre 150g e 180g. <br /> Enrole bem nas mãos e faça uma bolinha compacta. Você pode apertar o quanto quiser para tirar o ar de <br /> 
                            dentro da carne. Molde os hamburgeres, apertando com a mão e ajeitando as bordas ou utilizando um molde. </h4>
                            <h4 className='text-yellow-500'>Dica: Reserve-os em ambiente fechado e fora do calor</h4>
                        </div>
                        <div className='text-right text-md'>
                            <h3 className='text-2xl text-yellow-500 pb-2'>Pão</h3>
                            <h4>Após cortar os pães, passe um pouco de manteiga na parte de dentro das fatias e doure-as na frigideira.<br/>
                            Isso faz com que o pão fique muito menos quebradiço, ainda mais lidando com outros ingredientes úmidos</h4>
                            <h4 className='text-yellow-500'>Dica: Caso vá utilizar maionese ou algum outro molho externo, na montagem eles podem ir no pão de cima.</h4>
                        </div>
                        <div className='text-left text-md'>
                            <h3 className="text-2xl text-yellow-500 pb-2">Cebola</h3>
                            <h4>Fatie a(as) cebola(s) em tiras finas e numa frigideira com um fio de azeite doure-as. Acrescente <br />
                            duas ou três colheres de açucar, caso queira também pode acrescentar uma ou duas doses de uma bebida <br />
                            alcoolica destilada. Misture poucas vezes mas até quem esteja num ponto um pouco mais espesso. </h4> 
                            <h4 className='text-yellow-500'>Dica: reserve a cebola junto a calda caramelizada para aplicar diretamente na carne na hora da montagem</h4>
                        </div>
                        <div className='text-right text-md'>
                            <h3 className="text-2xl text-yellow-500 pb-2">Cream cheese</h3>
                            <h4>Numa panela acrescente metade do creme de leite e conforme ele esquenta pode acrescentar um pouco de açucar <br />
                            e nóz moscada ou outro tempero que queira. Acrescente também metade do queijo ralado e misture devagar e <br /> 
                            constantemente. Pouco a pouco acrescente o restante do queijo, e sempre que ficar um pouco mais resistente <br />
                            acrescente um pouco mais do creme de leite até dissolver tudo num creme homogêneo. Certifique-se de passar <br />
                            a colher pelo fundo da panela e bordas.</h4>
                            <h4 className='text-yellow-500'>Dica: faça esta etapa quando todas as outras já estiverem prontas.</h4>
                        </div>
                        <div className='text-left text-md'>
                            <h3 className='text-2xl text-yellow-500'>Salada</h3>
                            <h4>Fatie o tomate em rodelas e separe a alface em folhas</h4>
                            <h4 className='text-yellow-500'>Dica: Durante a montagem a salada fica diretamente em contato com o pão de baixo.</h4>
                        </div>
                        <h2 className='text-center text-xl pt-8'>Agora é só montar e bom apetite!</h2>
                </div>
                <div className='p-4'>
                    Conteúdo
                </div>
            </div>
        </div>
    )
}