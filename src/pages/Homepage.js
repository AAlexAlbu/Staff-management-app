import TodayCard from "../Components/TodayCard/TodayCard";
import MiddleMenu from "../Components/MiddleMenu/MiddleMenu";
import EmployeeCards from "../Components/EmployeeCards/EmployeeCards";
import Quotes from "../Components/Quotes/DisplayQuotes";

const Homepage = () => {
    return (
        <div>
            <Quotes />
            <TodayCard />
            <MiddleMenu />
            <EmployeeCards />   
        </div>
    )
}

export default Homepage;