const { default: PasswordInput } = require("../atoms/password")
const { default: LabelAndPassword } = require("../molecules/label-and-password")
const { default: LabelAndText } = require("../molecules/label-and-text")
import { LoginRegisterContext } from "@/app/page"
import styles from "../../styles/styles.module.css"
import LoginRegisterTitle from "../atoms/login-register-title"

const Login = () => {
    return <div className={styles.login}>
        <LoginRegisterTitle />
        <LabelAndText text={"Username:  "} />
        <LabelAndPassword text={"Password:  "} />
    </div>
}

export default Login