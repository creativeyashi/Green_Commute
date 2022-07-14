import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Chip from '@mui/material/Chip'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

export type MuiChipProp = {
  onClick?: () => void
  onDelete?: () => void
  variant?: 'filled' | 'outlined'
  className?: string
  size?: 'medium' | 'small'
  label: string
}
const useStyles = makeStyles({
  root: {
    borderRadius: '8px',
    background: '#E8FFFC',
  },
})

const Chips: React.FC<MuiChipProp> = (props) => {
  const { label = 'UI/UX Designer', onDelete, onClick, variant, size } = props
  const classes = useStyles()
  return (
    <Chip
      className={classes.root}
      data-testid="MuiChip"
      label={
        <Typography variant="caption2" color="#373C38">
          {label}
        </Typography>
      }
      variant={variant}
      onClick={onClick}
      deleteIcon={<CloseIcon />}
      onDelete={onDelete}
      size={size}
    />
  )
}
export default Chips
