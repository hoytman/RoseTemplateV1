// Browser consistant timimg utilities
// Game pause system 
// Useful interactive visual elements
// Loading screen
// Persistant High Score system.
// Persistant Achievenemt system.
// Timeline powered event system 
// Cut Scene dialog system
// Health Bars
// floating dmamge numbers.
// Music and sound management
// Popup message system
// Shop for items and upgrades.
// Inventory Page

// todo

// Rotatable Bars.
// Touch screen controls.
// Title Screen.
// Simple movement engine.

class Example extends Phaser.Scene {

    user_constructor(){

       // Game Settings
        this.gmaeTitle = 'My Game'
        this.uniqueGameID = 'jwbenfjbwekjfb';
        this.backgroundColor = 0x006600;
        this.score = 0;
        this.cash = 100;

        // this.mousePointerFieldIcon = '◣';
        //this.mousePointerFieldIcon = '↘';
        this.mousePointerFieldIcon = '↖'

        this.images = [
            'https://play.rosebud.ai/assets/smile.png?xqLm',
            'https://play.rosebud.ai/assets/icon.png?7TRa',
            'https://play.rosebud.ai/assets/ocean_overlay_2.png?6R2k'
        ];

        this.audios = [
            [.1, 'music1', 'https://play.rosebud.ai/assets/2024 Food Jam 1.mp3?ubad'],
            [1, 'music2', 'https://play.rosebud.ai/assets/2024 Food Jam 2.mp3?nPxe'],
            [1, 'intro', 'https://play.rosebud.ai/assets/intro.mp3?wKcl'],
            [.5, 'thunk', 'https://play.rosebud.ai/assets/thunk.mp3?iXL2'],
            [1, 'pop', 'https://play.rosebud.ai/assets/pop.mp3?FKDU'],
            [1, 'voice', 'https://play.rosebud.ai/assets/voice.mp3?PwgX']
        ];

        this.scripts = [

        ];

        this.externalScripts = [
            'https://raw.githubusercontent.com/hoytman/RoseTemplateV1/refs/heads/main/helpers.js'
        ];


        this.styles = {
            base: {
                fontFamily: 'Arial',
                fontSize: 24,
                color: '#ffffff',
                depth: 1,
                origin: 'tLeft',
                align: 'left',
            },
            button: {
                backgroundColor: '#000000',
                align: 'center',
                padding: {
                    x: 8,
                    y: 3
                },
                depth: 100,
                origin: 'cCenter',
                flash: '#555555',
                upSound: 'pop',
                border1: '1 #ffffff',
            },
            overlayButton: {
                depth: 1001,
            },
            overlayControl: {
                depth: 1001,
                backgroundColor: '#990000',
                border1: '1 #ffffff',
                border2: '2 #990000',
                padding: {
                    x: 3,
                    y: 1
                },
            },
            unPause: {
                depth: 10001,
                background: '#003300',
                padding: {
                    x: 20,
                    y: 20
                },
            },

            shopButtonLocked: {
                depth: 2001,
                backgroundColor: '#222222',
                fill: '#ffffff',
                origin: 'cCenter',
                border1: '1 #ffffff',
                upSound: 'thunk'
            },
            shopButtonBought: {
                depth: 2001,
                backgroundColor: '#000000',
                fill: '#333333',
                origin: 'cCenter',
                border1: '1 #ffffff',
                upSound: 'thunk'
            },
            shopButtonPoor: {
                depth: 2001,
                backgroundColor: '#990000',
                fill: '#ffffff',
                origin: 'cCenter',
                border1: '1 #ffffff',
                upSound: 'thunk'
            },
            shopButtonBuy: {
                depth: 2001,
                backgroundColor: '#007700',
                origin: 'cCenter',
                border1: '1 #ffffff',
            },

            overlayText: {
                depth: 1001,
                origin: 'cLeft'
            },
            overlayDialog: {
                depth: 1001,
                origin: 'tLeft',
                fontSize: 32
            },
            overlayTextCentered: {
                depth: 1001,
                origin: 'cCenter'
            },
            overlayLocked: {
                depth: 1001,
                origin: 'cLeft',
                fill: '#777777'
            },
            overlayBought: {
                depth: 1001,
                origin: 'cLeft',
                fill: '#009900'
            },
            overlayPoor: {
                depth: 1001,
                origin: 'cLeft',
                fill: '#990000'
            },
            messages: {
                fill: '#000000',
                backgroundColor: '#ffffff',
                fontFamily: 'Georgia',
                align: 'center',
                origin: 'tRight',
                depth: 2000,
                padding: {
                    x: 10,
                    y: 10
                }
            },
            floatingText: {
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 3,
                origin: 'cCenter',
                depth: 999,
                fontSize: 20,
            },
            titleScreenTitle: {
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#22ff00',
                stroke: '#000000',
                strokeThickness: 6,
                origin: 'tCenter',
                depth: 1001
            },
            gameOverTitle: {
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#ff8800',
                stroke: '#000000',
                strokeThickness: 6,
                origin: 'tCenter',
                depth: 1001
            },
            gameOverSubTitle: {
                fontSize: '28px',
                fontStyle: 'bold',
                fill: '#ff8800',
                stroke: '#000000',
                strokeThickness: 2,
                origin: 'tCenter',
                depth: 1001
            },

            gameWonTitle: {
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#ffffed',
                stroke: '#000000',
                strokeThickness: 6,
                origin: 'tCenter',
                depth: 1001
            },
            gameWonSubTitle: {
                fontSize: '28px',
                fontStyle: 'bold',
                fill: '#ffffed',
                stroke: '#000000',
                strokeThickness: 2,
                origin: 'tCenter',
                depth: 1001
            },
            highScore: {
                align: 'center',
                origin: 'tCenter',
                depth: 1001
            },
            overlayTitle: {
                align: 'center',
                origin: 'cCenter',
                depth: 1001,
                fontSize: '36px',
                fontStyle: 'bold',
            },
            overlaySubTitle: {
                align: 'center',
                origin: 'cCenter',
                depth: 1001,
                fontSize: '32px',
                fontStyle: 'bold',
            },
            overlaySubSubTitle: {
                align: 'center',
                origin: 'cCenter',
                depth: 1001,
                fontSize: '24px',
                fontStyle: 'bold',
            },
            achievementsGreenLeft: {
                fill: '#00ff00',
                depth: 1001,
                origin: 'cLeft',
            },
            achievementsRedLeft: {
                fill: '#ff0000',
                depth: 1001,
                origin: 'cLeft',
            },
            achievementsGreenRight: {
                fill: '#00ff00',
                depth: 1001,
                origin: 'cRight',
                align: 'cRight'
            },
            achievementsRedRight: {
                fill: '#ff0000',
                depth: 1001,
                origin: 'cRight',
                align: 'cRight'
            }

        };

        this.gameData = {
            enemies: {
                toad: {
                    size: 10,
                    tall: 50,
                    health: 5,
                    damage: 30,
                    scale: 0.2,
                    speed: 1.5
                }
            }
        }

        this.shopItems = {
            'HealthTitle': {
                type: 'title',
                text: 'Basic Health Upgrades ',
                page: 1,
            },
            'HealthSubTitle': {
                type: 'subtitle',
                text: "Buy more health here",
                page: 1,
            },
            'HealthSubTitle2': {
                type: 'subtitle',
                text: 'Your Health: ~health.player.value~/~health.player.max~',
                page: 1,
            },
            'HealthIncrease': {
                type: 'repeat',
                price: 50,
                text: 'Buy 5 health',
                page: 1,
                requires: () => {
                    return ('player' in this.barList) &&
                        (this.barList.player.value < this.barList.player.max)
                },
                update: () => {
                    this.barList.player.value += 10;
                }

            },

            'scoreSet': {
                type: 'unique',
                price: 250,
                text: 'set score to 1000',
                page: 1,
                update: 'score|=|1000',
            },
            'ScoreIncrease': {
                type: 'unique',
                price: 150,
                text: 'Increase score by 100',
                page: 1,
                update: 'score|+|100',
                requires: "scoreSet",
            },
            'ScoreReduce': {
                type: 'unique',
                price: 150,
                text: 'Reduce score by 100',
                page: 1,
                update: 'score|-|100',
                requires: "scoreSet",
            },
            'Inflation': {
                type: 'repeat',
                price: 150,
                text: 'Increase my price',
                page: 1,
                update: 'shopItems.Inflation.price|+|100',
            },


            'SoupTitle': {
                type: 'title',
                text: 'Soup Items',
                page: 2
            },
            'SoupsubTitle': {
                type: 'subtitle',
                text: 'Use these to make soup.',
                page: 2
            },
            'Bowl': {
                type: 'uniqueItem',
                price: 150,
                text: 'Bowl',
                page: 2,
                icon: 'icon'
            },
            'Eggs': {
                type: 'repeatItem',
                price: 150,
                text: 'Eggs',
                page: 2,
            },
            'Noodls': {
                type: 'repeatItem',
                price: 150,
                text: 'Noodls',
                page: 2,
            },
            'Pork': {
                type: 'repeatItem',
                price: 150,
                text: 'Pork',
                page: 2,
            },

        }

        this.timeline = [
            [0, 'Play Music 1', "Add Dialog|0|smile|0x666666|Maybe they just want some candy.  I bet if I gave them some jelly beans, they'd leave us alone."],
            [4],
            [0, "Add Dialog|1|smile|0x666666|My current health is at (~health.player.value~/~health.player.max~) and my curret score is: ~score~"],
            [4],
            [0, "Add Dialog|2|smile|0x666666|Maybe they just want some candy.  I bet if I gave them some jelly beans, they'd leave us alone."],
            [4],
            [0, "Add Dialog|3|smile|0x666666|Maybe they just want some candy.  I bet if I gave them some jelly beans, they'd leave us alone."],
            [4],
            [0, 'clearDialog', 'Play Music 2', 'addFullPageDialog1'],
            [30],
            [0, 'closeDialog', 'Stop Music', "show Message|All Done!"],
            [null, 'Do nothing'] // Trys to "do nothong" forever.
        ];

        this.definitions = {
            player: {
                image: null,
                hit: [
                    10 | 10 | 10 | 10
                ]
            }
        }

        // Text Fields in the upper left corner.
        this.leftSideText = [
            'Score: ~score~',
            'Step: ~stepCount~',
            'Cash: $~cash~',
        ];

        this.achievements = [{
            name: '0 Health',
            desc: 'Have a health bar reach zero',
            have: false,
            check: () => {
                return ('player' in this.barList) && this.barList.player.value == 0;
            },
            icon: 'icon'
        }, {
            name: '1k Steps',
            desc: 'Get past step 1000',
            have: false,
            check: () => {
                return this.stepCount > 1000;
            },
            icon: 'icon'
        }]

    }
        
