!function(){function s(a,i,c,u,n){var r={};if("object"==typeof n){r={colno:e(n.columnNumber)?u:n.columnNumber,lineno:e(n.lineNumber)?c:n.lineNumber,filename:e(n.fileName)?i:n.fileName,message:e(n.message)?a:n.message,stack:n.stack};for(var t=0,f=o.length;f>t;t++)if(window[o[t]]&&n instanceof window[o[t]]){r.type=t;break}}else r="object"==typeof a?a:{colno:u,lineno:c,filename:i,message:a};return r.stack||(Error.captureStackTrace?(Error.captureStackTrace(n,s),r.stack=n.stack):r.stack=Error().stack,r.stack&&(e(window.Components)?e(window.chrome)||(r.stack=r.stack.replace(/\n[^\n]*/,"")):r.stack=r.stack.substring(r.stack.indexOf("\n")+1))),r.stack&&(r.stack=r.stack.substr(0,500)),r}function e(e){return void 0===e}function k(a){for(var r=[],o=[],i=["message","filename","lineno","colno","stack","type"],t=0,s=i.length;s>t;t++){var n=i[t];e(a[n])?o.push("no_"+n):r.push(n.slice(0,1)+":"+a[n])}return r=r.join(","),{msg:r,interval:o}}function v(e){if(e&&"string"==typeof e){for(var r=0,n=c.length;n>r;r++)if(e.match(c[r]))return!1;return!0}return!1}function r(n,e,o){var i,r,s,u,c=1;switch(typeof n){case"string":case"number":i=n;break;case"object":if(f(n))i=n[0],c=n[1];else for(var t in n)n.hasOwnProperty(t)&&(i=t,c=n[t]);break;default:return}switch(typeof e){case"number":r=e+":1";break;case"string":r=-1===e.indexOf(":")?e+":1":e;break;case"object":if(f(e))r=-1===(e[0]+"").indexOf(":")?e.join(":1,")+":1":e.join(",");else{r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(t+":v");r=r.join(",")}}if("object"==typeof o)for(var t in o)o.hasOwnProperty(t)&&(s="otvet-"+t,u=o[t]);var a={p:g,t:i,v:c};r&&(a.i=r),s&&(a.rlog=s,a.rlog_message=u,a.email=window.CURRENT_USER?window.CURRENT_USER.email:"",a.ua=1),b(a)}function h(e){if("object"==typeof e){var r=JSON.stringify(e);setTimeout(function(){return navigator.sendBeacon(i,r)},0)}}function d(e){if("object"==typeof e){var n=new Image;n.onerror=function(){return r("kaktam","error")},n.onload=function(){return r("kaktam","load")};var t=[];for(var a in e)t.push(a+"="+e[a]);var o=i+"?"+t.join("&");setTimeout(function(){return n.src=o},0)}}function p(){var r,n=navigator.userAgent,e=n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(e[1])?(r=/\brv[ :]+(\d+)/g.exec(n)||[],"IE "+(r[1]||"")):"Chrome"===e[1]&&(r=n.match(/\b(OPR|Edge)\/(\d+)/),null!=r)?r.slice(1).join(" ").replace("OPR","Opera"):(e=e[2]?[e[1],e[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(r=n.match(/version\/(\d+)/i))&&e.splice(1,1,r[1]),e)}function l(){var e=navigator.userAgent;return e.match(/windows|win32/i)?"win":e.match(/macintosh|mac os x/i)?"mac":e.match(/linux/i)?"linux":e.match(/adobeair/i)?"adobeair":"unknown"}function a(r,n){var e=Error();e.stack&&("undefined"!=typeof Components?this.stack=e.stack.substring(e.stack.indexOf("\n")+1):"undefined"!=typeof chrome||"undefined"!=typeof process?this.stack=e.stack.replace(/\n[^\n]*/,""):this.stack=e.stack),"object"==typeof n&&(r||(r=""),r+=" : "+JSON.stringify(n)),this.message=void 0===r?e.message:r,this.fileName=e.fileName,this.lineNumber=e.lineNumber}var n,t,m=window.RELEASE_ID,i="//otvet.radar.imgsmail.ru/update",g="otvet",u="before",o=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","AppError"],c=["zStartIndexer","evalSmlo","SwfStore","DealPly","Object.parse","Script error","night_mode_disable","atomicFindClose","captureReady","Недостаточно места на диске","MailRuApi is not defined","getLoginButtonSignatureCodes","clearOverlappingSelection","onReceivedTouchIcons","The system cannot find the path specified","SelectedDivWithSearchText","'ucwp' is undefined","__gCrWeb"],b="sendBeacon"in navigator?h:d,f=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};window.onload=function(){return u="after"},window.onerror=function(d,g,h,b,w){var o=s(d,g,h,b,w),a=[u,m];e(n)&&(n=p()),e(t)&&(t=l(),"unknown"===t&&navigator.userAgent&&r("debug","unknown-platform",{platform:navigator.userAgent})),n[0]&&a.push(n[0]),n[1]&&a.push(""+n.join("-")),t&&"unknown"!==t&&a.push(t);var i=k(o),c=i.msg,f=i.err_stats;f&&(a=a.concat(f)),-1===a.indexOf("no_filename")&&(o.filename.match(location.host)?a.push("internal"):a.push("external")),-1!==a.indexOf("internal")&&v(o.message)?o.stack&&-1!==o.stack.indexOf(".js")?r("error",a,{error:c}):(a.push("not-handable"),r("error",a,{"not-handable":c})):(a.push("garbage"),r("error",a))},window.AppError=a,window.radar=r,a.prototype=Error(),a.prototype.constructor=a,a.prototype.name="AppError"}();
