import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        //console.log('hey');
    }, [])

    useEffect(() => {
        //console.log('formStateChange');
    }, [formState])

    useEffect(() => {
        //console.log('emailChange');
    }, [email])

    const handleInputChange = ({ target }) => {
        setformState({ ...formState, [target.name]: target.value });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="formgroup">
                <input type="text" name="name"
                    className="form-control" autoComplete="off"
                    placeholder="tu nombre" value={name}
                    onChange={handleInputChange} />
            </div>
            <br />
            <div className="formgroup">
                <input type="text" name="email"
                    className="form-control" autoComplete="off"
                    placeholder="email@email.com" value={email}
                    onChange={handleInputChange} />
            </div>

            {(name === '123') && <Message />}


        </>
    )
}
