class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('start-button', 'assets/example-start-button.png');
	}

	create() {
		this.game.state.start("Menu");
	}
}

export default Preload;
