import React from 'react'

export default function UpdateButton({onChange}) {
    return (
        <div>
            <p>Options</p>
            <select onChange={onChange}>
                <option selected>Default</option>
                <option>Outline</option>
                <option>Text</option>
            </select>
        </div>
    )
}