    user_create(){

        // User added step code

        // Setup background
        this.background = this.add.rectangle(400, 300, 800, 600, this.backgroundColor);
        this.background.depth = 0;

        // Volumn bar
        this.volumeControl = this.createValueBar('volume', 460, 35, 300, 20, 10, 0xcccccc, 0x333333, true);
        this.updateValueBar('volume', 1, 1);

        this.mainButtons = [
            this.createButton(100, 150, 'Restart Timeline'),
            this.createButton(100, 200, 'Game Over'),
            this.createButton(100, 250, 'Show Scores'),
            this.createButton(100, 300, 'Hide Scores'),
            this.createButton(100, 350, 'Reset Scores'),
            this.createButton(100, 400, 'Save Scores'),
            this.createButton(100, 450, 'Pause'),
            this.createButton(100, 500, 'Up Score'),
            this.createButton(100, 550, 'You Win'),

            this.createButton(280, 150, 'Play Music 1'),
            this.createButton(280, 200, 'Stop Music'),
            this.createButton(280, 250, 'Play Sound 2'),
            this.createButton(280, 300, 'Stop Sound'),
            this.createButton(280, 350, 'Play Music Intro'),
            this.createButton(280, 400, 'Create Bar'),
            this.createButton(280, 450, 'Damage'),
            this.createButton(280, 500, 'Heal'),
            this.createButton(280, 550, 'Destroy Bar'),

            this.createButton(480, 150, 'Show Achievements'),
            this.createButton(480, 200, 'Reset Achievements'),
            this.createButton(480, 250, 'Open Shop'),
            this.createButton(480, 300, 'Add Cash'),
            this.createButton(480, 350, 'Show Message'),
            this.createButton(480, 400, 'Open Inventory'),
            this.createButton(480, 450, 'Floating Nums'),
            this.createButton(480, 500, 'Play Vocal'),
            this.createButton(480, 550, 'Stop Vocal')
        ];


    }

    user_step(){

    }


    user_function_hub(name, params, tarObject){

        switch (name) {
            case 'Restart Timeline':
                this.timelineRestart();
                break;
            case 'Game Over':
                this.showGameOverScreen();
                break;
            case 'You Win':
                this.showWinScreen();
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
            case 'Add Dialog':
                this.addDialog(params[0], params[1], params[2], params[3]);
                break;
            case 'clearDialog':
                this.clearDialog();
                break;
            case 'closeDialog':
                this.closeDialog();
                break;
            case 'Play Music 1':
                this.playMusic('music1');
                break;
            case 'Play Music Intro':
                this.playMusicWithIntro('intro', 'music2');
                break;
            case 'Stop Music':
                this.pauseMusic();
                break;
            case 'Play Sound 2':
                this.playSound('thunk');
                break;
            case 'Stop Sound':
                this.stopSounds();
                break;
            case 'Play Vocal':
                this.playVocal('voice');
                break;
            case 'Stop Vocal':
                this.pauseVocal();
                break;
            case 'Create Bar':
                this.createValueBar('player', 500, 10, 100, 10, 2000, 0x00ff00, 0xff0000);
                break;
            case 'Damage':
                this.barList.player.value -= 10;
                break;
            case 'Heal':
                this.barList.player.value += 10;
                break;
            case 'Destroy Bar':
                this.destroyValueBar('player');
                break;
            case 'addFullPageDialog1':
                this.addFullPageDialog("On the other score=~score~ hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.");
                break;
            case 'Skip':
                this.timelineAdvance();
                break;
            case 'show Message':
                this.showMessage(params[0]);
                break;
            case 'Show Achievements':
                this.showAchievements();
            break;

            case 'Reset Achievements':
                this.resetAchievements();
                break;
            case 'Open Shop':
                this.openShop();
            break;
            
            case 'Add Cash':
                this.cash += 100;
                break;
            case 'Show Message':
                this.showMessage('This is a message');
                break;
            case 'Open Inventory':
                this.openInventory();
                break;
            case 'Floating Nums':
                for (let i = 0; i < 10; i++) {
                    const randomNumber = Phaser.Math.Between(1, 99);
                    const randomx = Phaser.Math.Between(200, 600);
                    const randomy = Phaser.Math.Between(200, 400);
                    this.addFloatingNumber(randomx, randomy, randomNumber.toString());
                }
            break;

        }

    }

// =====================================================
// Template Functions - Do not change anything below this
// =====================================================

    constructor() {
        super();

                // Game Settings that the user fills in.
        this.gmaeTitle = 'My Game'
        this.uniqueGameID = 'somerandomidnumber';
        this.backgroundColor = 0x000000;
        this.score = 0;
        this.cash = 0;
        this.mousePointerFieldIcon = '↖'
        this.images = [];
        this.audios = [];
        this.scripts = [ ];
        this.externalScripts = [];
        this.styles = {};
        this.shopItems = {};
        this.timeline = [];
        this.leftSideText = [];
        this.achievements = [];

        this.user_constructor();

        // Non ediatble c

        this.origins = {
            tLeft: [0, 0],
            cLeft: [0, .5],
            bLeft: [0, 1],
            tCenter: [0.5, 0],
            cCenter: [0.5, .5],
            bCenter: [0.5, 1],
            tRight: [1, 0],
            cRight: [1, .5],
            bRight: [1, 1],
        };



        // ========================== Not manual settings ======================

        // Game State Values
        this.resourcesLoaded = false;
        this.created = false;
        this.inStep = false; // id the last step still running?
        this.gameEnded = false; // set to true when the game is fully over.
        this.paused = false;
        this.pausedWMouse = false;

        // Time Tracking
        this.actualTime = 0; // set to Date.now() in milliseconds; 
        this.stepDuration = 0; // time that passed since last step;
        this.lastStepsTime = 0; // only used to calculate stepDuration
        this.runTime = 0; // milliseconds the gave as bee run for.
        this.stepCount = 0; // Number of game steps passed.
        this.timelinePaused = true;
        this.timelineTime = false;
        this.timelineInd = -1;
        this.timelineDeadline = -1;

        // Game Assets
        this.currentVolume = 1;
        this.displayVolume = 100;
        this.loadingDiv = null; // Add this line to store the div reference
        this.completed = [];
        this.pauseBackground = null;
        this.pauseButton = null;
        this.dialogBox1 = [];
        this.dialogBox2 = [];
        this.dialogText = [];
        this.dialogImage = [];
        this.fullPageDialog = null;
        this.floatingNumbers = [];
        this.selfFillText = [];
        this.barList = {};
        this.backdrop = null;
        this.background = null;
        this.leftSideTextField = null;
        this.highScoreTextFields = [];

        this.mousePointerField = null;
        this.mousePointerField_x = 0;
        this.mousePointerField_y = 0;
        this.musicArr = {};
        this.soundArr = {};
        this.currentMusic = null;
        this.currentVocals = null;
        this.skipButton = null;
        this.messageText = null;
        this.messageList = [];
        this.achievementsFields = [];
        this.achievementsGFields = [];
        this.achievementsCount = 0;
        this.titleFields = null;
        this.backButton = null;
        this.shopPageNum = 1;
        this.achievementPageNum = 1;
        this.maxAchievementPage = 0;
        this.pageNumberField = null;
        this.shopTextFields = [];
        this.shopBuyButtons = []
        this.prevButton = null;
        this.nextButton = null;
        this.iconList = [];
        this.shopMaxPage = null;
        this.inventoryCount = 0;
        this.inventoryPage = 1;
        this.maxInventoryPage = 1;
        this.borderList = [];
        this.mainButtons = [];
    }

