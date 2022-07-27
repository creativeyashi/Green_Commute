// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StepperComponent from './index'
import Typography from '@mui/material/Typography'

const steps = [
  <Typography variant="subtitle1">Your Location</Typography>,
  <Typography variant="subtitle2">Job Location</Typography>,
  <Typography variant="subtitle2">Your Skills</Typography>,
]
export default {
  title: 'Molecules/Progress Icons',
  component: StepperComponent,
} as ComponentMeta<typeof StepperComponent>

const Template: ComponentStory<typeof StepperComponent> = (args) => (
  <StepperComponent {...args} />
)

export const Stepper = Template.bind({})
Stepper.args = {
  active: 1,
  steps: steps,
}
