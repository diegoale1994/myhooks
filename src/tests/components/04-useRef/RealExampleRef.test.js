import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import React from 'react';

describe('pruebas en RealExampleRef', () => {
    test('debe hacer match snapshot', () => {
        const wrapper = shallow(<RealExampleRef />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    
    test('debe hacer match snapshot', () => {
        const wrapper = shallow(<RealExampleRef />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
})
