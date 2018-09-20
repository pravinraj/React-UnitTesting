import ChildComponent from '../childComponent.jsx';
import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';


configure({ adapter: new Adapter() });


describe('<ChildComponent/>',()=>{
	let wrapper;
	beforeEach(()=>{
		wrapper = shallow(<ChildComponent/>);
	});

	it('Should render the Child component sucessfully',()=>{
		let wrapper = shallow(<ChildComponent childData={'Child Data Component'}/>);
		expect(wrapper).toHaveLength(1);
	});
});