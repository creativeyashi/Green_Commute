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
})

const initialState = {
  closest: true,
  nearest: false,
  intermediate: false,
  far: false,
}
export const FilterPopUp = ({ onApply, onClear }: Props) => {
  const [distance, setDistance] = React.useState(initialState)

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
          <div className={style.check}>
            <CheckBoxComponent
              checked={closest}
              onChange={handleChange}
              name="closest"
            />
            <Typography variant="body2" className={style.typography}>
              0 - 10 Kms
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent
              checked={nearest}
              onChange={handleChange}
              name="nearest"
            />
            <Typography variant="body2" className={style.typography}>
              11 - 20 Kms
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent
              checked={intermediate}
              onChange={handleChange}
              name="intermediate"
            />
            <Typography variant="body2" className={style.typography}>
              21 - 30 Kms
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent
              checked={far}
              onChange={handleChange}
              name="far"
            />
            <Typography variant="body2" className={style.typography}>
              31 - 40 Kms
            </Typography>
          </div>
        </Box>

        <Box>
          <div className={style.check}>
            <Typography>Date Posted</Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              Past 24 hours
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Past week
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Past month
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Anytime
            </Typography>
          </div>
        </Box>

        <Box>
          <div className={style.check}>
            <Typography>Green Commute</Typography>
          </div>
          <div className={style.check}>
            <RadioButton checked={true} />
            <Typography variant="body2" className={style.typography}>
              Yes
            </Typography>
          </div>
          <div className={style.check}>
            <RadioButton checked={false} />
            <Typography variant="body2" className={style.typography}>
              Past week
            </Typography>
          </div>
        </Box>
      </Box>

      <Box className={style.firstBox}>
        <Box className={style.first}>
          <div className={style.check}>
            <Typography>Job Type</Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              Full time
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Internship
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Contract
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Remote
            </Typography>
          </div>
        </Box>
        <Box>
          <div className={style.check}>
            <Typography>Experience Level</Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              Fresher
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Mid-level
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Director
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={false} />
            <Typography variant="body2" className={style.typography}>
              Executive
            </Typography>
          </div>
        </Box>

        <Box>
          <div className={style.check}>
            <Typography>Transport</Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              metro
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              Bus
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              Car pooling
            </Typography>
          </div>
          <div className={style.check}>
            <CheckBoxComponent checked={true} />
            <Typography variant="body2" className={style.typography}>
              Motor Cycle
            </Typography>
          </div>
        </Box>
      </Box>
      <div className={style.footer}>
        <Button
          variant="outlined"
          style={{
            border: 'none',
            color: '#4ABAAD',
          }}
          onClick={() => {
            setDistance(initialState)
            onClear()
          }}
        >
          Clear All
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: '8px',
            color: 'white',
            backgroundColor: '#30A193',
          }}
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
