"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function handleName(event) {
    const value = event.target.value
    setName(value)
  }

  function handleSubject(event) {
    const value = event.target.value
    setSubject(value)
  }

  function handleMessage(event) {
    const value = event.target.value
    setMessage(value)
  }

  function handleClick() {
    submit()
    resetForm()
  }

  function submit() {
    console.log(name)
    console.log(subject)
    console.log(message)
  }

  function resetForm() {
    setName("")
    setSubject("")
    setMessage("")
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact us</h1>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleName} />
          <label>Subject: </label>
          <input type="text" value={subject} onChange={handleSubject} />
          <label>Message: </label>
          <textarea rows={4} value={message} onChange={handleMessage} />
          <button onClick={handleClick}>Submit</button>
        </div>
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
