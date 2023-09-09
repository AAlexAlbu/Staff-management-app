import './TodayCard.css';
import { HiCake, HiSun } from "react-icons/hi";
import { BiSolidArrowFromRight } from "react-icons/bi";
import { unstable_composeClasses } from '@mui/material';
import Birthday from './Birthdays/Birthdays';
import Workversaries from './Workversaries/Workversaries';


const TodayCard = () => {
    
    return (
        <>
        <div className = 'd-flex m-5 today-card flex-column'>
            <h3>Today</h3>
            <ul className='mt-5'>
                <li className = 'd-flex flex-row align-items-center'>
                    <HiCake color = 'orange' size = '30px'/>
                    <Birthday />
                </li>
                <li className = 'd-flex flex-row'>
                    < HiSun color = 'yellow' size = '30px'/>
                    <h4>Employees on holiday</h4>
                </li>
                <li className = 'd-flex flex-row align-items-center'>
                    <HiCake color = 'green' size = '30px'/>
                    <Workversaries />
                </li>
                <li className = 'd-flex flex-row'>
                    <BiSolidArrowFromRight color = 'red' size = '30px'/>
                    <h4>Employees on leave notice</h4>
                </li>
            </ul>
        </div>
        </>
    )
}

export default TodayCard;