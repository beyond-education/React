import Header from "@/app/components/atoms/header"
import Navbar from "@/app/components/molecules/navbar"
import getPosts from "@/app/repository/repository"
import React from "react"

//const Post = async ({ params }) => {
const Post = ({ params }) => {
    //const { id } = (await params).id
    const { id } = React.use(params)
    const posts = getPosts()

    const post = posts.find((post) => post.id === id)

    return post ? 
        <div>
            <Navbar />
            <Header level={"1"} text={post.title} />
            <p>{post.content}</p>
        </div>
     : <p>Loading...</p>
}

export default Post