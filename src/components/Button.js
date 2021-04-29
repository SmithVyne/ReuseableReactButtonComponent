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
        color: '#3F3F3F'
    },
    outline: {
        border: '1px solid #3D5AFE',
        backgroundColor: 'transparent',
        color: "#3D5AFE"
    },
    text: {
        border: "none",
        backgroundColor: 'transparent',
        color: "#3D5AFE"
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

  

const Button = ({variant="default", ...attributes}) => {
    // console.log(variant)
    const [buttonText, setButtonText] = useState("Default");
    const [buttonStyle, setButtonStyle] = useState({});
    
    useEffect(() => {
        setButtonStyle({...variants['default'], ...variants[variant]})
    }, [variant])

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