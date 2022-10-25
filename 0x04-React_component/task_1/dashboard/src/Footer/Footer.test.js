import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

Enzyme.configure({adapter: new Adapter()})


let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('testing component <Footer />', () => {
  it('<Footer /> render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('<Footer /> least render the text “Copyright”', () => {
    
    expect(wrapper.find("div.App-footer p").text()).toContain("Copyright");
})

});