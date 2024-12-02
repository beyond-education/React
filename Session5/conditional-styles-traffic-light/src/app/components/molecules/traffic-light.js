import trafficLightStyles from "../../trafficLight.module.css"

const TrafficLight = ({children}) => {
return <div className={trafficLightStyles.trafficLight}>
    {children}
</div>
}

export default TrafficLight