import React from 'react';
import { render } from '@testing-library/react';
import CommonRotes from './index';
describe('Common Routes Card Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <CommonRotes location1={'location1 '} location2={'location 2'} />
    );

    expect(wrapper).toBeTruthy;
  });
});
