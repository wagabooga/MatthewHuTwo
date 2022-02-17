import React from 'react'
import ProjectList from './Table/ProjectList'
import ProjectObjectTableHeader from './Table/ProjectObjectTableHeader.js';
import '../../../styles/App.css'
/*
Right now I am always rendering assuming we are on /
*/

function WorkIndex() {
  return <div className="WorkIndex">
    {/* Header can make this 1 big component */}
    <h2> Select Works </h2>
    <br />
    <h1> by Matthew Hu </h1>
    <br />
    <h1> INDEX - 2022</h1>
    <br />

    {/* Table Of Content Div */}
    <div></div>

    {/* Table (should probably just be 1 big component) */}
    <ProjectObjectTableHeader />
    <ProjectList />
  </div>
}

export default WorkIndex