# Using HoytPhaserTools

HoytPhaserTools is an object that contains a set of functions that I commonly use in my phaser / Rosebud AI projects.  It Inludes the following:

- Common game variables.
- Easy Import Lists for images, audio and scipts.
- Common game elements added
  - Pointer
  - Backgrop
  - Debug Text
  - Pause Screen
  - Message Popups 
- function call management.

## Include the class

Load the script before the main object constructor is completed.  The tool will want to load images scripts and sounds in the preload function, so it needs to be created before then.  After that, create an instance and pass "this" to the constructor.  Note, for the rest of the instructions, the HoytPhaserTools object will be refered to using `this.hpt.`

``` 
const script = document.createElement('script');
script.src = `https://raw.githubusercontent.com/hoytman/RoseTemplateV1/refs/heads/main/HoytPhaserTools` + '?t=' + Date.now();
script.async = true; // This will stop exc.  till the object code is ready.
document.head.appendChild(script);
this.hpt = new HoytPhaserTools(this);
```

# List of "must call" functions

These functions must be employed in order for the tool set to function.  Place a function call for each in the required places.

## preload()

This needs to be called in Phaser's `preload()` function.  It will:
- load all of the objects, images and sounds.
- setup the progress display manaement.

## create()

This needs to be called in Phaser's `create()` function.  It will:
- Assign required imported objects to object properties.
- Loads Achievements
- creates Overlays (see function below)
- Set up a 15 ms step event (66.7 fps)
- Add a listener that will pause the game when the window loses focus.
- Sets the `created` flag to true.
- Sets "Loading" to 100%

# Settable Object Properties

The following object properties can be set by the user in order to customise the experence.  THe first 6 are easy to understand, but the following data structures are more complex and can have deep impacts on you game.  They will be described in detail below.

```
this.hpt.gameTitle = 'My Game'        // The name of you game.  Used in various locations
this.hpt.uniqueGameID = 'as6w';       // Unique id used to load and update save data.
this.hpt.backgroundColor = 0x000000;  // The color used for the background.  TO disable, don't set.
this.hpt.score = 0;                   // The initial score.  Used for debuging andd testing
this.hpt.cash = 0;                    // THe initial money level for the shop.
this.hpt.mousePointerFieldIcon = '↖'  // Icon used for the mouse pointer.  '↖' '◣', '↘' or '' for none. 

this.hpt.images = [];                 // Images for import
this.hpt.audios = [];                 // Audio for import
this.hpt.objects = [];                // Scripts for import
this.hpt.styles = {};                 // Text Styles
this.userFunctions = {};
this.hpt.shopItems = {};              // List of items that can appear in the shop and inventory
this.hpt.timeline = [];               // Timeline elements for use in events and cut scenes.
this.hpt.leftSideText = [];           // THe text and data that will appear in the left corner
this.hpt.achievements = [];           // Achievements that can be earned.  
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

# Sound Functions

## Volumn control - updateSoundVolume(level, tar)

This tool set makes volume control easy.  First, each audio import has a volume multiplier which allowes you to create a consistant volumne experence across your game.  After all of the sounds have a volumn multiplier set, use `updateSoundVolume(level, tar) ` to set the global volumn level.  It accepts a volumn level (0-1) and an optional sound name.  If a name is provided, only that sound is changes.  Otherwise all sounds are effected.  
- Call with a volumne level only to change all sounds.
- Call with a volumne level and a target sound (name) to change that sounds only.
- Call with no paramaters to set all sounds to the current volumn.
- Call with target sound (name) only to set one sound to the current volumn.


## Background functions

## Utilities

### setForGroup(target, property, value)

This function will iteragte ofer a `tagret` array, and set the `property` property in each member to `value`.  It is a useful way to activate and deactivate groups of obejects.

### getAssetName(myUrl){

Accepts a url and returns the name of the file at the end, without extension or get vars.  Basically
- `https://play.rosebud.ai/assets/g1.png?xeMF`
- Will retunr
- `g1`

  ### unToken(text, def='---')

- This function is passed a string.  It will search the string for "tokens" and replace them with values from the game.
- "Tokens" are designated by ~ like this:
  - "I have ~health~ health points"
  - In this example, the substring ~health~ will be replaced by the value of `hpt.health`. 
- Tokens can go three levels deep so
  - "My monster has ~monsters.myMonster.health~ will use the value `hpt.monsters.myMonster.healt`
- If a value can't be found, then a default string will be used, (the second paramater).
