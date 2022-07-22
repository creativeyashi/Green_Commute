import React from 'react'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CloseIcon from '@mui/icons-material/Close'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
const useStyles = makeStyles({
  outerBox: {
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  root: {
    width: 700,
    height: 400,
    backgroundColor: `${EXTRA_COLORS.shade[700]}`,
    borderRadius: '12px',
    position: 'absolute',
    top: '10%',
    left: '20%',
  },
  title: {
    left: '54px',
    top: 45,
    position: 'relative',
    width: '117px',
    height: '30px',
    fontWeight: 600,
    lineHeight: '30px',
    color: `${theme.palette.text.secondary}`,
  },
  innerBox: {
    width: 592,
    height: 268,
    backgroundColor: `${EXTRA_COLORS.primary[1000]}`,
    borderRadius: '12px',
    border: `2px dashed ${EXTRA_COLORS.primary[400]}`,
    left: 53,
    top: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  btn: {
    '&:hover': {
      backgroundColor: `${EXTRA_COLORS.primary[400]}`,
      color: theme.palette.text.primary,
    },
    borderRadius: '8px',
    width: '281px',
    height: '40px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: `${EXTRA_COLORS.primary[400]}`,
  },
  btnTxt: {
    color: `#fff`,
  },
  input: {
    display: 'none',
  },
  btnClose: {
    float: 'right',
    top: 10,
    backgroundColor: 'transparent',
  },
  icon: {
    color: `${theme.palette.text.secondary}`,
    width: 8,
    height: 8,
  },
})
export type Props = {
  setSelectedFile: (file: File) => void
  setIsFilePicked: (isFilePicked: boolean) => void
}

const FileUpload: React.FC<Props> = (props) => {
  const { setSelectedFile, setIsFilePicked } = props
  const classes = useStyles()
  const hiddenFileInput: React.RefObject<HTMLInputElement> = React.useRef(null)

  const handleClick = () => {
    hiddenFileInput.current && hiddenFileInput.current.click()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileUpload = e.target && e.target.files && e.target.files[0]
    if (fileUpload) {
      setSelectedFile(fileUpload)
      setIsFilePicked(true)
    }
  }
  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)
  return (
    <Box className={classes.outerBox}>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{ outline: 'none' }}>
          <Box className={classes.root}>
            <Button
              className={classes.btnClose}
              variant="text"
              onClick={handleClose}
              disableRipple
              startIcon={<CloseIcon className={classes.icon} />}
            />
            <Typography className={classes.title}>File Upload</Typography>
            <Box className={classes.innerBox}>
              <input
                type="file"
                data-testid="input"
                ref={hiddenFileInput}
                onChange={handleChange}
                className={classes.input}
              />

              <Button
                onClick={handleClick}
                disableFocusRipple
                className={classes.btn}
                data-testid="uploadButton"
              >
                <Typography variant="caption" className={classes.btnTxt}>
                  Click Here to Upload Files
                </Typography>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default FileUpload
