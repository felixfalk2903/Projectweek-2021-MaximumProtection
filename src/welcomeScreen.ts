import { Game } from "phaser";
let stayingScore = 0;
export default class WelcomeScreen extends Phaser.Scene {

    
    constructor() {
        super('WelcomeScreen')
    }
    preload() {

        this.load.image('background', 'assets/Background_dungeon.jpg');
        this.load.image('play-now-button', 'assets/play-now-button.jpg');

    }
    create() {
        this.add.image(400, 450, 'background').setScale(1.5)
        let button = this.add.image(390, 550, 'play-now-button').setInteractive();

        button.on('pointerdown',() => {
            this.scene.start('game')
        })
        

        this.add.text(30, 200, 'Welcome to Maximum protection', {
            fontFamily: 'Arial',
            fontSize: '50px',
            strokeThickness: 5,
            stroke: '#000000',
            color: '#EA6A47'



        });
        this.add.text(60, 301, 'Please press the button to start the game!', {
            fontFamily: 'Arial',
            fontSize: '35px',
            strokeThickness: 5,
            stroke: '#000000',
            color: '#EA6A47'



        });
        
        this.add.text(500, 800, 'Press esc to go back to the welcome screen.', {
            fontFamily: 'Arial',
            fontSize: '15px',
            strokeThickness: 5,
            stroke: '#000000',
            color: '#EA6A47'



        })
        
        if( parseInt(localStorage.getItem('maxScore'))>stayingScore){
            stayingScore = parseInt(localStorage.getItem('maxScore'))
        }

        this.add.text(100, 800, `High score: ${stayingScore} `, {
            fontFamily: 'Arial',
            fontSize: '15px',
            strokeThickness: 5,
            stroke: '#000000',
            color: '#EA6A47'

        })

        this.add.text(100, 750, `Coins: ${parseInt(localStorage.getItem('coins'))} `, {
            fontFamily: 'Arial',
            fontSize: '15px',
            strokeThickness: 5,
            stroke: '#000000',
            color: '#EA6A47'

        })

    }
}
