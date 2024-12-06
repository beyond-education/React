"use client"

const { default: Navbar } = require("@/app/components/molecules/navbar")
const { useState } = require("react")

const AddJoke = () => {
    const [joke, setJoke] = useState({
        name: "",
        text: ""
    })

    const handleChange = (event) => {
        const value = event.target.value
        const key = event.target.name
        setJoke(previous => {
            return {
                ...previous,
                [key] : value
            }
        })
    }

    const handleClick = async () => {
        if(!joke.text || !joke.name) return
        await fetch("api/add-joke", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({joke: joke})
        })
        setJoke({name: "", text: ""})
    }

    return <div>
        <Navbar />
        <label>Name:   {<input type="text" value={joke.name} name="name" onChange={handleChange}/>}</label>
        <label>Joke:   {<input type="text" value={joke.text} name="text" onChange={handleChange}/>}</label>
        <button onClick={handleClick}>Save</button> 
    </div>    
}

export default AddJoke