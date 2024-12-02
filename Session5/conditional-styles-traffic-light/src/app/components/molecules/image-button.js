const { default: Image } = require("next/image")

const ImageButton = ({onButtonClick, image}) => {
    return <button onClick={onButtonClick}>
        <img src={image} />
    </button>
}

export default ImageButton