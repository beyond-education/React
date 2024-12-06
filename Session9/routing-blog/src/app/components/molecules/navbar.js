import getPosts from "@/app/repository/repository"

const { default: Link } = require("next/link")

const Navbar = () => {
    const posts = getPosts()
    const postLinks = posts.map((post, index) => {
        return <Link key={index} href={`/posts/${post.id}`}>{post.title}</Link>
    })
    return <div style={{display: "flex", gap: "10px"}}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About us</Link>
        {postLinks}
    </div>
}

export default Navbar