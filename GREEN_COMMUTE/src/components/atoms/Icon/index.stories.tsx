import { ComponentStory } from '@storybook/react'
import Icons from './index'
import Location from '../../../assets/icons/locc.png'
import Message from '../../../assets/icons/message.svg'
import Notification from '../../../assets/icons/notifications.svg'
import jobs from '../../../assets/icons/jobs.png'
import Train from '../../../assets/icons/metro.svg'

import Scooty from '../../../assets/icons/bike.svg'
import More from '../../../assets/icons/more.svg'
import Swap from '../../../assets/icons/swap.svg'
import Back from '../../../assets/icons/back.svg'
import Current from '../../../assets/icons/current.svg'
import Avatar from '../../../assets/icons/Avatar.svg'
import Save from '../../../assets/icons/save.svg'

import Settings from '../../../assets/icons/settings.svg'
import Contact from '../../../assets/icons/contact.svg'
import Dashboard from '../../../assets/icons/dashboard.svg'
import PracticeTest from '../../../assets/icons/practiceTest.svg'
import Vector from '../../../assets/icons/Vector.svg'
import Cab from '../../../assets/icons/cab.svg'
import Close from '../../../assets/icons/close.svg'
import Rupee from '../../../assets/icons/rupee.svg'
import Bus from '../../../assets/icons/bus.svg'
import Filter from '../../../assets/icons/filter.svg'

export default {
  title: 'Atom/Icons',
  component: Icons,
}

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />

export const LocationIcon = Template.bind({})
LocationIcon.args = {
  source: Location,
}
export const MessageIcon = Template.bind({})
MessageIcon.args = {
  source: Message,
}
export const NotificationIcon = Template.bind({})
NotificationIcon.args = {
  source: Notification,
}
export const JobIcon = Template.bind({})
JobIcon.args = {
  source: jobs,
}
export const TrainIcon = Template.bind({})
TrainIcon.args = {
  source: Train,
}

export const BackIcon = Template.bind({})
BackIcon.args = {
  source: Back,
}
export const ScootyIcon = Template.bind({})
ScootyIcon.args = {
  source: Scooty,
}
export const MoreIcon = Template.bind({})
MoreIcon.args = {
  source: More,
}
export const SwapIcon = Template.bind({})
SwapIcon.args = {
  source: Swap,
}
export const CurrentIcon = Template.bind({})
CurrentIcon.args = {
  source: Current,
}
export const AvatarIcon = Template.bind({})
AvatarIcon.args = {
  source: Avatar,
}
export const SaveIcon = Template.bind({})
SaveIcon.args = {
  source: Save,
}

export const SettingsIcon = Template.bind({})
SettingsIcon.args = {
  source: Settings,
}
export const ContactIcon = Template.bind({})
ContactIcon.args = {
  source: Contact,
}
export const DashboardIcon = Template.bind({})
DashboardIcon.args = {
  source: Dashboard,
}
export const PracticeTestIcon = Template.bind({})
PracticeTestIcon.args = {
  source: PracticeTest,
}
export const VectorIcon = Template.bind({})
VectorIcon.args = {
  source: Vector,
}
export const CabIcon = Template.bind({})
CabIcon.args = {
  source: Cab,
}
export const CloseIcon = Template.bind({})
CloseIcon.args = {
  source: Close,
}
export const RupeeIcon = Template.bind({})
RupeeIcon.args = {
  source: Rupee,
}
export const BusIcon = Template.bind({})
BusIcon.args = {
  source: Bus,
}
export const FilterIcon = Template.bind({})
FilterIcon.args = {
  source: Filter,
}
