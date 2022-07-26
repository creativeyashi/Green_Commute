import React from 'react'
import HomeScreenTemplate from '../../components/templates/homeScreen/Index'
import SideNav from '../../components/organisms/SideNavBar/index'
import Header from '../../components/organisms/header/index'
import { Button, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchBar from '../../components/organisms/SearchBar'
import { EXTRA_COLORS } from '../../theme/theme'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import {
  FINDJOBS_HEADING,
  FINJOBS_FILTER,
} from '../../components/utils/constant'

const useStyles = makeStyles({
  root: {
    marginLeft: '50px',
    marginRight: '50px',
  },
  heading: {
    color: EXTRA_COLORS.text.primary,
    marginTop: '36px',
  },
  subHeading: {
    color: EXTRA_COLORS.text.secondary,
  },
  filterButton: {
    marginLeft: '14px',
    borderRadius: '32px',
    width: '137px',
    height: '56px',
    background: '#FFFFFF',
    marginTop: '7px',
    color: '#656E66',
  },
  jobsCard: {
    marginRight: '16px',
    marginBottom: '16px',
  },
})

const FindJobsPage: React.FC = () => {
  const classes = useStyles()
  return (
    <HomeScreenTemplate
      Header={<Header text="Hitech city, Hyderabad, India" />}
      SideMenu={<SideNav />}
      MainContent={
        <Grid container className={classes.root} direction="column">
          <Grid item>
            <Typography variant="h3" className={classes.heading}>
              {FINDJOBS_HEADING}
            </Typography>
            <Grid item container>
              <SearchBar placeholder1="Skills" placeholder2="Location" />
              <Button
                startIcon={<FilterAltOutlinedIcon />}
                className={classes.filterButton}
              >
                <Typography variant="body2" className={classes.subHeading}>
                  {FINJOBS_FILTER}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}

export default FindJobsPage
