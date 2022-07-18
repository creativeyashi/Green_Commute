import { Grid, GridProps, Box, TextField } from "@mui/material";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";
import logo from "../../../assets/icons/Logo 2.svg"
import message from "../../../assets/icons/message.svg";
import notifications from "../../../assets/icons/notifications.svg";
import location from "../../../assets/icons/location 2.svg";
import AvatarComp from "../../atoms/avatar";
export interface HeaderPropsType extends GridProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  style?: any;
  padding?: number | string;
  text?: string;
}

export default ({
  height = "80px",
  width,
  backgroundColor,
  padding,
  text,
}: HeaderPropsType) => {
  return (
    <Grid
      container
      data-testid="topnavbar"
      sx={{
        position: "absolute",
        height: height,
        width: width,
        top: 0,
        right: 0,
        backgroundColor: { backgroundColor },
        justifyContent: "space-between",
        alignItems: "center",
        padding: padding,
      }}
    >
      <Box sx={{ marginLeft: "40px", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            marginRight: "152px",
          }}
        >
          <Icon source={logo} />
          <Box
            sx={{
              fontFamily: "Neucha",
              color: `#ffff`,
              fontSize: "24px",
              lineHeight: "32px",
              marginLeft: "4px",
            }}
          >
            GREEN COMMUTE
          </Box>
        </Box>
        <TextField
          value={text}
          variant="standard"
          inputProps={{
            "data-testid": "location",
          }}
          InputProps={{
            startAdornment: (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "4px",
                  marginRight: "18.25px"
                }}
              >
                <Icon source={location} />
              </Box>
            ),
            disableUnderline: true,
            sx: {
              fontFamily: "Montserrat",
              color: `#FFFFFF`,
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "22px",
              width: "348px",
              borderBottom: "1px solid #ffffff"
            },
          }}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginRight: "40px",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "12%",
        }}
      >
        <Icon source={message} />
        <Icon source={notifications} />
        <AvatarComp />
      </Box>
    </Grid>
  );
};