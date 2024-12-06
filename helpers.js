
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

        let myGroup = '';
        if ('activeGroup' in myStyle) {
            myGroup = myStyle.activeGroup;
        }

        // Add pointer down effect
        button.on('pointerdown', () => {
            if ('downSound' in button.myOriginalStyle) {
                this.playSound(button.myOriginalStyle.downSound);
            }
            if ('flash' in button.myOriginalStyle) {
                button.setBackgroundColor(button.myOriginalStyle.flash);
            }
        });

        // Add pointer up effect
        button.on('pointerup', () => {
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
            button.on('pointerup', () => this.doFunction(textArr[0], [], myGroup), this);
        } else {
            let tar = textArr.shift()
            button.on('pointerup', () => this.doFunction(tar, textArr, myGroup), this);
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
            this.highScoreTextFields[i].alpha = 1;
            if (i < highScores.length) {
                this.highScoreTextFields[i].setText(i + ': ' + highScores[i - 1])
                if (highScores[i - 1] == this.score) {
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
        this.activeGroup = 'Overlay';
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
        this.activeGroup = 'Main';
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
        this.activeGroup = 'Overlay';
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
                    console.log('title done');
                    this.shopTextFields[i] = this.createText(400, 60 + 38 * vertInd, myText, 'OverlaySubTitle');
                    vertInd += 2;
                } else if (entry.type == 'subtitle') {
                    console.log('subtitle done');
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
        this.activeGroup = 'Main';
        this.clearShop();
        this.backdrop.alpha = 0;
        this.pausedWMouse = false;
    }

    // ========================== Inventory

    openInventory() {
        this.activeGroup = 'Overlay';
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

        console.log({
            inventoryPage: this.inventoryPage,
            highRange: highRange,
            lowRange: lowRange,
            i: i,
            inventoryCount: this.inventoryCount,
            pageInd: pageInd,
            maxInventoryPage: this.maxInventoryPage
        });

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
        this.activeGroup = 'Main';
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
        console.log(text);
        this.activeGroup = 'Overlay';
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
        this.activeGroup = 'Overlay';
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
        this.activeGroup = 'Main';
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
