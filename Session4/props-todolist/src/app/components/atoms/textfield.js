export default function ToDoToAdd({text, onTextChange}) {
    return <input type="text" value={text} onChange={onTextChange}/>
}