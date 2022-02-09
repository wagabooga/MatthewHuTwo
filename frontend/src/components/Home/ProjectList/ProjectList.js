import React from 'react'
import ProjectObject from './ProjectObject';


let myOwnData = [
  // Portfolio 1.0
  {
  "projectId" : 1,
  "client" : "Personal",
  "type" : ["Web Design & Development", "design", "Developement", "Creative Direction"],
  "year" : 2019,
  "project" : "matthewhu.com",
  },

  // OnlineSpotify
  {
  "projectId" : 2,
  "client" : "Personal",
  "type" : ["Web", "Design", "developement", "Creative Direction"],
  "year" : 2019,
  "project" : "matthewhu.com",
  },

  // Spotter
  {
    "projectId" : 3,
  "client" : "Personal",
  "type" : ["Web", "Design", "developement", "Creative Direction"],
  "year" : 2019,
  "project" : "matthewhu.lhjklhjkhjkhkjhjkhjkhjkhjkhjkhjkhjkhjkhjkcom",
  },
]

function ProjectList(props) {


const projectListElements = myOwnData.map((projectObject) => {
  return (
    <ProjectObject 
      key={projectObject.projectId}
      client={projectObject.client}
      type={projectObject.type}
      year={projectObject.year}
      project={projectObject.project}
    />
  );
}) 


return (
  <div>
    {projectListElements}
  </div>
  );
}

export default ProjectList