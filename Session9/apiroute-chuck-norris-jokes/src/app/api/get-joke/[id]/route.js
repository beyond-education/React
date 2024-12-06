const { getJokes } = require("../../repository/repository")

export const GET = async (request, {params}) => {
    const id = (await params).id
    const convertedId = parseInt(id)
    const jokes = getJokes()
    const joke = jokes.find((joke) => joke.id === convertedId)
    return Response.json({joke: joke}, {status: 200})
}