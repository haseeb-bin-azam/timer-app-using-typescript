import React from 'react';

import App from './App';
// import {Timer} from './component/Timer';

import { shallow } from 'enzyme';


describe('App', () => {

  let container;
  beforeEach( () => (container = shallow(<App />)) )

  it('should render <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });


  
  // it('should render a div in timer component', () => {
  //   expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  // });

 

});