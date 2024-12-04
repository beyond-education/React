"use client"

const { LoginRegisterContext } = require("@/app/page")
import { useContext } from "react";

const LoginRegisterTitle = () => {
    const context = useContext(LoginRegisterContext)
    return <h1>{context.isLogin? "Login" : "Register"}</h1>
}

export default LoginRegisterTitle