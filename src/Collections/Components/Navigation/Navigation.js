import NavButton from "./Button/Button.js";
import "./Navigation.css";

const Items = ["Home", "Categories", "Contact"];

const NavBar = () => {
    
    return (<><ul id="navBar">
                {Items.map(item => <NavButton vrednost={item} />)}
                <div></div>
            </ul>
            </>);
}

export default NavBar;