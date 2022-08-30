import HomeMainDown from "../HomeMainDown/HomeMainDown"
import HomeMainUp from "../HomeMainUp/HomeMainUp"
import './homeMain.css'


const HomeMain = () =>{

    return(
        <div className="homeMainContainer">
            <HomeMainUp/>
            <HomeMainDown/>
        </div>
    )
}

export default HomeMain