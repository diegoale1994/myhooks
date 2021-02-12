import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={state} /></h1>
            <hr />
            <button className="btn btn-primary" onClick={increment}>Incrementar</button><br /> <br />
            <button className="btn btn-primary" onClick={() => {
                setShow(!show)
            }}>Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
