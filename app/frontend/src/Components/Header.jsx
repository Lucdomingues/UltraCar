import React, { useContext } from 'react';
import '../Css/Header.css';
import AppContext from '../Context/Context';
import { useHistory } from "react-router-dom";

function Header() {
    const { services, setClient } = useContext(AppContext);
    const history = useHistory();
    const totalServicos = services.length;

    const logout = () => {
        setClient(null)
        history.push('/')
    }

    return (
        <header className="header">
            <div className="logo">
                <img className="logo-image" src='https://ultracarweb.com/Imagens/logo_ultracar_slogan_front.png' alt="logo_ultracar" />
            </div>
            <div className="info">
                <h1 className="title">Ultracar</h1>
                <p className="total-services">Total de serviços: {totalServicos}</p>
            </div>
            <div>
                <button className="logout-button" type='button' onClick={() => logout()}>
                    Logout
                </button>
            </div>
        </header>

    );
}

export default Header;