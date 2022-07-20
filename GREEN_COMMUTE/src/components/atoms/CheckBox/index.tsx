import * as React from 'react'
import { Checkbox } from '@mui/material'
import { BpCheckedIcon, BpIcon } from './icon'

interface CheckBoxComponentProps {
  value?: string
  checked?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CheckBoxComponent(props: CheckBoxComponentProps) {
  return (
    <div>
      <Checkbox
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        inputProps={{ 'aria-label': 'A' }}
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        data-testid="CheckBox"
      />
    </div>
  )
}
