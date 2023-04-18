import React, { useContext, useState } from 'react';
import AppContext from '../Context/Context';
import { useHistory } from "react-router-dom";
import PartSelector from './PartsSelector';
import '../Css/ServiceForm.css'

const ServiceForm = () => {
    const history = useHistory();
    const { services, setServices, selectedParts, total, client } = useContext(AppContext);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [id, setId] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Aqui, podemos fazer uma requisição para um banco de dados para salvar o nome da pessoa responsável pelo serviço.
        // Podemos enviar o nome junto com o ID do cliente, que foi obtido quando ele fez login na Tela 1.

        // try {
        //     const response = await fetch('/api/service', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             clientId: client.id,
        //             name,
        //             details
        //         })
        //     });

        //     if (response.ok) {
        //         alert('Serviço confirmado com sucesso!');
        //     } else {
        //         alert('Erro ao confirmar o serviço');
        //         throw new Error('Erro ao confirmar o serviço');
        //     }
        // } catch (error) {
        //     console.error(error);
        // }

        gerarServices();
    };

    const gerarServices = () => {
        const serviceData = {
            nome_funcionario: name,
            client: client.nome,
            id_car: id,
            detalhes_service: details,
            pecas: selectedParts,
            total_pagar: total,
        }

        setServices([...services, serviceData]);
    }

    const redirect = () => {
        history.push('/info_services')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome da pessoa responsável pelo serviço:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
            </label>
            <label>
                Detalhes do serviço:
                <textarea id="detalhes_service" cols="30" rows="10"
                value={details} onChange={(event) => setDetails(event.target.value)}
                ></textarea>
            </label>
            <label>
                Informe o id do carro:
                <input type="number" value={id} onChange={(event) => setId(event.target.value)} required />
            </label>
            <PartSelector />
            <button type="submit">Adicionar serviço</button>
            <button type="button" onClick={()=> redirect()}>Serviços</button>
        </form>
    );
};

export default ServiceForm;
