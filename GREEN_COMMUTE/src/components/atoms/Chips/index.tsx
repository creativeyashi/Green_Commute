import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MuiChip from '@mui/material/Chip'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import theme, { EXTRA_COLORS } from '../../../theme/theme'

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
    background: `${EXTRA_COLORS.shade[400]}`,
  },
  label: {
    color: `${theme.palette.text.primary}`,
  },
})

const Chip: React.FC<MuiChipProp> = (props) => {
  const { label, onDelete, onClick, variant, size } = props
  const classes = useStyles()
  return (
    <MuiChip
      className={classes.root}
      data-testid="MuiChip"
      label={
        <Typography variant="caption2" className={classes.label}>
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
export default Chip
