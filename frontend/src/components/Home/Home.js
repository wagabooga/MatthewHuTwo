import React from 'react'
import ProjectList from './ProjectList/ProjectList'

/*
See homepage design


CLIENT : Personal 
TYPE : Web, Design
YEAR: (color Coord WIP / completed)
PROJECT: Url or something
*/
function Home() {
  return (
  <>
    <div>  {/* Title Div Box */}
     <h1> Select Works </h1>
     <p> by Matthew Who? </p>
     <p> 20XX - 20XX </p>
     <p> -----------------------------------------</p>
    </div>
    <div> {/* Aesthetic div?? */} </div>

    <div> {/* ProjectList component */} 
    <ProjectList />
    </div>
  </>
   
    
  )
}

export default Home