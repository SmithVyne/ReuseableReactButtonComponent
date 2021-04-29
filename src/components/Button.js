import {useState, useEffect, useRef} from 'react' 

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
    }
}
  

const Button = ({variant="default", ...attributes}) => {
    console.log(variant)
    const [buttonText, setButtonText] = useState("Default");
    const [buttonStyle, setButtonStyle] = useState({});
    
    const buttonRef = useRef();
    
    useEffect(() => {
        setButtonStyle({...variants['default'], ...variants[variant]})
    }, [variant])

    const handleHover = ({type, target}) => {
        // if(type === 'mouseover') {
        //     target.classList.add(`${variant}_hover`)
        // } else if(type === 'mouseout') {
        //     target.classList.remove(`${variant}_hover`)
        // }
        target.classList.toggle(`${variant}_hover`);
    }
    
    return (
        <button className="" onMouseOver={handleHover} onMouseOut={handleHover} ref={buttonRef} style={buttonStyle} {...attributes} > 
            {buttonText}
        </button>
    )
}


export default Button;