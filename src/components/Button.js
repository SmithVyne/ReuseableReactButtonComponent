import {useState, useEffect} from 'react';

const variants = {
    default: {
        width: '81px',
        height: '36px',
        fontFamily: 'cursive',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '20px',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
        backgroundColor: '#E0E0E0',
        color: '#3F3F3F',
    },
    outline: {
        border: '1px solid #3D5AFE',
        backgroundColor: 'transparent',
        color: "#3D5AFE",
        boxShadow: 'none',
    },
    text: {
        border: "none",
        backgroundColor: 'transparent',
        color: "#3D5AFE",
        boxShadow: 'none',
    },



    hovers : {
        default: {
            backgroundColor: '#AEAEAE',
        },
        rest: {
            backgroundColor: 'rgba(41, 98, 255, 0.1)'
        }
    }
}




  

const Button = ({variant="default", disableShadow, ...attributes}) => {
    const [buttonText, setButtonText] = useState("Default");
    const [buttonStyle, setButtonStyle] = useState({});
    
    useEffect(() => {
        setButtonStyle({...variants['default'], ...variants[variant]})
    }, [variant])

    useEffect(() => {
        const shadow = {boxShadow : disableShadow ? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)'};
        setButtonStyle(style => ({...style, ...shadow}))
    }, [disableShadow])


    const handleHover = ({type}) => {
        if(type === 'mouseover') {
            setButtonStyle(style => ({...style, ...variants['hovers'][variant === 'default' ? 'default' : 'rest']}))
        } else if(type === 'mouseout') {
            setButtonStyle(style => ({...style, ...variants[variant]}))
        }
    }
    
    return (
        <button onMouseOver={handleHover} onMouseOut={handleHover} style={buttonStyle} {...attributes} > 
            {buttonText}
        </button>
    )
}


export default Button;