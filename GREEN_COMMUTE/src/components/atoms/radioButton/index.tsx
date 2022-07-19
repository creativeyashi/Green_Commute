import * as React from 'react'
import { Radio } from '@mui/material'
import { BpCheckedIcon, BpIcon } from './icon'

interface RadioButtonProps {
  value?: string
  checked?: boolean
}

export default function RadioButton(props: RadioButtonProps) {
  return (
    <div>
      <Radio
        checked={props.checked}
        value={props.value}
        name="radio-button"
        inputProps={{ 'aria-label': 'A' }}
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        data-testid="RadioButton"
      />
    </div>
  )
}
