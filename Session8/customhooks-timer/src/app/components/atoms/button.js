const Button = ({buttonText, onButtonClicked}) => {
    return <button onClick={onButtonClicked}>{buttonText}</button>
}

export default Button