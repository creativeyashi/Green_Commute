import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Location1, Location2 } from "../../utils/storybookConstant";
import CommonRotes from "./index";

export default {
  title: "Molecules/PickLocation",
  component: CommonRotes,
} as ComponentMeta<typeof CommonRotes>;

const Template: ComponentStory<typeof CommonRotes> = (args) => (
  <CommonRotes {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  location1: Location1,
  location2: Location2,
};
