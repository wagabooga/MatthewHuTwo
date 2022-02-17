import React from 'react'
import ProjectList from './ProjectList/ProjectList'

import '../../styles/App.css'
/*
NavWedge will need to be sized 1/3rd of screen
*/

function RightPanelBase() {
  return <div className="RightPanelBase">
      <ProjectList />
  </div>
}

export default RightPanelBase