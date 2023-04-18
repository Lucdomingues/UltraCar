import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { clientUser } from "../Database/mock/Api.mock";
import AppContext from "../Context/Context";

const Login = () => {
    const history = useHistory();
    const { setClient} = useContext(AppContext)
    const [cpf, setCpf] = useState('');

    const login = async (cpf) => {
        // Aqui, podemos fazer uma requisição para um banco de dados para buscar o cliente com o cpf informados.
        // Se o cliente for encontrado, podemos atualizar o estado do contexto com as informações dele e continuar o processo.
        // Se não for encontrado, podemos mostrar uma mensagem de erro para o usuário.

        try {
            // const response = await fetch(`/api/client?email=${email}&password=${password}`);
            // const data = await response.json();

            const data = clientUser;

            if (data.cpf === cpf) {
                setClient(data)
                history.push('/info_client')
            } else {
                alert('Cliente não encontrado')
            }
        } catch (error) {
            console.error(error);
        }
    };

    // const logout = () => {
    //     // Aqui, podemos simplesmente limpar o estado do contexto para deslogar o cliente.
    //     setClient(null);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(cpf);
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Cpf:
                <input type="text" value={cpf} onChange={(event) => setCpf(event.target.value)} required />
            </label>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