    preload() {

        // Create the loading div
        this.loadingDiv = document.createElement('div');
        this.loadingDiv.style.position = 'absolute';
        this.loadingDiv.style.top = '50%';
        this.loadingDiv.style.left = '50%';
        this.loadingDiv.style.transform = 'translate(-50%, -50%)';
        this.loadingDiv.style.color = 'white';
        this.loadingDiv.style.fontSize = '24px';
        this.loadingDiv.style.fontFamily = 'Arial, sans-serif';
        this.loadingDiv.style.zIndex = '1000';
        this.loadingDiv.textContent = 'Loading 0%';
        document.body.appendChild(this.loadingDiv);

        // Load Scripts
        for (let i = 0; i < this.images.length; i++) {
            if(typeof this.images[i] == 'array'){
                this.load.image(this.images[i][0], this.images[i][1]);
            }else{
                let myUrl = this.images[i];
                let myName = myUrl.replace("https://play.rosebud.ai/assets/", ""); 
                let index = myName.indexOf('.');
                myName = myName.substring(0, index);
                this.load.image(myName, myUrl);
            }
        }
        for (let i = 0; i < this.audios.length; i++) {
            this.load.audio(this.audios[i][1], this.audios[i][2]);
        }
        for (let i = 0; i < this.scripts.length; i++) {
            this.load.script(this.scripts[i][0], this.scripts[i][1]);
        }
        for (let i = 0; i < this.externalScripts.length; i++) {
            const script = document.createElement('script');
            script.src = this.externalScripts[i] + '?t=' + Date.now();
            script.async = true; // Optional: Load the script asynchronously
            document.head.appendChild(script);
        }

        // Update Loading alue
        this.load.on('progress', (progress) => {
            let val = parseInt(progress * 95);
            // Update the loading div content
            this.loadingDiv.textContent = 'Loading ' + val + '%';
            if (val == 95) {
                this.resourcesLoaded = true;
            }
        });
    }

    create() {
        // Place script vars.
        for (let i = 0; i < this.scripts.length; i++) {
            let scriptName = this.scripts[i][0];
            if (scriptName in window) {
                this[scriptName] = window[scriptName];
            } else {
                console.error(scriptName + ' not loaded from external script!');
            }
        }

        this.loadAchievements();

        this.createOverlays();

        // Setup step event
        this.time.addEvent({
            delay: 15,
            callback: this.update15ms,
            callbackScope: this,
            loop: true
        });

        // auto pause when user clicks away
        window.addEventListener('blur', () => {
            if (!this.paused) {
                this.pauseGame();
            }
        });

        this.user_create();

        this.created = true;
    }

    setForGroup(target, property, value) {
        for (let i = 0; i < target.length; i++) {
            target[i][property] = value;
        }

    }

    doFunction(name, params, tarObject = null) {
        if (!this.resourcesLoaded || !this.created || this.gameEnded || this.paused) {
            return;
        }

        if (tarObject !== null && tarObject.deactivated) {
            return;
        }

        name = name.replace('_', ' ');

        switch(name){
            case 'Close.Inventory':
                this.closeInventory();
                return;
            break;
            case 'Prev.Inventory':
                this.prevInventoryPage();
                return;
            break;
            case 'Next.Inventory':
                this.nextInventoryPage();
                return;
            break;
            case 'Close.Shop':
                this.closeShop();
                return;
            break;
            case 'buy.shop':
                this.shopBuy(params[0]);
                return;
            break;
            case 'Prev.Shop':
                this.prevShopPage();
                return;
            break;
            case 'Next.Shop':
                this.nextShopPage();
                return;
            break;
            case 'Prev.Achievement':
                this.prevAchievementPage();
                return;
            break;
            case 'Next.Achievement':
                this.nextAchievementPage();
                return;
            break;
            case 'Close.Achievements':
                this.closeAchievements();
                return;
            break;
        }

        this.user_function_hub(name, params, tarObject);
    }

    updateSoundVolume(level = null, tar = null) {
        if (level > 1) {
            level = 1;
        } else if (level < 0) {
            level = 0;
        }

        if (level != this.currentVolume || level === null) {
            if (level === null) {
                level = this.currentVolume;
            } else {
                this.currentVolume = level;
            }

            this.displayVolume = Math.round(this.currentVolume * 100);

            for (let i = 0; i < this.audios.length; i++) {
                if (tar === null || tar == this.audios[i][1]) {
                    let def = this.audios[i];
                    let mod = def[0];
                    let name = def[1];
                    let nameB = name + '~B';
                    let nameC = name + '~C';

                    Object.entries(this.musicArr).forEach(([key, entry]) => {
                        if (key == name) {
                            entry.setVolume(level * mod);
                        }
                    });

                    Object.entries(this.soundArr).forEach(([key, entry]) => {
                        if (key == name || key == nameB || key == nameC) {
                            entry.setVolume(level * mod);
                        }
                    });
                }
            }
        }
    }

    playMusicWithIntro(intro, main = null, restart = false) {
        if (main !== null && !(main in this.musicArr)) {
            this.musicArr[main] = this.sound.add(main);
            this.musicArr[main].setLoop(true);
            this.updateSoundVolume(null, main);
        }

        if (!(intro in this.musicArr)) {
            this.musicArr[intro] = this.sound.add(intro);
            this.musicArr[intro].setLoop(false);
            this.updateSoundVolume(null, intro);
            if (main !== null) {
                this.musicArr[intro].once('complete', () => {
                    this.playMusic(main, true);
                });
            }
        }

        if (this.currentMusic && this.currentMusic != intro) {
            if (this.currentMusic == main) {
                if (restart) {
                    if (this.musicArr[this.currentMusic].isPlaying) {
                        this.musicArr[this.currentMusic].pause();
                    }
                } else {
                    return;
                }
            } else {
                if (this.musicArr[this.currentMusic].isPlaying) {
                    this.musicArr[this.currentMusic].pause();
                }
            }
        }
        this.currentMusic = intro;

        if (!this.musicArr[intro].isPlaying) {
            if (restart == false && this.musicArr[intro].seek != 0) {
                this.musicArr[intro].resume();
            } else {
                this.musicArr[intro].stop();
                this.musicArr[intro].play();
            }
        } else if (restart) {
            this.musicArr[intro].stop();
            this.musicArr[intro].play();
        }
    }

    playMusic(tar, restart = false) {
        if (!(tar in this.musicArr)) {
            this.musicArr[tar] = this.sound.add(tar);
            this.updateSoundVolume(null, tar);
            this.musicArr[tar].setLoop(true);
        }

        if (this.currentMusic && this.currentMusic != tar) {
            if (this.musicArr[this.currentMusic].isPlaying) {
                this.musicArr[this.currentMusic].pause();
            }
        }
        this.currentMusic = tar;

        if (!this.musicArr[tar].isPlaying) {
            if (restart == false && this.musicArr[tar].seek != 0) {
                this.musicArr[tar].resume();
            } else {
                this.musicArr[tar].stop();
                this.musicArr[tar].play();
            }
        } else if (restart) {
            this.musicArr[tar].stop();
            this.musicArr[tar].play();
        }
    }

