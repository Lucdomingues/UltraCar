import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { clientUser } from "../Database/mock/Api.mock";
import AppContext from "../Context/Context";
import '../Css/Login.css';

const Login = () => {
    const history = useHistory();
    const { setClient } = useContext(AppContext);
    const [cpf, setCpf] = useState('');

    const handleLogin = async (cpf) => {
        try {
            // Aqui, podemos fazer uma requisição para um banco de dados para buscar o cliente com o cpf informados.
            // Se o cliente for encontrado, podemos atualizar o estado do contexto com as informações dele e continuar o processo.
            // Se não for encontrado, podemos mostrar uma mensagem de erro para o usuário.
            
            // const response = await fetch(`/api/client?email=${email}&password=${password}`);
            // const data = await response.json();

            const data = clientUser;

            if (data.cpf === cpf) {
                setClient(data);
                history.push('/info_client');
            } else {
                alert('Cliente não encontrado');
            };
        } catch (error) {
            console.error(error);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(cpf);
    };


    return (
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Cpf:
                    <input type="text" value={cpf} onChange={(event) => setCpf(event.target.value)} required />
                </label>
                <button type="submit">Entrar</button>
            </form>
    );
};

export default Login;
