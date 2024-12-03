"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {

  const [joke, setJoke] = useState("")
  const [refreshCounter, setRefreshCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=>{
    const fetchJoke = async () => {
      setIsLoading(true)
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      const data = await response.json()
      setJoke(data.joke)
      setIsLoading(false)
    }
    
    fetchJoke()
  },[refreshCounter])
  
  const handleClick = () => [
    setRefreshCounter(
      previous => ++previous
    )
  ]

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {isLoading? <ClipLoader /> : <h1>{joke}</h1>}
        <button onClick={handleClick}>New Joke</button>
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
