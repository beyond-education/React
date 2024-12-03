"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Header from "./components/atoms/header";
import categories from "./data/categories";

export default function Home() {
  const [error, setError] = useState(false)
  const [category, setCategory] = useState("Programming")
  const [joke, setJoke] = useState("")

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        const data = await response.json()
        setJoke(data.joke)
      } catch (exception) {
        setError(true)
      }
    }
    fetchJoke()
  }, [category])

  const options = categories.map((category, index) => {
    return <option key={index} value={category}>{category}</option>
  })

  const handleChange = (event) => {
    const value = event.target.value
    setCategory(value)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {error && <Header text={"An error occured"} />}
        {!error && <Header text={joke} />}
        <select value={category} onChange={handleChange}>
          {options}
        </select>
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
