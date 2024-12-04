const { default: PasswordInput } = require("../atoms/password")

const LabelAndPassword = ({text}) => {
    return <label>{text} {<PasswordInput />}</label>
}

export default LabelAndPassword