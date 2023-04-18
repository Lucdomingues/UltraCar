import React, { useContext, useState } from 'react';
import AppContext from '../Context/Context';

const ServiceForm = () => {
    const { client } = useContext(AppContext);
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Aqui, podemos fazer uma requisição para um banco de dados para salvar o nome da pessoa responsável pelo serviço.
        // Podemos enviar o nome junto com o ID do cliente, que foi obtido quando ele fez login na Tela 1.

        try {
            const response = await fetch('/api/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    clientId: client.id,
                    name
                })
            });

            if (response.ok) {
                alert('Serviço confirmado com sucesso!');
            } else {
                alert('Erro ao confirmar o serviço');
                throw new Error('Erro ao confirmar o serviço');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome da pessoa responsável pelo serviço:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
            </label>
            <button type="submit">Confirmar serviço</button>
        </form>
    );
};

export default ServiceForm;
