import colorSettings from "../../data/color-settings";
import Light from "../atoms/light";
const Lights = ({status}) => {
    const lights = colorSettings.map((setting, index) => {
        return <Light
            key={index}
            activeStatus={index}
            globalStatus={status}
            colorSettings={setting}
        />
    })
    return <>
        {lights}
    </>
}

export default Lights