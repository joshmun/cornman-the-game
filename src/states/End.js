class End extends Phaser.State {
  constructor() {
    super();
    this.topTenJSON;
  }

  preload(){
    this.game.load.json('topTen', 'http://cornman-api.herokuapp.com/scores');
  }

	create() {
    this.topTenJSON = this.game.cache.getJSON('topTen');

    this.game.stage.backgroundColor = '#DFF4FF';

    let gameOver = "GAME OVER"
    this.overText = this.game.add.text(0, 0, gameOver, { font: "64px Revalia", textalign: "center"});

    this.restartButton = this.game.add.button(100, 100, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(100, 300, 'main-menu', this.goToMenu, this);

    // let scoreboard = "SCORE"
    let positionY = 100;
    this.topTenJSON.forEach((score)=>{
      this.game.add.text(300, positionY, score.score);
      positionY += 25;
    })
	}

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
