import "./Header.css"
import "../../assets/logo.png"
import TopMenu from "./TopMenu";
import logo from "../../assets/logo.png";

function Header(){

    return(
        <header>
            <TopMenu/>
            <div className="logo">
                <img src={logo} alt="Reddit Logo"/>
                <h1>Reddit</h1>
            </div>
        </header>
    )
} export default Header