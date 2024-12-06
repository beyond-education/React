import Link from "next/link"

const BlogLinks = ({posts}) => {
    const postLinks = posts.map((post, index) => {
        return <Link key={index} href={`/posts/${post.id}`}>{post.title}</Link>
    })
    return postLinks
}

export default BlogLinks