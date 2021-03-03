import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en TodoApp', () => {

    const wrapper = shallow(<TodoApp />)

    Storage.prototype.setItem = jest.fn(() => {})

    test('should mostrarse correctamente', () => {
        expect(shallow).toMatchSnapshot();
    });

    test('should agregar un todo', () => {
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })

    test('should eliminar un todo', () => {
        expect(wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])).toBe(1);
    })
    

})
