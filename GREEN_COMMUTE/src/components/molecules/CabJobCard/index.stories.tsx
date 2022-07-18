import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobCard from './index';
import { JobDetail } from '../../utils/storybookConstant';
export default {
  title: 'Molecules/CabJobCard',
  component: JobCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=98%3A3631',
    },
  },
} as ComponentMeta<typeof JobCard>;

const onClick = () => {};
const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const Card = Template.bind({});

Card.args = {
  ...JobDetail,
  onClick: onClick
};