    pauseMusic() {
        let tar = this.currentMusic;
        if (tar !== null && tar in this.musicArr) {
            if (this.musicArr[tar].isPlaying) {
                this.musicArr[tar].pause();
            } else {
                this.musicArr[tar].stop();
            }
        }
    }



    playVocal(tar, restart = false) {
        if (!(tar in this.musicArr)) {
            this.musicArr[tar] = this.sound.add(tar);
            this.updateSoundVolume(null, tar);
            this.musicArr[tar].setLoop(false);
        }

        if (this.currentVocals && this.currentVocals != tar) {
            if (this.musicArr[this.currentVocals].isPlaying) {
                this.musicArr[this.currentVocals].pause();
            }
        }
        this.currentVocals = tar;

        if (!this.musicArr[tar].isPlaying) {
            if (restart == false && this.musicArr[tar].seek != 0) {
                this.musicArr[tar].resume();
            } else {
                this.musicArr[tar].stop();
                this.musicArr[tar].play();
            }
        } else if (restart) {
            this.musicArr[tar].stop();
            this.musicArr[tar].play();
        }
    }

    pauseVocal() {
        let tar = this.currentVocals;
        if (tar !== null && tar in this.musicArr) {
            if (this.musicArr[tar].isPlaying) {
                this.musicArr[tar].pause();
            } else {
                this.musicArr[tar].stop();
            }
        }
    }

    playSound(tar) {
        let sound1 = tar;
        let sound2 = tar + '~B';
        let sound3 = tar + '~C';
        if (!(sound1 in this.soundArr)) {
            // Initiate sound
            this.soundArr[sound1] = this.sound.add(tar);
            this.soundArr[sound2] = this.sound.add(tar);
            this.soundArr[sound3] = this.sound.add(tar);
            this.updateSoundVolume(null, tar);
        }
        if (this.soundArr[sound1].isPlaying) {
            if (this.soundArr[sound2].isPlaying) {
                if (this.soundArr[sound3].isPlaying) {
                    if (this.soundArr[sound1].seek > this.soundArr[sound2].seek) {
                        this.soundArr[sound1].stop();
                        this.soundArr[sound1].play();
                    } else if (this.soundArr[sound2].seek > this.soundArr[sound3].seek) {
                        this.soundArr[sound2].stop();
                        this.soundArr[sound2].play();
                    } else {
                        this.soundArr[sound3].stop();
                        this.soundArr[sound3].play();
                    }
                } else {
                    this.soundArr[sound3].play();
                }
            } else {
                this.soundArr[sound2].play();
            }
        } else {
            this.soundArr[sound1].play();
        }
    }

    stopSounds() {
        Object.values(this.soundArr).forEach(sound => {
            if (sound.isPlaying) {
                sound.stop();
            }
        });
    }

    createOverlays() {

        // Create Mouse Pointer
        if (this.mousePointerFieldIcon == '◣') {
            this.mousePointerField_x = -5;
            this.mousePointerField_y = -36;
        } else if (this.mousePointerFieldIcon == '↘') {
            this.mousePointerField_x = -32;
            this.mousePointerField_y = -36;
        } else if (this.mousePointerFieldIcon == '↖') {
            this.mousePointerField_x = -3;
            this.mousePointerField_y = -7;
        }

        this.mousePointerField = this.add.text(-1000, -1000, this.mousePointerFieldIcon, {
            fontSize: '36px Arial',
            fill: '#ff0000',
            fontStyle: 'bold',
            align: 'center',
        });

        this.mousePointerField.depth = 1000000000;

        // Create Text
        this.leftSideTextField = this.createText(10, 10, 'Not Set');

        // Generic Backdrop
        this.backdrop = this.add.rectangle(400, 300, 800, 600, 0x000000);
        this.backdrop.depth = 1000;
        this.backdrop.alpha = 0;

        // Pause Backdrop with text
        this.pauseBackground = this.add.rectangle(400, 300, 800, 600, 0x000000);
        this.pauseBackground.alpha = 0;
        this.pauseBackground.setInteractive({
            useHandCursor: true
        });
        this.pauseBackground.on('pointerdown', this.unPauseGame, this);
        this.pauseBackground.setDepth(10000);

        //Message
        this.messageText = this.createText(780, 20, '', 'messages');
        this.messageText.fadeMeToGone = 0;
        this.messageText.alpha = 0;

    }

    unPauseGame() {
        this.paused = false;
        this.pauseBackground.alpha = 0;
        this.pauseButton.destroy();
        this.pauseButton = null;
    }

    pauseGame() {
        this.paused = true;
        this.pauseBackground.alpha = 0.8;
        this.pauseButton = this.createButton(400, 250, 'Paused\n\nClick Anywhere to Resume', 'unPause');
        this.pauseButton.on('pointerdown', this.unPauseGame, this);
    }

    createValueBar(name, x, y, long, thick, depth, barColor, backgroundColor = 0x000000, enteractive = false) {
        if (name in this.barList) {
            return;
        }

        let valueBarBackground = this.add.rectangle(x, y, long, thick, backgroundColor);
        valueBarBackground.setOrigin(0, 0);
        valueBarBackground.setDepth(depth);

        let valueBar = this.add.rectangle(x, y, long, thick, barColor);
        valueBar.setOrigin(0, 0);
        valueBar.setDepth(depth + 1);

        this.barList[name] = {
            background: valueBarBackground,
            bar: valueBar,
            value: 100,
            max: 100,
            x: x,
            y: y,
            thick: thick,
            long: long,
            interactive: false,
            clicked: false,
        }

        if(enteractive !== false){
            this.enableInteractiveBar(name);
        }
    }

    destroyValueBar(name) {
        this.barList[name].bar.destroy();
        this.barList[name].background.destroy();
        delete this.barList[name];
    }

    updateValueBar(key, value = null, max = null) {
        if (value !== null) {
            this.barList[key].value = value;
        }

        if (max !== null) {
            this.barList[key].max = 1;
        }

        if (this.barList[key].clicked) {
            let rawValue = (this.input.mousePointer.x - this.barList[key].x) /
                this.barList[key].long;
            this.barList[key].value = rawValue * this.barList[key].max;

            if (!this.input.mousePointer.buttons) {
                this.barList[key].clicked = false;
            }
        }

        if (this.barList[key].value < 0) {
            this.barList[key].value = 0;
        } else if (this.barList[key].value > this.barList[key].max) {
            this.barList[key].value = this.barList[key].max;
        }

        if (this.barList[key].interactive) {
            this.barList[key].bar.width = 10;

            this.barList[key].bar.x =
                this.barList[key].background.x + 5 +
                ((this.barList[key].long - 20) *
                    (this.barList[key].value / this.barList[key].max));

        } else {
            this.barList[key].bar.width =
                this.barList[key].long *
                (this.barList[key].value / this.barList[key].max)
        }

    }

    enableInteractiveBar(name) {

        this.barList[name].interactive = true;
        let bar = this.barList[name].bar;
        let back = this.barList[name].background;

        bar.setInteractive();
        back.setInteractive();

        bar.on('pointerdown', () => {
            this.barList[name].clicked = true;
        });

        back.on('pointerdown', () => {
            this.barList[name].clicked = true;
        });
    }

    placeValueBar(x, y, name) {
        this.barList[name].bar.x = x;
        this.barList[name].bar.y = y;
        this.barList[name].background.x = x;
        this.barList[name].background.y = y;
        this.barList[name].x = x;
        this.barList[name].y = y;
    }

    updateTextDisplays() {
        let myText = '';

        for (let i = 0; i < this.leftSideText.length; i++) {
            myText = myText + this.unToken(this.leftSideText[i]) + '\n';
        }

        this.leftSideTextField.setText(myText);

        // Floating Numbers
        if (this.floatingNumbers.length > 0) {
            let newList = [];
            for (let i = 0; i < this.floatingNumbers.length; i++) {
                let tar = this.floatingNumbers[i];
                if (tar.destroyStep <= this.stepCount) {
                    tar.destroy();
                } else {
                    tar.y -= 2;
                    newList.push(tar);
                }
            }
            this.floatingNumbers = newList;
        }

        // Text Filler
        if (this.selfFillText.length > 0 && this.stepCount % 2 == 0) {
            let newList = [];
            for (let i = 0; i < this.selfFillText.length; i++) {
                let tar = this.selfFillText[i];
                if (
                    ('textToFill' in tar) &&
                    tar.displayList !== null &&
                    tar.textToFill.length > 0) {

                    let addMe = tar.textToFill.shift();
                    let setMe = tar.text + addMe;
                    tar.setText(setMe);
                    newList.push(tar);
                }
            }
            this.selfFillText = newList;
        }

    }

