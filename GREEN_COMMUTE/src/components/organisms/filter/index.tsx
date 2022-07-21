import * as React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CheckBoxComponent from '../../atoms/CheckBox'
import RadioButton from '../../atoms/radioButton'
import theme from '../../../theme/theme'
import close from '../../../assets/icons/close.svg'
import Icon from '../../atoms/Icon/index'

interface Props {
  onApply: (selectedFilters: any) => void
  onClear: () => void
}

interface Distance {
  closest: boolean
  nearest: boolean
  intermediate: boolean
  far: boolean
}

const initialState = {
  closest: true,
  nearest: false,
  intermediate: false,
  far: false,
}

const distanceData = [
  {
    name: 'closest',
    label: '0 - 10 Kms',
    value: true,
  },
  {
    name: 'nearest',
    label: '10 - 20 Kms',
    value: false,
  },
  {
    name: 'intermediate',
    label: '21 - 30 Kms',
    value: false,
  },
  {
    name: 'far',
    label: '31 - 40 Kms',
    value: false,
  },
]
const datePosted = [
  {
    name: 'Past 24 hours',
    checked: true,
  },
  {
    name: 'Past week',
    checked: false,
  },
  {
    name: 'Past month',
    checked: false,
  },
  {
    name: 'Anytime',
    checked: false,
  },
]
const greenCommute = [
  {
    name: 'Yes',
    checked: true,
  },
  {
    name: 'Past week',
    checked: false,
  },
]
const jobType = [
  {
    name: 'Full time',
    checked: true,
  },
  {
    name: 'Internship',
    checked: false,
  },
  {
    name: 'Contract',
    checked: false,
  },
  {
    name: 'Remote',
    checked: false,
  },
]
const experienceLevel = [
  {
    name: 'Fresher',
    checked: true,
  },
  {
    name: 'Mid-level',
    checked: false,
  },
  {
    name: 'Director',
    checked: false,
  },
  {
    name: 'Executive',
    checked: false,
  },
]
const transport = [
  {
    name: 'Metro',
    checked: true,
  },
  {
    name: 'Bus',
    checked: true,
  },
  {
    name: 'Car pooling',
    checked: true,
  },
  {
    name: 'Motor Cycle',
    checked: true,
  },
]

const useStyles = makeStyles({
  MainContainer: {
    border: '1px solid green',
    width: 600,
    height: 530,
    margin: 'auto',
    borderRadius: '8px',
  },
  firstBox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 24,
    gap: 65,
    width: 940,
    marginLeft: '10px',
    zIndex: 2,
  },
  first: { paddingLeft: 10 },
  second: { paddingLeft: 60 },
  third: { paddingLeft: 90 },
  check: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  typography: {
    position: 'relative',
    paddingTop: 10,
    color: `${theme.palette.text.secondary}`,
  },
  footer: {
    display: 'flex',
    paddingLeft: 350,
    gap: 20,
    paddingTop: 20,
  },
  iconstyle: {
    paddingBottom: 0,
    float: 'right',
    paddingRight: 10,
  },
  clearButton: {
    border: 'none',
    color: '#4ABAAD',
  },
  applyButton: {
    borderRadius: '8px',
    color: 'white',
    backgroundColor: '#30A193',
  },
})

export const FilterPopUp = ({ onApply, onClear }: Props) => {
  const [distance, setDistance] = React.useState<Distance>(initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistance({
      ...distance,
      [event.target.name]: event.target.checked,
    })
  }

  const { closest, nearest, intermediate, far } = distance

  const style = useStyles()
  return (
    <Grid className={style.MainContainer}>
      <div className={style.iconstyle}>
        <Icon source={close} />
      </div>

      <Box className={style.firstBox}>
        <Box className={style.first}>
          <div className={style.check}>
            <Typography variant="body1">Distance</Typography>
          </div>
          {distanceData.map((element, index) => {
            switch (element.name) {
              case 'closest':
                element.value = closest
                break
              case 'nearest':
                element.value = nearest
                break
              case 'intermediate':
                element.value = intermediate
                break
              case 'far':
                element.value = far
            }
            return (
              <div className={style.check} key={index}>
                <CheckBoxComponent
                  checked={element.value}
                  onChange={handleChange}
                  name={element.name}
                />
                <Typography variant="body2" className={style.typography}>
                  {element.label}
                </Typography>
              </div>
            )
          })}
        </Box>
        <Box>
          <div className={style.check}>
            <Typography>Date Posted</Typography>
          </div>
          {datePosted.map((element, index) => {
            return (
              <div className={style.check} key={index}>
                <CheckBoxComponent checked={element.checked} />
                <Typography variant="body2" className={style.typography}>
                  {element.name}
                </Typography>
              </div>
            )
          })}
        </Box>
        <Box>
          <div className={style.check}>
            <Typography>Green Commute</Typography>
          </div>
          {greenCommute.map((element, index) => {
            return (
              <div className={style.check} key={index}>
                <RadioButton checked={element.checked} />
                <Typography variant="body2" className={style.typography}>
                  {element.name}
                </Typography>
              </div>
            )
          })}
        </Box>
      </Box>

      <Box className={style.firstBox}>
        <Box className={style.first}>
          <div className={style.check}>
            <Typography>Job Type</Typography>
          </div>
          {jobType.map((element, index) => {
            return (
              <div className={style.check} key={index}>
                <CheckBoxComponent checked={element.checked} />
                <Typography variant="body2" className={style.typography}>
                  {element.name}
                </Typography>
              </div>
            )
          })}
        </Box>
        <Box>
          <div className={style.check}>
            <Typography>Experience Level</Typography>
          </div>
          {experienceLevel.map((element, index) => {
            return (
              <div className={style.check} key={index}>
                <CheckBoxComponent checked={element.checked} />
                <Typography variant="body2" className={style.typography}>
                  {element.name}
                </Typography>
              </div>
            )
          })}
        </Box>

        <Box>
          <div className={style.check}>
            <Typography>Transport</Typography>
          </div>
          {transport.map((element, index) => {
            return (
              <div className={style.check} key={index}>
                <CheckBoxComponent checked={element.checked} />
                <Typography variant="body2" className={style.typography}>
                  {element.name}
                </Typography>
              </div>
            )
          })}
        </Box>
      </Box>
      <div className={style.footer}>
        <Button
          variant="outlined"
          className={style.clearButton}
          onClick={() => {
            setDistance(initialState)
            onClear()
          }}
        >
          Clear All
        </Button>
        <Button
          variant="contained"
          className={style.applyButton}
          onClick={() => {
            onApply(distance)
          }}
        >
          Apply
        </Button>
      </div>
    </Grid>
  )
}
