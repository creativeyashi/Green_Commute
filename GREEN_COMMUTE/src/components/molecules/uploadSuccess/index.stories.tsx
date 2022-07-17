import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileUploadSuccess from './index'
export default {
  title: 'molecules/FileUploadSuccess',
  component: FileUploadSuccess,
} as ComponentMeta<typeof FileUploadSuccess>

const Template: ComponentStory<typeof FileUploadSuccess> = (args) => (
  <FileUploadSuccess {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'Sohail',
}
