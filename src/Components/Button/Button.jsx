import "./Button.scss"

const Button = ({value, buttonType,isNavigation}) => {
       return (<button key={value} id={value} className={`button button-${buttonType}`}>{value}</button>)
}

Button.defaultProps = {
    value: 1,
    buttonType: "primary"
}

export default Button;