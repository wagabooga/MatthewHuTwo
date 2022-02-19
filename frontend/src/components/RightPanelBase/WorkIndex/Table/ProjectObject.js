import React from 'react'

function ProjectObject( {client, type, year, project} ) {
  return <ul className="ProjectObject">
      <li className="tile">{client}</li>
      <li className="tile">{type}</li>
      <li className="tile">{year}</li>
      <li className="tile">{project}</li>
  </ul>
}

export default ProjectObject