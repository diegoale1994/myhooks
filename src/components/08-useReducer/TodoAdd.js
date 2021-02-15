import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Aprender ..." autoComplete="off" name="description" className="form-control" onChange={handleInputChange} value={description} />
                <button type="submit" className="btn btn-primary mt-1 btn-block">Agregar</button>
            </form>
        </>
    )
}
