import trafficLightStyles from "../../trafficLight.module.css"

const Light = ({ activeStatus, globalStatus, colorSettings }) => {
    return <div
        className={trafficLightStyles.light}
        style={{
            backgroundColor: globalStatus == activeStatus ?
                colorSettings.active : colorSettings.inactive
        }}>

    </div>
}

export default Light