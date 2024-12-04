import styles from "../../styles/styles.module.css"
import LoginRegisterTitle from "../atoms/login-register-title"
import LabelAndPassword from "../molecules/label-and-password"
import LabelAndText from "../molecules/label-and-text"

const Register = () => {
    return <div className={styles.login}>
        <LoginRegisterTitle />
        <LabelAndText text={"Firstname:  "} />
        <LabelAndText text={"Lastname:  "} />
        <LabelAndText text={"Username:  "} />
        <LabelAndText text={"Email:  "} />
        <LabelAndPassword text={"Password:  "} />
        <LabelAndPassword text={"Password confirm:  "} />
    </div>
}

export default Register