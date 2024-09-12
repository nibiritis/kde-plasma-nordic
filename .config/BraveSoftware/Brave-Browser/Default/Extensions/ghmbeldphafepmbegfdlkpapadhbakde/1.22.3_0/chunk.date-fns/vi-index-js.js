(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/vi-index-js"],{2252:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}},t.exports=e.default},1478:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,r=null!=a&&a.width?String(a.width):i;n=t.formattingValues[r]||t.formattingValues[i]}else{var u=t.defaultWidth,h=null!=a&&a.width?String(a.width):t.defaultWidth;n=t.values[h]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},64906:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=e.match(r);if(!u)return null;var h=u[0],o=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(o)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(o,function(t){return t.test(h)}):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(o,function(t){return t.test(h)});return a=t.valueCallback?t.valueCallback(d):d,{value:a=n.valueCallback?n.valueCallback(a):a,rest:e.slice(h.length)}}},t.exports=e.default},46532:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var i=n[0],r=e.match(t.parsePattern);if(!r)return null;var u=t.valueCallback?t.valueCallback(r[0]):r[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:e.slice(i.length)}}},t.exports=e.default},81925:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}};e.default=function(t,e,n){var i,r=a[t];return(i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?i+" nữa":i+" trước":i},t.exports=e.default},75280:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(2252)),r={date:(0,i.default)({formats:{full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},6210:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"};e.default=function(t,e,n,i){return a[t]},t.exports=e.default},35610:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(1478)),r={ordinalNumber:function(t,e){var a=Number(t),n=null==e?void 0:e.unit;if("quarter"===n)switch(a){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if("day"===n)switch(a){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else if("week"===n)return 1===a?"thứ nhất":"thứ "+a;else if("dayOfYear"===n)return 1===a?"đầu tiên":"thứ "+a;return String(a)},era:(0,i.default)({values:{narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},defaultFormattingWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},defaultWidth:"wide",formattingValues:{narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},45918:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(64906)),r={ordinalNumber:(0,n(a(46532)).default)({matchPattern:/^(\d+)/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^t/i,/^s/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},defaultParseWidth:"wide"}),day:(0,i.default)({matchPatterns:{narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},defaultParseWidth:"wide"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default},81507:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(81925)),r=n(a(75280)),u=n(a(6210)),h=n(a(35610)),o=n(a(45918)),d={code:"vi",formatDistance:i.default,formatLong:r.default,formatRelative:u.default,localize:h.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=d,t.exports=e.default},4293:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
