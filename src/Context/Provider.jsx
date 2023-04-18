import React, { useMemo, useState } from 'react';
import AppContext from './Context';

export default function AppProvider({ children }) {
    const [client, setClient] = useState({
        id: 0,
        nome: '',
        email: '',
        password: '',
        cpf: ''
    });
    const [car, setCar] = useState([]);

    const data = useMemo(
        () => ({ client, setClient, car, setCar }),
        [client, setClient, car, setCar],
    );

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {}.isRequired;