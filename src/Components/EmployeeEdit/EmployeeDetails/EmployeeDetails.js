import './EmployeeDetails.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {

    const [employeeData, setEmployeeData] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/employee')
            .then((res) => {
                const employee = res.data;
                setEmployeeData(employee);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [])

    

    if (!employeeData) {
        return <p>Loading...</p>;
    }
    return (
        <>
        <header>
            <h2>{employeeData.name} {employeeData.surname}</h2>
            <h4>{employeeData.location}</h4>
        </header>
        <div className = 'personal-details'>
            <table>
                <tr>
                    <td>

                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default EmployeeDetails;