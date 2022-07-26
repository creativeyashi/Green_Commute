import { makeStyles } from '@mui/styles'
import React from 'react'

interface Props {
  source: string
}

const useStyles = makeStyles({
  root: {
    color: '#656E66',
  },
})

const Icon: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { source } = props
  return <img src={source} alt="try" className={classes.root}></img>
}

export default Icon
