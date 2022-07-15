import { render, screen } from "@testing-library/react";
import { Image } from "../illustration/index";
import '@testing-library/jest-dom';
import Work from '../../../assets/image/Work.png';

it('renders illustration', () => {
  render(
    <Image
      source={Work}
    />,
  );

  const img = document.querySelector("img") as HTMLImageElement;
  expect(img).toHaveAttribute('src',Work);
 
});
