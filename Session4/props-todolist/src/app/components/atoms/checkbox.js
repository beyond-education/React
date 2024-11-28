export default function Checkbox({index, onHandleCheckboxClicked}) {
    return <input type="checkbox" value={index} onChange={onHandleCheckboxClicked} checked={false} />
}