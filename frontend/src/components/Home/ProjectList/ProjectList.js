import React from 'react'


let data = [
  { }
]
function ProjectList(data) {
  
  /* 
  We want to map out data for each project:
  <div>
  <k
  </div>
*/ 

const projectListElements = data.spots.map((spot) => {
  return (
    <Spot
      key={spot.id}
      spotInfo={spot}
      chooseTrack={props.chooseTrack}
      setPlay={props.setPlay}
    />
  );
})
: null;

return <div className="spotList">{spotListElements}</div>;
}

export default ProjectList