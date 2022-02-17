import React from 'react'

import '../../styles/App.css'
import WorkIndex from './WorkIndex/WorkIndex';
/*
Right now I am always rendering assuming we are on /
*/

function RightPanelBase() {
  return <div className="RightPanelBase">
    <WorkIndex />
  </div>
}

export default RightPanelBase