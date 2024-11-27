"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: ""
  })

  function handleChange(event) {
    const value = event.target.value
    const key = event.target.name
    setForm(previousForm => {
      return {
        ...previousForm,
        [key]: value
      }
    })
  }

  function handleClick() {
    console.log(JSON.stringify(form))
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact us</h1>
        <div>
          <label>Name: </label>
          <input name="name" type="text" value={form.name} onChange={handleChange} />
          <label>Subject: </label>
          <input name="subject" type="text" value={form.subject} onChange={handleChange} />
          <label>Message: </label>
          <textarea name="message" rows={4} value={form.message} onChange={handleChange} />
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
