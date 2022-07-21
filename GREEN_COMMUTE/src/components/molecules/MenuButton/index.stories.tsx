import React from 'react'
import DashboardIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import FindJobsIcon from '@mui/icons-material/WorkOutlineOutlined'
import SavedJobsIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { DASHBOARD, FIND_JOBS, SAVED_JOBS } from '../../utils/constant'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuButton from './index'
export default {
  title: 'Organisms/MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
)

export const Dashboard = Template.bind({})
Dashboard.args = {
  icon: <DashboardIcon className="hoveredIcon" />,
  label: DASHBOARD,
}
export const FindJobs = Template.bind({})
FindJobs.args = {
  icon: <FindJobsIcon className="hoveredIcon" />,
  label: FIND_JOBS,
}
export const SavedJobs = Template.bind({})
SavedJobs.args = {
  icon: <SavedJobsIcon className="hoveredIcon" />,
  label: SAVED_JOBS,
}
