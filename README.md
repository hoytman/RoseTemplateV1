# In intro to HoytPhaserTools

HoytPhaserTools is an object that contains a set of functions that I commonly use in my phaser / Rosebud AI projects.  It Inludes the following:

- Common game variables.
- Easy Import Lists for images, audio and scipts.
- Common game elements added
  - Pointer
  - Backgrop
  - Debug Text
  - Pause Screen
  - Message Popups 
- function call management
- Sound management system
  - Volumn contols
  - Music
  - Sound effects
  - Vocals
-  

# Setting up the toolset

## Include the class

Load the script before the main object constructor is completed.  the tool will want to load images scripts and sounds in the preload function, so it needs to be created before then.  After that, create an instance and pass "this" to the constructor.  Note, for the rest of the instructions, the HoytPhaserTools object will be refered to using `this.hpt.`

``` 
const script = document.createElement('script');
script.src = `https://raw.githubusercontent.com/hoytman/RoseTemplateV1/refs/heads/main/HoytPhaserTools` + '?t=' + Date.now();
script.async = true; // This will stop exc.  till the object code is ready.
document.head.appendChild(script);
this.hpt = new HoytPhaserTools(this);
```

## Functions that need to be intigrated

these functions must be employed in order for the tool set to function.  Place a function call for each in the required places.

### preload()

This needs to be called in Phaser's `preload()` function.  It will:
- load all of the objects, images and sounds.
- setup the progress display manaement.

### create()

This needs to be called in Phaser's `create()` function.  It will:
- Assign required imported objects to object properties.
- Loads Achievements
- creates Overlays (see function below)
- Set up a 15 ms step event (66.7 fps)
- Add a listener that will pause the game when the window loses focus.
- Sets the `created` flag to true.
- Sets "Loading" to 100%

# Settable Object Properties

the following object properties can be set by the user in order to customise the experence.  the first 6 are easy to understand, but the following data structures are more complex and can have deep impacts on you game.  they will be described in detail below.

```
this.hpt.gameTitle = 'My Game'        // the name of you game.  Used in various locations
this.hpt.uniqueGameID = 'as6w';       // Unique id used to load and update save data.
this.hpt.backgroundColor = 0x000000;  // the color used for the background.  TO disable, don't set.
this.hpt.score = 0;                   // the initial score.  Used for debuging andd testing
this.hpt.cash = 0;                    // the initial money level for the shop.
this.hpt.mousePointerFieldIcon = '↖'  // Icon used for the mouse pointer.  '↖' '◣', '↘' or '' for none. 

