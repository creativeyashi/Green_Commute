import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  Icon  from './index';

import message from "../../../assets/icons/message.svg";
import location from "../../../assets/icons/locc.png";
import notification from "../../../assets/icons/notifications.svg";
import jobs from "../../../assets/icons/jobs.png";
import train from "../../../assets/icons/trainIcon.svg";
import scooty from "../../../assets/icons/scootyIcon.svg";


it('renders Location icon', () => {
  render(
    <Icon
      source={location}
    />,
  );

  const img = document.querySelector("img") as HTMLImageElement;
  expect(img).toHaveAttribute('src',location);
 
});
it('renders job icon', () => {
  render(
    <Icon
      source={jobs}
    />,
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', jobs);

});

it('renders message icon', () => {
  render(
    <Icon
      source={message}
    />,
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', message);
});
it('renders notification icon', () => {
  render(
    <Icon
      source={notification}
    />,

  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', notification);
});

it('renders train icon', () => {
  render(
    <Icon
      source={train}
    />,

  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', train);
  
});

it('renders Scooty icon', () => {
  render(
    <Icon
      source={scooty}
    />,
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', scooty);
});
