import CustomTabs from "./index";
import { ComponentStory } from "@storybook/react";
import Icon from "../../atoms/Icon";
import bike from "../../../assets/icons/scootyIcon.svg";
import bus from "../../../assets/icons/bus.svg";
import car from "../../../assets/icons/CabNew.svg";
import train from "../../../assets/icons/trainIcon.svg";
import selectedbus from "../../../assets/icons/SelectedBus.svg";
import selectedcar from "../../../assets/icons/selectedCar.svg";
export default {
  title: "molecules/Tabs",
  component: CustomTabs,
};

const Template: ComponentStory<typeof CustomTabs> = (args) => (
  <CustomTabs {...args}></CustomTabs>
);
const stateHandler = () => {};
export const Sample = Template.bind({});

Sample.args = {
  tabs: [
    {
      value: 0,
      label: "",
      icon: <Icon source={bike} />,
      disabled: true
    },
    {
      value: 1,
      label: "",
      icon: <Icon source={bus} />,
      alticon: <Icon source={selectedbus} />
    },
    {
      value: 2,
      label: "",
      icon: <Icon source={car} />,
      alticon: <Icon source={selectedcar} />
    },
    {
      value: 3,
      label: "",
      icon: <Icon source={train} />,
      disabled: true
    },
  ],
  stateHandler: stateHandler,
};
