import Button, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
  hoverColor?: string;
  borderRadius?: string;
  focusColor?: string;
}

const ButtonComponent = (props: Props) => {
  const {
    height,
    width,
    disabled,
    hoverColor,
    borderRadius,
    focusColor,
    children,
    ...rest
  } = props;

  return (
    <Button
      data-testid="Button"
      sx={{
        height: height,
        width: width,
        textTransform: "none",
        "&:hover": {
          backgroundColor: hoverColor,
        },
        "&:focus": {
          backgroundColor: focusColor,
        },
        borderRadius: borderRadius,
      }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;