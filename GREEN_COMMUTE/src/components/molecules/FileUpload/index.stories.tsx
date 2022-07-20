import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileUpload from './index'

export default {
  title: 'Molecules/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
)

export const PopUp = Template.bind({})
