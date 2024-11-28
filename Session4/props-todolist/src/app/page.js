"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/atoms/title";
import ToDoToAdd from "./components/atoms/textfield";
import { useState } from "react";
import Button from "./components/atoms/button";
import AddToDo from "./components/molecules/addTodo";
import ToDos from "./components/organisms/todos";

export default function Home() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  function handleChange(event) {
    const current = event.target.value
    setText(current)
  }

  function handleClick() {
    setTodos(previous => {
      return [...previous, text]
    })
    setText("")
  }

  function handleChecboxClicked(event) {
    const index = event.target.value
    const parsedIndex = parseInt(index)
    setTodos(previous => {
      return [...previous].filter((_, index) => index !== parsedIndex)
    })
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title title={"Todo"} />
        <AddToDo text={text}
          onTextChange={handleChange}
          onButtonClick={handleClick}
          buttonText={"Add Item"} />
        <ToDos
          todos={todos}
          onHandleCheckboxClicked={handleChecboxClicked} />
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
