import AvatarComp from "./index";
import {ComponentStory, ComponentMeta} from '@storybook/react';
export default {
    title: "Atom/Avatar",
    component: AvatarComp,
  }as ComponentMeta<typeof AvatarComp>;
  
  const AvatarTemplate:ComponentStory<typeof AvatarComp> = (args:any) => (
    <AvatarComp {...args}>{args.children}</AvatarComp>
  );
  
  export const primaryAvatar = AvatarTemplate.bind({});
  primaryAvatar.args = {
      
  };