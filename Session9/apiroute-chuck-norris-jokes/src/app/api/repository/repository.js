// export const jokes = [ //with this line the list is not persistent in the memory, this is why
// a solution would be to define the variable as a global variable, then next has to persist it
global.jokes = global.jokes || [
    { id: 0, text: "Chuck Norris counted to infinity. Twice.", name: "Emad" }
]

export const getJokes = () => jokes
export const addJoke = (joke) => {
    const newJoke = {...joke, id: jokes.length}
    jokes.push(newJoke)
    return newJoke
}