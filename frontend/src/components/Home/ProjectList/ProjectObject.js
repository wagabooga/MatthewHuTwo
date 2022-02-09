import React from 'react'

function ProjectObject( {client, type, year, project} ) {
  return (
    <div>
      <ul>{client}</ul>
      <ul>{type}</ul>
      <ul>{year}</ul>
      <ul>{project}</ul>
    </div>
  )
}

export default ProjectObject