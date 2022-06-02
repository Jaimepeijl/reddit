import {NavLink} from "react-router-dom";
import "./TopMenu.css"

function TopMenu(){
    return(
        <nav className="nav">
            <ul className="nav-inner">
                <li>
                    <NavLink to="/" exact activeClassName="active-link">
                        <h3>Hottest Posts</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/">
                        <h3>Reddit</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/subreddit/memes" activeClassName="active-link">
                        <h3>Memes</h3>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default TopMenu