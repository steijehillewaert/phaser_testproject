import GameState from './states/GameState';

export default class Game extends Phaser.Game {
  constructor() {
    super(960, 600, Phaser.AUTO, `content`);
    this.state.add('Game', GameState);
    this.state.start('Game');
  }
};
