import Button from "../atoms/button";
import ToDoToAdd from "../atoms/textfield";

export default function AddToDo({text, onTextChange, onButtonClick, buttonText}) {
    return <>
    <ToDoToAdd text={text} onTextChange={onTextChange} />
    <Button onButtonClick={onButtonClick} buttonText={buttonText}/>
    </>
}