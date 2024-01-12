import './style.css'
import Phaser from "phaser"

const config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  pixelart: true,
  canvas: gameCanvas,
  scene: [],
}

const game = new Phaser.Game(config);

game.scene.start("homeScreen")
