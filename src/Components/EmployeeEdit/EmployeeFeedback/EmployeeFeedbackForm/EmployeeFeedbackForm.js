import './EmployeeFeedbackForm.css'
import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeeFeedbackForm = (props) => {
    const { id } = useParams();
    const [employeeData, setEmployeeData] = useState({});
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [savedFeedback, setSavedFeedback] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setSavedFeedback([...savedFeedback, input]);
        
        axios
        .put(`http://localhost:3000/employee/${id}`, {
            ...employeeData,
            feedback: [...savedFeedback, input]
        })
        .then((res) => {
            setEmployeeData({ ...employeeData, savedFeedback} );
        })
        .catch((error) => {
            console.error("Error updating email:", error);
        });

        setInput('');
        localStorage.clear();
        window.location.reload();
    };
    
    const handleUpdate = (e) => {
        e.preventDefault();
        

    }
    useEffect(() => {
        axios
            .get(`http://localhost:3000/employee/${id}`)
            .then((res) => {
                const employee = res.data;
                setEmployeeData(employee);
                setSavedFeedback(employee.feedback || []);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        }, [id]);
    
        
        if (!employeeData) {
            return <p>Loading...</p>;
        }
    
    return (
        <>
        <form onSubmit={handleSubmit} className='form'>
            {props.edit ? (
                <>
                    <div className='feedback-form'>
                        <textarea type='text' value={input} onChange={handleChange} placeholder='Update your feedback here...' />
                        <button  className='add-button' onClick={handleUpdate}>Update</button>
                    </div>
                </>
            ) : (
                <>
                    <div className='feedback-form'>
                        <textarea type='text' value={input} onChange={handleChange} placeholder='Write your feedback here...' />
                        <button className='add-button' onClick={handleSubmit}>Add</button>
                    </div>
                </>
            )
        }
            
        </form>
        
        </>
    )
}

export default EmployeeFeedbackForm;