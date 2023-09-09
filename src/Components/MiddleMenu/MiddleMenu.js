import './MiddleMenu.css';
import FilterEmployees from './Filter/FilterEmployees';
import ShowAll from './ShowAll/ShowAll';
import AddNew from './AddNew/AddNew';


const MiddleMenu = () => {
    return (
        <>
        <div className = 'middle-menu-container'>
            <div className = 'left-buttons'>
                <FilterEmployees />
                <ShowAll />
            </div>
            <div className = 'right-buttons'>
                <AddNew />
            </div>
        </div>
        </>
    )
}

export default MiddleMenu;