    showMessage(text) {
        this.messageList.push(text);
        if (this.messageList.length > 1) {
            return;
        }

        text = this.linewrapString(this.unToken(text), 30);
        this.messageText.setText(text);
        this.messageText.fadeMeToGone = 150;
        this.messageText.alpha = 1;
        this.messageText.y = 20;
    }

    makeTextSelfFill(myField, text = null) {
        if (text === null) {
            text = myField.text;
        }
        myField.textToFill = text.split('');
        myField.setText('');
        this.selfFillText.push(myField);
    }



    update15ms() {
        if (!this.resourcesLoaded || !this.created || this.inStep || this.gameEnded || this.paused) {
            return;
        }
        this.actualTime = Date.now();
        //message Fade

        // Check volume
        if ('volume' in this.barList) {
            let newVolume = this.barList['volume'].value;
            this.updateSoundVolume(newVolume);
        }

        if (this.messageText.fadeMeToGone > 0) {
            this.messageText.fadeMeToGone--;
            this.messageText.y -= .3;

            if (this.messageText.fadeMeToGone < 100) {
                this.messageText.alpha = this.messageText.fadeMeToGone / 100;
                this.messageList.shift();
                if (this.messageList.length > 0) {
                    let newMessage = this.messageList[0];
                    newMessage = this.linewrapString(this.unToken(newMessage), 30);
                    this.messageText.setText(newMessage);
                    this.messageText.fadeMeToGone = 150;
                    this.messageText.alpha = 1;
                    this.messageText.y = 20;
                }
            }
        }

        this.mousePointerField.x = this.input.mousePointer.x + this.mousePointerField_x;
        this.mousePointerField.y = this.input.mousePointer.y + this.mousePointerField_y;
        if (this.actualTime % 400 > 200) {
            this.mousePointerField.setColor('#ffffff');
        } else {
            this.mousePointerField.setColor('#ff0000');
        }

        if (this.pausedWMouse) {
            this.setForGroup(this.mainButtons, 'deactivated', true);
            return;
        }
        this.setForGroup(this.mainButtons, 'deactivated', false);


        // Remove the loading div if it exists
        if (this.loadingDiv) {
            document.body.removeChild(this.loadingDiv);
            this.loadingDiv = null;
        }

        this.inStep = true;
        this.stepDuration = this.actualTime - this.lastStepsTime;
        this.lastStepsTime = this.actualTime;
        this.runTime += this.stepDuration;
        this.stepCount++;

        this.updateTextDisplays();
        this.evalAchievements();

        // display all health values
        Object.keys(this.barList).forEach(key => {
            this.updateValueBar(key);
        });

        if (!this.timelinePaused) {
            this.timelineTime += this.stepDuration;
            if (this.timelineDeadline === null || this.timelineDeadline > this.timelineTime) {
                // Do the function
                if (this.timeline[this.timelineInd].length > 1) {
                    this.timelineDoFunctions();
                }
            } else {
                // Eval and do the next function.
                this.timelineInd++;
                if (this.timeline.length > this.timelineInd) {
                    let timeDo = this.timeline[this.timelineInd][0];

                    if (timeDo === null) {
                        this.timelineDeadline = null;
                    } else if (typeof timeDo === 'number') {
                        if (timeDo === 0) {
                            // Setting the dedline to -1 ensures that the next iteration will advance the timeline.
                            this.timelineDeadline = -1;
                        } else {
                            this.timelineDeadline = this.timelineTime + (timeDo * 1000);
                        }
                    } else {
                        // other data type found.
                    }

                    if (this.timeline[this.timelineInd].length > 1) {
                        this.timelineDoFunctions();
                    }
                } else {
                    this.timelinePaused = true;
                }
            }
        }

        // step code
        this.user_step();

        this.inStep = false;
    }

    addFloatingNumber(x, y, text, text_color = '#ff0000', depth = 999) {
        let myText = this.createText(x, y, text, 'floatingText');
        myText.destroyStep = this.stepCount + 30;
        this.floatingNumbers.push(myText);
    }

    timelineDoFunctions() {
        let seg = this.timeline[this.timelineInd];
        for (let i = 1; i < seg.length; i++) {
            let myDef = seg[i].split('|');
            if (myDef.length == 1) {
                this.doFunction(myDef[0], null);
            } else {
                let myFunc = myDef.shift();
                this.doFunction(myFunc, myDef);
            }
        }
    }

    timelineAdvance() {
        this.timelineDeadline = -1;
        this.timelinePaused = false;
    }

    timelineRestart() {
        this.timelineDeadline = -1;
        this.timelinePaused = false;
        this.timelineInd = -1;
        this.timelineTime = 0;
    }

    timelinePause(pause = true) {
        this.timelinePaused = pause;
    }

    timelineJumpTo(name = null) {
        this.timelineDeadline = -1;
        this.timelinePaused = false;
        if (typeof segment[0] === null) {
            // Do nothing
        } else if (typeof segment[0] === 'number') {
            this.timelineInd = name - 1; // this will be incramented by the timeline runner.
        } else {
            for (let i = 0; i < seg.length; i++) {
                if (this.timeline[i].includes(name)) {
                    this.timelineInd = i;
                    break;
                }
            }
        }
    }

    addBorder(button, def) {

        let defArr = def.split(' ');

        let size = parseInt(defArr[0]) * 2;
        let color = defArr[1];

        if (color.charAt(0) == '#') {
            color = color.replace('#', '0x');
        }

        let obj = this.add.rectangle(
            button.x, button.y,
            button.width + size, button.height + size,
            color
        );

        obj.setDepth(button.depth);

        button.setDepth(parseInt(button.depth) + 1);

        return obj;
    }

    createButton(x, y, text, style) {
        let textArr = text.split('|');
        let visualText = textArr[0].split('.')[0];

        visualText = this.unToken(visualText);

        let myStyle = null;
        if (typeof style == 'string') {
            if (style in this.styles) {
                myStyle = {
                    ...this.styles.base,
                    ...this.styles.button,
                    ...this.styles[style]
                };
            } else {
                myStyle = {
                    ...this.styles.base,
                    ...this.styles.button,
                    ...{
                        color: style
                    }
                };
            }
        } else if (typeof style == 'object' && style) {
            myStyle = {
                ...this.styles.base,
                ...this.styles.button,
                ...style
            };
        } else {
            myStyle = {
                ...this.styles.base,
                ...this.styles.button
            };
        }

        let button = this.add.text(
            x,
            y,
            visualText,
            myStyle
        );

        button.setOrigin(this.origins[myStyle.origin][0], this.origins[myStyle.origin][1]);
        button.setDepth(myStyle.depth);
        button.myOriginalStyle = myStyle;
        button.deactivated = false;

        if ('border2' in myStyle) {
            button.myBorder2 = this.addBorder(button, myStyle.border2);
            button.on('destroy', () => {
                button.myBorder2.destroy();
            });
        }

        if ('border1' in myStyle) {
            button.myBorder1 = this.addBorder(button, myStyle.border1);
            button.on('destroy', () => {
                button.myBorder1.destroy();
            });
        }

        // Add pointer down effect
        button.on('pointerdown', () => {
            if (button.deactivated) {
                return;
            }
            if ('downSound' in button.myOriginalStyle) {
                this.playSound(button.myOriginalStyle.downSound);
            }
            if ('flash' in button.myOriginalStyle) {
                button.setBackgroundColor(button.myOriginalStyle.flash);
            }
        });

        // Add pointer up effect
        button.on('pointerup', () => {
            if (button.deactivated) {
                return;
            }
            if ('upSound' in button.myOriginalStyle) {
                this.playSound(button.myOriginalStyle.upSound);
            }
            button.setBackgroundColor(button.myOriginalStyle.backgroundColor);
        });

        button.on('pointerout', () => {
            button.setBackgroundColor(button.myOriginalStyle.backgroundColor);
        });

        button.setInteractive();

        if (textArr.length == 1) {
            button.on('pointerup', () => this.doFunction(textArr[0], [], button), this);
        } else {
            let tar = textArr.shift()
            button.on('pointerup', () => this.doFunction(tar, textArr, button), this);
        }

        return button;
    }

