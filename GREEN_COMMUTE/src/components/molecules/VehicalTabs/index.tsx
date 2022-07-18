import { Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
interface TabsProps {
  value: number;
  label: string;
  icon?: any;
  disabled?: boolean;
  alticon?: any;
}

interface CustomTabProps {
  tabs: Array<TabsProps>;
  stateHandler: Function;
}

export default ({ tabs, stateHandler }: CustomTabProps) => {
  const [value, setValue] = useState(tabs && tabs[1].value);

  const handleChange = (_event: React.SyntheticEvent, val: number) => {
    setValue(val);
    stateHandler(val);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      data-testid="tabbox"
      sx={{ width: "inherit" }}
      TabIndicatorProps={{
        style: {
          backgroundColor: "transparent",
        },
      }}
    >
      {tabs &&
        tabs.map((curr: any, index: number) => {
          return (
            <Tab
              value={curr.value}
              label={curr.label}
              data-testid={`tab-${curr.value}`}
              icon={index == value ? curr.alticon : curr.icon}
              sx={{ minWidth: "0px" }}
              disabled={curr.disabled}
            ></Tab>
          );
        })}
    </Tabs>
  );
};
