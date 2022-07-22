import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import GreenRoutes from './GreenRoutes'
import { GREEN_ROUTES } from '../../utils/constant'
export default {
  title: 'Molecules/DescriptionCard',
  component: GreenRoutes,
} as ComponentMeta<typeof GreenRoutes>

const Template: ComponentStory<typeof GreenRoutes> = (args) => (
  <GreenRoutes {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  aboutTheCompany: `${GREEN_ROUTES.ABOUT_THE_COMPANY}`,
  jobDescription: `${GREEN_ROUTES.JOB_DESCRIPTION}`,
}
