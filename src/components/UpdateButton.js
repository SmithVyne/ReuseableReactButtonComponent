import React from 'react';
import Button from './Button';

function UpdateButton({buttonProps, setButtonProps}) {
    const {disabled, disableShadow, variant} = buttonProps;
    const DisInstruction = disabled ? 'Enable' : 'Disable';
    const ShadInstruction = disableShadow ? 'Add' : 'Remove';

    const buttonColors = (boolean) => ({backgroundColor: boolean ? '#455A64' : '#2962FF'});
    const variantsAndSizes = ({name, value}) => setButtonProps(props => ({...props, [name]: value}))
    const shadowAndDisable = (name, boolValue) => setButtonProps(props => ({...props, [name]: !boolValue}));

    return (
        <>
            <div>
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
                    <button style={buttonColors(disableShadow)} onClick={() => shadowAndDisable('disableShadow', disableShadow)} className="disableBtns">
                        {ShadInstruction} Shadow
                    </button>
                }
                <button style={buttonColors(disabled)} onClick={() => shadowAndDisable('disabled', disabled)} className="disableBtns">{DisInstruction} Button</button>
            </div>

            <div>
                <Button />
                <Button color="primary" />
                <Button color="secondary" />
                <Button color="danger" />
            </div>
        </>
    )
}


export default UpdateButton;