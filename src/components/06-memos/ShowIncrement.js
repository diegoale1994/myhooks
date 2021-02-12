import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('regenerated')
    return (
        <div>
            <button className="btn btn-primary" onClick={() => {
                increment(5);
            }}>Incrementar</button>
        </div>
    )
})
