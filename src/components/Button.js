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
      },
    outline: {
        border: '1px solid #3D5AFE'
    },
    text: {
        border: "none",
        backgroundColor: "white"
    }
}
  

const Button = ({variant="default", ...attributes}) => {
    const [buttonText, setButtonText] = useState("Default");
    const [buttonStyle, setButtonStyle] = useState(variants['default']);
    const buttonRef = useRef();
    
    useEffect(() => {
        setButtonStyle( state =>({...state, ...variants[variant]}))
        if (variant === 'default') {
            buttonRef.current.classList.remove("text-blue");
        }
        else {
            buttonRef.current.classList.add("text-blue");
        }
    }, [variant])

    const handleHover = ({type, target}) => {
        if(type === 'mouseover') {
            target.classList.add(`${variant}_hover`)
        } else if(type === 'mouseout') {
            target.classList.remove(`${variant}_hover`)
        }
    }
    
    return (
        <button className="" ref={buttonRef} onMouseOver={handleHover} onMouseOut={handleHover} style={buttonStyle}  {...attributes} > 
            {buttonText}
        </button>
    )
}


export default Button;