const { default: TextInput } = require("../atoms/text")

const LabelAndText = ({ text }) => {
    return <label>{text} {<TextInput />}</label>
}

export default LabelAndText