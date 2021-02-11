import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
import './layout.css'
import { useCounter } from '../../hooks/useCounter'
export const Layout = () => {

    const { state, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { author, quote } = !!data && data[0];

    const [box, setBox] = useState({})

    const refP = useRef()

    useLayoutEffect(() => {
        setBox(refP.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout EFFECT</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p ref={refP} className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <pre>
                {JSON.stringify(box, null, 3)}
            </pre>

            {!loading && (
                <button className="btn btn-primary" onClick={increment}>Next phrase</button>
            )}
            <br />
            <br />
            <br />
        </div>
    )
}
