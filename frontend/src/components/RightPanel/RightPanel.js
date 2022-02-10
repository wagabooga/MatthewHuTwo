import React from 'react'
import Container from '../Container/Container'
import NavWedge from '../../components/NavWedge/NavWedge'
import ProjectList from './Homepage-right-side/ProjectList'
import TitleDivBox from './TitleDivBox/TitleDivBox'
/*
NavWedge will need to be sized 1/3rd of screen
*/

function RightPanel() {
  return (
  <div className="RightPanel">
      <NavWedge />
      <Container />
      <TitleDivBox />
      <ProjectList />
  </div>
   
    
  )
}

export default RightPanel