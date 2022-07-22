import React from "react";
import { ThemeProvider} from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'

import theme from '../../../theme/theme';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobTitleCard from "./JobTitleCard";
import MyntraLogo from "../../../assets/icons/myntra.svg";

export default {
  title: "Molecules/JobTitleCard",
  component: JobTitleCard,
} as ComponentMeta<typeof JobTitleCard>;

const Template: ComponentStory<typeof JobTitleCard> = (args) => (
  <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <JobTitleCard {...args} />
      </ThemeProvider>
  </StyledEngineProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  companyLogo: MyntraLogo,
  companyName: "Myntra",
  jobTitle: "User Experience Designer",
  companyAddress: "Hitech city, Hyderabad - 500072",
  jobUploadedTime: "36 min ago",
};
