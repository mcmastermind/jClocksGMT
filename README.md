jClocksGMT 2.0
================================

jQuery based analog and digital clock(s).

##What is jClocksGMT?

jClocksGMT is a jQuery analog and digital clock(s) plugin based on GMT offsets. Now supporting automatic daylight saving time conversions for affected timezones. Requires jQuery Rotate plugin.

##Features

- Analog Clock
- Digital Clock
- Date Display
- 5 Clock Skins
- jQuery Rotate
- Custom time formats
- Custom date formats
- GMT Timezone Offsets
- Automatic Daylight Saving Time conversion on affected timezones
- Easy CSS customization
- Easy image customization

###Compatibility

Chrome, Safari, Firefox, Opera, IE7+, IOS4+, Android, windows phone.

##Usage

####Javascript

Include jquery and the jClocksGMT script in your head tags or right before your body closing tag.

```html
<script src="js/jquery.js"></script>
<script src="js/jquery.rotate.js"></script>
<script src="js/jClocksGMT.js"></script>
```

####CSS

Include the jClocksGMT CSS style in your head tags.

```html 
<link rel="stylesheet" href="css/jClocksGMT.css">
```

####HTML

Use the following markup for your clock.

```html
<div id="clock_hou"></div>
```

####Fire the plugin

Bind the jClocksGMT behaviour on every link with any id or class.

```js
$('#clock_hou').jClocksGMT({ title: 'Houston, TX, USA', offset: '-6', skin: 2 });
```

###Documentation

####Default options:
```js
title: 'Greenwich, England', // String: Title of location (defaults to Greenwich, England)
offset: '0',                 // String: Set Standard GMT offset (+5.5, -4, 0, etc) (do not consider daylight savings time)
dst: true,                   // Boolean: Does the location observe daylight savings time (set FALSE if location does not need to observe dst)
digital: true,               // Boolean: Display digital clock
analog: true,                // Boolean: Display analog clock
timeformat: 'hh:mm A',       // String: Time format (see below for formatting options)
date: false,                 // Boolean: Display date
dateformat: 'MM/DD/YYYY',    // String: Date format (see below for formatting options)
angleSec: 0,                 // Integer: Starting angle of second hand
angleMin: 0,                 // Integer: Starting angle of minute hand
angleHour: 0,                // Integer: Starting angle of hour hand
skin: 1                      // Integer: Set 1 of 5 included skins for the analog clock 
```

####Common offsets by time zone: 
(only use the number after GMT: GMT-2 = offset: '-2' Daylight Saving Time converted automatically)


| OFFEST   |   LOCATION |
|:---------|:------------|
| `GMT-12` |  Eniwetok |
| `GMT-11` |  Samoa|
| `GMT-10` |  Hawaii|
| `GMT-9` |  Alaska|
| `GMT-8` |  PST, Pacific US |
| `GMT-7` |  MST, Mountain US|
| `GMT-6` |  CST, Central US|
| `GMT-5` |  EST, Eastern US|
| `GMT-4` |  Atlantic, Canada|
| `GMT-3` |  Brazilia, Buenos Aries|
| `GMT-2` |  Mid-Atlantic|
| `GMT-1` |  Cape Verdes|
| `GMT 0` |  Greenwich Mean Time|
| `GMT+1` |  Berlin, Rome|
| `GMT+2` |  Israel, Cairo|
| `GMT+3` |  Moscow, Kuwait|
| `GMT+7` |  Abu Dhabi, Muscat|
| `GMT+5` |  Islamabad, Karachi|
| `GMT+6` |  Almaty, Dhaka|
| `GMT+7` |  Bangkok, Jakarta|
| `GMT+8` |  Hong Kong, Beijing|
| `GMT+9` |  Tokyo, Osaka|
| `GMT+10` |  Sydney, Melbourne, Guam|
| `GMT+11` |  Magadan, Soloman Is.|
| `GMT+12` |  Fiji, Wellington, Auckland|

To find specific GMT offsets, 

goto: http://www.timeanddate.com/time/zone/

search: location

use: Current Offset

if location is currently observing DST, add 1 to offset

####Time Formatting:

| FORMAT   |   OUTPUT   |  MEANING |
|----------|:-------------:|:------|
| `HH` |  `19` | 24-hour format of hour with leading zero (two digits long). |
| `hh` |    `07` |   12-hour format of hour with leading zero (two digits long). |
| `H` | `19` |    24-hour format of hour without leading zeros. |
| `h` | `7` |    12-hour format of hour without leading zeros. |
| `mm` | `01` |    Minutes with the leading zero (two digits long). |
| `m` | `1` |    Minutes without the leading zero. |
| `ss` | `08` |    Seconds with the leading zero (two digits long). |
| `s` | `8` |    Seconds without the leading zero. |
| `a` | `pm` |    Lowercase am or pm. |
| `A` | `PM` |    Uppercase am or pm. |
| `SSS` | `095` |    Milliseconds with leading zeros (three digits long). |
| `S` | `95` |    Milliseconds without leading zeros. |          

####Date Formatting:

| FORMAT   |   OUTPUT   |  MEANING |
|----------|:-------------:|:------|
| `YYYY` |  `2016` | Four-digit representation of the year. |
| `YY` |    `16` |   Two-digit representation of the year. |
| `MMMM` | `April` |    Full textual representation of the month. |
| `MMM` | `Apr` |    Three letter representation of the month. |
| `MM` | `04` |    Month with the leading zero (two digits long). |
| `M` | `4` |    Month without the leading zero. |
| `DDDD` | `Friday` |    Full textual representation of the day of the week. |
| `DDD` | `Fri` |    Three letter representation of the day of the week. |
| `DD` | `01` |    Day of the month with leading zero (two digits long). |
| `D` | `1` |    Day of the month without leading zero. |

## Creator

**Richard McMaster**

+ [http://kingkode.com](http://kingkode.com)
+ [http://twitter.com/_kingkode](http://twitter.com/_kingkode)

## License

jClocksGMT is available under the MIT license.

