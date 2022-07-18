// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import sideMenuData from "../../../assets/data/sideMenuData"
import { MenuButton } from '../../molecules/menuButton'


const MainContainer = styled("div")({
  width: "270px",
  height: "100%",
  color: "rgba(125, 125, 125, 0.12)"
  

});

const FirstContainer = styled("div")({
    width: "270px",
    height :"48px"

});


export const SideMenu = () => {
  return (
      
    <MainContainer>
        <Box>
          {sideMenuData.map((data,key) => {
            return (
              <FirstContainer>
                <MenuButton Source={data.source} key={key} title={data.title} />
              </FirstContainer>
            );
          })}
        </Box>
    </MainContainer>
  )
}
