import Headline from "../atoms/headline"
import FormField from "../molecules/form-field"

const FormInput = (props) => {
    return <>
        <Headline headline={props.headline} />
        <FormField
            text={props.userText}
            type={props.userType}
        />
        <FormField
            text={props.passwordText}
            type={props.passwordType}
        />
    </>
}

export default FormInput