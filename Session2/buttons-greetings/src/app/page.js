"use client"

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  function sayHello() {
    console.log("Hello Programmers")
  }

  const say = (whatToSay) => {
    console.log(whatToSay)
  }

  function tellButtonValue(event) {
    const value = event.target.value
    console.log(value)
  }

  function tellButtonValueAsParameter(text, event) {
    const value = event.target.value
    console.log(value + text)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={sayHello}>Say Hello</button>
        <button onClick={() => {
          say("Hi")
        }}>Say</button>
        <button value={"React"} onClick={tellButtonValue}>Tell Value</button>
        <button value={"React"} onClick={(event)=>{
          tellButtonValueAsParameter(" is fantastic", event)
        }}>Tell Value</button>
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