    createText(x, y, text, style) {
        text = this.unToken(text);

        let myStyle = null;
        if (typeof style == 'string') {
            if (style in this.styles) {
                myStyle = {
                    ...this.styles.base,
                    ...this.styles[style]
                };
            } else {
                myStyle = {
                    ...this.styles.base,
                    ...{
                        color: style
                    }
                };
            }
        } else if (typeof style == 'object' && style) {
            myStyle = {
                ...this.styles.base,
                ...style
            };
        } else {
            myStyle = {
                ...this.styles.base,
            };
        }

        let button = this.add.text(
            x,
            y,
            text,
            myStyle
        );

        button.setOrigin(this.origins[myStyle.origin][0], this.origins[myStyle.origin][1]);
        button.setDepth(myStyle.depth);

        return button;
    }

    createIcon(x, y, icon, depth) {
        let myIcon = this.add.image(x, y, icon);
        myIcon.setDepth(depth);
        myIcon.setOrigin(.5, .5);
        return myIcon;
    }

    showTitleScreen() {

        this.backdrop.alpha = 0.9;
        // Add the title
        this.titleField = this.createText(400, 50, this.gameTitle, 'titleScreenTitle');

        this.showHighScores();
    }

    showGameOverScreen() {
        this.gameEnded = true;
        this.mousePointerField.alpha = 0;
        this.saveHighScore();

        this.backdrop.alpha = 0.9;

        // Add the title
        this.createText(400, 50, "Game Over", 'gameOverTitle');
        this.createText(400, 130, "Please refresh to try again", 'gameOverSubTitle');

        this.showHighScores();
    }

    showWinScreen() {
        this.gameEnded = true;
        this.mousePointerField.alpha = 0;
        this.saveHighScore();

        this.backdrop.alpha = 0.9;

        this.createText(400, 50, "You Win!", 'gameWonTitle');
        this.createText(400, 130, "Refresh to Play again", 'WonSubTitle');

        this.showHighScores();
    }

    // ====================== High Score

    showHighScores() {

        this.hideHighScores();

        for (let i = 0; i <= 10; i++) {
            this.highScoreTextFields[i] = this.createText(400, 250 + i * 30, '', 'highScore');
            this.highScoreTextFields[i].alpha = 0;
        }

        this.highScoreTextFields[0].setText("Top Ten Scores");

        const highScores = this.loadHighScores();

        this.highScoreTextFields[0].alpha = 1;
        for (let i = 1; i <= 10; i++) {
            let scoreInd = i - 1
            this.highScoreTextFields[i].alpha = 1;
            if (scoreInd < highScores.length) {
                this.highScoreTextFields[i].setText(i + ': ' + highScores[scoreInd])
                if (highScores[scoreInd] == this.score) {
                    this.highScoreTextFields[i].setColor('#ff6666');
                } else {
                    this.highScoreTextFields[i].setColor('#ffffff');
                }
            } else {
                this.highScoreTextFields[i].setText(i + ': --------');
                this.highScoreTextFields[i].setColor('#ffffff');
            }
        }
    }

    hideHighScores() {
        for (let i = 0; i <= 10; i++) {
            if (this.highScoreTextFields[i]) {
                this.highScoreTextFields[i].destroy();
                this.highScoreTextFields[i] = null;
            }
        }
    }

    loadHighScores() {
        const scores = JSON.parse(localStorage.getItem(this.uniqueGameID + '_highScores')) || [];
        return scores;
    }

    saveHighScore() {
        if (this.score == 0) {
            return;
        }

        const highScores = this.loadHighScores();
        highScores.push(this.score);
        highScores.sort((a, b) => b - a);
        console.log(highScores);
        localStorage.setItem(this.uniqueGameID + '_highScores', JSON.stringify(highScores.slice(0, 10)));
    }

    resetHighScores() {
        localStorage.setItem(this.uniqueGameID + '_highScores', JSON.stringify([]));
    }

    // ========= Achievements

    evalAchievements() {
        let update = false;
        for (let i = 0; i < this.achievements.length; i++) {
            if (this.achievements[i].have == false) {
                let result = this.achievements[i].check();
                if (result) {
                    this.achievements[i].have = true;
                    update = true;
                    this.showMessage("Achievement Made\n" + this.achievements[i].name);

                }
            }
        }
        if (update) {
            this.saveAchievements();
        }
    }

    showAchievements() {
        this.backdrop.alpha = 1;
        this.pausedWMouse = true;

        this.titleField = this.createText(400, 15, 'Achievements', 'overlayTitle');

        this.backButton = this.createButton(100, 15, "Close.Achievements", 'overlayControl');

        this.maxAchievementPage = 1 + Math.floor(this.achievements.length / 20);

        let maxInd = this.achievementPageNum * 15;
        let minInd = maxInd - 15;
        let vpos = 0;
        let hpos = 40;

        for (let i = 0; i < this.achievements.length; i++) {
            if (i >= minInd && i < maxInd) {

                if ('icon' in this.achievements[i]) {
                    hpos = 70;
                    this.iconList.push(
                        this.createIcon(50, 60 + vpos * 30, this.achievements[i].icon, 1001)
                    );
                } else {
                    hpos = 40;
                }

                let textVal = this.achievements[i].name + ': ' + this.achievements[i].desc;
                this.achievementsFields[i] = this.createText(hpos, 60 + vpos * 30, textVal,
                    this.achievements[i].have ? 'achievementsGreenLeft' : 'achievementsRedLeft',
                );

                this.achievementsGFields[i] = this.createText(760, 60 + vpos * 30,
                    this.achievements[i].have ? 'achievementsGreenRight' : 'achievementsRedRight',
                );
                vpos++
            }
        }

        if (this.achievementPageNum > 1) {
            this.prevButton = this.createButton(200, 550, "Prev.Achievement", 'overlayControl');
        }
        if (this.achievementPageNum < this.maxAchievementPage) {
            this.nextButton = this.createButton(600, 550, "Next.Achievement", 'overlayControl');
        }
        if (this.maxAchievementPage > 1) {
            this.pageNumberField = this.createText(400, 550, 'Page ' + this.achievementPageNum, 'overlayTextCentered');
        }
    }

    prevAchievementPage() {
        if (this.achievementPageNum != 0) {
            this.achievementPageNum--;
            this.clearAchievements();
            this.showAchievements();
        }
    }

    nextAchievementPage() {
        if (this.achievementPageNum < this.maxAchievementPage) {
            this.achievementPageNum++;
            this.clearAchievements();
            this.showAchievements();
        }
    }

    clearAchievements() {
        for (let i = 0; i < this.achievements.length; i++) {
            if (this.achievementsFields[i]) {
                this.achievementsFields[i].destroy();
                this.achievementsGFields[i].destroy();
            }
        }
        this.backButton.destroy();
        this.titleField.destroy();

        if (this.prevButton) {
            this.prevButton.destroy();
            this.prevButton = null;
        }
        if (this.nextButton) {
            this.nextButton.destroy();
            this.nextButton = null;
        }

        if (this.pageNumberField) {
            this.pageNumberField.destroy();
            this.pageNumberField = null;
        }

        while (this.iconList.length) {
            let myIcon = this.iconList.pop();
            if (myIcon)
                myIcon.destroy();
        }

    }

    closeAchievements() {
        this.clearAchievements();
        this.backdrop.alpha = 0;
        this.pausedWMouse = false;
    }

    loadAchievements() {
        let scores = JSON.parse(localStorage.getItem(this.uniqueGameID + '_achievements')) || [];
        for (let i = 0; i < this.achievements.length; i++) {
            let name = this.achievements[i].name.replace(" ", "_");
            this.achievements[i].have = scores[name] ? true : false;
        }
    }

    saveAchievements() {
        let data = {};
        for (let i = 0; i < this.achievements.length; i++) {
            let name = this.achievements[i].name.replace(" ", "_");
            data[name] = this.achievements[i].have;
        }
        localStorage.setItem(this.uniqueGameID + '_achievements', JSON.stringify(data));
    }

    resetAchievements() {
        for (let i = 0; i < this.achievements.length; i++) {
            this.achievements[i].have = false;
        }
        localStorage.setItem(this.uniqueGameID + '_achievements', JSON.stringify({}));
    }

