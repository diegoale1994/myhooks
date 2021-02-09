import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';
export const FormWithCustomHook = () => {

    const { values, handleInputChange } = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    useEffect(() => {
        console.log('emailChange')
    }, [email])

    return (
        <form onSubmit={handleSubmit}>
            <h1>CustomHook</h1>
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
            <br />
            <div className="formgroup">
                <input type="password" name="password"
                    className="form-control" placeholder="password"
                    value={password} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}
