import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { Paper, Grid, Box, Stack } from "@mui/material";
import ToLocationIcon from "../../../assets/icons/map-pin.svg";
import FromLocationInsideIcon from "../../../assets/icons/current.svg";
import IconComponent from "../../../components/atoms/Icon/index";
import Swap from "../../../assets/icons/swap.svg";
import { EXTRA_COLORS } from "../../../theme/theme";
import { COMMON_ROUTES } from "../../utils/constant";
import Button from "../../atoms/Button/index";

import { makeStyles } from '@mui/styles'
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({
  default:{
    minHeight: 0, padding: 0
  },
  root: {
    display: "flex",
    marginY: "18px",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "132px",
    width: "359px",
    left: "23px",
    top: "249px",
    backgroundColor: `EXTRA_COLORS.shade["700"]`,
  },
  typography: {

    borderRadius:"16px",
    width:"16px",
    height:"16px",
     backgroundColor: "#D6D6D6",
    marginRight:"8px"
  },
  division:{
    backgroundColor: `EXTRA_COLORS.grey[400]`,
    borderRadius: "50%",
    width: "4px",
    marginTop: "2px",
    height: "4px",
  },
  img:{
    marginBottom: "3.5px",
    width:"8px",
    height:"8px"
  },
  body:{
    color: '#373C38',
    height: "16px",
    fontWeight: 500,
  },
  container:{
    marginLeft:"10px",
    marginTop: "6px",
    marginBottom: "4.75px",
    },
    imglocation:{
     marginTop: "8px", 
     marginBottom: "0",
      width:"13.5px",
      height:"16.5px",
    },
    caption:{
      height: "16px",
      fontWeight: 500,
    }
})

export type CommonRoutesProps = {
  location1: string;
  location2: string;
};

const CommonRotes: React.FC<CommonRoutesProps> = (props) => {
  const { location1, location2 } = props;
  const classes = useStyles()
  return (
    <>
      <Button
        startIcon={<ArrowBackIcon sx={{ color: EXTRA_COLORS.text.primary }} />}
      >
        <Typography
          variant="body1"
          className={classes.body}
        >
          {COMMON_ROUTES}
        </Typography>
      </Button>

      <Paper
        className={classes.root}
      >
        <Grid container sx={{ paddingY: "18px", paddingLeft: "12px" }}>
          <Stack direction={"row"}>
            <Grid item xs={11}>
              <Grid container direction="column">
                <Grid item>
                  <Stack direction={"row"} marginLeft={"4px"}>
                    <Button className={classes.default}>
                      <Box
                        className={classes.typography}
                      >
                        <img
                         className={classes.img}
                          src={FromLocationInsideIcon}
                          alt={FromLocationInsideIcon}
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: `${EXTRA_COLORS.text.primary}`,
                          }}
                          variant="caption"
                        >
                          {location1}
                        </Typography>
                      </Box>
                    </Button>
                  </Stack>
                </Grid>
                <Grid
                  item
                  sx={{
                    width: "100%",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                   className={classes.container}
                  >
                    <Box
                      className={classes.division}
                    ></Box>
                    <Box
                     className={classes.division}
                    ></Box>
                    <Box
                     className={classes.division}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Stack direction={"row"} marginLeft="5.5px">
                    <Button className={classes.default}>
                      <Box marginRight={"8px"}>
                        <img
                         
                         className={classes.imglocation}
                          src={ToLocationIcon}
                          alt={ToLocationIcon}
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: `${EXTRA_COLORS.text.primary}`,
                            height: "16px",
                            fontWeight: 500,
                          }}
                          variant="caption"
                        >
                          {location2}
                        </Typography>
                      </Box>
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} marginLeft={"48px"} marginTop={"24px"}>
              <IconComponent source={Swap} sx={{ color: "#656E66" }} />
            </Grid>
          </Stack>
        </Grid>
      </Paper>
    </>
  );
};

export default CommonRotes;
