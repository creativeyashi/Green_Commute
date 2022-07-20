import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import JobCard from './index'
import Logo from '../../../assets/icons/hp.svg'

export default {
  title: 'Molecules/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>

const Template: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />

export const Main = Template.bind({})
Main.args = {
  companyIcon: Logo,
  companyName: 'HP',
  id: 1,
  location: 'Hyderabad,Telangana,India',
  time: '1hr ago',
  title: 'UX Designer',
}
