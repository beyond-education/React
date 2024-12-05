"use client"
// import styles from "../../styles/styles.module.css"
import LoginRegisterTitle from "../atoms/login-register-title"
import LabelAndPassword from "../molecules/label-and-password"
import LabelAndText from "../molecules/label-and-text"

import { LoginRegisterContext, StyleContext } from "../../page"
import { useContext } from "react";

export default function Register() {
    const context = useContext(StyleContext)

    return <div className={context.styles.login}>
        <LoginRegisterTitle />
        <LabelAndText text={"Firstname:  "} />
        <LabelAndText text={"Lastname:  "} />
        <LabelAndText text={"Username:  "} />
        <LabelAndText text={"Email:  "} />
        <LabelAndPassword text={"Password:  "} />
        <LabelAndPassword text={"Password confirm:  "} />
    </div>
}