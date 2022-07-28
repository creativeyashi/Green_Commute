import FindJobsPage from './Index'
import { ComponentStory } from '@storybook/react'
export default {
  title: 'pages/FindJobsPage',
  component: FindJobsPage,
}

const Template: ComponentStory<typeof FindJobsPage> = (args) => (
  <FindJobsPage {...args} />
)
export const FindJobPage = Template.bind({})
