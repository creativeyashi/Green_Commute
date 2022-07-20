import TopNavbar from ".";
import { ComponentStory } from "@storybook/react";
import theme from "../../../theme/theme";
export default {
  title: "organisms/Header",
  component: TopNavbar,
};

const Template: ComponentStory<typeof TopNavbar> = (args) => (
  <TopNavbar {...args}></TopNavbar>
);
export const topNavBar = Template.bind({});

topNavBar.args = {
    backgroundColor: `${theme.palette.primary.main}`,
    text: "East Marredpally, Secunderabad"
}
