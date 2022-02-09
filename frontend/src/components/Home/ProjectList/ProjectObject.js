import React from 'react'

function ProjectObject( {projectId, client, type, year, project} ) {
  return (
    <div >
      <p> {projectId} </p>
      <p> {client} </p>
      <p> {type} </p>
      <p> {year} </p>
      <p> {project} </p>
    </div>
  )
}

export default ProjectObject