import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const animals = [
    { name: "Bella", type: "Cow", age: 4 },
    { name: "Max", type: "Dog", age: 3 },
    { name: "Cluckers", type: "Chicken", age: 1 },
    { name: "Nibbles", type: "Goat", age: 2 },
    { name: "Daisy", type: "Duck", age: 1 },
    { name: "Charlie", type: "Horse", age: 5 },
    { name: "Snowball", type: "Pig", age: 2 },
    { name: "Fluffy", type: "Sheep", age: 3 },
    { name: "Hoppy", type: "Rabbit", age: 1 },
    { name: "Rusty", type: "Rooster", age: 2 }
  ]

  const animalElements = animals.map((animal, index) =>
    <div key={index} style={{ padding: "5px" }}>
      <h1>{animal.name}</h1>
      <p>Animal type: {animal.type}</p>
      <p>{"Animal age: " + animal.age}</p>
    </div>
  )

  const averageAge = animals
    .map((animal) => animal.age) // [4, 3, 1, 2, 1....]
    .reduce((currentSumOfAges, currentAge) => currentSumOfAges + currentAge)
    / animals.length

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {animalElements}
        <h1>Average Age</h1>
        <p>{averageAge}</p>
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
