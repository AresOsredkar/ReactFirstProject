import "./Button.css"

const NavButton = ({vrednost, ...props}) => {
    return <li key={vrednost} id={vrednost} className="navElement" onClick={Page()}>{vrednost}</li>;
}

const Page = () => {

    
}

export default NavButton;