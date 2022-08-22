import NavButton from "./Button/Button.jsx";

const Items = ["Home", "Categories", "Contact"];

const NavBar = () => {
    
    return (<header><ul id="navBar">
                {Items.map(item => <NavButton value={item} />)}
            </ul></header>
            );
}

export default NavBar;