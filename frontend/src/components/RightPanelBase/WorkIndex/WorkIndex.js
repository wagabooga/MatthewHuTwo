import React from 'react'

import '../../../styles/App.css'
import WorkIndexHeader from './WorkIndexHeader';
import TableContainer from './Table/TableContainer';
/*
Right now I am always rendering assuming we are on /
*/

function WorkIndex() {
  return <div className="WorkIndex">
    <WorkIndexHeader />
    
    {/* Table Of Content Div */}
    <div></div>

    <TableContainer />

  </div>
}

export default WorkIndex