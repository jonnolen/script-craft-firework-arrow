## ScriptCraft.js Plugin Experiments ##

This is the beginnings of a Minecraft plugin to create arrows that 
generate a firework show when they land.  The initial commit just
adds a new Fireworks class with one public method starFirework(color);

To load, add this directory to your js-plugins folder of CraftBukkit and then
load it from the console.

The starFirework method creates a new Firework entity 30 blocks away from you
in the direction you are looking.

Example:

```javascript
new Fireworks().starFirework(org.bukkit.Color.ORANGE);
```