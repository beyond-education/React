"use client"

import { useContext } from "react";
import { LoginRegisterContext } from "../../page"


const LoginRegisterTitle = () => {
    const context = useContext(LoginRegisterContext)
    return <h1>{context.isLogin? "Login" : "Register"}</h1>
}

export default LoginRegisterTitle