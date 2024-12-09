import { getJokes } from "../repository/repository"

export const GET = (request) => {
    const jokes = getJokes()
    return Response.json({jokes: jokes}, {status: 200})
}
