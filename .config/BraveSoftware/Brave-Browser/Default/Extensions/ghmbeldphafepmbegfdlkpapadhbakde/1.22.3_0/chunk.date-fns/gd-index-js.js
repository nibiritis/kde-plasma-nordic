(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/gd-index-js"],{2252:(a,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}},a.exports=e.default},1478:(a,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var i;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var n=a.defaultFormattingWidth||a.defaultWidth,r=null!=t&&t.width?String(t.width):n;i=a.formattingValues[r]||a.formattingValues[n]}else{var d=a.defaultWidth,o=null!=t&&t.width?String(t.width):a.defaultWidth;i=a.values[o]||a.values[d]}return i[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},64906:(a,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.width,r=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],d=e.match(r);if(!d)return null;var o=d[0],u=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(u)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}(u,function(a){return a.test(o)}):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}(u,function(a){return a.test(o)});return t=a.valueCallback?a.valueCallback(l):l,{value:t=i.valueCallback?i.valueCallback(t):t,rest:e.slice(o.length)}}},a.exports=e.default},46532:(a,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var n=i[0],r=e.match(a.parsePattern);if(!r)return null;var d=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:d=t.valueCallback?t.valueCallback(d):d,rest:e.slice(n.length)}}},a.exports=e.default},53147:(a,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"nas lugha na diog",other:"nas lugha na {{count}} diogan"},xSeconds:{one:"1 diog",two:"2 dhiog",twenty:"20 diog",other:"{{count}} diogan"},halfAMinute:"leth mhionaid",lessThanXMinutes:{one:"nas lugha na mionaid",other:"nas lugha na {{count}} mionaidean"},xMinutes:{one:"1 mionaid",two:"2 mhionaid",twenty:"20 mionaid",other:"{{count}} mionaidean"},aboutXHours:{one:"mu uair de thìde",other:"mu {{count}} uairean de thìde"},xHours:{one:"1 uair de thìde",two:"2 uair de thìde",twenty:"20 uair de thìde",other:"{{count}} uairean de thìde"},xDays:{one:"1 là",other:"{{count}} là"},aboutXWeeks:{one:"mu 1 seachdain",other:"mu {{count}} seachdainean"},xWeeks:{one:"1 seachdain",other:"{{count}} seachdainean"},aboutXMonths:{one:"mu mhìos",other:"mu {{count}} mìosan"},xMonths:{one:"1 mìos",other:"{{count}} mìosan"},aboutXYears:{one:"mu bhliadhna",other:"mu {{count}} bliadhnaichean"},xYears:{one:"1 bhliadhna",other:"{{count}} bliadhna"},overXYears:{one:"còrr is bliadhna",other:"còrr is {{count}} bliadhnaichean"},almostXYears:{one:"cha mhòr bliadhna",other:"cha mhòr {{count}} bliadhnaichean"}};e.default=function(a,e,i){var n,r=t[a];return(n="string"==typeof r?r:1===e?r.one:2===e&&r.two?r.two:20===e&&r.twenty?r.twenty:r.other.replace("{{count}}",String(e)),null!=i&&i.addSuffix)?i.comparison&&i.comparison>0?"ann an "+n:"o chionn "+n:n},a.exports=e.default},13974:(a,e,t)=>{"use strict";var i=t(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(2252)),r={date:(0,n.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'aig' {{time}}",long:"{{date}} 'aig' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},22868:(a,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"'mu dheireadh' eeee 'aig' p",yesterday:"'an-dè aig' p",today:"'an-diugh aig' p",tomorrow:"'a-màireach aig' p",nextWeek:"eeee 'aig' p",other:"P"};e.default=function(a,e,i,n){return t[a]},a.exports=e.default},68140:(a,e,t)=>{"use strict";var i=t(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(1478)),r={ordinalNumber:function(a){var e=Number(a),t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"d";case 2:return e+"na"}return 12===t?e+"na":e+"mh"},era:(0,n.default)({values:{narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chrìosta","anno domini"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an dàrna cairteal","an treas cairteal","an ceathramh cairteal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,n.default)({values:{narrow:["F","G","M","G","C","Ò","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],wide:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["D","L","M","C","A","H","S"],short:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},31532:(a,e,t)=>{"use strict";var i=t(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(64906)),r={ordinalNumber:(0,i(t(46532)).default)({matchPattern:/^(\d+)(d|na|tr|mh)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(r|a)/i,abbreviated:/^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,wide:/^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^c[1234]/i,wide:/^[1234](cd|na|tr|mh)? cairteal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[fgmcòilsd]/i,abbreviated:/^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,wide:/^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^f/i,/^g/i,/^m/i,/^g/i,/^c/i,/^ò/i,/^i/i,/^l/i,/^s/i,/^d/i,/^s/i,/^d/i],any:[/^fa/i,/^ge/i,/^mà/i,/^gi/i,/^c/i,/^ò/i,/^i/i,/^l/i,/^su/i,/^d/i,/^sa/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmcahs]/i,short:/^(dò|lu|mà|ci|ar|ha|sa)/i,abbreviated:/^(did|dil|dim|dic|dia|dih|dis)/i,wide:/^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i],any:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,any:/^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^m/i,pm:/^f/i,midnight:/^meadhan oidhche/i,noon:/^meadhan là/i,morning:/sa mhadainn/i,afternoon:/feasgar/i,evening:/feasgar/i,night:/air an oidhche/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},62065:(a,e,t)=>{"use strict";var i=t(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(53147)),r=i(t(13974)),d=i(t(22868)),o=i(t(68140)),u=i(t(31532)),l={code:"gd",formatDistance:n.default,formatLong:r.default,formatRelative:d.default,localize:o.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=l,a.exports=e.default},4293:a=>{a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports}}]);
