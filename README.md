# Using HoytPhaserTools

## Implementation

### Inclucing the class

First, load the script using ths code in the preloader:
```
his.load.script(
  'HoytPhaserTools',
  `https://raw.githubusercontent.com/hoytman/RoseTemplateV1/refs/heads/main/HoytPhaserTools`
);
```
Next, create an instance in the creation function.  Be sure to pass "this" to the object constructor.
```
   this.hpt = new HoytPhaserTools(this);
```


