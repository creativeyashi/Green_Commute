import AvatarComp from "./index";
import {ComponentStory, ComponentMeta} from '@storybook/react';
export default {
    title: "Atoms/Avatar",
    component: AvatarComp,
  }as ComponentMeta<typeof AvatarComp>;
  
  const ButtonTemplate:ComponentStory<typeof AvatarComp> = (args:any) => (
    <AvatarComp {...args}>{args.children}</AvatarComp>
  );
  
  export const primaryAvatar = ButtonTemplate.bind({});
  primaryAvatar.args = {
      
  };