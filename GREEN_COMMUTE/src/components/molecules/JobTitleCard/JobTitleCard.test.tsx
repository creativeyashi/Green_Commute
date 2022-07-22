import React from "react";
import { render } from "@testing-library/react";
import JobTitleCard from "./JobTitleCard";
import MyntraLogo from "../../../assets/icons/myntra.svg";
import "@testing-library/jest-dom";

describe("JobTitle Card component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <JobTitleCard
        id={1}
        companyLogo={MyntraLogo}
        companyName={"Myntra"}
        jobTitle={"User Experience Designer"}
        companyAddress={"Hitech city, Hyderabad - 500072"}
        jobUploadedTime={"36 min ago"}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
