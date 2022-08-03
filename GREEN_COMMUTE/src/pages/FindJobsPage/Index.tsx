import HomeScreenTemplate from '../../components/templates/homeScreen/Index'
import React from 'react'
import SideNav from '../../components/organisms/SideNavBar/index'
import Header from '../../components/organisms/header/index'
import MainContent from '../../components/organisms/MainContent'

const FindJobsPage: React.FC = () => {
  return (
    <HomeScreenTemplate
      Header={<Header text="Hitech city, Hyderabad, India" />}
      SideMenu={<SideNav />}
      MainContent={<MainContent />}
    />
  )
}

export default FindJobsPage
