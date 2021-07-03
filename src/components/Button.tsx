import React, {useState, useEffect, ReactElement, ReactNode} from 'react';

interface styles {
    [option: string] : buttonStyles;
}

interface buttonStyles {
    [styleName: string] : string | buttonStyles;
}


const variants:styles = {
    default: {
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
        minWidth: 'max-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
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
        rest: {
            backgroundColor: 'rgba(41, 98, 255, 0.1)',
            cursor: 'pointer'
        }
    }
}

const sizes:styles = {
    sm: {
        width: '73px',
        height: '32px'
    },
    md: {
        width: '81px',
        height: '36px',
    },
    lg: {
        width: '93px',
        height: '42px',
    }
}

const colors:styles = {
    default: {
        color: '#3F3F3F',
        backgroundColor: '#E0E0E0',
    },
    primary: {
        color: '#FFFFFF',
        backgroundColor: '#2962FF'
    },
    secondary: {
        color: '#FFFFFF',
        backgroundColor: '#455A64'
    },
    danger: {
        color: '#FFFFFF',
        backgroundColor: '#D32F2F'
    },

    hovers: {
        default: {
            backgroundColor: '#AEAEAE',
            cursor: 'pointer'
        },
        primary: {
            backgroundColor: '#0039CB',
            cursor: 'pointer'
        },
        secondary: {
            backgroundColor: '#1C313A',
            cursor: 'pointer'
        },
        danger: {
            backgroundColor: '#9A0007',
            cursor: 'pointer'
        },
    }
}

export interface Props {
    variant?: string;
    disabled?: boolean;
    disableShadow?: boolean;
    size?: string;
    color?: string;
    startIcon?: string;
    endIcon?: string;
    children?: ReactNode;
    attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button:React.FC<Props> = ({variant="default", disabled, disableShadow, size='md', color='default', startIcon, endIcon, children, ...attributes}):ReactElement => {
    const [buttonText, setButtonText] = useState<string | ReactNode>("");
    const [buttonStyle, setButtonStyle] = useState<React.CSSProperties | undefined>();
    
    useEffect(() => {
        
        setButtonStyle({
            ...variants['default'],
            ...variants[variant],
            ...sizes[size],
        });
        
        if(variant==='default'){
            // Shadow Effect
            const shadow = {boxShadow : disableShadow ? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)'};
            setButtonStyle(style => ({...style, ...shadow}))

            // Color Effect
            setButtonStyle(style => ({...style, ...colors[color]}));
            setButtonText(`${color[0].toUpperCase() + color.slice(1)}`)
        }

        // Disable effect
        if(disabled) {
            const disable = {color : '#9E9E9E'};
            setButtonStyle(style => ({...style, ...disable}))
            setButtonText("Disabled");
        }

        children && setButtonText(children)
    }, [variant, disableShadow, disabled, color, size, children])


    
    const handleHover = ({type}:{type: string}) => {
        if(type === 'mouseover') {
            if(variant === 'default') {
                setButtonStyle(style => ({...style, ...(colors['hovers'][color] as object) }))
            } else {
                setButtonStyle(style => ({...style, ...(variants['hovers']['rest'] as object)}))
            }
        } else if(type === 'mouseout') {
            if(variant === 'default') {
                setButtonStyle(style => ({...style, ...colors[color]}));
            } else {
                setButtonStyle(style => ({...style, ...variants[variant]}))
            }
        }
    }
    
    return (
        <button disabled={disabled} onMouseOver={handleHover} onMouseOut={handleHover} style={buttonStyle} {...attributes} >
            {startIcon && <span className='material-icons mg-right'>{startIcon}</span>}
            {buttonText}
            { endIcon && <span className='material-icons mg-left'>{endIcon}</span>}
        </button>
    )
}


export default Button;