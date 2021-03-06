import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Orientation from 'states/Orientation';
import Menu from 'states/Menu';
import Main from 'states/Main';
import Stats from 'states/Stats';
import End from 'states/End';
import How from 'states/How';

class Game extends Phaser.Game {
	constructor() {

		super(960, 640, Phaser.CANVAS, 'container');

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Orientation', Orientation, false);
		this.state.add('Menu', Menu, false);
		this.state.add('Main', Main, false);
		this.state.add('Stats', Stats, false);
		this.state.add('End', End, false);
		this.state.add('How', How, false);

		this.state.start('Boot');

		this.aspectRatio = window.devicePixelRatio / 3;

		// Positions for the game
		this.widthHalf = 960 / 2;
		this.heightHalf = 640 / 2;
	}

}

new Game();
