import React, { useContext } from 'react';
import AppContext from '../Context/Context';
import Header from '../Components/Header';
import '../Css/InfoServices.css'

const InfoServices = () => {
    const { services, setServices} = useContext(AppContext);

    const handleStart = ({target}) => {
        const now = new Date();
        const copyServices = [...services]
        copyServices[target.value].data_start = now
        setServices(copyServices)
    };

    const handleEnd = ({target}) => {
        const now = new Date();
        const copyServices = [...services]
        copyServices[target.value].data_finish = now
        setServices(copyServices)
    };

    return (
        <div>
            <Header />
            <ul>
                <h1>Serviços: </h1>
                {services.map((service, index) => (
                    <li key={Math.random()}>
                        <p>Funcionario: {service.nome_funcionario}</p>
                        <p>Cliente: {service.client}</p>
                        <p>Código do carro: {service.id_car}</p>
                        <ul>Adicionar:
                            {service.pecas.map((parts) => (
                                <li key={Math.random()}>
                                    <p>Peça: {parts.name}</p>
                                    <p>Preço: {parts.price}</p>
                                </li>
                            ))}
                        </ul>
                        <p>Detalhes: {service.detalhes_service}</p>
                        <p>Total: {service.total_pagar}</p>
                        <p>Início do serviço: {service.data_start ? service.data_start.toLocaleString() : 'Não iniciado'}</p>
                        <p>Término do serviço: {service.data_finish ? service.data_finish.toLocaleString() : 'Não concluído'}</p>
                        <button type="button" value={index} onClick={(event) => handleStart(event)}>Confirmar Serviço</button>
                        <button type="button" value={index} onClick={(event) => handleEnd(event)}>Finalizar Serviço</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoServices;