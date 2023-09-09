import { useEffect, useState } from 'react';
import './EmployeeCards.css';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import React from 'react';
import axios from 'axios';

const EmployeeCards = () => {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:3000/employee')
            .then((res) => {
                if(res.status === 200){
                    setCards(res.data)
                } else {
                    throw new Error(res.statusText)
                }
            })
            .catch((error) => {
                setError(error);
            })
    }, [])

    return (
        <React.Fragment>
            <div className = 'cards-container'>
                {
                    cards && !error && cards.map((card) => 
                        <EmployeeCard 
                            key = {card.id}
                            name = {card.name}
                            surname = {card.surname}
                            location = {card.location}
                            image = {card.image}
                        />
                    )
                }
                {
                    error && <p>Bad request</p>
                }
            </div>
        </React.Fragment>
    )
}

export default EmployeeCards;