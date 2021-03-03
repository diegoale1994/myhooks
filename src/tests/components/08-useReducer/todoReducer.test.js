import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en todoReducer', () => {
    test('debe retornar el estado por default', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    })

    test('debe crear un Todo', () => {
        const action = { type: 'add', payload: { id: 1, desc: 'Aprender Angular', done: false } }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
    })

    test('debe borrar un todo', () => {
        const action = { type: 'delete', payload: 1 }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
    })

    test('debe hacer toggle', () => {
        const action = { type: 'toggle', payload: 1 }
        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
    })

})
