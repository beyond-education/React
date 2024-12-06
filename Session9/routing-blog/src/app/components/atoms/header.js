const Header = ({level, text}) => {
    const Tag = `h${level}`
    return <Tag>{text}</Tag>
}

export default Header