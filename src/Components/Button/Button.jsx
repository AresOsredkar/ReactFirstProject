import "./Button.css"

const NavButton = ({vrednost}) => {
    return <li key={vrednost} id={vrednost} className="navElement">{vrednost}</li>;
}

export default NavButton;