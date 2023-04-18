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
    const [part, setPart] = useState({});
    const [selectedParts, setSelectedParts] = useState([]);
    const [total, setTotal] = useState(0);

    const data = useMemo(
        () => ({ client, setClient, car, setCar, part, setPart, selectedParts, setSelectedParts, total, setTotal }),
        [client, setClient, car, setCar, part, setPart, selectedParts, setSelectedParts, total, setTotal],
    );

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {}.isRequired;