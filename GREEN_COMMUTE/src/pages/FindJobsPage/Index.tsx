import React, { useEffect, useState } from 'react'
import HomeScreenTemplate from '../../components/templates/homeScreen/Index'
import SideNav from '../../components/organisms/SideNavBar/index'
import Header from '../../components/organisms/header/index'
import { Backdrop, Button, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchBar from '../../components/organisms/SearchBar'
import { EXTRA_COLORS } from '../../theme/theme'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import {
  FINDJOBS_HEADING,
  FINJOBS_FILTER,
} from '../../components/utils/constant'
import RecommendedJobsPage from '../RecommendedJobsPage/Index'
import { FilterPopUp } from '../../components/organisms/filter'
import axios from 'axios'
import { url } from '../../dbServer'
import SearchJobsPage from '../SearchJobPage/Index'

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
  displayGird: {
    overflow: 'scroll',
    height: '100vh',
    paddingBottom: '100px',
  },
})

const FindJobsPage: React.FC = () => {
  const [showRecommendedJobs, setShow] = useState(true)

  const [jobs, setJobs] = useState([] as any)

  useEffect(() => {
    axios.get(`${url}Joblist`).then((res) => setJobs(res.data))
  }, [])

  const [distance, setDistance] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  const onFilterApply = (newDistance: []) => {
    setDistance(newDistance)
    applyFilter(newDistance)
  }

  const applyFilter = (distance: string[]) => {
    console.log(distance)
    const tempJobs = jobs.filter((job: { distance: string }) =>
      distance.includes(job.distance)
    )
    console.log(tempJobs)
    setJobs(tempJobs)
  }

  const onClear = async () => {
    await axios.get(`${url}Joblist`).then((res) => setJobs(res.data))
  }

  const [showFilter, setShowFilter] = useState(false)

  const classes = useStyles()
  return (
    <HomeScreenTemplate
      Header={<Header text="Hitech city, Hyderabad, India" />}
      SideMenu={<SideNav />}
      MainContent={
        <Grid container className={classes.root} direction="column">
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <FilterPopUp
              onApply={(newDistance: []) => {
                handleClose()
                setShowFilter(true)
                onFilterApply(newDistance)
              }}
              onClear={() => {
                onClear()
              }}
              onClose={() => {
                setShowFilter(false)
                handleClose()
              }}
            />
          </Backdrop>
          <Grid item className={classes.displayGird}>
            <Typography variant="h3" className={classes.heading}>
              {FINDJOBS_HEADING}
            </Typography>
            <Grid item container>
              <SearchBar placeholder1="Skills" placeholder2="Location" />
              <Button
                startIcon={<FilterAltOutlinedIcon />}
                className={classes.filterButton}
                onClick={handleToggle}
              >
                <Typography variant="body2" className={classes.subHeading}>
                  {FINJOBS_FILTER}
                </Typography>
              </Button>
            </Grid>
            {showRecommendedJobs ? (
              <RecommendedJobsPage
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                jobs={jobs}
                distanceFilter={distance}
                onClearAll={onClear}
                onCardClick={() => setShow(false)}
              />
            ) : (
              <SearchJobsPage
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                jobs={jobs}
                distanceFilter={distance}
                onClearAll={onClear}
              />
            )}
          </Grid>
        </Grid>
      }
    />
  )
}

export default FindJobsPage
