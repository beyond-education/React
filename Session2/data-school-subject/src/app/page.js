import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const subject = {
    title: "English",
    description: "English grammar and vocabulary learning",
    participants: ["Elvis", "Myke Tyson", "Rintintin"],
    popularity: 5
  }  

  // const headline = <h1>{subject.title} ({subject.popularity})</h1>
  const headline = () => <h1>{subject.title} ({subject.popularity})</h1>

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {headline()}
        <p>{subject.description}</p>
        <ul>
          <li>{subject.participants[0]}</li>
          <li>{subject.participants[1]}</li>
          <li>{subject.participants[2]}</li>
        </ul>
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
