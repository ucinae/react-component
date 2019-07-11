import React, { useState, useEffect } from 'react'
import minimap from '../pixi/minimap'

const Minimap = () => {
  const [pixi, setPixi] = useState(minimap)
  useEffect(() => {
    document.getElementById("map").appendChild(pixi.view);
  })
  const changeSprite = () => {
    pixi.renderer.resize(1000, 1000);
  }
  return (
    <div>
      <div id="map">
      </div>

      <button onClick={changeSprite}>TEST BTN</button>
    </div>
  )
}

export default Minimap
