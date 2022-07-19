import { Story } from '@storybook/react'
import React from 'react'
import { MenuButton, MenuButtonProps } from '.'
import save from '../../../assets/icons/save.svg'
import Dashboard from '../../../assets/icons/dashboard.svg'
import FindJob from '../../../assets/icons/jobs.png'
import Practice from '../../../assets/icons/practiceTest.svg'

export default {
  title: 'Molecule/menuButton',
  component: MenuButton,
}

const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />
export const SavedJobs = Template.bind({})
SavedJobs.args = {
  title: 'Saved Jobs',
  variant: 'caption',
  Source: save,
}

export const DashBoard = Template.bind({})
DashBoard.args = {
  title: 'Dashboard',
  variant: 'caption',
  Source: Dashboard,
}

export const FindJobs = Template.bind({})
FindJobs.args = {
  title: 'Find Jobs',
  variant: 'caption',
  Source: FindJob,
}

export const PracticeTest = Template.bind({})
PracticeTest.args = {
  title: 'Practice Tests',
  variant: 'caption',
  Source: Practice,
}
