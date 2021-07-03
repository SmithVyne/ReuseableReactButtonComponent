import React, {ReactElement, useState} from 'react';
import Button, {Props} from './Button';

const icons = ["face", "local_grocery_store", "launch", "delete", "bookmark_border"];

interface  UpdateProps {
    buttonProps: Props;
    setButtonProps:React.Dispatch<React.SetStateAction<Props>>;
}

function UpdateButton({buttonProps, setButtonProps}: UpdateProps):ReactElement {
    const {disabled, disableShadow, variant} = buttonProps;
    const DisInstruction = disabled ? 'Enable' : 'Disable';
    const ShadInstruction = disableShadow ? 'Add' : 'Remove';
    const [showIcons, setShowIcons] = useState(false);

    const buttonColors = (boolean:boolean | undefined):React.CSSProperties => ({backgroundColor: boolean ? '#455A64' : '#2962FF'});
    const variantsAndSizes = ({name, value}: {name: string; value: string}):void => setButtonProps(props => ({...props, [name]: value}))
    const shadowAndDisable = (name:string, boolValue:boolean | undefined):void => setButtonProps(props => ({...props, [name]: !boolValue}));
    const setColor = (color:string = "default"):void => setButtonProps(props => ({...props, color}));
    const setIcon = (type: string, value: string):void => setButtonProps(props => ({...props, [type]: value }));
    const setIconSwitchColor = ():React.CSSProperties => ({color: showIcons ?  '#ffffff' : '#3F3F3F', backgroundColor: showIcons? '#2962FF' : 'transparent'});

    return (
        <>
            <div id="options">
                <label>Variants</label>
                <select name="variant" onChange={({target}) => variantsAndSizes(target) } >
                    <option value="default">Default</option>
                    <option value="outline">Outline</option>
                    <option value="text">Text</option>
                </select>

                <label>Sizes</label>
                <select name="size" defaultValue="md" onChange={({target}) => variantsAndSizes(target) } >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            

            <div className="grid-group">
                {variant === 'default' && 
                    <Button color="primary" {...{
                        style: buttonColors(disableShadow),
                        onClick: () => shadowAndDisable('disableShadow', disableShadow),
                        className:"disableBtns"
                    }} >{ShadInstruction} Shadow</Button>
                }
                <Button color="primary" {...{
                        style: buttonColors(disabled),
                        onClick: () => shadowAndDisable('disabled', disabled),
                        className:"disableBtns"
                    }} >{DisInstruction} Button</Button>
            </div>

            {variant === 'default' && 
            <div id="colorSelection">
                <Button {...{onClick: () => setColor()}} color="default" />
                <Button {...{onClick: () => setColor("primary")}} color="primary" />
                <Button {...{onClick: () => setColor("secondary")}} color="secondary" />
                <Button {...{onClick: () => setColor("danger")}} color="danger" />
            </div>}

            <div className="iconSelection">
                <div className="iconBoxes">
                    <span style={setIconSwitchColor()} onClick={()=>setShowIcons(bool => !bool)} className="icon-label">Left Icon</span>
                    {showIcons && icons.map(icon => 
                        <span key={icon} onClick={() => setIcon("startIcon", icon)} className='material-icons icons-select'>{icon}</span>)}
                </div>

                <div className="iconBoxes">
                    <span style={setIconSwitchColor()} onClick={()=>setShowIcons(bool => !bool)} className="icon-label">Right Icon</span>
                    {showIcons && icons.map(icon => 
                        <span key={icon} onClick={() => setIcon("endIcon", icon)} className='material-icons icons-select'>{icon}</span>)}
                </div>
            </div>
        </>
    )
}


export default UpdateButton;