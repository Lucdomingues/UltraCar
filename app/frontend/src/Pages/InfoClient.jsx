import React, { useContext } from 'react';
import AppContext from '../Context/Context';
import {customerVehicle} from '../Database/mock/Api.mock';
import ServiceForm from '../Components/ServiceForm';
import Header from '../Components/Header';
import '../Css/InfoClient.css'

const InfoClient = () => {
    const { setCar, client  } = useContext(AppContext);

    // useEffect(() => {
        // Aqui esta a lógica para extrair info do banco de dados.
        // Vamos criar um objeto simulado para ilustrar como funcionaria:

        const data = customerVehicle;

        setCar(data);
    // }, []);

    return (
        <div>
            <Header />
            <div className="client-details">
                <h2>Detalhes do cliente</h2>
                <p>ID: {client.id}</p>
                <p>Nome: {client.nome}</p>
                <p>Email: {client.email}</p>
                <p>Cpf: {client.cpf}</p>
            </div>
            <div className="car-details">
                <ul>
                    <h2>Detalhes do carro:</h2>
                    {data.map((car) => (
                        <li key={car.id}>
                            <p>ID: {car.id}</p>
                            <p>Marca: {car.marca}</p>
                            <p>Modelo: {car.modelo}</p>
                            <p>Ano: {car.ano}</p>
                            <p>Número de portas: {car.numero_de_portas}</p>
                            <p>Tipo de carroceria: {car.tipo_de_carroceria}</p>
                            <p>Capacidade de passageiros: {car.capacidade_de_passageiros}</p>
                            <p>Cor: {car.cor}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <ServiceForm />
        </div>
    );
};

export default InfoClient;