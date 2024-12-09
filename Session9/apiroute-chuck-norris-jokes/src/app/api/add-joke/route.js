import { addJoke, getJokes } from "../repository/repository"

export const POST = async (request) => {
    const {joke} = await request.json()
    const newJoke = addJoke(joke)    
    const jokes = getJokes()
    return Response.json({joke: newJoke}, {status: 200})
}