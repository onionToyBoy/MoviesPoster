import React from 'react';
import { About } from './About';
import { shallow } from 'enzyme';

describe('About test', () => {
	test('Should render About component correct', () => {
		const component = shallow(<About />);
		expect(component).toMatchSnapshot();
	});
});
