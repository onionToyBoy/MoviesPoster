import React from 'react';
import {RadioButton} from './RadioButton';
import {shallow} from 'enzyme';

describe('RadioButton test', () => {
    const onClick = jest.fn();

	test('Should render RadioButton component correct', () => {
        const props= {label:'Test',isSelected: false, fn: onClick}
		const component = shallow(<RadioButton {...props}/>);
        RadioButton
        const fn = component.find({ id: 'RadioButton' }).prop('onClick');
        const label = component.find({ id: 'label' }).prop('children');
        console.log(component.find({ id: 'RadioButton' }).prop('onClick'))

        expect(fn).toBe(props.fn);
        expect(label).toBe(props.label);
		expect(component).toMatchSnapshot();
    });
});