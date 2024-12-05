const { default: Paragraph } = require("../atoms/paragraph")

const Laps = ({laps}) => {
    const lapsComponents = laps.map((lap, index) => {
        return <Paragraph key={index} text={`${(index+1)}: ${lap}`} />
    })
    return <div>
        {lapsComponents}
    </div>
}

export default Laps