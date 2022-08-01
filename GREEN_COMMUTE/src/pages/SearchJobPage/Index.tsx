import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { EXTRA_COLORS } from '../../theme/theme'
import SaveJobCard from '../../components/molecules/SaveJobCard/index'
import JobTitleCard from '../../components/molecules/JobTitleCard/JobTitleCard'
import DescriptionCard from '../../components/molecules/GreenRoutes/GreenRoutes'
import Chips from '../../components/atoms/Chips/index'
import Button from '../../components/atoms/Button/index'
import { url } from '../../dbServer'
import axios from 'axios'
import ViewGreenCommutes from '../../components/organisms/ViewGreenCommutes/index'

interface Job {
  id: number
  title: string
  logo: string
  companyName: string
  companyIcon: string
  location: string
  time: string
  description: string
  aboutTheCompany: string
}

const buttonStyle = {
  display: 'inline-block',
  padding: '0px 0px 10px 0px',
  textTransform: 'none',
  borderBottom: '1px solid #30A193',
  fontFamily: 'Montserrat',
  color: '#30A193',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '2px',
  marginTop: '13px',
  marginLeft: '13px',
}

const useStyles = makeStyles({
  jobsCard: {
    marginRight: '16px',
    marginBottom: '16px',
  },
  heading: {
    color: EXTRA_COLORS.text.primary,
    marginTop: '36px',
  },
  subHeading: {
    color: EXTRA_COLORS.text.secondary,
  },
  chipsGrid: {
    marginTop: '11px',
  },
  chips: {
    marginRight: '8px',
  },
  displayGrid: {
    marginTop: '28px',
  },
  descriptionGrid: {
    background: '#FFFFFF',
    width: '404px',
    height: '740px',
  },
  divider: {
    margin: 'auto',
    border: '0.1px solid #D6D6D6',
    width: '360px',
  },
})
const heading = 'Job list'
const subHeading = 'Based on your search'
const chipsData = ['Past 24 hrs', 'Full time', 'Fresher']

const Index = (props: {
  showFilter: boolean
  setShowFilter: (arg0: boolean) => void
  jobs: Job[]
  distanceFilter: string[]
  onClearAll: () => void
}) => {
  const classes = useStyles()

  const [jobDetail, setJobDetail] = useState(props.jobs[0])
  console.log(jobDetail)

  const [showDescription, setshowDescription] = useState(true)
  const [select, setSelect] = useState(0)

  const handleClick = async (jobid: number) => {
    console.log(jobid)
    setSelect(jobid)

    await axios
      .get(`${url}Joblist/${jobid}`)
      .then((res) => setJobDetail(res.data))
  }
  useEffect(() => {
    handleClick(props.jobs[0].id)
  }, [props.jobs])

  return (
    <Grid>
      <Typography variant="h3" className={classes.heading}>
        {heading}
      </Typography>
      <Typography variant="body2" className={classes.subHeading}>
        {subHeading}
      </Typography>
      {props.showFilter && (
        <>
          <Grid container direction="row" className={classes.chipsGrid}>
            {props.distanceFilter.map((distance, index) => {
              return (
                <Box className={classes.chips} key={index}>
                  <Chips
                    label={distance}
                    variant="outlined"
                    onClick={() => console.log()}
                    onDelete={() => console.log()}
                    size="medium"
                  />
                </Box>
              )
            })}
            {chipsData.map((data, index) => {
              return (
                <Box key={index} className={classes.chips}>
                  <Chips
                    label={data}
                    variant="outlined"
                    onClick={() => console.log()}
                    onDelete={() => console.log()}
                    size="medium"
                  />
                </Box>
              )
            })}
            <Box>
              <Button
                style={buttonStyle}
                onClick={() => {
                  props.setShowFilter(false)
                  props.onClearAll()
                }}
              >
                Clear All
              </Button>
            </Box>
          </Grid>
          <Grid container direction="row" className={classes.chipsGrid}>
            <Box className={classes.chips}>
              <Chips
                label="Green Commute Routes"
                variant="outlined"
                onClick={() => console.log()}
                onDelete={() => console.log()}
                size="medium"
              />
            </Box>
          </Grid>
        </>
      )}
      <Grid container direction="row" className={classes.displayGrid}>
        <Grid item rowSpacing={1} columnSpacing={1}>
          {props.jobs.map((job: Job, index: React.Key | null | undefined) => {
            return (
              <Grid key={index} className={classes.jobsCard}>
                <SaveJobCard
                  id={job.id}
                  companyName={job.companyName}
                  location={job.location}
                  timeElapsed={job.time}
                  logo={job.companyIcon}
                  title={job.title}
                  //select={select === index ? true : false}
                  //style = {select && {{border: '2px solid #77EDDF'}}}
                  style={
                    select === job.id ? { border: '2px solid #77EDDF' } : null
                  }
                  onClick={handleClick}
                />
              </Grid>
            )
          })}
        </Grid>
        <Grid className={classes.descriptionGrid}>
          <JobTitleCard
            key={jobDetail.id}
            id={jobDetail.id}
            jobTitle={jobDetail.title}
            companyLogo={jobDetail.companyIcon}
            companyName={jobDetail.companyName}
            companyAddress={jobDetail.location}
            jobUploadedTime={jobDetail.time}
          />
          <Box className={classes.divider} />
          {showDescription ? (
            <DescriptionCard
              jobDescription={jobDetail.description}
              aboutTheCompany={jobDetail.aboutTheCompany}
              onClickHandler={() => {
                setshowDescription(false)
              }}
            />
          ) : (
            <ViewGreenCommutes
              source="E Marredpally, Hyderabad"
              destination={jobDetail.location}
              onClick={() => setshowDescription(true)}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