    // ========================== Shop

    openShop() {
        this.backdrop.alpha = 1;
        this.pausedWMouse = true;

        this.titleField = this.createText(400, 15, 'Shop : $' + this.cash, 'overlayTitle');

        this.backButton = this.createButton(100, 15, "Close.Shop", 'overlayControl');

        let vertInd = 0
        let i = 0;
        let hPos = 100;
        // for(let i=0; i < this.shopItems.length; i++ ){
        Object.entries(this.shopItems).forEach(([key, entry]) => {
            if (this.shopMaxPage < entry.page) {
                this.shopMaxPage = entry.page;
            }
            let myText = this.unToken(entry.text);
            if (entry.type == 'uniqueItem' || entry.type == 'repeatItem') {
                if ('bought' in entry) {
                    myText = "[x" + entry.bought + "] " + myText;
                } else {
                    myText = "[x0] " + myText;
                }
            }
            if (entry.page == this.shopPageNum) {
                if (entry.type == 'title') {
                    this.shopTextFields[i] = this.createText(400, 60 + 38 * vertInd, myText, 'OverlaySubTitle');
                    vertInd += 2;
                } else if (entry.type == 'subtitle') {
                    this.shopTextFields[i] = this.createText(400, 26 + 38 * vertInd, myText, 'OverlaySubSubTitle');
                    vertInd++;
                } else {

                    let buttonStyle = 'shopButtonBuy';
                    let textStyle = 'overlayText';
                    let myPrice = '$' + entry.price;

                    switch (this.getShopItemStatus(entry)) {
                        case 'Locked':
                            buttonStyle = 'shopButtonLocked';
                            textStyle = 'overlayLocked';
                            myPrice = 'Locked';
                            break;
                        case 'Bought':
                            buttonStyle = 'shopButtonBought';
                            textStyle = 'overlayBought';
                            myPrice = 'Bought';
                            break;
                        case '$':
                            buttonStyle = 'shopButtonPoor';
                            textStyle = 'overlayPoor';
                            break;
                    }

                    if ('icon' in entry) {
                        hPos = 140;
                        this.iconList.push(
                            this.createIcon(115, 60 + 40 * vertInd, entry.icon, 1001)
                        );
                    } else {
                        hPos = 100;
                    }

                    this.shopBuyButtons[i] = this.createButton(60, 60 + 40 * vertInd, "buy.shop|" + key, buttonStyle);

                    this.shopTextFields[i] = this.createText(hPos, 60 + 40 * vertInd, myText + ': ' + myPrice, textStyle);

                    vertInd++;
                }
            }
            i++;
        });

        if (this.shopPageNum > 1) {
            this.prevButton = this.createButton(200, 550, "Prev.Shop", 'overlayControl');
        }
        if (this.shopPageNum < this.shopMaxPage) {
            this.nextButton = this.createButton(600, 550, "Next.Shop", 'overlayControl');
        }
        if (this.shopMaxPage > 1) {
            this.pageNumberField = this.createText(400, 550, 'Page ' + this.shopPageNum, 'overlayTextCentered');
        }
    }

    getShopItemStatus(entry) {
        // Check the requirements are met.
        if (typeof entry.requires == "string") {
            if (!('bought' in this.shopItems[entry.requires])) {
                return "Locked";
            }
        } else if (typeof entry.requires == "function") {
            if (entry.requires() == false) {
                return "Locked";
            }
        }

        // unique items can only be bought once
        if (('bought' in entry) && (entry.type == 'unique' || entry.type == 'uniqueItem')) {
            return "Bought";
        }

        // Check that player has enough money
        if (entry.price > this.cash) {
            return "$";
        }

        return "OK"
    }

    shopBuy(ind) {
        let status = this.getShopItemStatus(this.shopItems[ind])

        if (status == "Locked") {
            this.showMessage('This is not currently available.');
        } else if (status == "Bought") {
            this.showMessage('You can only have one of these.');
        } else if (status == "$") {
            this.showMessage("You can't afford that.");
        } else if (status == "OK") {
            this.cash -= this.shopItems[ind].price;
            this.showMessage(this.shopItems[ind].text + '\nPurchased')
            if ('bought' in this.shopItems[ind]) {
                this.shopItems[ind].bought += 1;
            } else {
                this.shopItems[ind].bought = 1;
            }

            if (typeof this.shopItems[ind].update == "string") {
                let directive = this.shopItems[ind].update.split('|');
                let act = directive[1];
                let value = parseInt(directive[2]);
                let myPath = directive[0].split('.');
                if (myPath.length == 1) {
                    if (act == '+') {
                        this[myPath[0]] += value;
                    } else if (act == '-') {
                        this[myPath[0]] -= value;
                    } else if (act == '=') {
                        this[myPath[0]] = value;
                    }
                } else if (myPath.length == 2) {
                    if (act == '+') {
                        this[myPath[0]][myPath[1]] += value;
                    } else if (act == '-') {
                        this[myPath[0]][myPath[1]] -= value;
                    } else if (act == '=') {
                        this[myPath[0]][myPath[1]] = value;
                    }
                } else if (myPath.length == 3) {
                    if (act == '+') {
                        this[myPath[0]][myPath[1]][myPath[2]] += value;
                    } else if (act == '-') {
                        this[myPath[0]][myPath[1]][myPath[2]] -= value;
                    } else if (act == '=') {
                        this[myPath[0]][myPath[1]][myPath[2]] = value;
                    }
                } else if (myPath.length == 4) {
                    if (act == '+') {
                        this[myPath[0]][myPath[1]][myPath[2]][myPath[3]] += value;
                    } else if (act == '-') {
                        this[myPath[0]][myPath[1]][myPath[2]][myPath[3]] -= value;
                    } else if (act == '=') {
                        this[myPath[0]][myPath[1]][myPath[2]][myPath[3]] = value;
                    }
                }
            } else if (typeof this.shopItems[ind].update == "function") {
                this.shopItems[ind].update();
            }

            this.clearShop();
            this.openShop();
        }
    }

    prevShopPage() {
        if (this.shopPageNum != 0) {
            this.shopPageNum--;
            this.clearShop();
            this.openShop();
        }
    }

    nextShopPage() {
        if (this.shopPageNum < this.shopMaxPage) {
            this.shopPageNum++;
            this.clearShop();
            this.openShop();
        }
    }

    clearShop() {
        this.titleField.destroy();
        this.titleField = null;
        this.backButton.destroy();
        this.backButton = null;
        if (this.prevButton) {
            this.prevButton.destroy();
            this.prevButton = null;
        }
        if (this.nextButton) {
            this.nextButton.destroy();
            this.nextButton = null;
        }
        if (this.pageNumberField) {
            this.pageNumberField.destroy();
            this.pageNumberField = null;
        }

        let i = 0;
        Object.entries(this.shopItems).forEach(([key, entry]) => {
            if (i in this.shopTextFields && this.shopTextFields[i]) {
                this.shopTextFields[i].destroy();
                this.shopTextFields[i] = null;
            }
            if (i in this.shopBuyButtons && this.shopBuyButtons[i]) {
                this.shopBuyButtons[i].destroy();
                this.shopBuyButtons[i] = null;
            }
            i++;
        });

        while (this.iconList.length) {
            let myIcon = this.iconList.pop();
            if (myIcon)
                myIcon.destroy();
        }
    }

    closeShop() {
        this.clearShop();
        this.backdrop.alpha = 0;
        this.pausedWMouse = false;
    }

    // ========================== Inventory

