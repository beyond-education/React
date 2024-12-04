import { useContext } from "react"
import styles from "../../styles/styles.module.css"
import { LoginRegisterContext } from "@/app/page"

const Switch = () => {
    const context = useContext(LoginRegisterContext)

    return <label className={styles.switch}>
        <input type="checkbox" checked={!context.isLogin} onChange={context.handleChange} />
        <span className={`${styles.slider} ${styles.round}`} ></span>
    </label>
}

export default Switch