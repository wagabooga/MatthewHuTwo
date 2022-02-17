import React from 'react'
import Hanabar from './Hanabar/Hanabar'
import LeftHero from './LeftHero/LeftHeroButton'
function LeftPanelBase() {
  return <div className="LeftPanelBase">
    <Hanabar />
    <LeftHero />
  </div>
}

export default LeftPanelBase