import { Box, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import CheckBoxComponent from '../../atoms/CheckBox'
import RadioButton from '../../atoms/radioButton'
import { MuiButton } from './button'
import close from "../../../assets/icons/close.svg"
import Icon from "../../atoms/Icon/index"
const MainContainer = styled('div')({
  border:"1px solid green",
  width : 600,
  height: 530
})
const useStyles = makeStyles({
  firstBox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 24,
    gap:65,
    width: 940,
    margin: '0 auto',
    zIndex: 2,
  },
  first: {paddingLeft:10},
  second: {paddingLeft : 60},
  third: {paddingLeft : 90},
  check:{
    display : 'flex',
    flexDirection:'row',
    position: 'relative',
    
  },
  typography : {
    position : 'relative',
    paddingTop : 10,
    FontFamily: "Montserrat",
    FontStyle: "Medium",
    FontSize: "14px",
    color :"#373C38"
  },
  footer:{
    display: 'flex',
    paddingLeft : 350,
    gap:20,
    paddingTop: 20
  },
  iconstyle:{
    paddingBottom : 0,
    float: 'right',
    paddingRight: 10
  }
  
})
export const FilterPopUp = () => {
  const style = useStyles()
  return (
    <MainContainer>
      <div className={style.iconstyle}><Icon source={close}/></div>
      <Box className={style.firstBox}>
        {/* distance */}
              <Box className={style.first}>
                <div className ={style.check}>
                <Typography  >Distance</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>0 - 10 Kms</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>11 - 20 Kms</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>21 - 30 Kms</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>31 - 40 Kms</Typography>
                </div>
              </Box>
          {/* Date posted */}

              <Box >
              <div className ={style.check}>
                <Typography >Date Posted</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>Past 24 hours</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Past week</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Past month</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Anytime</Typography>
                </div>
                </Box>

              {/* Green Commute   */}
              <Box >
              <div className ={style.check}>
                <Typography >Green Commute</Typography>
                </div>
              <div className ={style.check}>
              <RadioButton checked={true} />
              <Typography className={style.typography}>Yes</Typography>
                </div>
                <div className ={style.check}>
              <RadioButton checked={false} />
              <Typography className={style.typography}>Past week</Typography>
                </div>

              </Box>
      </Box>
      
      <Box className={style.firstBox}>
        {/* job type */}
        <Box className={style.first}>
              <div className ={style.check}>
                <Typography >Job Type</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>Full time</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Internship</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Contract</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Remote</Typography>
                </div>
                
        </Box>
      {/* Experience level */}
        <Box >
              <div className ={style.check}>
                <Typography >Experience Level</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>Fresher</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Mid-level</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Director</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={false} />
              <Typography className={style.typography}>Executive</Typography>
                </div>
                
        </Box>
        {/* transport  */}
        <Box >
              <div className ={style.check}>
                <Typography >Transport</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>metro</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>Bus</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>Car pooling</Typography>
                </div>
                <div className ={style.check}>
              <CheckBoxComponent checked={true} />
              <Typography className={style.typography}>Motor Cycle</Typography>
                </div>
               
        </Box>
      </Box>
      <div className={style.footer}>
          <MuiButton 
           variant="outlined"
           children="Clear All"
           style={{
            border:"none",color:"#4ABAAD"
            }}
            />
          <MuiButton  
          variant="contained" 
          children="Apply" 
          style={{
            borderRadius:'8px',color:'white' , backgroundColor:'#30A193'
          }}
          />
      </div>
    </MainContainer>
  )
}
