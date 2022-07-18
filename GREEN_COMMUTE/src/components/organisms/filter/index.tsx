import { Box, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'

const MainContainer = styled('div')({})
const useStyles = makeStyles({
  firstBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 150,
    position: 'relative',
    top: 30,
    paddingBottom: 24,
    width: 940,
    margin: '0 auto',
    zIndex: 2,
  },
  secondBox: {},
  thirdBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 150,
    position: 'relative',
    top: 30,
    paddingBottom: 24,
    width: 940,
    margin: '0 auto',
    zIndex: 2,
  },
  fourthBox: {},
})
export const FilterPopUp = () => {
  const style = useStyles()
  return (
    <MainContainer>
      <Box className={style.firstBox}>
        <Typography>Distance</Typography>
        <Typography>Date Posted</Typography>
        <Typography>Green Commute</Typography>
      </Box>
      <Box className={style.secondBox}></Box>
      <Box className={style.thirdBox}>
        <Typography>Job Type</Typography>
        <Typography>Experience Level</Typography>
        <Typography>Transport</Typography>
      </Box>
      <Box className={style.fourthBox}></Box>
    </MainContainer>
  )
}
