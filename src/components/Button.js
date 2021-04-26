
export default ({buttonStyle, buttonText, ...attributes}) => {
    return (
        <button style={buttonStyle} {...attributes} > 
            {buttonText}
        </button>
    )
}