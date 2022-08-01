import React from 'react'
import HomeScreenTemplate from '../../components/templates/homeScreen/Index'
import Header from '../../components/organisms/header'
import SideNav from '../../components/organisms/SideNavBar'
import SavedJobsMainContent from '../../components/organisms/SaveJobsMainContent'

const SavedJobsPage: React.FC = () => {
  return (
    <HomeScreenTemplate
      Header={<Header text="Hitech city, Hyderabad, India" />}
      SideMenu={<SideNav />}
      MainContent={<SavedJobsMainContent />}
    />
  )
}

export default SavedJobsPage
