import * as React from "react";
import { Checkbox } from "@mui/material";
import { BpCheckedIcon, BpIcon } from "./icon";

interface CheckBoxComponentProps {
  value?: string;
  checked?: boolean;
}


export default function CheckBoxComponent(props: CheckBoxComponentProps) {
  return (
    <div>
      <Checkbox
        checked={props.checked}
        value={props.value}
        name="radio-button"
        inputProps={{ "aria-label": "A" }}
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        data-testid="CheckBox"
      />
    </div>
  );
}
