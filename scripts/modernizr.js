!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in E){if(e=[],t=E[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?b[s[0]]=o:(!b[s[0]]||b[s[0]]instanceof Boolean||(b[s[0]]=new Boolean(b[s[0]])),b[s[0]][s[1]]=o),S.push((o?"":"no-")+s.join("-"))}}function a(e){var t=C.className,n=b._config.classPrefix||"";if(x&&(t=t.baseVal),b._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?C.className.baseVal=t:C.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)w(e,n)&&i(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=b[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return b;t="function"==typeof t?t():t,1==r.length?b[r[0]]=t:(!b[r[0]]||b[r[0]]instanceof Boolean||(b[r[0]]=new Boolean(b[r[0]])),b[r[0]][r[1]]=t),a([(t&&0!=t?"":"no-")+r.join("-")]),b._trigger(e,t)}return b}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(){var e=t.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var a,i,s,u,f="modernizr",d=l("div"),p=c();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:f+(r+1),d.appendChild(s);return a=l("style"),a.type="text/css",a.id="s"+f,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),i=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!i}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+f(t[o])+":"+r+")");return a=a.join(" or "),u("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,o,a){function i(){u&&(delete P.style,delete P.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=d(e,o);if(!r(c,"undefined"))return c}for(var u,f,m,h,v,g=["modernizr","tspan"];!P.style;)u=!0,P.modElem=l(g.shift()),P.style=P.modElem.style;for(m=e.length,f=0;m>f;f++)if(h=e[f],v=P.style[h],s(h,"-")&&(h=p(h)),P.style[h]!==n){if(a||r(o,"undefined"))return i(),"pfx"==t?h:!0;try{P.style[h]=o}catch(y){}if(P.style[h]!=v)return i(),"pfx"==t?h:!0}return i(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?h(o,n||t):o);return!1}function g(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+$.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,o,a):(s=(e+" "+j.join(i+" ")+i).split(" "),v(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var E=[],T={_version:"3.0.0-alpha.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){E.push({name:e,fn:t,options:n})},addAsyncTest:function(e){E.push({name:null,fn:e})}},b=function(){};b.prototype=T,b=new b;var w,S=[],C=t.documentElement,x="svg"===C.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),b.hasOwnProperty(e)&&setTimeout(function(){b._trigger(e,b[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},b._q.push(function(){T.addTest=i});x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,c(t)}function a(e){var t=S[e[b]];return t||(t={},w++,e[b]=w,S[w]=t),t}function i(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():T.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||E.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function c(e){e||(e=t);var r=a(e);return!C.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,a=RegExp("^(?:"+r().join("|")+")$","i"),i=[];o--;)t=n[o],a.test(t.nodeName)&&i.push(t.applyElement(f(t)));return i}function f(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(_+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,a=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+_+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(a,i),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(i._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,i=a(e),s=e.namespaces,l=e.parentWindow;return!P||e.printShived?e:("undefined"==typeof s[_]&&s.add(_),l.attachEvent("onbeforeprint",function(){t();for(var a,i,s,l=e.styleSheets,c=[],f=l.length,p=Array(f);f--;)p[f]=l[f];for(;s=p.pop();)if(!s.disabled&&x.test(s.media)){try{a=s.imports,i=a.length}catch(m){i=0}for(f=0;i>f;f++)p.push(a[f]);try{c.push(s.cssText)}catch(m){}}c=d(c.reverse().join("")),o=u(e),r=n(e,c)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.2",y=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",w=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var C={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=C,c(t);var x=/^$|\b(?:all|print)\b/,_="html5shiv",P=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();C.type+=" print",C.shivPrint=m,m(t)}(this,t);var _={elem:l("modernizr")};b._q.push(function(){delete _.elem});var P={style:_.elem.style};b._q.unshift(function(){delete P.style});var N=(T.testProp=function(e,t,r){return m([e],n,t,r)},"Moz O ms Webkit"),$=T._config.usePrefixes?N.split(" "):[];T._cssomPrefixes=$;var j=T._config.usePrefixes?N.toLowerCase().split(" "):[];T._domPrefixes=j,T.testAllProps=g,T.testAllProps=y,b.addTest("flexbox",y("flexBasis","1px",!0)),b.addTest("backgroundsize",y("backgroundSize","100%",!0)),b.addTest("audio",function(){var e=l("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),b.addTest("video",function(){var e=l("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),b.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),b.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)});var k={},z="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),F=l("input");b.input=function(t){for(var n=0,r=t.length;r>n;n++)k[t[n]]=!!(t[n]in F);return k.list&&(k.list=!(!l("datalist")||!e.HTMLDataListElement)),k}(z),o(),a(S),delete T.addTest,delete T.addAsyncTest;for(var L=0;L<b._q.length;L++)b._q[L]();e.Modernizr=b}(window,document);