this.hpt.images = [];                 // Images for import
this.hpt.audios = [];                 // Audio for import
this.hpt.objects = [];                // Scripts for import
this.hpt.styles = {};                 // Text Styles
this.userFunctions = {};
this.hpt.shopItems = {};              // List of items that can appear in the shop and inventory
this.hpt.timeline = [];               // Timeline elements for use in events and cut scenes.
this.hpt.leftSideText = [];           // the text and data that will appear in the left corner
this.hpt.achievements = [];           // Achievements that can be earned.
this.persistentDataKeys = [];         // A list of persistant data that will be saed to the browser cacsh
this.stepFunctions = [];              // Functions that wil be performed every step
```

## Importing Images

- To set up your image imports, set the `images` variable in htp.
- This varable accepts an array, filled with either strings and/or objects
- If an object is used, it can contain the properties `name` and `url`.
- Objects without `name` properties will have them automatically assigned.
- If a string is used, it will be regard as url, and the name will be aquired from it.
  
```
this.hpt.images = [
  'https://play.rosebud.ai/assets/g1.png?xeMF',  // name will be 'g1'
  'https://play.rosebud.ai/assets/g2.png?xeMF',  // name will be 'g2'
  'https://play.rosebud.ai/assets/g3.png?xeMF',  // name will be 'g3'
  {
    url: 'https://play.rosebud.ai/assets/g4.png?xeMF'  // name will be 'g4'
  },
  {
    name: 'graphic_5',
    url: 'https://play.rosebud.ai/assets/g5.png?xeMF' 
  } 
];
```

## Importing Audio

- To set up your sound imports, set the `audios` variable in htp.
- This varable accepts an array, filled with either strings and/or objects.
- If an object is used, it can contain the properties `vol`, `name` and `url`.
- `vol` is an volume modifyer, applied in addition to the global volumn control (value range 0 to 1)
- This value defaults to 1 if not used.
- Objects without `name` properties will hae them automatically assigned.
- If a string is used, it will be regard as `url`, the `name` will be aquired automatically and `vol` will be set to 1.


```
this.hpt.audios = [
  'https://play.rosebud.ai/assets/bell1.mp3?xeMF',  // name will be 'bell1'
  'https://play.rosebud.ai/assets/bell2.mp3?xeMF',  // name will be 'bell2'
  'https://play.rosebud.ai/assets/bell3.mp3?xeMF',  // name will be 'bell3'
  {
    url: 'https://play.rosebud.ai/assets/bell4.png?xeMF'  // name will be 'bell4'
  },
  {
    name: 'bell_5',
    url: 'https://play.rosebud.ai/assets/bell5.png?xeMF' 
  } ,
  {
    name: 'bell_6',
    url: 'https://play.rosebud.ai/assets/bell6.png?xeMF',
    vol: 0.5
  } 
];
```

## Importing Objects (scripts)

- To set up your JSON and/or Class imports, set the `objects` variable in htp.
- This varable accepts an array, filled with either strings and/or objects
- If an object is used, it can contain the properties `name`, `assign` and `url`.
- Objects without `name` properties will have them automatically assigned.
- If a string is used, it will be regard as url, and the name will be aquired from it.
- If JSON data, the data can be accessd via `window[name]` or `window.name`
  - !! IMPORTANT the name string must equal the variable name used in the file.
  - Only use the name property if the JSON var name does not match the file name
  - One variable per file.
- Use the `assign` property to assign the JSON data to a HoytPhaserTools property (such as styles or shopItems)
- If a class, the name does not matter.
- Objects can be created using `new Xyz()` where Xyz is the class name that appears in the file. 
  
```
this.hpt.images = [
  'https://play.rosebud.ai/assets/data1.js?xeMF',              // loaded to 'window.data1'
  'https://some.external.url/my/data/storade/data2.png?xeMF',  // loaded to 'window.data2'
  {
    url: 'https://play.rosebud.ai/assets/data3.png?xeMF'      // loaded to 'window.data3'
  },
  {
    name: 'myData',
    url: 'https://some.external.url/my/data/storade/data4.png?xeMF'   // loaded to 'window.myData'
  } 
];
```

## Text Styles

- Text styles impact the way that text and buttons are displayed.
- 
- It can use generic style options plus a few extras
  - depth - set the depth
  - origin - set the pixel origin, based on a key word:
    - tLeft: [0, 0], Top Left
    - cLeft: [0, .5], Center Left
    - bLeft: [0, 1], Bottom Left
    - tCenter: [0.5, 0], Top Center
    - cCenter: [0.5, .5], Center Center
    - bCenter: [0.5, 1], Bottom Center
    - tRight: [1, 0], Top Right
    - cRight: [1, .5], Center Right
    - bRight: [1, 1], Bottom Right
- and a few extra for buttons only
  - border1 - Adds an extra border around the background color.  Includes a pixel size and color.
  - border2 - Adds another extra border around the first border.  Includes a pixel size and color.
  - downSound - A sound to play when the left mouse button goes down on the button
  - upSound - A sound to play when the left mouse button goes up on the button
  - flash - flashed this color (as background) when left mouse button goes down on the button

```
this.hpt.mousePointerFieldIcon = {
  gameWonTitle: {
    fontSize: '64px',
    fontStyle: 'bold',
    fill: '#ffffed',
    stroke: '#000000',
    strokeThickness: 6,
    origin: 'tCenter',
    depth: 1001,
    backgroundColor: '#000000',
    align: 'center',
    padding: {
        x: 8,
        y: 3
    },
    flash: '#555555',
    upSound: 'pop',
    border1: '1 #ffffff',
    border2: '2 #990000',
  },
}
```

## User Defigned Functions.

Function calls for buttons and timelies is managed by doFunction.  Any button that is added to the game will need to have an entry added to this list in order to do the action that the buten requirs.  Also, timeline functions can use this to call functions.  TO add a function, use the `userFunctions` variable:
```
this.hpt.userFunctions = {
    myButtonName: (params, tarObject) => {
        // Do something
    }
}
```

## Persistent Values

- the system has the ability to load and save persistat data to the browser for use in game.
- This is a great way to track long-lerm achevements
- Values are stored in a var called PersistentData.
- Changes to attributes in this object are stored every second.
- This data is also loaded at the beginning of every game.
- To Use.
  - In the constructor, Set the `PersistentDataKeys` array so it contains the properties to manage.
  - Change the data in PersistentData as needed

## stepFunctions
- Add functions to this array.
- Each function will be performed during each step.


# Sound Functions

## Volumn control - updateSoundVolume(level, tar)

This tool set makes volume control easy.  First, each audio import has a volume multiplier which allowes you to create a consistant volumne experence across your game.  After all of the sounds have a volumn multiplier set, use `updateSoundVolume(level, tar) ` to set the global volumn level.  It accepts a volumn level (0-1) and an optional sound name.  If a name is provided, only that sound is changes.  Otherwise all sounds are effected.  
- Call with a volumne level only to change all sounds.
- Call with a volumne level and a target sound (name) to change that sounds only.
- Call with no paramaters to set all sounds to the current volumn.
- Call with target sound (name) only to set one sound to the current volumn.

## Music

Designed for background music that plays indapendantly of sound effects.  Only one music can play at a time.

### playMusic(tar, restart = false)
- Pass the name of the music that you want to play.
- It will pause any other music being played and play this.
- It will also resume music if it is paused.
- Passing true to restart will always start the music at the beginning.
- Music is set to loop

### playMusicWithIntro(intro, main = null, restart = false) {
- Works just like playMusic() except it plays an intro music, then plays the music.
- Great for epic music that has should play an intro before the loop starts.

### pauseMusic() 
- Pauses any music that is being played.
- Calling pauseMusic() on paused music will reset it to the beginning.
- Calling playMusic(...) will unpause, and continue.


## Vocal / dialog tracks.

Designed for spoken word, which can play along with music.  Only one can play at a time.  No Looping.  Dev Note: vocals are stored in the same internal array as music.

### playVocal(tar, restart = false) 
- Pass the name of the vocal track that you want to play.
- It will pause any other vocals being played and play this.
- It will also resume vocals if it is paused.
- Passing true to restart will always start the vocals at the beginning.
- vocals are not set to loop

### pauseVocal()
- Pauses any vocal that is being played.
- Calling pauseVocal() on paused vocal will reset it to the beginning.
- Calling playVocal(...) will unpause, and continue.

## Sound effects

Designed or sound effects that play over and over, and overlap.  Only three instances of a sound are allowed to play at the same time, limiting the painful loud impact of numerous effect playing at once.  SOund effects do not loop

### playSound(tar)
- plays the target sound effect.
- Multiple calls will repeat the sound, possibly overlapping.
- Only three instances of a single sound can play at once.

### stopSounds()
- Stops all sounds that are playing
- they can not be resumed.

# Text and Buttons

there are seeral functions that can be used to post text, make text move, make buttons, and create popups and floating text.

## createText(x, y, text, style)

- Very basic text function.  Creates text and places it.
- Uses the Base style, combines with what ever style is passed.
- Pass style by name or by object.
- Text is processed with unToken, allowing game values to be used.
- the origin is set, using the this.origins values.
- the text object is returned.

## createButton(x, y, text, style)

- Very similar to createText() except it places and returns an interactive button.
- Add a do-able function with the same name as the button to `userFunctions`
- When naming buttons, add a '.' to add a subtitle.
  - Subtitles will not be visible on the button
  - the title and subtitle will both be passed to the do function. 
- Has the additional style elements:
  - border1: Adds a colored box under the button.
  - border2: Adds another colored box under the button and first border.
  - downSound: plays this souns when clicked
  - upSound: plays thei sound when the mouse is released.
  - flash: changes the background to this for a moment when the btton is pressed.
 
## addFloatingText(x, y, text)
- Adds a small text to the screen at the designated position.
- This text rises for a second, then dissappears.
- Great for damage numbers.

## showMessage(text)
- This will show a pop-up message in the upper right corner.
- The message will move upwards and then dissappear.
- This message has a queue system, so additional messages will be displayed in order.  

# Helpful screnes and interactive pages

## addFullPageDialog(text)

- opens a full page of dialog, and fill the entire screen with text, using the step function.
- Includes a Skip button that will close the screen.

## clearDialog(ind)

- Can be used to remove dialog from a full screen or a image dialog box
- Include an index nuber to remoe only that dialog
- Pass no peroperties to remove everything

## closeDialog()
-  Removes all dialog and removed the window and button.

## Pausing

the tools set comes with a basic pause screen.  Calling the pause function will creat it, and set flags that will disable the step event.  Clicking away from the game will automatically pause the game.  TO resume the game, either click on the screen, or call the resume function.  Note: the auto pause feature will only work if `    autoFocus: false,` is not used.

### pauseGame() 
- pauses the game

### unPauseGame()
- unpauses the game.

## Titl, win, Lose

### showTitleScreen()
- Opens a simple title screen with highscore.

### showGameOverScreen()
- Opens a simple game over screen.
- Pauses the game
- Saves and shows Highscores.
- Hides mouse pointer

### showWinScreen()
- Opens a simple game over screen.
- Pauses the game
- Saves Highscores.
- Saves and shows Highscores.
- Hides mouse pointer

## Achievements
- The achevement system is able to constantly evaluate achievement criteria, and award persistant achevements when met.
- In order to describe an achevement, add the following object to the `this.hpt.achievements` array.
```
{
    name: '1k Steps',
    desc: 'Get past step 1000',
    have: false,
    check: () => {
        console.log(this.hpt.stepCount);
        return this.hpt.stepCount > 1000;
    },
    //icon: 'icon'
}
```
- name / desc: The name and description are both shown on the Achievements page
- have: The have value is the flag that tells if the Achievement has been gotten.  It should start false.
- check: this is a function that isevaluated every step to see if the Achievements has been acomplished.
- icon: A small icon that can appear next to the Achievements in the view.

### showAchievements()
- Opens the showAchievements page, where they are all listed.
- red achievements are not gotten
- green achievements have been gotten.

### resetAchievements()
- Resets all achievements

### ===== Behind the scenes Functions =====
- prevAchievementPage()
- nextAchievementPage()
- clearAchievements()
- closeAchievements()
- loadAchievements()
- saveAchievements()

## Shop / Inventory

- The shop pages are created based on a global inventory which can contain items and upgrades.
- The inventory can be created like this:
- Note: each item is aded to the shop or inventory in order.
```
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
```
- Type: the type that the entry is:
  - Title - Displayed large, at the top of the page.  Not an buyable.
  - subtitle - Displayed a bit smaller below the title.  Not an buyable.
  - unique - can be bought once.  Is not an item.  Has an update effect.
  - repeat - can be bought many times.  Is not an item.  Has an update effect.
  - uniqueItem - can be bought once.  An item.  Can be seen in inventory.
  - repeatItem - can be bought many times.  An item.  Can be seen in inventory.
- price: How much the item costs.  You must have this much cash to buy this.
- text: The text displayed for this entry
- page: the shop's page number that this entry appears on.
- requires: states what is required before this can be bought.
  - String: you must have bought the item that matches the string.
  - Function: the function must eval true before you can byt this.
- update: what is done when this item is bought.
  - String: A three element command that is done.  example   score|=|1000
    - P1: the name of the variable that is updated.
    - P2: the operation (=,+,-)
    - P3: the numeric amount.
- icon: a visual icon that wil appear near the item's text.
 





## High Score
the system can save a player's top ten scores and display them using a full screen overlay.  

###  showHighScores()
- Builds a grop of text fields that can display the current high scores.
- the current score (if present) is green

### hideHighScores()
- Removes the high score text.

### loadHighScores()
- Gathers the high scores from the browser.

### saveHighScore()
- Adds the current score to the high score list (if it is high enough)

### resetHighScores()
- Resets the high scores.

  

# Other Useful Game Making Tools

## Images

### createIcon(x, y, icon, depth) 
- Adds an image, with depth and a center center origin.

  
## Background functions

these are functions that are used behind the scenes, but may be useful.

### makeTextSelfFill(myField, text = null)

Uses the step function to fill in a text field one character at a time, creating a dynamic appearance.

### setForGroup(target, property, value)

This function will iteragte ofer a `tagret` array, and set the `property` property in each member to `value`.  It is a useful way to activate and deactivate groups of obejects.

### getAssetName(myUrl){

Accepts a url and returns the name of the file at the end, without extension or get vars.  Basically
- `https://play.rosebud.ai/assets/g1.png?xeMF`
- Will retunr
- `g1`

### linewrapString()

- Line wraps a string to a max character length.
- Trys to only wrap at spaces.

### unToken(text, def='---')

- This function is passed a string.  It will search the string for "tokens" and replace them with values from the game.
- "Tokens" are designated by ~ like this:
  - "I have ~health~ health points"
  - In this example, the substring ~health~ will be replaced by the value of `hpt.health`. 
- Tokens can go three levels deep so
  - "My monster has ~monsters.myMonster.health~ will use the value `hpt.monsters.myMonster.healt`
- If a value can't be found, then a default string will be used, (the second paramater).

### doOnce(tag)
- Include this in an if like this: `if(this.doOnce(tag)){ ... }`
- the if will only allow the inernal code to be run one time.
- After that, the code will be skipped.

### checkForCollision(x1, y1, h1, w1, x2, y2, h2, w2)
Pass in the top, left, height and width of two boxes, and the function will return if they overlap.

### checkRectOverlap()
Pass in two rectangle objects, and the function will return if they overlap.
