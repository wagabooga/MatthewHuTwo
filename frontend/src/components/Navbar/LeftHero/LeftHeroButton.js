import React from "react";

import "../../../styles/App.css";
import WorkIndexButton from "./WorkIndexButton";


/*
 Left Hero will manage redirecting the user throughout the pages (think of it like a nav bar.) In the hero we want to add any of our "sections" 

 It is also going to be a UL because I want this to only contain elements of pages, I believe I can comeback to this and refactor this to be some sort of mapping and design the button layout

*/

function LeftHero() {
  return (
    <ul className="LeftHero">

      {/* Index - Work (1) */}

      <li>
        <a >
        <WorkIndexButton />
        </a>
      </li>

      {/* Projects (With descriptions and dropdowns! Make it SICK!!!) (2) */}
      {/* Misc -  Spotter style posts for creativity*/}
    </ul>
  );
}

export default LeftHero;
