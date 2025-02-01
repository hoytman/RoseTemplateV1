styles = {
            base: {
                fontFamily: 'Arial',
                fontSize: 24,
                color: '#ffffff',
                depth: 1,
                origin: 'tLeft',
                align: 'left',
            },
            button: {
                parent: 'base',            
                backgroundColor: '#000000',
                align: 'center',
                padding: {
                    x: 8,
                    y: 3
                },
                depth: 100,
                origin: 'cCenter',
                flash: '#555555',
                origin: 'cCenter',
                border1: '1 #ffffff',
            },
            overlayButton: {
                parent: 'button',    
                depth: 1001,
            },
            overlayControl: {
                parent: 'button',    
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
                parent: 'button',    
                depth: 10001,
                background: '#003300',
                padding: {
                    x: 20,
                    y: 20
                },
            },

            shopButtonLocked: {
                parent: 'button',    
                depth: 2001,
                backgroundColor: '#222222',
                fill: '#ffffff',
                origin: 'cCenter',
                border1: '1 #ffffff',
            },
            shopButtonBought: {
                parent: 'button',    
                depth: 2001,
                backgroundColor: '#000000',
                fill: '#333333',
                origin: 'cCenter',
                border1: '1 #ffffff',
            },
            shopButtonPoor: {
                parent: 'button',    
                depth: 2001,
                backgroundColor: '#990000',
                fill: '#ffffff',
                origin: 'cCenter',
                border1: '1 #ffffff',
            },
            shopButtonBuy: {
                parent: 'button',    
                depth: 2001,
                backgroundColor: '#007700',
                origin: 'cCenter',
                border1: '1 #ffffff',
            },

            overlayText: {
                parent: 'base',    
                depth: 1001,
                origin: 'cLeft'
            },
            overlayDialog: {
                parent: 'base',    
                depth: 1001,
                origin: 'tLeft',
                fontSize: 32
            },
            overlayTextCentered: {
                parent: 'base',    
                depth: 1001,
                origin: 'cCenter'
            },
            overlayLocked: {
                parent: 'base',    
                depth: 1001,
                origin: 'cLeft',
                fill: '#777777'
            },
            overlayBought: {
                parent: 'base',    
                depth: 1001,
                origin: 'cLeft',
                fill: '#009900'
            },
            overlayPoor: {
                parent: 'base',    
                depth: 1001,
                origin: 'cLeft',
                fill: '#990000'
            },
            messages: {
                parent: 'base',    
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
                parent: 'base',    
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 3,
                origin: 'cCenter',
                depth: 999,
                fontSize: 20,
            },
            titleScreenTitle: {
                parent: 'base',    
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#22ff00',
                stroke: '#000000',
                strokeThickness: 6,
                origin: 'tCenter',
                depth: 1001
            },
            gameOverTitle: {
                parent: 'base',    
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#ff8800',
                stroke: '#000000',
                strokeThickness: 6,
                origin: 'tCenter',
                depth: 1001
            },
            gameOverSubTitle: {
                parent: 'base',    
                fontSize: '28px',
                fontStyle: 'bold',
                fill: '#ff8800',
                stroke: '#000000',
                strokeThickness: 2,
                origin: 'tCenter',
                depth: 1001
            },

            gameWonTitle: {
                parent: 'base',    
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#ffffed',
                stroke: '#000000',
                strokeThickness: 6,
                origin: 'tCenter',
                depth: 1001
            },
            gameWonSubTitle: {
                parent: 'base',    
                fontSize: '28px',
                fontStyle: 'bold',
                fill: '#ffffed',
                stroke: '#000000',
                strokeThickness: 2,
                origin: 'tCenter',
                depth: 1001
            },
            highScore: {
                parent: 'base',    
                align: 'center',
                origin: 'tCenter',
                depth: 1001
            },
            overlayTitle: {
                parent: 'base',    
                align: 'center',
                origin: 'cCenter',
                depth: 1001,
                fontSize: '36px',
                fontStyle: 'bold',
            },
            overlaySubTitle: {
                parent: 'base',    
                align: 'center',
                origin: 'cCenter',
                depth: 1001,
                fontSize: '32px',
                fontStyle: 'bold',
            },
            overlaySubSubTitle: {
                parent: 'base',    
                align: 'center',
                origin: 'cCenter',
                depth: 1001,
                fontSize: '24px',
                fontStyle: 'bold',
            },
            achievementsGreenLeft: {
                parent: 'base',    
                fill: '#00ff00',
                depth: 1001,
                origin: 'cLeft',
            },
            achievementsRedLeft: {
                parent: 'base',    
                fill: '#ff0000',
                depth: 1001,
                origin: 'cLeft',
            },
            achievementsGreenRight: {
                parent: 'base',    
                fill: '#00ff00',
                depth: 1001,
                origin: 'cRight',
                align: 'cRight'
            },
            achievementsRedRight: {
                parent: 'base',    
                fill: '#ff0000',
                depth: 1001,
                origin: 'cRight',
                align: 'cRight'
            }

        };
