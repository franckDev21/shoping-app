import React from 'react'
import MenuNavBar from '../../Melecules/MenuNavBar/MenuNavBar'
import SearchNavBar from '../../Melecules/SearchNavBar/SearchNavBar'
import Topbar from '../../Melecules/Topbar/Topbar'

const All = () => {
  return <>
    <header>
      {/* topbar */}
      <Topbar />
      <SearchNavBar />
      <MenuNavBar />
    </header>
  
  </>
}

export default All