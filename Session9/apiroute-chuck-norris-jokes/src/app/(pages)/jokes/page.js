"use client"
import Navbar from "@/app/components/molecules/navbar"
import { useEffect, useState } from "react"

const Jokes = () => {
    const [jokes, setJokes] = useState([])
    const [selectedJoke, setSelectedJoke] = useState(null)

    useEffect(()=>{
        const fetchJokes = async () => {
            const response = await fetch("api/jokes")
            const fetchedJokes = await response.json()
            setJokes(fetchedJokes.jokes)
        }
        fetchJokes()

    }, [])

    const onDoubleClickPressed = async (index) => {
        const data = await fetch("/api/get-joke/"+index)
        const joke = await data.json()
        setSelectedJoke(joke.joke)
    }

    const jokeElements = jokes.map((joke, index) => {        
        return <div key={index} onDoubleClick={() => onDoubleClickPressed(index)}>{joke.text}</div>
    })

    return <div>
        <Navbar />
        <h1>Best Chuck Norris Jokes</h1>
        {jokeElements}
        {selectedJoke ? <div>
            <h1>{selectedJoke.name}: </h1>
            <h2>{selectedJoke.text}</h2>
        </div> : <></>}
    </div>

}

export default Jokes