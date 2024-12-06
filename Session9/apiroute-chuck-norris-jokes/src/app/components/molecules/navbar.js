import Link from "next/link"

const Navbar = () => {
    return <div style={{ display: "flex", gap: "10px" }}>
        <Link href={"/"}>Home</Link>
        <Link href={"/jokes"}>Jokes</Link>
        <Link href={"/add-joke"}>Add Joke</Link>
    </div>
}

export default Navbar