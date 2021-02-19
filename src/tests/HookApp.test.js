import { shallow } from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';
describe('testing basic', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
