import Typography from '@mui/material/Typography'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeScreenTemplate from './Index'

export default {
  title: 'Templates/HomeScreenTemplate',
  component: HomeScreenTemplate,
} as ComponentMeta<typeof HomeScreenTemplate>

const Template: ComponentStory<typeof HomeScreenTemplate> = (args) => (
  <HomeScreenTemplate {...args} />
)

export const HomeScreen = Template.bind({})
HomeScreen.args = {
  Header: <Typography variant="h6">Header</Typography>,

  SideMenu: <Typography variant="h6">Side Menu</Typography>,
  MainContent: <Typography variant="h6">Main Content</Typography>,
}
