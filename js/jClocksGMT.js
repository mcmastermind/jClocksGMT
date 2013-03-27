/********************************************************************************************************
 *
 * NAME: jClocksGMT
 * VERSION: 1.0 
 * LAST UPDATE: 2013.20.03
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Author Information:
 *      Name: Richard McMaster
 *      Email: richard.mcmaster@live.com
 *      Location: Houston, Texas, United States
 *      Website: http://www.mcmastermind.com
 *
 * Plugin Website: http://www.github.com/mcmastermind/jClocksGMT
 *
 * Description:
 *      jQuery based analog and digital clock(s) based on GMT offsets. Requires jQuery Rotate plugin.
 *
 * Credit Resources: 
 *      Article: "Convert the local time to another time zone with this JavaScript"
 *      URL: http://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/6016329
 *      Author: Melonfire
 *      Date: 2006.03.01
 *
 *      Article: "Analog JQuery clock"
 *      URL: http://d-zig.com/Desc.aspx?item=74
 *      Author: Jim Rasmussen
 *      Date: circa 2011
 *
 * Documentation:
 *      Default options:
 *          offset: '0',    // String: Set GMT offset (+5.5, -4, 0, etc)
 *          angleSec: 0,    // Integer: Starting angle of second hand
 *          angleMin: 0,    // Integer: Starting angle of minute hand
 *          angleHour: 0,   // Integer: Starting angle of hour hand
 *          hour24: false,  // Boolean: 24 hour clock or 12 hour clock
 *          digital: true,  // Boolean: Display digital clock
 *          analog: true    // Boolean: Display analog clock
 *
 *      Common offsets by time zone: (only use the number after GMT: GMT-2 = offset: '-2')
 *          GMT-12	 Eniwetok
 *          GMT-11	 Samoa
 *          GMT-10	 Hawaii
 *          GMT-9	 Alaska
 *          GMT-8	 PST, Pacific US
 *          GMT-7	 MST, Mountain US
 *          GMT-6	 CST, Central US
 *          GMT-5	 EST, Eastern US
 *          GMT-4	 Atlantic, Canada
 *          GMT-3	 Brazilia, Buenos Aries
 *          GMT-2	 Mid-Atlantic
 *          GMT-1	 Cape Verdes
 *          GMT	0    Greenwich Mean Time, Dublin
 *          GMT+1	 Berlin, Rome
 *          GMT+2	 Israel, Cairo
 *          GMT+3	 Moscow, Kuwait
 *          GMT+4	 Abu Dhabi, Muscat
 *          GMT+5	 Islamabad, Karachi
 *          GMT+6	 Almaty, Dhaka
 *          GMT+7	 Bangkok, Jakarta
 *          GMT+8	 Hong Kong, Beijing
 *          GMT+9	 Tokyo, Osaka
 *          GMT+10	 Sydney, Melbourne, Guam
 *          GMT+11	 Magadan, Soloman Is.
 *          GMT+12	 Fiji, Wellington, Auckland
 *
 *      United States offsets by time zone: (only use the number after UTC: UTC-2 = offset: '-2')
 *       (Standard Time)
 *          UTC-5	 EST (Eastern Standard Time)
 *          UTC-6	 CST (Central Standard Time)
 *          UTC-7	 MST (Mountain Standard Time)
 *          UTC-8	 PST (Pacific Standard Time)
 *       (Daylight Time: used when "Daylight Savings Time" is in affect)
 *          UTC-4	 EDT (Eastern Daylight Time)
 *          UTC-5	 CDT (Central Daylight Time)
 *          UTC-6	 MDT (Mountain Daylight Time)
 *          UTC-7	 PDT (Pacific Daylight Time)
 *
 ********************************************************************************************************/

(function($) {

    $.fn.extend({
        
        jClocksGMT: function(options) {
            
            var defaults = {
                offset: '0',
                angleSec: 0,
                angleMin: 0,
                angleHour: 0,
                hour24: false,
                digital: true,
                analog: true
            }
            
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                var offset = options.offset;
                var id = $(this).attr('id');
                
                // initial hand rotation
                $('#' + id + ' .sec').rotate(options.angleSec);
                $('#' + id + ' .min').rotate(options.angleMin);
                $('#' + id + ' .hour').rotate(options.angleHour);

                setInterval(function () {
                
                    // create new date object
                    var d = new Date;
                    // convert to msec
                    // add local time offset
                    // get UTC time in msec
                    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
                    
                    // create new Date object for different city
                    // using supplied offset
                    var nd = new Date(utc + (3600000 * offset));
                    
                    // format numbers
                    var s = nd.getSeconds();
                    var m = nd.getMinutes();
                    var hh = nd.getHours();
                    var h = hh;
                    
                    // format for 12 hour
                    if(!options.hour24) {
                        var dd = "AM";
                        if( h >= 12) {
                            h = hh-12;
                            dd = "PM";
                        }
                        if( h == 0 ) {
                            h = 12;
                        }
                    }
                    
                    if(options.analog) {
                        // rotate second hand
                        options.angleSec = (nd.getSeconds() * 6);
                        $('#' + id + ' .sec').rotate(options.angleSec);
                        // rotate minute hand
                        options.angleMin = (nd.getMinutes() * 6);
                        $('#' + id + ' .min').rotate(options.angleMin);
                        // rotate hour hand
                        options.angleHour = ((nd.getHours() * 5 + nd.getMinutes() / 12) * 6);
                        $('#' + id + ' .hour').rotate(options.angleHour);
                    }
                    
                    // display digital clock if enabled
                    if(options.digital) {
                        $('#' + id + ' .digital .hr').html(h + ':');
                        $('#' + id + ' .digital .minute').html(m < 10 ? "0" + m : m);
                        if(!options.hour24) {
                            $('#' + id + ' .digital .period').html(dd);
                        }
                    }
                }, 1000);
            });
        }
    });
})(jQuery);