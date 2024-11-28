import LocationInfo from "../molecules/locationInfo";
import WeatherInfo from "../molecules/weatherInfo";
import styles from "../..//page.module.css";

export default function Dashboard() {
    return <div className={styles.page}>
        <LocationInfo />
        <WeatherInfo />
    </div>
}