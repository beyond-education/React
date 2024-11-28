import Temperature from "../atoms/temperature";
import Weather from "../atoms/weather";

export default function WeatherInfo() {
    return <div>
        <Temperature />
        <Weather />
    </div>
}