import React, {useState} from 'react';
import Button from './Button';

const icons = ["face", "local_grocery_store", "launch", "delete", "bookmark_border"];

function UpdateButton({buttonProps, setButtonProps}) {
    const {disabled, disableShadow, variant} = buttonProps;
    const DisInstruction = disabled ? 'Enable' : 'Disable';
    const ShadInstruction = disableShadow ? 'Add' : 'Remove';
    const [showIcons, setShowIcons] = useState(false);

    const buttonColors = (boolean) => ({backgroundColor: boolean ? '#455A64' : '#2962FF'});
    const variantsAndSizes = ({name, value}) => setButtonProps(props => ({...props, [name]: value}))
    const shadowAndDisable = (name, boolValue) => setButtonProps(props => ({...props, [name]: !boolValue}));
    const setColor = (color = "default") => setButtonProps(props => ({...props, color}));
    const setIcon = (type, value) => setButtonProps(props => ({...props, [type]: value }));
    const setIconSwitchColor = () => ({color: showIcons ?  '#ffffff' : '#3F3F3F', backgroundColor: showIcons? '#2962FF' : 'transparent'});

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
                    <Button color="primary" style={buttonColors(disableShadow)} onClick={() => shadowAndDisable('disableShadow', disableShadow)} className="disableBtns">
                        {ShadInstruction} Shadow
                    </Button>
                }
                <Button color="primary" style={buttonColors(disabled)} onClick={() => shadowAndDisable('disabled', disabled)} className="disableBtns">{DisInstruction} Button</Button>
            </div>

            {variant === 'default' && 
            <div id="colorSelection">
                <Button onClick={() => setColor()} />
                <Button onClick={() => setColor("primary")} color="primary" />
                <Button onClick={() => setColor("secondary")} color="secondary" />
                <Button onClick={() => setColor("danger")} color="danger" />
            </div>}

            <div className="iconSelection">
                <div className="iconBoxes">
                    <span style={setIconSwitchColor()} onClick={()=>setShowIcons(bool => !bool)} className="icon-label">Left Icon</span>
                    {showIcons && icons.map(icon => 
                        <span key={icon} onClick={({target}) => setIcon("startIcon", target.textContent)} className='material-icons icons-select'>{icon}</span>)}
                </div>

                <div className="iconBoxes">
                    <span style={setIconSwitchColor()} onClick={()=>setShowIcons(bool => !bool)} className="icon-label">Right Icon</span>
                    {showIcons && icons.map(icon => 
                        <span key={icon} onClick={({target}) => setIcon("endIcon", target.textContent)} className='material-icons icons-select'>{icon}</span>)}
                </div>
            </div>
        </>
    )
}


export default UpdateButton;