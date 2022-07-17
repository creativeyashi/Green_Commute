import { ComponentStory, ComponentMeta } from '@storybook/react'
import ListItem from './index'
import ola from '../../../assets/logos/ola.svg'
export default {
  title: 'molecules/TransportListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
)

export const Main = Template.bind({})
Main.args = {
  icon: ola,
  cname: 'Ola',
  price: '45',
}
