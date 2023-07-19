import React from 'react'
import { Link } from 'react-router-dom'

export default function Receita() {
    return (
        <div className='text-white bg-red-800 text-xl h-full w-full'>
            <div className='h-full relative py-10'>
                <Link to='/' className='hover:bg-yellow-600 hover:text-white rounded-lg p-4 transition-all duration-300'>Voltar para calculadora</Link>
{/*                 <Link to='/Contatos/2' className='p-2'>Contato 2</Link>
                <Link to='/Contatos/3' className='p-2'>Contato 3</Link> */}
            </div>
            <div className='mt-0'>
                <div>
                    <h2 className='text-center text-3xl pb-8'>Modo de fazer:</h2>
                    <div className='flex flex-col flex-wrap gap-2'>
                        <div className='flex flex-row flex-wrap'>
                        <div className='text-left basis-7/12 p-4 px-2 text-md'>
                            <h3 className="text-2xl text-yellow-500 pb-2 pl-2">Carne</h3>
                            <h4 className="pl-3">Misture as carnes até obter uma massa homogênea, pode acrescentar um fio de azeite para dar liga.
                            Separe montinhos de carne entre 150g e 180g. Enrole bem nas mãos e faça uma bolinha compacta. Você pode aperta-lo para tirar o ar de  
                            dentro da carne. Apertando a carne com a mão e ajeitando as bordas ou utilizando um molde, dê o formato. Na frigideira deixe a carne parada e adicione sal a gosto. Espere até que a carne fique um pouco esbranquiçada até a metade na lateral e vire.
                            Quando a lateral se tornar toda esbranquiçada conte mais 1 min.
                            </h4>
                            <h4 className='text-yellow-500 pl-3'>Dica: Aguarde a frigideira estar bem quente para começar. Ao final reserve-os em ambiente fechado e fora do calor</h4>
                        </div>
                        <div className='basis-5/12' id='burguer1' />
                        </div>
                        <div className='flex flex-row flex-wrap'>
                        <div className='basis-5/12' id='burguer2' />
                        <div className='text-right basis-7/12 p-4 px-2 text-md'>
                            <h3 className='text-2xl text-yellow-500 pb-2 pr-3'>Pão</h3>
                            <h4 className="pr-3">Após cuidadosamente cortar os pães em fatias, espalhe suavemente uma generosa quantidade de manteiga na parte interna de cada fatia e leve-as à frigideira para dourarem com maestria. Essa técnica torna o pão significativamente menos quebradiço, especialmente quando combinado com deliciosos ingredientes úmidos que realçam ainda mais o sabor e a textura da sua refeição</h4>
                            <h4 className='text-yellow-500 pr-3'>Dica: Caso vá utilizar maionese ou algum outro molho externo, na montagem eles podem ir no pão de cima.</h4>
                        </div>
                        </div>
                        <div className='flex flex-row flex-wrap'>
                        <div className='text-left basis-7/12 p-4 px-2 text-md'>
                            <h3 className='text-2xl text-yellow-500 pb-2 pl-2'>Bacon</h3>
                            <h4 className="pl-3">Para preparar as fatias de bacon, aqueça uma frigideira em fogo médio e coloque as fatias, cuidando para que fiquem douradas ao seu gosto. Em seguida, após o preparo, reserve-as em um ambiente adequado onde possam escorrer e ficar deliciosamente sequinhas, seja utilizando uma grade ou papel toalha. Essa etapa é crucial para garantir que o bacon fique perfeito e livre de excesso de gordura, proporcionando um sabor ainda mais irresistível em suas receitas.</h4>
                            <h4 className='text-yellow-500 pl-3'>Dica: Durante a montagem eles ficam melhores diretamente por cima do molho da carne ou como último ingrediente 
                            antes do pão.</h4>
                        </div>
                        <div className='basis-5/12' id='burguer3'/>
                        </div>
                        <div className='flex flex-row flex-wrap'>
                        <div className='basis-5/12' id='burguer4'/>
                        <div className='text-right basis-7/12 p-4 px-2 text-md'>
                            <h3 className="text-2xl text-yellow-500 pb-2 pr-3">Cebola</h3>
                            <h4 className="pr-3">Fatie a(as) cebola(s) em tiras finas e numa frigideira com um fio de azeite doure-as. Acrescente 
                            duas ou três colheres de açucar, caso queira também pode acrescentar uma ou duas doses de uma bebida 
                            alcoolica destilada. Misture poucas vezes mas até quem esteja num ponto um pouco mais espesso. </h4> 
                            <h4 className='text-yellow-500 pr-3'>Dica: reserve a cebola junto a calda caramelizada para aplicar diretamente na carne na hora da montagem, os sabores caramelizados complementam bem ao sabor da carne.</h4>
                        </div>
                        </div>
                        <div className='flex flex-row flex-wrap'>
                        <div className='text-left basis-7/12 p-4 px-2 text-md'>
                            <h3 className="text-2xl text-yellow-500 pb-2 pl-2">Cream cheese</h3>
                            <h4 className="pl-3">Numa panela acrescente metade do creme de leite e conforme ele esquenta pode acrescentar um pouco de açucar 
                            e nóz moscada ou outro tempero que queira. Acrescente também metade do queijo ralado e misture devagar e  
                            constantemente. Pouco a pouco acrescente o restante do queijo, e sempre que ficar um pouco mais resistente 
                            acrescente um pouco mais do creme de leite até dissolver tudo num creme homogêneo. Certifique-se de passar 
                            a colher pelo fundo da panela e bordas.</h4>
                            <h4 className='text-yellow-500 pl-3'>Dica: faça esta etapa quando todas as outras já estiverem prontas.</h4>
                        </div>
                        <div className='basis-5/12' id='burguer5'/>
                        </div>
                        <div className='flex flex-row flex-wrap'>
                        <div className='basis-5/12' id='burguer6'/>
                        <div className='text-right basis-7/12 p-4 px-2 text-md'>
                            <h3 className='text-2xl text-yellow-500 pb-2 pr-3'>Salada</h3>
                            <h4 className="pr-3">Para preparar uma deliciosa salada de alface e tomate para acompanhar seu hambúrguer, siga estes passos simples. Lave cuidadosamente as folhas de alface e os tomates não muito maduros em água corrente. Corte a alface em tiras finas e os tomates em rodelas. Misture-os em uma tigela e tempere com azeite de oliva, vinagre balsâmico, sal e pimenta a gosto.</h4>
                            <h4 className='text-yellow-500 pr-3'>Dica: Durante a montagem a salada, preferencialmente, fica diretamente em contato com o pão de baixo.</h4>
                        </div>
                        </div>
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