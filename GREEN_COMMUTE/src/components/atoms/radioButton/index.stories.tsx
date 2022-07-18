import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'

import customTheme from '../../../theme/theme'
import RadioButton from '.'

const RadioButtonComponentStory = {
  title: 'Atom/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <ThemeProvider theme={customTheme}>
    <RadioButton {...args} />
  </ThemeProvider>
)

export const RadioButtonActive = Template.bind({})
RadioButtonActive.args = {
  checked: true,
  value: 'iamselected',
}

export const RadioButtonInactive = Template.bind({})
RadioButtonInactive.args = {
  checked: false,
  value: 'iamnotselected',
}

export default RadioButtonComponentStory
