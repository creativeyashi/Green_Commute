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
import Button from "./iconButton";

export type CommonRoutesProps = {
  location1: string;
  location2: string;
};

const CommonRotes: React.FC<CommonRoutesProps> = (props) => {
  const { location1, location2 } = props;
  return (
    <>
      <Button
        startIcon={<ArrowBackIcon sx={{ color: EXTRA_COLORS.text.primary }} />}
      >
        <Typography
          variant="body1"
          sx={{
            color: `${EXTRA_COLORS.text.primary}`,
            height: "16px",
            fontWeight: 500,
          }}
        >
          {COMMON_ROUTES}
        </Typography>
      </Button>

      <Paper
        sx={{
          display: "flex",
          marginY: "18px",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "102px",
          width: "359px",
          left: "23px",
          top: "249px",
          backgroundColor: EXTRA_COLORS.neutralShade["700"],
        }}
      >
        <Grid container sx={{ paddingY: "18px", paddingLeft: "12px" }}>
          <Stack direction={"row"}>
            <Grid item xs={11}>
              <Grid container direction="column">
                <Grid item>
                  <Stack direction={"row"} marginLeft={"4px"}>
                    <Button sx={{ minHeight: 0, padding: 0 }}>
                      <Box
                        borderRadius={"16px"}
                        width={"16px"}
                        height={"16px"}
                        sx={{ backgroundColor: "#D6D6D6" }}
                        marginRight={"8px"}
                      >
                        <img
                          style={{ marginBottom: "4.5px" }}
                          src={FromLocationInsideIcon}
                          width="8px"
                          height={"8px"}
                          alt={FromLocationInsideIcon}
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
                    marginLeft={"10px"}
                    sx={{
                      marginTop: "6px",
                      marginBottom: "4.75px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: `${EXTRA_COLORS.grey[400]}`,
                        borderRadius: "50%",
                        width: "4px",
                        marginTop: "2px",
                        height: "4px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        backgroundColor: `${EXTRA_COLORS.grey[400]}`,
                        borderRadius: "50%",
                        width: "4px",
                        marginTop: "2px",
                        height: "4px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        backgroundColor: `${EXTRA_COLORS.grey[400]}`,
                        borderRadius: "50%",
                        width: "4px",
                        marginTop: "2px",
                        height: "4px",
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Stack direction={"row"} marginLeft="5.5px">
                    <Button sx={{ minHeight: 0, padding: 0 }}>
                      <Box marginRight={"8px"}>
                        <img
                          style={{ marginTop: "8px", marginBottom: "0" }}
                          src={ToLocationIcon}
                          width="13.5px"
                          height={"16.5px"}
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
