import "./Button.scss"

const Button = ({value}) => {
       return (<button key={value} id={value} className={`button`}>{value}</button>)
}

Button.defaultProps = {
    value: 1,
    buttonType: "primary"
}

export default Button;