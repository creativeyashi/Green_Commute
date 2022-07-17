import Box from "@mui/material/Box";
import theme from "../../../theme/index";
import Icon from "../../atoms/Icon";
import Typography from "@mui/material/Typography";
import rupee from "../../../assets/icons/rupee.svg";
type ListItemProps = {
  icon: any;
  cname: string;
  price: string;
};

const TransportListItem = (props: ListItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "359px",
        minHeight: "60px",
        backgroundColor: `${theme.palette.structural.main}`,
      }}
      data-testid="listitem"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          height: "44px",
        }}
      >
        <Icon source={props.icon} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "4px 0px",
              color: `${theme.palette.textColor.highEmphasis}`,
            }}
          >
            <Typography variant="caption1">{props.cname}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "4px 0px",
            }}
          >
            <Typography
              variant="caption2"
              sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
            >
              Approximately
            </Typography>
            <Box
              sx={{ margin: "0px 8px", display: "flex", alignItems: "center" }}
            >
              <Icon source={rupee} />
              <Typography
                variant="caption2"
                sx={{
                  color: `${theme.palette.textColor.highEmphasis}`,
                }}
              >
                {props.price}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="caption1"
        sx={{
          color: `${theme.palette.primary.primary400}`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Book Now
      </Typography>
    </Box>
  );
};

export default TransportListItem;