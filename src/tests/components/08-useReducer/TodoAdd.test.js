import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('pruebas en TodoAdd', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('should hacer match', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe llamar addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe llamar la funcion handle add todo', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });

})
