const { useState, useEffect } = require("react")

const useTimer = () => {
    const [timer, setTimer] = useState(0)
    const [laps, setLaps] = useState([])
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval
        if (isRunning) interval = setInterval(() => setTimer(previous => ++previous), 1000)
        return () => clearInterval(interval)
    }, [isRunning])

    const handleStartClicked = () => setIsRunning(true)
    const handleStopClicked = () => setIsRunning(false)
    const handleAddLapClicked = () => {
        setLaps(previous => {
            return [...previous, timer]
        })
        setTimer(0)
    }

    return {timer, laps, handleStartClicked, handleStopClicked, handleAddLapClicked}
}

export default useTimer