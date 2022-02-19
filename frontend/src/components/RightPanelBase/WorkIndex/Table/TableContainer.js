import React from 'react'
import ProjectObjectTableHeader from './ProjectObjectTableHeader'
import ProjectList from './ProjectList'


function TableContainer() {
  return <div className="TableContainer">
      <ProjectObjectTableHeader />
      <ProjectList />
  </div>
}

export default TableContainer