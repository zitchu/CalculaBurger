import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Calc() {
    const [comiloes, setComiloes] = useState(0);
    const [moderados, setModerados] = useState(0);
    const [criancas, setCriancas] = useState(0);

    const pesoCarne = 0.18; 
    const quantPao = 1; 
    const quantAlf = 1;
    const quantTom = 1;
    const quantBacon = 1;
    const quantQue = 1;
    const quantCeb = 1;
    

    const calcularCompras = () => {
    // carnes
    const totalCarne = comiloes * pesoCarne * 2 + moderados * pesoCarne * 1.5 + criancas * pesoCarne * 1;
    const taraCarne = ((comiloes * pesoCarne * 2 + moderados * pesoCarne * 1.5 + criancas * pesoCarne * 1) / 2).toFixed(2);
    // pães
    const totalPao = comiloes * quantPao * 2 + moderados * quantPao * 1 + criancas * quantPao * 1;
    // saladas
    const totalAlface = (comiloes * quantAlf / 12 + moderados * quantAlf / 12 + criancas * quantAlf / 12).toFixed(1);
    const totalTomate = (comiloes * quantTom / 6 + moderados * quantTom / 6 + criancas * quantTom / 6).toFixed(1);
    const totalCeb = (comiloes * quantCeb / 6 + moderados * quantCeb / 6 + criancas * quantCeb / 6).toFixed(1);
    // bacon
    const totalBacon = (comiloes * quantBacon / 6 + moderados * quantBacon / 6 + criancas * quantBacon / 6).toFixed(1);
    const pesoBacon = ((comiloes * quantBacon / 6 + moderados * quantBacon / 6 + criancas * quantBacon / 6)* 250).toFixed(0);
    // queijo
    const pesoQue = (comiloes * quantQue / 4 + moderados * quantQue / 4 + criancas * quantQue / 4)* 100;
    const totalQueijo = comiloes * 2 + moderados * 2 + criancas * 1;
    const totalCre = (comiloes * quantCeb / 6 + moderados * quantCeb / 6 + criancas * quantCeb / 6).toFixed(1)
    

    return {
        carne: totalCarne.toFixed(2),
        pao: totalPao,
        alface: totalAlface,
        queijo: totalQueijo,
        bacon: totalBacon,
        tomate: totalTomate,
        kgBacon: pesoBacon,
        kgQue: pesoQue,
        kgCarne: taraCarne,
        cebola: totalCeb,
        creme: totalCre,
    };
    };
    return (
    <div className="p-4 bg-transparent shadow-lg rounded border-2 m-2 border-yellow-600">
    <h1 className="text-2xl font-bold mb-4">Calculadora de Carne</h1>
        <div className='flex justify-left gap-4 items-center'>
            <div className="mb-4 text-yellow-600">
                <label className="block mb-2">Comilões(onas):</label>
                <input
                type="number"
                value={comiloes}
                onChange={(e) => setComiloes(parseInt(e.target.value, 10))}
                className="w-20 text-black p-2 border border-gray-300 rounded"
                min={0}
                />
            </div>
            <div className="mb-4 text-yellow-600">
                <label className="block mb-2">Moderados(as):</label>
                <input
                type="number"
                value={moderados}
                onChange={(e) => setModerados(parseInt(e.target.value, 10))}
                className="w-20 text-black p-2 border border-gray-300 rounded"
                min={0}
                />
            </div>
            <div className="mb-4 text-yellow-600">
                <label className="block mb-2">Crianças:</label>
                <input
                type="number"
                value={criancas}
                onChange={(e) => setCriancas(parseInt(e.target.value, 10))}
                className="w-20 text-black p-2 border border-gray-300 rounded"
                min={0}
                />
            </div>
        </div>
        <div className='shadow-lg rounded-lg px-2 pt-2'>
        <h2 className='text-xl'>Lista de compras:</h2>
        <ul className='list-disc text-white m-5'>
            <li className="text-left">{calcularCompras().carne} kg de carne moída total, sendo {calcularCompras().kgCarne} kg de uma <strong className="text-gradient">carne mais gordurosa</strong> como carnes de churrasco e  {calcularCompras().kgCarne} kg de uma <strong className="text-gradient">carne menos gordurosa</strong> como carnes de segunda.</li>
            <li className="text-left">{calcularCompras().pao} <strong className="text-gradient">pães</strong></li>
            <li className="text-left">{calcularCompras().bacon} caixas de 250g de <strong className="text-gradient">bacon</strong> ou {calcularCompras().kgBacon} gramas de <strong className="text-gradient">bacon fatiado</strong> </li>
            <li className="text-left">{calcularCompras().alface} pé(s) de <strong className="text-gradient">alface</strong></li>
            <li className="text-left">{calcularCompras().tomate} <strong className="text-gradient">tomate(s)</strong></li>
            <li className="text-left">{calcularCompras().cebola} <strong className="text-gradient">cebola(s)</strong></li>
            <li className="text-left">{calcularCompras().kgQue} gramas de <strong className="text-gradient">queijo ralado</strong></li>
            <li className="text-left">{calcularCompras().queijo} fatias do seu<strong className="text-gradient"> queijo</strong> escolhido</li>
            <li className="text-left">{calcularCompras().creme} caixinha(s) de 200g de <strong className="text-gradient">creme de leite</strong></li>
            <li className="text-center no-style"><button className='text-xl text-white hover:bg-yellow-600 hover:text-white rounded-lg p-2 transition-all duration-300'><Link to='/Contatos/:id'>ir para receita</Link></button></li>
        </ul>
    </div>
    </div>
    );
}

export default Calc;
