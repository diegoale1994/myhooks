import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {

    const { state, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div>
            <h3>Memo Hook Counter: <small>{state}</small> </h3>
            <hr />
            {memoProcesoPesado}
            <button className="btn btn-primary" onClick={increment}>Incrementar</button><br /> <br />
            <button className="btn btn-primary" onClick={() => {
                setShow(!show)
            }}>Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
