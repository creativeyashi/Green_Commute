import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import JobCard from './index';
import Myntra from '../../../assets/icons/myntra.svg';
const mockCallback = jest.fn();
describe('Job Card Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <JobCard
        id={1}
        companyIcon={Myntra}
        companyName="Myntra"
        title="User Experience Designer"
        location="Hitech city, Hyderabad - 500072"
        time="45 days ago"
        onClick={mockCallback}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
