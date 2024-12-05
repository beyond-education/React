"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/atoms/header";
import Button from "./components/atoms/button";
import Laps from "./components/molecules/laps";
import useTimer from "./hooks/timer";

export default function Home() {
  const {
    timer,
    laps,
    handleStartClicked,
    handleStopClicked,
    handleAddLapClicked
  } = useTimer()

  return (
    <div className={styles.page}>    
      <main className={styles.main}>
        <Header text={"Timer"} level={"1"} />
        <Header text={timer} level={"2"} />
        <Button onButtonClicked={handleStartClicked} buttonText={"Start"} />
        <Button onButtonClicked={handleStopClicked} buttonText={"Stop"} />
        <Button onButtonClicked={handleAddLapClicked} buttonText={"Add Lap"} />        
        <Laps laps={laps} />
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
