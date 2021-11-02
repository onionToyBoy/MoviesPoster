import React from 'react';
import { RadioButton } from './RadioButton';
import { shallow } from 'enzyme';

describe('RadioButton test', () => {
	const onClick = jest.fn();

	test('Props in RadioButton component should be correct', () => {
		const props = { label: 'Test', isSelected: false, fn: onClick };
		const component = shallow(<RadioButton {...props} />);

		const fn = component.find({ id: 'RadioButton' }).prop('onClick');
		const label = component.find({ id: 'label' }).prop('children');

		expect(fn).toBe(props.fn);
		expect(label).toBe(props.label);
		expect(component).toMatchSnapshot();
	});

	test('Should call fn on user click', () => {
		const props = { label: 'Test', isSelected: false, fn: onClick };
		const component = shallow(<RadioButton {...props} />);

		const button = component.find({ id: 'RadioButton' });
		button.simulate('click');

		expect(onClick).toHaveBeenCalledWith();
	});
});
