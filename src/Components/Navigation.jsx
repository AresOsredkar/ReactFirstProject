import NavButton from "./Button/Button.jsx";
import "./Navigation.css";

const Items = ["Home", "Categories", "Contact"];

const NavBar = () => {
    
    return (<ul id="navBar">
                {Items.map(item => <NavButton vrednost={item} />)}
            </ul>
            );
}

export default NavBar;