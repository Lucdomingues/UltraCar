import React, { useContext } from 'react';
import AppContext from '../Context/Context';
import { parts } from '../Database/mock/Api.mock';

const PartSelector = () => {
    const {setPart,
        selectedParts,
        setSelectedParts,
        total,
        setTotal } = useContext(AppContext);

    const handleSelectPart = (selectedPart) => {
        setSelectedParts((prevSelectedParts) => [...prevSelectedParts, selectedPart]);
        setTotal((prevTotal) => prevTotal + selectedPart.price);
        setPart(selectedPart);
    };

    return (
        <div>
            <h2>Selecione a peça utilizada no serviço:</h2>
            <ul>
                {parts.map((part) => (
                    <li key={part.id} onClick={() => handleSelectPart(part)}>
                        {part.name} - R$ {part.price}
                    </li>
                ))}
            </ul>
            {selectedParts.length > 0 && (
                <div>
                    <h3>Peças selecionadas:</h3>
                    <ul>
                        {selectedParts.map((part) => (
                            <li key={part.id}>
                                {part.name} - R$ {part.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total: R$ {total}</p>
                </div>
            )}
        </div>
    );
};

export default PartSelector;
