import React, { useEffect, useState } from 'react'
import { Backdrop, Button, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchBar from '../SearchBar/index'
import { EXTRA_COLORS } from '../../../theme/theme'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import { FINDJOBS_HEADING, FINJOBS_FILTER } from '../../utils/constant'
import RecommendedJobsPage from '../RecommendedJobsPage/Index'
import { FilterPopUp } from '../filter'
import { getJobs, getLocations, getSkills } from '../../../services/services'
import SearchJobsPage from '../SearchJobPageMainContent/Index'

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
function MainContent() {
  const [showRecommendedJobs, setShow] = useState(true)
  const [skills, setSkills] = useState<string[] | null>([])
  const [locations, setLocations] = useState<string[] | null>([])
  const [jobs, setJobs] = useState([] as any)

  let tempJobs: any[] = []

  const fetchSkillsLocations = async () => {
    let data = await getSkills()
    data = data.map((skill: { name: any }) => {
      return skill.name
    })
    setSkills(data)
    data = await getLocations()
    data = data.map((location: { name: any }) => {
      return location.name
    })
    setLocations(data)
  }
  const fetchData = async () => {
    const data = await getJobs()
    setJobs(data)

    return data
  }
  const filter = async (location: string | null, skill: string | null) => {
    let result = await fetchData()
    if (location && skill) {
      result = result.filter(
        (job: any) =>
          job.title.toLowerCase().includes(skill.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
      )
    } else if (location) {
      result = result.filter((job: any) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      )
    } else if (skill) {
      result = result.filter((job: any) =>
        job.title.toLowerCase().includes(skill.toLowerCase())
      )
    }
    setJobs(result)
  }

  useEffect(() => {
    fetchData()
    fetchSkillsLocations()
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
    if (distance.length === 0) {
      setJobs(jobs)
      return
    }
    tempJobs = jobs.filter((job: { distance: string }) =>
      distance.includes(job.distance)
    )
    if (tempJobs.length === 0) {
      tempJobs = jobs.filter((job: { distance: string }) =>
        distance.includes(job.distance)
      )
    }
    console.log(tempJobs)
    setJobs(tempJobs)
  }

  const onClear = async () => {
    const data = await getJobs()
    setJobs(data)
  }

  const [showFilter, setShowFilter] = useState(false)

  const classes = useStyles()

  return (
    <>
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
            <SearchBar
              options1={skills}
              options2={locations}
              onChange={filter}
            />
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
    </>
  )
}

export default MainContent
