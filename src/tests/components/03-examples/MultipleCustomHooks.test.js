import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('pruebas en MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        state: 10,
        increment: () => {}
    })

    test('debe mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data: [{
                author:'Diego',
                quote: 'Hello world'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hello world');
        expect(wrapper.find('footer').text().trim()).toBe('Diego');
        console.log(wrapper.html())
    })
    
    
})
