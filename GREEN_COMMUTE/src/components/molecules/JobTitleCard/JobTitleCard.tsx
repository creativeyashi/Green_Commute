// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-children-prop */
import React from 'react'

import { Box, Typography, Stack } from '@mui/material'
import theme from '../../../theme/theme'
import moreIcon from '../../../assets/icons/more.svg'
import Icon from '../../atoms/Icon/index'
import Button from '../../atoms/Button/index'
import logo from '../../../assets/logos/myntra.svg'

export interface JobTitleProps {
  id: number
  jobTitle: string
  companyLogo: string
  companyName: string
  companyAddress: string
  jobUploadedTime: string
}

const JobTitleCard: React.FC<JobTitleProps> = ({
  jobTitle,
  companyName,
  companyAddress,
  jobUploadedTime,
}: JobTitleProps) => {
  const companyAndAddressStyle = {
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '4px',
    color: theme.palette.text.secondary,
  }

  const titleStyles = {
    fontSize: '16px',
    lineHeight: '30px',
    marginTop: '4px',
  }

  const moreIconStyles = { marginTop: '12px' }
  return (
    <div data-testid="jobTitleCard">
      <Stack
        direction={'row'}
        sx={{
          marginTop: '8px',
        }}
      >
        <Box
          sx={{
            maxHeight: '45px',
            maxWidth: '45px',
            height: '100%',
            marginTop: '1px',
            paddingRight: '6%',
          }}
        >
          <img
            style={{
              position: 'static',
              width: '100px',
              height: '62px',
              paddingLeft: '2px',
              marginTop: '5px',
            }}
            src={logo}
            alt={logo}
          />
        </Box>

        {
          <Box
            sx={{
              maxWidth: '70%',
              minWidth: '60%',
              paddingTop: '2%',
              paddingLeft: '24px',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" sx={titleStyles}>
              {jobTitle}
            </Typography>

            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {' '}
              {companyName}
            </Typography>
            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {companyAddress}
            </Typography>

            <Typography variant="caption" sx={{ marginTop: '4px' }}>
              {jobUploadedTime}
            </Typography>
            <Stack direction={'row'}>
              <Box sx={{ marginTop: '20px', marginBottom: '25px' }}>
                <Button
                  children="Save"
                  variant="outlined"
                  style={{
                    background: '#FFFFFF',
                    width: '99px',
                    height: '32px',
                  }}
                />
              </Box>
              <Box minWidth="10px"></Box>
              <Box sx={{ marginTop: '20px', marginBottom: '25px' }}>
                <Button
                  children="Apply"
                  variant="contained"
                  style={{
                    background: '#30A193',
                    width: '99px',
                    height: '32px',
                  }}
                />
              </Box>
            </Stack>
          </Box>
        }
        <Box sx={moreIconStyles}>
          <Icon source={moreIcon} />
        </Box>
      </Stack>
    </div>
  )
}
export default JobTitleCard
