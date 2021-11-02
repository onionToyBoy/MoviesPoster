import React from 'react';
import {Spinner} from './Spinner';
import {shallow} from 'enzyme';

describe('Spinner test', () => {

	test('Should render Spinner component correct', () => {
		const component = shallow(<Spinner/>);
		expect(component).toMatchSnapshot();
    });
});