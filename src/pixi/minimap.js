import * as PIXI from 'pixi.js'
import minimap_png from '../img/map11.png'

let minimap = new PIXI.Application({width:512, height: 512})

minimap.stage.addChild(PIXI.Sprite.from(minimap_png))

export default minimap;