import ButtonComponent from '../buttonComponent.jsx';
import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('<ButtonComponent/>',()=>{
	let wrapper;
	beforeEach(()=>{
		wrapper = shallow(<ButtonComponent/>);
	});

	it('Should render and verify snapshot testing of Button component sucessfully',()=>{
		const tree = renderer.create(<ButtonComponent />).toJSON();
  		expect(tree).toMatchSnapshot();
	});
});