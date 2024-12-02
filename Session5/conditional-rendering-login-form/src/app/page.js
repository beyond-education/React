"use client"

import Image from "next/image";
import styles from "./page.module.css";
import FormField from "./components/molecules/form-field";
import { useState } from "react";
import Button from "./components/atoms/button";
import FormInput from "./components/organisms/form-input";
import Headline from "./components/atoms/headline";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const buttonClick = () => {
    setIsLoggedIn(previous => !previous)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {isLoggedIn ? <Headline headline={"Welcome"} />
          : <FormInput
            headline={"Login Form"}
            userText={"Username:  "}
            passwordText={"Password:  "}
            userType={"text"}
            passwordType={"password"}
          />}
        <Button text={isLoggedIn ? "Logout" : "Login"} onButtonClick={buttonClick} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
