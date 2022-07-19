import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import SuccessImage from '../../../assets/image/Success.png'
import { makeStyles } from '@mui/styles'
import theme, { EXTRA_COLORS } from '../../../theme/theme'

export type UploadSuccessProps = {
  name: string
}
const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    borderRadius: '12px',
  },
  innerDiv: {
    justifyContent: 'center',
    display: 'flex',
    padding: '8px',
  },
  btn: {
    background: `${theme.palette.primary.light}`,
    width: '156px',
  },
  btnTxt: {
    color: `${EXTRA_COLORS.shade[700]}`,
  },
})

const UploadSuccess: React.FC<UploadSuccessProps> = (props) => {
  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)
  const { name } = props
  const classes = useStyles()

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            className={classes.root}
            sx={{ bgcolor: 'background.paper', p: 4 }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}></Grid>
              <Grid item xs={12} className={classes.innerDiv}>
                <img src={SuccessImage} alt="" />
              </Grid>
              <Grid item xs={12} className={classes.innerDiv}>
                <b>Hi {name}!</b>&nbsp; Your Resume is Uploaded Successfully !
              </Grid>
              <Grid item xs={12} className={classes.innerDiv}>
                <Button
                  className={classes.btn}
                  onClick={handleClose}
                  data-testid="okay-btn"
                >
                  <Typography variant="caption" className={classes.btnTxt}>
                    OKAY
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
export default UploadSuccess
