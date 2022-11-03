import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseListRow from "./CourseListRow";

Enzyme.configure({adapter: new Adapter()})


let wrapper;

beforeEach(() => {
  wrapper = shallow(<CourseListRow />);
});
describe("<CourseListRow />", () => {
 


  
  it("When isHeader is false renders correctly two td elements within a tr element", () => {
    
    expect(wrapper.find("tr")).toHaveLength(1);
    expect(wrapper.find("tr").children("td")).toHaveLength(2);
  });
  it('renders isHeader is True and render with one th', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual("2");
  });

  it('renders isHeader is True and render with two th', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders isHeader is False and with two td', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('td')).toHaveLength(2);
  });

});
