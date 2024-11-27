// Uses a timer for the step event to mantain consistancy
// Includes a variety of time and step tracking valiables.
// Global pause system (with screen overlay)
// auto pause game when user clicks away
// Useful background and backdrop
// Game is frozen untill resources are loaded, and when over.
//      todo: loading screen
// Basic Game Text shown on the left side.
// Basic High Score functionality.
// Basic Button creation and click handeling

class Example extends Phaser.Scene {
    constructor() {
        super();
        this.uniqueGameID = 'jwbenfjbwekjfb';
        this.backgroundColor = 0x006600;
        this.resourcesLoaded = false;
        this.inStep = false;    // id the last step still running?
        this.actualTime = 0;    // set to Date.now() in milliseconds; 
        this.stepDuration = 0;      // time that passed since last step;
        this.lastStepsTime = 0;  // only used to calculate stepDuration
        this.runTime = 0;       // milliseconds the gave as bee run for.
        this.stepCount = 0;     // Number of game steps passed.
        this.gameEnded = false;  // set to true when the game is fully over.
        this.paused = false;
        this.pauseBackground = null;
        this.pauseButton = null;
        this.score = 0;
    

        this.backdrop = null;
        this.background = null;
        this.leftSideTextField = null;
        this.leftSideText = null;
        this.highScoreTextFields = [];
        this.mousePointerField = null; 
    }

    getLeftTextFields(){
        return [
            'Score',
            this.score,
            'Step',
            this.stepCount
        ]
    }

    preload() {
        this.load.image('overlay', 'https://play.rosebud.ai/assets/View.png?AK9S');
    }

    create() {
        // auto pause when user clicks away
        window.addEventListener('blur', () => {
            if (!this.paused) {
                this.pauseGame();
            }
        });

        // Setup background
        this.background = this.add.rectangle(400, 300, 800, 600, this.backgroundColor);
        this.background.depth = 0;

        this.createOverlays();

        // Setup step event
        this.time.addEvent({
            delay: 15,
            callback: this.update15ms,
            callbackScope: this,
            loop: true
        });

        this.showHighScores();

        this.createButton(80,100,100,'Game Over');
        this.createButton(80,150,100,'Show Scores');
        this.createButton(80,200,100,'Hide Scores');
        this.createButton(80,250,100,'Reset Scores');
        this.createButton(80,300,100,'Save Scores');
        this.createButton(80,350,100,'Pause');
        this.createButton(80,400,100,'Up Score');

        this.resourcesLoaded = true;
    }

    doButtonCallback(name){
        if (!this.resourcesLoaded || this.gameEnded || this.paused) {
            return;
        }
        switch(name){
            case 'Game Over':
                this.showGameOverScreen();
            break;
            case 'Show Scores':
                this.showHighScores();
            break;
            case 'Hide Scores':
                this.hideHighScores();
            break;
            case 'Reset Scores':
                this.resetHighScores();
            break;
            case 'Save Scores':
                this.saveHighScore();
            break;
            case 'Pause':
                this.pauseGame();
            break;
            case 'Up Score':
                this.score += 100;
            break;
        }   
    }

    createOverlays(){
        // Create Mouse Pointer
        this.mousePointerField = this.add.text(-1000, -1000, '⇖', {
            fontSize: '64px Arial',
            fill: '#ff0000',
            fontStyle: 'bold',
            align: 'center',
        });
        this.mousePointerField.depth = 1000000000;

        // Create Text
        this.leftSideTextField = this.add.text(10, 10, 'Not Set', {
            fontSize: '24px Arial',
            fill: '#ffffff',
        });
        this.leftSideTextField.depth = 1;

        // Generic Backdrop
        this.backdrop = this.add.rectangle(400, 300, 800, 600, 0x000000);
        this.backdrop.depth = 1000;
        this.backdrop.alpha = 0;

        //High Scores
        for (let i = 0; i <= 10; i++) {
            this.highScoreTextFields[i] = this.add.text(400, 250 + i * 30, '', {
                fontSize: '24px',
                fill: '#ffffff',
                align: 'center',
                lineSpacing: 10
            });
            this.highScoreTextFields[i].setOrigin(0.5);
            this.highScoreTextFields[i].setDepth(1002);
            this.highScoreTextFields[i].alpha = 0;
        }
        this.highScoreTextFields[0].setText("Top Ten Scores");

        // Pause Backdrop with text
        this.pauseBackground = this.add.rectangle(400, 300, 800, 600, 0x000000);
        this.pauseBackground.alpha = 0;
        this.pauseBackground.setInteractive({
            useHandCursor: true
        });
        this.pauseBackground.on('pointerdown', this.unPauseGame, this);
        this.pauseBackground.setDepth(10000000);

        this.pauseButton = this.createButton(400,250,10000001,'Paused\n\nClick Anywhere to Resume');
/*
        this.pauseButton = this.add.text(400, 250, 'Paused\n\nClick Anywhere to Resume', {
            fontSize: '24px',
            fontStyle: 'bold',
            align: 'center',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 10
            }
        });
        this.pauseButton.setOrigin(0.5);
        this.pauseButton.setDepth(10000001);
        this.pauseButton.setInteractive({
            useHandCursor: true
        });
*/
        this.pauseButton.alpha = 0;
        this.pauseButton.on('pointerdown', this.unPauseGame, this);
    }

