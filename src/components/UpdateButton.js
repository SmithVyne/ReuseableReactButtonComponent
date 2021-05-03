import React from 'react'

function UpdateButton({buttonProps, setButtonProps}) {
    const {disabled, disableShadow, variant} = buttonProps;
    const DisInstruction = disabled ? 'Enable' : 'Disable';
    const ShadInstruction = disableShadow ? 'Add' : 'Remove';
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
                <select onChange={({target}) => setButtonProps(props => ({...props, size: target.value})) } >
                    <option value="sm">Small</option>
                    <option selected value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>

            <div>
                {variant === 'default' && <button>{ShadInstruction} Shadow</button>}
                <button>{DisInstruction} Button</button>
            </div>
        </>
    )
}


export default UpdateButton;