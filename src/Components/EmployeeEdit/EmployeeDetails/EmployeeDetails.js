import './EmployeeDetails.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams  } from 'react-router-dom';

const EmployeeDetails = (props) => {

    const {id} = useParams();
    const [employeeData, setEmployeeData] = useState({});
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:3000/employee/${id}`)
            .then((res) => {
                const employee = res.data;
                console.log(employee)
                setEmployeeData(employee);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [id])

    console.log(employeeData);
   
    if (!employeeData) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <header>
            <h2>{employeeData.name} {employeeData.surname}</h2>
            <h4>{employeeData.location}</h4>
        </header>
        <div className = 'details-container'>
            <div className = 'details-containers'>
                <div className = 'personal-details'>
                    <h2 id = 'detalii-personale'>Detalii personale</h2>
                    <h4>Data nasterii: <input className = 'details-fields' type = 'text' value = {employeeData.birth_date}/> </h4>
                    <h4>Adresa e-mail: <input className = 'details-fields' type = 'text' value = {employeeData.email}/></h4>
                    <h4>Numar telefon: <input className = 'details-fields' type = 'text' value = {employeeData.phone_number}/> </h4>
                </div>
                <div className = 'employment-details'>
                    <h2 id = 'detalii-personale'>Detalii angajare</h2>
                    <h4>Data angajarii: <input className = 'details-fields' type = 'text' value = {employeeData.hiring_date}/> </h4>
                    <h4>Salariu angajare: <input className = 'details-fields' type = 'text' value = {employeeData.salary}/></h4>
                    <h4 className = 'dosar-select'>Dosar la locatie: 
                        <select className="select-options">
                            <option value="Da">Da</option>
                            <option value="Nu">Nu</option>
                        </select>
                    </h4>
                    <h4>Acte angajare: 
                        <div className = 'acte-angajare'>
                            <span>
                                <input type = 'checkbox' name = 'A.M.' className = 'input-check' />
                                <label for = 'A.M.'>A.M.</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'C.I.' className = 'input-check'/>
                                <label for = 'C.I.'>C.I.</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'C.N.' className = 'input-check' />
                                <label for = 'C.N.'>C.N.</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'DIP.' className = 'input-check' />
                                <label for = 'DIP.'>DIP.</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'CV' className = 'input-check' />
                                <label for = 'CV'>CV</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'M.M.' className = 'input-check' />
                                <label for = 'M.M.'>M.M.</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'P.M.' className = 'input-check' />
                                <label for = 'P.M.'>P.M.</label>
                            </span>
                            <span>
                                <input type = 'checkbox' name = 'IG' className = 'input-check' />
                                <label for = 'IG'>IG</label>
                            </span>
                        </div>
                    </h4>
                </div>
            </div>
            <button id = 'save-btn-details'>Save</button>
        </div>
        
        </>
    )
}

export default EmployeeDetails;