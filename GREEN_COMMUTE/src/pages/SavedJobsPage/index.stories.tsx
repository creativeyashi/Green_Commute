import SavedJobsPage from '.'
import { ComponentStory } from '@storybook/react'
export default {
  title: 'pages/SavedJobsPage',
  component: SavedJobsPage,
}

const Template: ComponentStory<typeof SavedJobsPage> = (args) => (
  <SavedJobsPage {...args} />
)
export const SavedPage = Template.bind({})
