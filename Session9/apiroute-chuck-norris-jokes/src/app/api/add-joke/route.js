import { addJoke, getJokes } from "../repository/repository"

export const POST = async (request) => {
    const {joke} = await request.json()
    addJoke(joke)    
    const jokes = getJokes()
    return Response.json({joke: jokes[jokes.length-1]}, {status: 200})
}