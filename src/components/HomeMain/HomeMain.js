import Footer from "../Footer/Footer"
import HomeMainDown from "../HomeMainDown/HomeMainDown"
import HomeMainUp from "../HomeMainUp/HomeMainUp"
import './homeMain.css'


const HomeMain = () =>{

    return(
        <div className="homeMainContainer">
            <HomeMainUp/>
            <HomeMainDown/>
            <Footer/>
        </div>
    )
}

export default HomeMain