    openInventory() {
        this.backdrop.alpha = 1;
        this.pausedWMouse = true;

        this.titleField = this.createText(400, 15, 'Inventory', 'overlayTitle');
        this.titleField.setOrigin(0.5);
        this.titleField.setDepth(1002);

        this.backButton = this.createButton(100, 15, "Close.Inventory", 'overlayControl');

        let i = 0;
        let pageInd = 1;
        this.inventoryCount = 0;
        let highRange = this.inventoryPage * 30;
        let lowRange = highRange - 30;
        let hPos = 0;

        Object.entries(this.shopItems).forEach(([key, entry]) => {

            if ((entry.type == 'uniqueItem' || entry.type == 'repeatItem') &&
                ('bought' in entry && entry.bought > 0)) {
                this.inventoryCount++
                if (this.inventoryCount > lowRange && this.inventoryCount <= highRange) {
                    // show this
                    pageInd++;
                    let myText = this.unToken(entry.text);
                    if (entry.bought < 10) {
                        myText = '   [x' + entry.bought + '] ' + myText;
                    } else if (entry.bought < 100) {
                        myText = '  [x' + entry.bought + '] ' + myText;
                    } else if (entry.bought < 1000) {
                        myText = ' [x' + entry.bought + '] ' + myText;
                    } else {
                        myText = '[x' + entry.bought + '] ' + myText;
                    }

                    if ('icon' in entry) {
                        hPos = 30;
                        this.iconList.push(
                            this.createIcon(pageInd % 2 ? 430 : 40, 35 + 30 * (pageInd >> 1), entry.icon, 1001)
                        );
                    } else {
                        hPos = 0;
                    }

                    this.shopTextFields[i] = this.createText(pageInd % 2 ? 400 + hPos : 10 + hPos, 35 + 30 * (pageInd >> 1), myText, 'overlayText');

                }
            }
            i++;

        });



        this.maxInventoryPage = Math.ceil((this.inventoryCount) / 30);

        if (this.maxInventoryPage < 1) {
            this.maxInventoryPage = 1;
        }

        if (this.inventoryPage > this.maxInventoryPage) {
            this.inventoryPage = this.maxInventoryPage;
            this.closeInventory();
            this.openInventory();
        }

        if (this.inventoryPage > 1) {
            this.prevButton = this.createButton(200, 550, "Prev.Inventory", 'overlayControl');
        }
        if (this.inventoryPage < this.maxInventoryPage) {
            this.nextButton = this.createButton(600, 550, "Next.Inventory", 'overlayControl');
        }

        if (this.maxInventoryPage > 1) {
            this.pageNumberField = this.createText(400, 550, 'Page ' + this.inventoryPage, 'overlayTextCentered');
        }
    }

    prevInventoryPage() {
        if (this.inventoryPage != 0) {
            this.inventoryPage--;
            this.clearInventory();
            this.openInventory();
        }
    }

    nextInventoryPage() {
        if (this.inventoryPage < this.maxInventoryPage) {
            this.inventoryPage++;
            this.clearInventory();
            this.openInventory();
        }
    }

    clearInventory() {
        this.titleField.destroy();
        this.titleField = null;
        this.backButton.destroy();
        this.backButton = null;

        if (this.prevButton) {
            this.prevButton.destroy();
            this.prevButton = null;
        }
        if (this.nextButton) {
            this.nextButton.destroy();
            this.nextButton = null;
        }

        if (this.pageNumberField) {
            this.pageNumberField.destroy();
            this.pageNumberField = null;
        }

        let i = 0;
        Object.entries(this.shopItems).forEach(([key, entry]) => {
            if (i in this.shopTextFields && this.shopTextFields[i]) {
                this.shopTextFields[i].destroy();
                this.shopTextFields[i] = null;
            }
            if (i in this.shopBuyButtons && this.shopBuyButtons[i]) {
                this.shopBuyButtons[i].destroy();
                this.shopBuyButtons[i] = null;
            }
            i++;
        });

        while (this.iconList.length) {
            let myIcon = this.iconList.pop();
            if (myIcon)
                myIcon.destroy();
        }
    }

    closeInventory() {
        this.clearShop();
        this.backdrop.alpha = 0;
        this.pausedWMouse = false;
    }



    // ========================= 


    doOnce(tag) {
        if (this.completed.includes(tag)) {
            return false;
        }
        this.completed.push(tag);
        return true;
    }

    linewrapString(inputString, maxLength) {
        const words = inputString.split(' ');
        let segments = [];
        let currentSegment = '';

        for (let word of words) {
            if ((currentSegment + word).length <= maxLength) {
                currentSegment += (currentSegment ? ' ' : '') + word;
            } else {
                if (currentSegment) segments.push(currentSegment);
                currentSegment = word;
            }
        }

        if (currentSegment) segments.push(currentSegment);

        return segments.join('\n');
    }

    addDialog(ind, image, color, text) {
        this.backdrop.alpha = 1;
        text = this.linewrapString(this.unToken(text), 36);

        let indY = 130 * ind;
        let indX = 600 * (ind % 2)

        if (color !== null || color !== 'null') {
            this.dialogBox1[ind] = this.add.rectangle(indX + 100, indY + 100, 100, 100, 0xffffff);
            this.dialogBox2[ind] = this.add.rectangle(indX + 100, indY + 100, 96, 96, color);
            this.dialogBox1[ind].depth = 1002;
            this.dialogBox2[ind].depth = 1003;
        } else {
            this.dialogBox1[ind] = {};
            this.dialogBox2[ind] = {};
        }

        if (image !== null || image !== 'null') {
            this.dialogImage[ind] = this.add.image(indX + 100, indY + 100, image);
            this.dialogImage[ind].depth = 1004;
            this.dialogImage[ind].setOrigin(0.5, 0.5);
        } else {
            this.dialogImage[ind] = {};
        }

        this.dialogText[ind] = this.createText(400, 50 + indY, text, 'overlayTextCentered');
        this.dialogText[ind].setOrigin(.5, 0);
        this.dialogText[ind].setDepth(1002);

        this.makeTextSelfFill(this.dialogText[ind]);

        if (this.skipButton == null) {
            this.skipButton = this.createButton(700, 580, 'Skip', 'overlayControl');
        }

    }

    unToken(text) {
        let textArr = text.split('~');
        let newText = '';
        for (let i = 0; i < textArr.length; i++) {
            if (i % 2 == 0) {
                newText = newText + textArr[i];
            } else {
                let myPath = textArr[i].split('.');
                if (myPath.length == 1 &&
                    (myPath[0] in this)
                ) {
                    newText = newText + this[myPath[0]];
                } else if (myPath.length == 2 &&
                    (myPath[0] in this) &&
                    (myPath[1] in this[myPath[0]])
                ) {
                    newText = newText + this[myPath[0]][myPath[1]];
                } else if (myPath.length == 3 &&
                    (myPath[0] in this) &&
                    (myPath[1] in this[myPath[0]]) &&
                    (myPath[2] in this[myPath[0]][myPath[1]])
                ) {
                    newText = newText + this[myPath[0]][myPath[1]][myPath[2]];
                } else if (myPath.length == 4 &&
                    (myPath[0] in this) &&
                    (myPath[1] in this[myPath[0]]) &&
                    (myPath[2] in this[myPath[0]][myPath[1]]) &&
                    (myPath[2] in this[myPath[0]][myPath[1]][myPath[2]])
                ) {
                    newText = newText + this[myPath[0]][myPath[1]][myPath[2]][myPath[3]];
                } else {
                    newText = newText + '---';
                }
            }
        }
        return newText;
    }

    addFullPageDialog(text) {
        this.backdrop.alpha = 1;
        this.fullPageDialog = this.createText(20, 20, '', 'overlayDialog');
        text = this.linewrapString(this.unToken(text), 50);
        this.makeTextSelfFill(this.fullPageDialog, text);

        if (this.skipButton == null) {
            this.skipButton = this.createButton(700, 580, 'Skip', 'overlayControl');
        }
    }

    clearDialog(ind = null) {

        if (this.fullPageDialog != null) {
            this.fullPageDialog.destroy();
            this.fullPageDialog = null;
        } else if (ind === null) {
            for (let i = 0; i < this.dialogText.length; i++) {
                this.clearDialog(i);
            }
        } else {
            this.dialogText[ind].destroy();
            this.dialogBox1[ind].destroy();
            this.dialogBox2[ind].destroy();
            this.dialogImage[ind].destroy();
        }
    }

    closeDialog(ind = null) {
        this.clearDialog(ind);
        this.backdrop.alpha = 0;
        this.skipButton.destroy();
        this.skipButton = null;
    }

    checkRectOverlap(rect1, rect2) {
        return !(rect1.x + rect1.width < rect2.x ||
            rect1.x > rect2.x + rect2.width ||
            rect1.y + rect1.height < rect2.y ||
            rect1.y > rect2.y + rect2.height);
    }

    checkForCollision(x1, y1, h1, w1, x2, y2, h2, w2) {
        return !(x1 + w1 < x2 || x1 > x2 + w2 || y1 + h1 < y2 || y1 > y + h2);
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
    scene: Example,
    dom: {
        createContainer: true
    },
    css: {
        cursor: 'none'
    }
};

window.phaserGame = new Phaser.Game(config);
