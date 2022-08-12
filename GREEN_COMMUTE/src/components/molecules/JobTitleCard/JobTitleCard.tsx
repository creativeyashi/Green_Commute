// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react'

import { Box, Typography, Stack } from '@mui/material'
import theme from '../../../theme/theme'
import moreIcon from '../../../assets/icons/more.svg'
import Icon from '../../atoms/Icon/index'
import Button from '../../atoms/Button/index'
import FileUpload from '../../../components/molecules/FileUpload'
import UploadSuccess from '../../../components/molecules/UploadSuccess'
import axios from 'axios'
import { url } from '../../../dbServer'

export interface JobTitleProps {
  id: number
  jobTitle: string
  companyLogo: string
  companyName: string
  companyAddress: string
  jobUploadedTime: string
}

const JobTitleCard: React.FC<JobTitleProps> = ({
  id,
  jobTitle,
  companyName,
  companyAddress,
  jobUploadedTime,
  companyLogo,
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

  const handleApply = () => {
    setDialog(!dialog)
    console.log(file)
  }
  const [file, setFile] = useState<File>()
  const [picked, setPicked] = useState<boolean>(false)
  const [dialog, setDialog] = useState<boolean>(false)
  const moreIconStyles = { marginTop: '12px' }
  const [saved, setSaved] = useState<boolean>(false)

  const handleSave = async () => {
    const response = await axios.patch(
      `${url}Joblist/${id}`,
      {
        saved: !saved,
      },
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }
    )
    setSaved(!saved)
    console.log(response)
  }

  useEffect(() => {
    axios.get(`${url}Joblist/${id}`).then((res) => setSaved(res.data.saved))
  }, [id])
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
              width: '45px',
              height: '45px',
              paddingLeft: '28px',
              paddingTop: '29px',
            }}
            src={companyLogo}
            alt={companyLogo}
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

            <Typography
              variant="caption"
              sx={{ marginTop: '4px', color: '#656E66' }}
            >
              {jobUploadedTime}
            </Typography>
            <Stack direction={'row'}>
              <Box sx={{ marginTop: '20px', marginBottom: '25px' }}>
                <Button
                  children={!saved ? 'Save' : 'Unsave'}
                  variant="outlined"
                  style={{
                    background: '#FFFFFF',
                    width: '99px',
                    height: '32px',
                  }}
                  onClick={handleSave}
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
                  onClick={handleApply}
                />
              </Box>
            </Stack>
          </Box>
        }
        <Box sx={moreIconStyles}>
          <Icon source={moreIcon} />
        </Box>
      </Stack>

      {dialog &&
        (!picked ? (
          <FileUpload
            setIsFilePicked={setPicked}
            setSelectedFile={setFile}
            setModal={setDialog}
          />
        ) : (
          <UploadSuccess
            name="sohail"
            setModal={setDialog}
            setPicked={setPicked}
          />
        ))}
    </div>
  )
}
export default JobTitleCard
