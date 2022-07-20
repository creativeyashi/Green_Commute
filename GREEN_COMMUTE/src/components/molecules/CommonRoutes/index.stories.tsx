import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Location1, Location2 } from "../../utils/storybookConstant";
import CommonRoutes from "./index";

export default {
  title: "Molecules/PickLocation",
  component: CommonRoutes,
} as ComponentMeta<typeof CommonRoutes>;

const Template: ComponentStory<typeof CommonRoutes> = (args) => (
  <CommonRoutes {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  location1: Location1,
  location2: Location2,
};
