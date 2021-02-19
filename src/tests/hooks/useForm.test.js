import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react';
import { useForm } from '../../hooks/useForm';
describe('pruebas en useForm', () => {
    const initialForm = {
        name: "Diego",
        email: "diegoale18@outlook.es"
    }

    test('debe regresar un formaulario por default', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toBe(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    })

    test('debe de cambiar el valor del formulario name ?', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({ target: { name: "name", value: "alejandro" } });
        })
        const [values] = result.current;
        expect(values).toStrictEqual({
            name: "alejandro",
            email: "diegoale18@outlook.es"
        });
    })

    test('debe reestablecer el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({ target: { name: "name", value: "alejandro" } });
            reset();
        })
        expect(values).toStrictEqual(initialForm);
    })

})
