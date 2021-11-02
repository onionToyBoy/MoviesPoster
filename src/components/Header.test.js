import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header test', () => {
	test('Should render Header component correct', () => {
		const component = shallow(<Header />);
		expect(component).toMatchSnapshot();
	});
});
