// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-children-prop */
import React from "react";

import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../theme/theme";
import moreIcon from "../../../assets/icons/more.svg";
import Icon from "../../atoms/Icon/index";
import Button from "../../atoms/Button/index";

export interface JobTitleProps {
  id: number;
  jobTitle: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  jobUploadedTime: string;
}

const JobTitleCard: React.FC<JobTitleProps> = ({
  id,
  jobTitle,
  companyLogo,
  companyName,
  companyAddress,
  jobUploadedTime,
}: JobTitleProps) => {
  
  const companyAndAddressStyle = {
    fontSize: "12px",
    lineHeight: "16px",
    marginTop: "4px",
    color: theme.palette.text.secondary,
  };

  const titleStyles = {
    fontSize: "16px",
    lineHeight: "30px",
    marginTop: "4px",
  };

  const moreIconStyles = {
    paddingLeft: "55px",
    marginTop: "16px",
  };
  return (
    <div data-testid="jobTitleCard">
      <Stack
        direction={"row"}
        sx={{
          marginTop: "8px",
        }}
      >
        <Box
          sx={{
            maxHeight: "45px",
            maxWidth: "45px",
            height: "100%",
            marginTop: "16px",
            paddingRight: "6%",
          }}
        >
          <img
            style={{
              position: "static",
              width: "45px",
              height: "45px",
              paddingLeft: "20px",
            }}
            src={companyLogo}
            alt={companyLogo}
          />
        </Box>

        {
          <Box
            sx={{
              maxWidth: "70%",
              minWidth: "60%",
              paddingTop: "2%",
              paddingLeft: "94",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={titleStyles}>
             
              User Experience Designer
            </Typography>

            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {" "}
              Myntra
            </Typography>
            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
            Hitech city, Hyderabad - 500072
            </Typography>

            <Typography variant="caption" sx={{ marginTop: "4px" }}>
              36 minutes
            </Typography>
            <Stack direction={"row"}>
              <Box sx={{ marginTop: "20px", marginBottom: "25px" }}>
               <Button children="Save" variant="outlined" style={{background: "#FFFFFF",width: "99px",height: "32px"}} />
              
              </Box>
              <Box minWidth="10px"></Box>
              <Box sx={{ marginTop: "20px", marginBottom: "25px" }}>
                <Button children="Apply" variant="contained" style={{background: "#30A193" ,width: "99px",height: "32px"}} />
              </Box>
            </Stack>
          </Box>
        }
        <Box sx={moreIconStyles}>
          <Icon source={moreIcon} />
        </Box>
      </Stack>
    </div>
  );
};
export default JobTitleCard;