import { Card, Typography, Box, Grid } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import theme, { EXTRA_COLORS } from "../../../theme/theme";
import React, { MouseEventHandler } from "react";
import Bus from "../../../assets/icons/bus.svg";
import Bike from "../../../assets/icons/scootyIcon.svg";
import Car from "../../../assets/icons/cab.svg";
import Train from "../../../assets/icons/trainIcon.svg";

export type CardProps = {
  id: number;
  companyName: string;
  location: string;
  time: string;
  companyIcon: string;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const JobCard: React.FC<CardProps> = (props) => {
  const { companyName, location, time, companyIcon, title, onClick } = props;

  return (
    <>
      <Card
        sx={{
          backgroundColor: `${EXTRA_COLORS.neutralShade["700"]} !important`,
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-start",
          boxSizing: "border-box",
          height: "159px",
          minWidth: "571px",
          textOverflow: "ellipsis",
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            width: "20%",
            height: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{
              position: "static",
              width: "45px",
              height: "45px",
              marginTop: "30px",
              marginLeft: "30px",
            }}
            src={companyIcon}
            alt={""}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            textOverflow: "ellipsis",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: "21px",
          }}
        >
          <Box
            sx={{
              paddingTop: "2%",
              justifyContent: "center",
              height: "75%",
            }}
          >
            <Typography
              data-testid="title"
              variant="body2"
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                marginTop: "16px",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "12px",
                lineHeight: "16px",
                color: EXTRA_COLORS.accent[200],
              }}
            >
              {" "}
              {companyName}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "12px",
                lineHeight: "16px",
                color: theme.palette.text.secondary,
              }}
            >
              {location}
            </Typography>
          </Box>

          <Grid sx={{ marginBottom: "19" }} container columnGap={4}>
            <Grid item sx={{ height: "18px", width: "15px" }}>
              <img src={Bike} alt="" />
            </Grid>
            <Grid item sx={{ height: "18px", width: "15px" }}>
              <img src={Bus} alt="" />
            </Grid>
            <Grid item sx={{ height: "18px", width: "15px" }}>
              <img src={Car} alt="" />
            </Grid>
            <Grid item sx={{ height: "18px", width: "15px" }}>
              <img src={Train} alt="" />
            </Grid>
          </Grid>
        </Box>

        <Grid container direction="column" sx={{ width: "100%" }}>
          <Grid
            item
            sx={{
              height: "80%",
              marginTop: "27px",
              alignSelf: "end",
              marginRight: "19px",
            }}
          >
            <MoreHorizIcon />
          </Grid>
          <Grid
            item
            sx={{
              marginTop: "60px",
              alignSelf: "end",
              marginRight: "19px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              {time}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default JobCard;
