# Using HoytPhaserTools

HoytPhaserTools is an object that contains a set of functions that I commonly use in my phaser / Rosebud AI projects.  It Inludes the following:

- Common game variables.
- Easy Import Lists for images, audio and scipts.


## Include the class

Load the script before the main object constructor is completed.  The tool will want to load images scripts and sounds in the preload function, so it needs to be created before then.  After that, create an instance and pass "this" to the constructor.  Note, for the rest of the instructions, the HoytPhaserTools object will be refered to using `this.hpt.`

``` 
const script = document.createElement('script');
script.src = `https://raw.githubusercontent.com/hoytman/RoseTemplateV1/refs/heads/main/HoytPhaserTools` + '?t=' + Date.now();
script.async = true; // This will stop exc.  till the object code is ready.
document.head.appendChild(script);
this.hpt = new HoytPhaserTools(this);
```

## Set the variables.
Next, set the following variables:

```
this.hpt.gameTitle = 'My Game'        // The name of you game.  Used in various locations
this.hpt.uniqueGameID = 'as6w';       // Unique id used to load and update save data.
this.hpt.backgroundColor = 0x000000;  // The color used for the background.  TO disable, don't set.
this.hpt.score = 0;                   // The initial score.  Used for debuging andd testing
this.hpt.cash = 0;                    // THe initial money level for the shop.
this.hpt.images = [];                 // Images for import
this.hpt.audios = [];                 // Audio for import
this.hpt.scripts = [];                // Scripts for import
this.hpt.externalScripts = [];        // Scripts for import.  Uses script tags.
this.hpt.mousePointerFieldIcon = '↖'  // Icon used for the mouse pointer.
this.hpt.styles = {};                 // Text Styles
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

## Importing Rosebud Scripts

- To set up your image imports, set the `scripts` variable in htp.
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

## Importing Data Objects

- To set up your Data Object imports, set the `dataObjects` variable in htp.
- This varable accepts an array, filled with either strings and/or objects
- If an object is used, it can contain the properties `name` and `url`.
- Objects without `name` properties will have them automatically assigned.
- If a string is used, it will be regard as url, and the name will be aquired from it.
- The data can be accessd via `window[name]` or `window.name`
-  !! IMPORTANT the name string must equal the variable name used in the file.
-  One variable per file.
  
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

