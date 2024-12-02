"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import TrafficLight from "./components/molecules/traffic-light";
import ImageButton from "./components/molecules/image-button";
import Lights from "./components/molecules/lights";
import { getColorSettingsSize } from "./data/color-settings";

export default function Home() {
  const [status, setStatus] = useState(0)

  const handleUpClick = () => {
    setStatus(previous => previous === 0 ? getColorSettingsSize()-1 : --previous)
  }

  const handleDownClick = () => {

    setStatus(previous => ++previous % getColorSettingsSize())
  }


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TrafficLight children={<Lights status={status} />} />
        <ImageButton onButtonClick={handleUpClick} image={"/arrowUp.png"} />
        <ImageButton onButtonClick={handleDownClick} image={"/arrowDown.png"} />
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