    unPauseGame(){
        this.paused = false;
        this.pauseBackground.alpha = 0;
        this.pauseButton.alpha = 0;
    }

    pauseGame(){
        this.paused = true;
        this.pauseBackground.alpha = 0.8;
        this.pauseButton.alpha = 1;
    }


    updateTextDisplays() {
        let myFields = this.getLeftTextFields();
        this.leftSideText = '';

        myFields.forEach((textObject, index) => {
            if(index%2 == 0){
                this.leftSideText = this.leftSideText + textObject + ': ';
            }else{
                 this.leftSideText = this.leftSideText + textObject + '\n';
            }
        });

         this.leftSideTextField.setText(this.leftSideText);
    }

    update15ms() {
        if (!this.resourcesLoaded || this.inStep || this.gameEnded || this.paused) {
            return;
        }
        this.inStep = true;
        this.actualTime = Date.now();
        this.stepDuration = this.actualTime - this.lastStepsTime;
        this.lastStepsTime = this.actualTime;
        this.runTime += this.stepDuration;
        this.stepCount++;

        this.mousePointerField.x = this.input.mousePointer.x-7;
        this.mousePointerField.y = this.input.mousePointer.y-35;
        if(this.stepCount % 20 > 10){
            this.mousePointerField.setColor('#ffffff');
        }else{
            this.mousePointerField.setColor('#ff0000');
        }

        this.updateTextDisplays();

        // step code

        this.inStep = false;
    }

    createButton(x, y, depth, text, bg_color = '#000000', text_color = '#ffffff') {
        let button = this.add.text(
            x,
            y,
            text, {
                font: '24px Arial',
                fill: text_color,
                backgroundColor: bg_color,
                align: 'center',
                padding: {
                    x: 10,
                    y: 5
                }
            }
        );
        button.setOrigin(0.5, 0.5);
        button.setDepth(depth);
        button.setInteractive();
        button.on('pointerdown', () => this.doButtonCallback(text), this);
        
        return button;
    }



    showGameOverScreen() {
        this.gameEnded = true;
        this.mousePointerField.alpha = 0;
        this.saveHighScore();

        this.backdrop.alpha = 0.8;

        // Add the title
        let myText = this.add.text(400, 50, 'Game Over', {
            fontSize: '64px',
            fontStyle: 'bold',
            fill: '#ff8800',
            stroke: '#000000',
            strokeThickness: 6
        });
        myText.setOrigin(0.5);
        myText.setDepth(1001);

        // Add instructions text
        myText = this.add.text(400, 120,
            'Please refresh to try again', {
                fontSize: '24px',
                fontStyle: 'bold',
                fill: '#ffffff',
                align: 'center'
            });
        myText.setOrigin(0.5);
        myText.setDepth(1001);
        // Add high score list

        this.showHighScores();
    }

    showHighScores(){
        const highScores = this.getHighScores();
        this.highScoreTextFields[0].alpha = 1;
        for (let i = 1; i <= 10; i++) {
            this.highScoreTextFields[i].alpha = 1;
            if (i < highScores.length) {
                this.highScoreTextFields[i].setText(i + ': ' + highScores[i-1])
                if (highScores[i-1] == this.score) {
                    this.highScoreTextFields[i].setColor('#ff6666');
                }else{
                    this.highScoreTextFields[i].setColor('#ffffff');
                }
            } else {
                this.highScoreTextFields[i].setText(i + ': --------');
                this.highScoreTextFields[i].setColor('#ffffff');
            }
        }
    }

    hideHighScores(){
        for (let i = 0; i <= 10; i++) {
            this.highScoreTextFields[i].alpha = 0;
        }
    }

    getHighScores() {
        const scores = JSON.parse(localStorage.getItem(this.uniqueGameID+'_highScores')) || [];
        console.log(scores);
        return scores;
    }

    saveHighScore() {
        if(this.score == 0){
            return;
        }
        const highScores = this.getHighScores();
        highScores.push(this.score);
        highScores.sort((a, b) => b - a);
        localStorage.setItem(this.uniqueGameID+'_highScores', JSON.stringify(highScores.slice(0, 10)));
        console.log(JSON.stringify(highScores.slice(0, 10)));
    }

    resetHighScores(){
        localStorage.setItem(this.uniqueGameID+'_highScores', JSON.stringify([]));
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 800,
    height: 600,
    scene: Example
};

window.phaserGame = new Phaser.Game(config);
