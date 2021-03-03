import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en TodoListItem', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} handleToggle={handleToggle} handleDelete={handleDelete} i={0} />)

    test('should crearse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should llamar la funcion borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    });

    test('should llamar la funcion toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
    });

    test('should mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`1. ${demoTodos[0].desc}`)
    });

    test('should tener la clase complete', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoListItem todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} i={0} />);
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
})
