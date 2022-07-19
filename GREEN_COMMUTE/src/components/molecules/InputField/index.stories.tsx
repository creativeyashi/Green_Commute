import { Story } from '@storybook/react'
import { InputField, InputFieldProps } from '.'

export default {
  title: 'Molecules/InputField',
  component: InputField,
}

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />

export const Location = Template.bind({})
Location.args = {
  Placeholder: 'Enter your job location',
  style: {
    borderRadius: '8px',
    height: '40px',
    width: '400px',
  },
}

export const Skill = Template.bind({})
Skill.args = {
  Placeholder: 'Enter your skills',
  style: {
    borderRadius: '8px',
    height: '40px',
    width: '400px',
  },
}
