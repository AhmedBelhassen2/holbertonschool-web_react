import { shallow } from 'enzyme';
import App from './App.js';


it('App render with no crash', () => {
  shallow(<App />);
  expect(shallow(<App />).exists()).toEqual(true);
});
it('App render class App-header', () => {
 shallow(<App />);
  expect(shallow(<App />).find('div.App-header')).toHaveLength(1);
});
it('App render class App-body', () => {
  shallow(<App />);
  expect(shallow(<App />).find('div.App-body')).toHaveLength(1);
});
it('App render class App-footer', () => {
 shallow(<App />);
  expect(shallow(<App />).find('div.App-footer')).toHaveLength(1);
});
