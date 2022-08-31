import React from 'react'
import MenuNavBar from '../../Melecules/MenuNavBar/MenuNavBar'
import SearchNavBar from '../../Melecules/SearchNavBar/SearchNavBar'
import Topbar from '../../Melecules/Topbar/Topbar'
import Banner from '../../Organismes/Banner/Banner'

const All = () => {
  return <>
    <header>
      {/* topbar */}
      <Topbar />
      <SearchNavBar />
      <MenuNavBar />
      <Banner />
    </header>
  
  </>
}

export default All