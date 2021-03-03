import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from "../../fixtures/demoTodos";
describe('pruebas en TodoList', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(<TodoList todos={demoTodos} handleToggle={handleToggle} handleDelete={handleDelete} />);

    test('should crear snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should contener las misma cantidad de sub componente', () => {
        const subComponents = wrapper.find('TodoListItem');
        expect(subComponents.length).toBe(demoTodos.length);
        expect(subComponents.at(0).prop('handleDelete')).toEqual(expect.any(Function))
    })

})
