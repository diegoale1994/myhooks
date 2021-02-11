import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input className="form-control" placeholder="su nombre" ref={inputRef} />
            <br />
            <button className="btn btn-primary" onClick={handleClick}>Focus</button>
        </div>
    )
}
