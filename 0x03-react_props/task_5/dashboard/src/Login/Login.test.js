import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from "./Login";

Enzyme.configure({adapter: new Adapter()})


let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});
describe("Testing the <Login /> Component", () => {
    it('render without crashing', () => {
      expect(wrapper.exists()).toEqual(true);
    });
  
    it('Verify that the components renders', () => {
        expect(wrapper.find("div.Login label")).toHaveLength(2);
        expect(wrapper.find("div.Login input")).toHaveLength(2);
    })
  
 
});