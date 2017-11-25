export default class GameState extends Phaser.State {
  init() {
  }
  preload() {
    this.load.image(`background`, `assets/background.jpg`);
    this.game.load.atlasJSONHash('knight', 'assets/knight.png', 'assets/knight.json');
    this.load.image('floor', 'assets/wood-texture.jpg');
  }
  create() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.background.scale.setTo(0.6);

    this.floor = this.game.add.tileSprite(0, (this.game.height / 2) + 90, this.game.width, 15, 'floor');

    this.player = this.add.sprite(this.game.width / 2, this.game.height / 2, 'knight', 'knight/idle/001');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.scale.setTo(0.5, 0.5);

    const idleFrames = Phaser.Animation.generateFrameNames('knight/idle/', 1, 4, '', 3);
    this.player.animations.add('idle', idleFrames, 4, true, false);

    const attackFrames = Phaser.Animation.generateFrameNames('knight/attack/', 1, 4, '', 3);
    this.player.animations.add('attack', attackFrames, 5, false, false);

    this.player.animations.play('idle');
  }
  update() {
    if (this.game.input.activePointer.leftButton.isDown) {
      this.player.animations.play('attack');
      this.player.animations.currentAnim.onComplete.add(() => {
        this.player.animations.play('idle');
      }, this);
    }
  }
  render() {
  }
}
