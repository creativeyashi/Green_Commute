import { ComponentStory, ComponentMeta } from "@storybook/react";
import AutoComplete from "./index";

const stateOptions = [
  { id:"1", name: "Hyderabad" , "aqi_value": 894},
  { id:"2", name: "Mumbai","aqi_value": 953 },
];

export default {
  title: "Molecules/AutoComplete",
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
);

export const Location = Template.bind({});
Location.args = {
  title: "Where do you want to work?",
  placeholder: "Enter your Job Location",
  option: stateOptions,
  setValue: () => {},
};
