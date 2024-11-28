import Checkbox from "../atoms/checkbox"
import ToDo from "../molecules/todo"

export default function ToDos({ todos, onHandleCheckboxClicked }) {
    const listItems = todos.map((todo, index) => {
        const checkbox = <Checkbox
            index={index}
            onHandleCheckboxClicked={onHandleCheckboxClicked} />
        return <ToDo key={index} todo={todo} checkbox={checkbox} />
    })

    return <div
        style={{
            display: "flex",
            justifyContent: "center",        
            flexDirection: "column",
            width: "100%"
        }}>
        {listItems}
    </div>
}