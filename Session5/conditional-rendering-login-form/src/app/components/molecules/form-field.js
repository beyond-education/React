const { default: Input } = require("../atoms/input")

const FormField = ({text, type}) => {
    return <label>{text} {<Input type={type}/>}</label>
}

export default FormField