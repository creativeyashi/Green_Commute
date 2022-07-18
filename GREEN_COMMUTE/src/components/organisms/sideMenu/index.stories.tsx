import { ComponentStory } from "@storybook/react";
import { SideMenu } from "../sideMenu/index";




export default{
    title : "Organisms/sideMenu",
    component: SideMenu
};


const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />

export const SideNav = Template.bind({})
SideNav.args = {
  
}