import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { styled } from '@mui/styles'

const CustomStepper = styled(Stepper)({
  '& .MuiStepIcon-root': {
    height: '1.25em',
    width: '1.25em',
  },
  '& .MuiStepIcon-root.Mui-active': {
    color: '#4ABAAD',
  },
  '& .MuiStepIcon-root.Mui-completed': {
    color: '#4ABAAD',
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: '#4ABAAD',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: '#4ABAAD',
  },
  '& .MuiStepConnector-root': {
    display: 'inherit',
  },
})

interface Props {
  active: number
  steps: any[]
  handleNext?: () => void
  handleBack?: () => void
  handleReset?: () => void
  handleFinish?: () => string
}

const StepperComponent: React.FC<Props> = (props) => {
  const { active, steps } = props

  return (
    <Box sx={{ width: '100%' }}>
      <CustomStepper activeStep={active} data-testid="stepper">
        {steps.map((label: any, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: React.ReactNode
          } = {}

          return (
            <Step key={`label${index}`} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </CustomStepper>
    </Box>
  )
}

export default StepperComponent
