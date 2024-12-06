import { getJokes } from "../repository/repository"

export const GET = async (request) => {
    return Response.json({jokes: getJokes()}, {status: 200})
}
