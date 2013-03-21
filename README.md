jClocksGMT
================================

jQuery based analog and digital clock(s).

##What is jClocksGMT?

jClocksGMT is a jQuery analog and digital clock(s) plugin based on GMT offsets. Requires jQuery Rotate plugin.

##Features

- Analog Clock
- Digital Clock
- jQuery Rotate
- GMT Timezone Offsets
- Easy CSS customization
- Easy image customization

###Compatibility

Chrome, Safari, Firefox, Opera, IE7+, IOS4+, Android, windows phone.

##Usage

###Javascript

Include jquery and the jClocksGMT script in your head tags or right before your body closing tag.

`<script src="js/jquery-1.9.0.js"></script>`

`<script src="js/jClocksGMT.js"></script>`

###CSS

Include the jClocksGMT CSS style in your head tags.

`<link rel="stylesheet" href="css/jClocksGMT.css">`

###HTML

Use the following markup for your clock.

```html
<div id="clock_dc" class="clock_container">
    <div class="lbl">Washington, DC</div>
    <div class="clockHolder">
        <div class="rotatingWrapper"><img class="hour" src="images/clock_hour.png" /></div>
        <div class="rotatingWrapper"><img class="min" src="images/clock_min.png" /></div>
        <div class="rotatingWrapper"><img class="sec" src="images/clock_sec.png" /></div>
        <img class="clock" src="images/clock_face.png" />
    </div> 
    <div class="digital">
        <span class="hr"></span><span class="minute"></span> <span class="period"></span>
    </div>
</div>
```

###Fire the plugin

Bind the jClocksGMT behaviour on every link with any id or class.

`$("#clock_dc").jClocksGMT({offset: '+5.5'});`

## Creator

**Richard McMaster**

+ [http://mcmastermind.com](http://mcmastermind.com)
+ [http://twitter.com/richardmcmaster](http://twitter.com/richardmcmaster)

## License

jClocksGMT is available under the MIT license.
