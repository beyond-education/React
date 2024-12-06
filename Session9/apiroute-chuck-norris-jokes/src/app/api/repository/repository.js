const jokes = [
    { id: 0, text: "Chuck Norris counted to infinity. Twice.", name: "Emad" }
]

export const getJokes = () => jokes
export const addJoke = (joke) => {
    jokes.push({...joke, id: jokes.length})
}