import React from 'react'

function UpdateButton({buttonProps, setButtonProps}) {
    const {disabled, disableShadow, variant} = buttonProps;
    const DisInstruction = disabled ? 'Enable' : 'Disable';
    const ShadInstruction = disableShadow ? 'Add' : 'Remove';

    const buttonColors = (boolean) => ({backgroundColor: boolean ? '#455A64' : '#2962FF'});

    return (
        <>
            <div>
                <label>Variants</label>
                <select onChange={({target}) => setButtonProps(props => ({...props, variant: target.value})) } >
                    <option value="default">Default</option>
                    <option value="outline">Outline</option>
                    <option value="text">Text</option>
                </select>

                <label>Sizes</label>
                <select defaultValue="md" onChange={({target}) => setButtonProps(props => ({...props, size: target.value})) } >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            
            <div className="grid-group">
                {variant === 'default' && 
                    <button style={buttonColors(disableShadow)} onClick={() => setButtonProps(props => ({...props, disableShadow: !disableShadow}))} className="disableBtns">
                        {ShadInstruction} Shadow
                    </button>
                }
                <button style={buttonColors(disabled)} onClick={() => setButtonProps(props => ({...props, disabled: !disabled}))} className="disableBtns">{DisInstruction} Button</button>
            </div>
        </>
    )
}


export default UpdateButton;