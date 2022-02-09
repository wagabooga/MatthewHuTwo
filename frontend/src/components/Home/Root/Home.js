import React from 'react'
import NavWedge from '../../NavWedge/NavWedge'
import ProjectList from './ProjectList'
import TitleDivBox from '../TitleDivBox/TitleDivBox'

/*
NavWedge will need to be sized 1/3rd of screen
*/

function Home() {
  return (
  <>
    <div>
      <NavWedge />
    </div>

    <div>
      <TitleDivBox />
      <ProjectList />
    </div>
  

  </>
   
    
  )
}

export default Home