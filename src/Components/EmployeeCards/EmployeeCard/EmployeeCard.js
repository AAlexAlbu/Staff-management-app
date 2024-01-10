import './EmployeeCard.css';
import * as React from 'react';
import { NavLink } from "react-router-dom"; 
import { BsPencilSquare } from "react-icons/bs";

const EmployeeCard = (props) => {

    return (
        <>
            <div className = 'employee-card'>
                <img src={props.image} width="300px"></img>
                <h2 id = 'name'>{props.surname}</h2>
                <h2 className = 'mb-4'>{props.name}</h2>
                <h5>Functie: {props.job}</h5>
                <h5>Locatie: {props.location}</h5>
                <NavLink to= {`/employeeEdit/${props.id}`} >
                    <button>
                        <BsPencilSquare color='#fff2b6' size='30px'/>
                    </button>
                </NavLink >
            </div>
        </>
    )
}


export default EmployeeCard;