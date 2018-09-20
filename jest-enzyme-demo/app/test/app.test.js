import App from '../app.jsx';
import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';


configure({ adapter: new Adapter() });

describe('<App/>',()=>{
	let wrapper;
	beforeEach(()=>{
		wrapper = shallow(<App/>);
	});
	it('Should render the App sucessfully',()=>{
		expect(wrapper).toHaveLength(1);
	});
	it('Checking the child app existence', () => {        
        const childApp = wrapper.find('ChildComponent');
        expect(childApp).toHaveLength(1);
    });
    it('Checking the App Title', () => {
      const appTitle = wrapper.find('.app-title'),
      title = 'Testing React Components';
      expect(appTitle).toHaveLength(1);
      expect(appTitle.text()).toEqual(title);
    });
});