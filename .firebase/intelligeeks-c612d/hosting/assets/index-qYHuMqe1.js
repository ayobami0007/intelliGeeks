const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CvnynxAW.js","assets/animations-CO4nIJh5.js","assets/react-vendor-DSJRIbHJ.js","assets/SEO-ACaBvV4z.js","assets/logo-CuYk0LPX.js","assets/emailjs-D_FKmv5n.js","assets/testimonials-ijmHDUrm.js","assets/icons-Dumohl7G.js","assets/ContactUs-daNLLfLa.js","assets/AboutUs-BOW3ZDyW.js","assets/Privacy-m2Ag2IBc.js","assets/Terms-9yRGTEg9.js","assets/Careers-DWAqfpZI.js","assets/SignUp-Bhd0G6vu.js","assets/SignIn-CI8HmXxe.js","assets/ParentDashboard-BwRs2dsj.js","assets/StudentDashboard-kwrAIMd3.js","assets/Assessment-mypvcQmx.js","assets/Payment-yek8ZZJc.js","assets/PaymentSuccess-BM4iJK1h.js","assets/Schedule-CSscNHGP.js","assets/Blog-BrJcZooi.js","assets/blogPosts-CRpFak8u.js","assets/BlogPost-B37goEUC.js","assets/JuniorGeeks-BHi8JOnK.js","assets/OtherPrograms-62DrdiW9.js"])))=>i.map(i=>d[i]);
import{j as e}from"./animations-CO4nIJh5.js";import{a as t,b as n,r,c as i,d as s,B as a}from"./react-vendor-DSJRIbHJ.js";import{G as o}from"./icons-Dumohl7G.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var l,u,c,h,d={exports:{}},f={},p={exports:{}},m={};function g(){return u||(u=1,p.exports=(l||(l=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,a=s>>>1;r<a;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g=!1,y="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function _(e){if(m=!1,b(e),!p)if(null!==n(l))p=!0,k||(k=!0,E());else{var t=n(u);null!==t&&P(_,t.startTime-e)}}var E,k=!1,S=-1,T=5,C=-1;function I(){return!(!g&&e.unstable_now()-C<T)}function A(){if(g=!1,k){var t=e.unstable_now();C=t;var i=!0;try{e:{p=!1,m&&(m=!1,v(S),S=-1),f=!0;var s=d;try{t:{for(b(t),h=n(l);null!==h&&!(h.expirationTime>t&&I());){var a=h.callback;if("function"==typeof a){h.callback=null,d=h.priorityLevel;var o=a(h.expirationTime<=t);if(t=e.unstable_now(),"function"==typeof o){h.callback=o,b(t),i=!0;break t}h===n(l)&&r(l),b(t)}else r(l);h=n(l)}if(null!==h)i=!0;else{var c=n(u);null!==c&&P(_,c.startTime-t),i=!1}}break e}finally{h=null,d=s,f=!1}i=void 0}}finally{i?E():k=!1}}}if("function"==typeof w)E=function(){w(A)};else if("undefined"!=typeof MessageChannel){var N=new MessageChannel,R=N.port2;N.port1.onmessage=A,E=function(){R.postMessage(null)}}else E=function(){y(A,0)};function P(t,n){S=y(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e||(T=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var a=e.unstable_now();switch(s="object"==typeof s&&null!==s&&"number"==typeof(s=s.delay)&&0<s?a+s:a,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>a?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(v(S),S=-1):m=!0,P(_,s-a))):(r.sortIndex=o,t(l,r),p||f||(p=!0,k||(k=!0,E()))),r},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(m)),m)),p.exports}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function y(){if(c)return f;c=1;var e=g(),r=t(),i=n();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function l(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(o(e)!==e)throw Error(s(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}var d=Object.assign,p=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),k=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function x(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=P&&e[P]||e["@@iterator"])?e:null}var D=Symbol.for("react.client.reference");function L(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===D?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case v:return"Fragment";case b:return"Profiler";case w:return"StrictMode";case T:return"Suspense";case C:return"SuspenseList";case N:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case y:return"Portal";case k:return(e.displayName||"Context")+".Provider";case E:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case I:return null!==(t=e.displayName||null)?t:L(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return L(e(t))}catch(n){}}return null}var O=Array.isArray,M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},F=[],V=-1;function j(e){return{current:e}}function B(e){0>V||(e.current=F[V],F[V]=null,V--)}function q(e,t){V++,F[V]=e.current,e.current=t}var H=j(null),$=j(null),K=j(null),W=j(null);function G(e,t){switch(q(K,t),q($,e),q(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=oh(t=ah(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(H),q(H,e)}function Q(){B(H),B($),B(K)}function X(e){null!==e.memoizedState&&q(W,e);var t=H.current,n=oh(t,e.type);t!==n&&(q($,e),q(H,n))}function Y(e){$.current===e&&(B(H),B($)),W.current===e&&(B(W),Xh._currentValue=z)}var J=Object.prototype.hasOwnProperty,Z=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,re=e.unstable_now,ie=e.unstable_getCurrentPriorityLevel,se=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,oe=e.unstable_NormalPriority,le=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ce=e.log,he=e.unstable_setDisableYieldValue,de=null,fe=null;function pe(e){if("function"==typeof ce&&he(e),fe&&"function"==typeof fe.setStrictMode)try{fe.setStrictMode(de,e)}catch(t){}}var me=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(ge(e)/ye|0)|0},ge=Math.log,ye=Math.LN2;var ve=256,we=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var o=134217727&r;return 0!==o?0!==(r=o&~s)?i=be(r):0!==(a&=o)?i=be(a):n||0!==(n=o&~e)&&(i=be(n)):0!==(o=r&~s)?i=be(o):0!==a?i=be(a):n||0!==(n=r&~e)&&(i=be(n)),0===i?0:0!==t&&t!==i&&0===(t&s)&&((s=i&-i)>=(n=t&-t)||32===s&&4194048&n)?t:i}function Ee(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function ke(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ve;return!(4194048&(ve<<=1))&&(ve=256),e}function Te(){var e=we;return!(62914560&(we<<=1))&&(we=4194304),e}function Ce(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ie(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ae(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-me(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Ne(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-me(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pe(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function xe(){var e=U.p;return 0!==e?e:void 0===(e=window.event)?32:hd(e.type)}var De=Math.random().toString(36).slice(2),Le="__reactFiber$"+De,Oe="__reactProps$"+De,Me="__reactContainer$"+De,Ue="__reactEvents$"+De,ze="__reactListeners$"+De,Fe="__reactHandles$"+De,Ve="__reactResources$"+De,je="__reactMarker$"+De;function Be(e){delete e[Le],delete e[Oe],delete e[Ue],delete e[ze],delete e[Fe]}function qe(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Me]||n[Le]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=_h(e);null!==e;){if(n=e[Le])return n;e=_h(e)}return t}n=(e=n).parentNode}return null}function He(e){if(e=e[Le]||e[Me]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function $e(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(s(33))}function Ke(e){var t=e[Ve];return t||(t=e[Ve]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[je]=!0}var Ge=new Set,Qe={};function Xe(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Qe[e]=t,e=0;e<t.length;e++)Ge.add(t[e])}var Je,Ze,et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},nt={};function rt(e,t,n){if(i=t,J.call(nt,i)||!J.call(tt,i)&&(et.test(i)?nt[i]=!0:(tt[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function it(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function st(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function at(e){if(void 0===Je)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Je=t&&t[1]||"",Ze=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Je+e+Ze}var ot=!1;function lt(e,t){if(!e||ot)return"";ot=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&r&&"string"==typeof o.stack)return[o.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),a=s[0],o=s[1];if(a&&o){var l=a.split("\n"),u=o.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===u.length)for(r=l.length-1,i=u.length-1;1<=r&&0<=i&&l[r]!==u[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==u[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==u[i]){var c="\n"+l[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=i);break}}}finally{ot=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?at(n):""}function ut(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return at("Activity");default:return""}}function ct(e){try{var t="";do{t+=ut(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function dt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){e._valueTracker||(e._valueTracker=function(e){var t=dt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vt(e,t,n,r,i,s,a,o){e.name="",null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&"boolean"!=typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?bt(e,a,ht(t)):null!=n?bt(e,a,ht(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=s&&(e.defaultChecked=!!s),null!=i&&(e.checked=i&&"function"!=typeof i&&"symbol"!=typeof i),null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o?e.name=""+ht(o):e.removeAttribute("name")}function wt(e,t,n,r,i,s,a,o){if(null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s&&(e.type=s),null!=t||null!=n){if(("submit"===s||"reset"===s)&&null==t)return;n=null!=n?""+ht(n):"",t=null!=t?""+ht(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:i)&&"symbol"!=typeof r&&!!r,e.checked=o?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&"boolean"!=typeof a&&(e.name=a)}function bt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Et(e,t,n){null==t||((t=""+ht(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ht(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function kt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(s(92));if(O(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ht(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Tt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||Tt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function It(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(s(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Ct(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Ct(e,a,t[a])}function At(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pt(e){return Rt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xt=null;function Dt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,Ot=null;function Mt(e){var t=He(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Oe]||null;if(!i)throw Error(s(90));vt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":Et(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&_t(e,!!n.multiple,t,!1)}}}var Ut=!1;function zt(e,t,n){if(Ut)return e(t,n);Ut=!0;try{return e(t)}finally{if(Ut=!1,(null!==Lt||null!==Ot)&&(qu(),Lt&&(t=Lt,e=Ot,Ot=Lt=null,Mt(t),e)))for(t=0;t<e.length;t++)Mt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Oe]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(s(231,t,typeof n));return n}var Vt=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),jt=!1;if(Vt)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){jt=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch(Od){jt=!1}var qt=null,Ht=null,$t=null;function Kt(){if($t)return $t;var e,t,n=Ht,r=n.length,i="value"in qt?qt.value:qt.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return $t=i.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Gt(){return!0}function Qt(){return!1}function Xt(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Gt:Qt,this.isPropagationStopped=Qt,this}return d(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Gt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Gt)},persist:function(){},isPersistent:Gt}),t}var Yt,Jt,Zt,en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tn=Xt(en),nn=d({},en,{view:0,detail:0}),rn=Xt(nn),sn=d({},nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&"mousemove"===e.type?(Yt=e.screenX-Zt.screenX,Jt=e.screenY-Zt.screenY):Jt=Yt=0,Zt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Jt}}),an=Xt(sn),on=Xt(d({},sn,{dataTransfer:0})),ln=Xt(d({},nn,{relatedTarget:0})),un=Xt(d({},en,{animationName:0,elapsedTime:0,pseudoElement:0})),cn=Xt(d({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),hn=Xt(d({},en,{data:0})),dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function gn(){return mn}var yn=Xt(d({},nn,{key:function(e){if(e.key){var t=dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),vn=Xt(d({},sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),wn=Xt(d({},nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gn})),bn=Xt(d({},en,{propertyName:0,elapsedTime:0,pseudoElement:0})),_n=Xt(d({},sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),En=Xt(d({},en,{newState:0,oldState:0})),kn=[9,13,27,32],Sn=Vt&&"CompositionEvent"in window,Tn=null;Vt&&"documentMode"in document&&(Tn=document.documentMode);var Cn=Vt&&"TextEvent"in window&&!Tn,In=Vt&&(!Sn||Tn&&8<Tn&&11>=Tn),An=String.fromCharCode(32),Nn=!1;function Rn(e,t){switch(e){case"keyup":return-1!==kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var xn=!1;var Dn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Dn[e.type]:"textarea"===t}function On(e,t,n,r){Lt?Ot?Ot.push(r):Ot=[r]:Lt=r,0<(t=Kc(t,"onChange")).length&&(n=new tn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Un=null;function zn(e){zc(e,0)}function Fn(e){if(pt($e(e)))return e}function Vn(e,t){if("change"===e)return t}var jn=!1;if(Vt){var Bn;if(Vt){var qn="oninput"in document;if(!qn){var Hn=document.createElement("div");Hn.setAttribute("oninput","return;"),qn="function"==typeof Hn.oninput}Bn=qn}else Bn=!1;jn=Bn&&(!document.documentMode||9<document.documentMode)}function $n(){Mn&&(Mn.detachEvent("onpropertychange",Kn),Un=Mn=null)}function Kn(e){if("value"===e.propertyName&&Fn(Un)){var t=[];On(t,Un,e,Dt(e)),zt(zn,t)}}function Wn(e,t,n){"focusin"===e?($n(),Un=n,(Mn=t).attachEvent("onpropertychange",Kn)):"focusout"===e&&$n()}function Gn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Un)}function Qn(e,t){if("click"===e)return Fn(t)}function Xn(e,t){if("input"===e||"change"===e)return Fn(t)}var Yn="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Jn(e,t){if(Yn(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!J.call(t,i)||!Yn(e[i],t[i]))return!1}return!0}function Zn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function er(e,t){var n,r=Zn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zn(r)}}function tr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?tr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function nr(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ir=Vt&&"documentMode"in document&&11>=document.documentMode,sr=null,ar=null,or=null,lr=!1;function ur(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;lr||null==sr||sr!==mt(r)||("selectionStart"in(r=sr)&&rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Jn(or,r)||(or=r,0<(r=Kc(ar,"onSelect")).length&&(t=new tn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},dr={},fr={};function pr(e){if(dr[e])return dr[e];if(!hr[e])return e;var t,n=hr[e];for(t in n)if(n.hasOwnProperty(t)&&t in fr)return dr[e]=n[t];return e}Vt&&(fr=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);var mr=pr("animationend"),gr=pr("animationiteration"),yr=pr("animationstart"),vr=pr("transitionrun"),wr=pr("transitionstart"),br=pr("transitioncancel"),_r=pr("transitionend"),Er=new Map,kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){Er.set(e,t),Xe(t,[e])}kr.push("scrollEnd");var Tr=new WeakMap;function Cr(e,t){if("object"==typeof e&&null!==e){var n=Tr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ct(t)},Tr.set(e,t),t)}return{value:e,source:t,stack:ct(t)}}var Ir=[],Ar=0,Nr=0;function Rr(){for(var e=Ar,t=Nr=Ar=0;t<e;){var n=Ir[t];Ir[t++]=null;var r=Ir[t];Ir[t++]=null;var i=Ir[t];Ir[t++]=null;var s=Ir[t];if(Ir[t++]=null,null!==r&&null!==i){var a=r.pending;null===a?i.next=i:(i.next=a.next,a.next=i),r.pending=i}0!==s&&Lr(n,i,s)}}function Pr(e,t,n,r){Ir[Ar++]=e,Ir[Ar++]=t,Ir[Ar++]=n,Ir[Ar++]=r,Nr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function xr(e,t,n,r){return Pr(e,t,n,r),Or(e)}function Dr(e,t){return Pr(e,null,null,t),Or(e)}function Lr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,s=e.return;null!==s;)s.childLanes|=n,null!==(r=s.alternate)&&(r.childLanes|=n),22===s.tag&&(null===(e=s.stateNode)||1&e._visibility||(i=!0)),e=s,s=s.return;return 3===e.tag?(s=e.stateNode,i&&null!==t&&(i=31-me(n),null===(r=(e=s.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),s):null}function Or(e){if(50<Lu)throw Lu=0,Ou=null,Error(s(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Mr={};function Ur(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zr(e,t,n,r){return new Ur(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vr(e,t){var n=e.alternate;return null===n?((n=zr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function jr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Br(e,t,n,r,i,a){var o=0;if(r=e,"function"==typeof e)Fr(e)&&(o=1);else if("string"==typeof e)o=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,n,H.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case N:return(e=zr(31,n,t,i)).elementType=N,e.lanes=a,e;case v:return qr(n.children,i,a,t);case w:o=8,i|=24;break;case b:return(e=zr(12,n,t,2|i)).elementType=b,e.lanes=a,e;case T:return(e=zr(13,n,t,i)).elementType=T,e.lanes=a,e;case C:return(e=zr(19,n,t,i)).elementType=C,e.lanes=a,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case _:case k:o=10;break e;case E:o=9;break e;case S:o=11;break e;case I:o=14;break e;case A:o=16,r=null;break e}o=29,n=Error(s(130,null===e?"null":typeof e,"")),r=null}return(t=zr(o,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function qr(e,t,n,r){return(e=zr(7,e,r,t)).lanes=n,e}function Hr(e,t,n){return(e=zr(6,e,null,t)).lanes=n,e}function $r(e,t,n){return(t=zr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kr=[],Wr=0,Gr=null,Qr=0,Xr=[],Yr=0,Jr=null,Zr=1,ei="";function ti(e,t){Kr[Wr++]=Qr,Kr[Wr++]=Gr,Gr=e,Qr=t}function ni(e,t,n){Xr[Yr++]=Zr,Xr[Yr++]=ei,Xr[Yr++]=Jr,Jr=e;var r=Zr;e=ei;var i=32-me(r)-1;r&=~(1<<i),n+=1;var s=32-me(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zr=1<<32-me(t)+i|n<<i|r,ei=s+e}else Zr=1<<s|n<<i|r,ei=e}function ri(e){null!==e.return&&(ti(e,1),ni(e,1,0))}function ii(e){for(;e===Gr;)Gr=Kr[--Wr],Kr[Wr]=null,Qr=Kr[--Wr],Kr[Wr]=null;for(;e===Jr;)Jr=Xr[--Yr],Xr[Yr]=null,ei=Xr[--Yr],Xr[Yr]=null,Zr=Xr[--Yr],Xr[Yr]=null}var si=null,ai=null,oi=!1,li=null,ui=!1,ci=Error(s(519));function hi(e){throw yi(Cr(Error(s(418,"")),e)),ci}function di(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Le]=e,t[Oe]=r,n){case"dialog":Fc("cancel",t),Fc("close",t);break;case"iframe":case"object":case"embed":Fc("load",t);break;case"video":case"audio":for(n=0;n<Mc.length;n++)Fc(Mc[n],t);break;case"source":Fc("error",t);break;case"img":case"image":case"link":Fc("error",t),Fc("load",t);break;case"details":Fc("toggle",t);break;case"input":Fc("invalid",t),wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ft(t);break;case"select":Fc("invalid",t);break;case"textarea":Fc("invalid",t),kt(t,r.value,r.defaultValue,r.children),ft(t)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Jc(t.textContent,n)?(null!=r.popover&&(Fc("beforetoggle",t),Fc("toggle",t)),null!=r.onScroll&&Fc("scroll",t),null!=r.onScrollEnd&&Fc("scrollend",t),null!=r.onClick&&(t.onclick=Zc),t=!0):t=!1,t||hi(e)}function fi(e){for(si=e.return;si;)switch(si.tag){case 5:case 13:return void(ui=!1);case 27:case 3:return void(ui=!0);default:si=si.return}}function pi(e){if(e!==si)return!1;if(!oi)return fi(e),oi=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||lh(e.type,e.memoizedProps)),t=!t),t&&ai&&hi(e),fi(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ai=wh(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ai=null}}else 27===n?(n=ai,mh(e.type)?(e=bh,bh=null,ai=e):ai=n):ai=si?wh(e.stateNode.nextSibling):null;return!0}function mi(){ai=si=null,oi=!1}function gi(){var e=li;return null!==e&&(null===_u?_u=e:_u.push.apply(_u,e),li=null),e}function yi(e){null===li?li=[e]:li.push(e)}var vi=j(null),wi=null,bi=null;function _i(e,t,n){q(vi,t._currentValue),t._currentValue=n}function Ei(e){e._currentValue=vi.current,B(vi)}function ki(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var o=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var u=0;u<t.length;u++)if(l.context===t[u]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),ki(a.return,n,e),r||(o=null);break e}a=l.next}}else if(18===i.tag){if(null===(o=i.return))throw Error(s(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),ki(o,n,e),o=null}else o=i.child;if(null!==o)o.return=i;else for(o=i;null!==o;){if(o===e){o=null;break}if(null!==(i=o.sibling)){i.return=o.return,o=i;break}o=o.return}i=o}}function Ti(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(524288&i.flags)a=!0;else if(262144&i.flags)break;if(10===i.tag){var o=i.alternate;if(null===o)throw Error(s(387));if(null!==(o=o.memoizedProps)){var l=i.type;Yn(i.pendingProps.value,o.value)||(null!==e?e.push(l):e=[l])}}else if(i===W.current){if(null===(o=i.alternate))throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Xh):e=[Xh])}i=i.return}null!==e&&Si(t,e,n,r),t.flags|=262144}function Ci(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ii(e){wi=e,bi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ai(e){return Ri(wi,e)}function Ni(e,t){return null===wi&&Ii(e),Ri(e,t)}function Ri(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===bi){if(null===e)throw Error(s(308));bi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bi=bi.next=t;return n}var Pi="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},xi=e.unstable_scheduleCallback,Di=e.unstable_NormalPriority,Li={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oi(){return{controller:new Pi,data:new Map,refCount:0}}function Mi(e){e.refCount--,0===e.refCount&&xi(Di,function(){e.controller.abort()})}var Ui=null,zi=0,Fi=0,Vi=null;function ji(){if(0===--zi&&null!==Ui){null!==Vi&&(Vi.status="fulfilled");var e=Ui;Ui=null,Fi=0,Vi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Bi=M.S;M.S=function(e,t){"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Ui){var n=Ui=[];zi=0,Fi=Pc(),Vi={status:"pending",value:void 0,then:function(e){n.push(e)}}}zi++,t.then(ji,ji)}(0,t),null!==Bi&&Bi(e,t)};var qi=j(null);function Hi(){var e=qi.current;return null!==e?e:su.pooledCache}function $i(e,t){q(qi,null===t?qi.current:t.pool)}function Ki(){var e=Hi();return null===e?null:{parent:Li._currentValue,pool:e}}var Wi=Error(s(460)),Gi=Error(s(474)),Qi=Error(s(542)),Xi={then:function(){}};function Yi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Ji(){}function Zi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ns(e=t.reason),e;default:if("string"==typeof t.status)t.then(Ji,Ji);else{if(null!==(e=su)&&100<e.shellSuspendCounter)throw Error(s(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ns(e=t.reason),e}throw es=t,Wi}}var es=null;function ts(){if(null===es)throw Error(s(459));var e=es;return es=null,e}function ns(e){if(e===Wi||e===Qi)throw Error(s(483))}var rs=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function as(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function os(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&iu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Or(e),Lr(e,null,n),t}return Pr(e,r,t,n),Or(e)}function ls(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var cs=!1;function hs(){if(cs){if(null!==Vi)throw Vi}}function ds(e,t,n,r){cs=!1;var i=e.updateQueue;rs=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var f=-536870913&o.lane,p=f!==o.lane;if(p?(ou&f)===f:(r&f)===f){0!==f&&f===Fi&&(cs=!0),null!==c&&(c=c.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var m=e,g=o;f=t;var y=n;switch(g.tag){case 1:if("function"==typeof(m=g.payload)){h=m.call(y,h,f);break e}h=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(f="function"==typeof(m=g.payload)?m.call(y,h,f):m))break e;h=d({},h,f);break e;case 2:rs=!0}}null!==(f=o.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=i.callbacks)?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=p,l=h):c=c.next=p,a|=f;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(p=o).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null===s&&(i.shared.lanes=0),mu|=a,e.lanes=a,e.memoizedState=h}}function fs(e,t){if("function"!=typeof e)throw Error(s(191,e));e.call(t)}function ps(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)fs(n[e],t)}var ms=j(null),gs=j(0);function ys(e,t){q(gs,e=fu),q(ms,t),fu=e|t.baseLanes}function vs(){q(gs,fu),q(ms,ms.current)}function ws(){fu=gs.current,B(ms),B(gs)}var bs=0,_s=null,Es=null,ks=null,Ss=!1,Ts=!1,Cs=!1,Is=0,As=0,Ns=null,Rs=0;function Ps(){throw Error(s(321))}function xs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Ds(e,t,n,r,i,s){return bs=s,_s=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=null===e||null===e.memoizedState?Wa:Ga,Cs=!1,s=n(r,i),Cs=!1,Ts&&(s=Os(t,n,r,i)),Ls(e),s}function Ls(e){M.H=Ka;var t=null!==Es&&null!==Es.next;if(bs=0,ks=Es=_s=null,Ss=!1,As=0,Ns=null,t)throw Error(s(300));null===e||No||null!==(e=e.dependencies)&&Ci(e)&&(No=!0)}function Os(e,t,n,r){_s=e;var i=0;do{if(Ts&&(Ns=null),As=0,Ts=!1,25<=i)throw Error(s(301));if(i+=1,ks=Es=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}M.H=Qa,a=t(n,r)}while(Ts);return a}function Ms(){var e=M.H,t=e.useState()[0];return t="function"==typeof t.then?Bs(t):t,e=e.useState()[0],(null!==Es?Es.memoizedState:null)!==e&&(_s.flags|=1024),t}function Us(){var e=0!==Is;return Is=0,e}function zs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fs(e){if(Ss){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Ss=!1}bs=0,ks=Es=_s=null,Ts=!1,As=Is=0,Ns=null}function Vs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ks?_s.memoizedState=ks=e:ks=ks.next=e,ks}function js(){if(null===Es){var e=_s.alternate;e=null!==e?e.memoizedState:null}else e=Es.next;var t=null===ks?_s.memoizedState:ks.next;if(null!==t)ks=t,Es=e;else{if(null===e){if(null===_s.alternate)throw Error(s(467));throw Error(s(310))}e={memoizedState:(Es=e).memoizedState,baseState:Es.baseState,baseQueue:Es.baseQueue,queue:Es.queue,next:null},null===ks?_s.memoizedState=ks=e:ks=ks.next=e}return ks}function Bs(e){var t=As;return As+=1,null===Ns&&(Ns=[]),e=Zi(Ns,e,t),t=_s,null===(null===ks?t.memoizedState:ks.next)&&(t=t.alternate,M.H=null===t||null===t.memoizedState?Wa:Ga),e}function qs(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Bs(e);if(e.$$typeof===k)return Ai(e)}throw Error(s(438,String(e)))}function Hs(e){var t=null,n=_s.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=_s.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},_s.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=R;return t.index++,n}function $s(e,t){return"function"==typeof t?t(e):t}function Ks(e){return Ws(js(),Es,e)}function Ws(e,t,n){var r=e.queue;if(null===r)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=o=null,u=null,c=t=i.next,h=!1;do{var d=-536870913&c.lane;if(d!==c.lane?(ou&d)===d:(bs&d)===d){var f=c.revertLane;if(0===f)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Fi&&(h=!0);else{if((bs&f)===f){c=c.next,f===Fi&&(h=!0);continue}d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=d,o=a):u=u.next=d,_s.lanes|=f,mu|=f}d=c.action,Cs&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=f,o=a):u=u.next=f,_s.lanes|=d,mu|=d;c=c.next}while(null!==c&&c!==t);if(null===u?o=a:u.next=l,!Yn(a,e.memoizedState)&&(No=!0,h&&null!==(n=Vi)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=u,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gs(e){var t=js(),n=t.queue;if(null===n)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{a=e(a,o.action),o=o.next}while(o!==i);Yn(a,t.memoizedState)||(No=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Qs(e,t,n){var r=_s,i=js(),a=oi;if(a){if(void 0===n)throw Error(s(407));n=n()}else n=t();var o=!Yn((Es||i).memoizedState,n);if(o&&(i.memoizedState=n,No=!0),i=i.queue,va(2048,8,Js.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||null!==ks&&1&ks.memoizedState.tag){if(r.flags|=2048,ma(9,{destroy:void 0,resource:void 0},Ys.bind(null,r,i,n,t),null),null===su)throw Error(s(349));a||124&bs||Xs(r,t,n)}return n}function Xs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=_s.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},_s.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ys(e,t,n,r){t.value=n,t.getSnapshot=r,Zs(t)&&ea(e)}function Js(e,t,n){return n(function(){Zs(t)&&ea(e)})}function Zs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function ea(e){var t=Dr(e,2);null!==t&&zu(t,e,2)}function ta(e){var t=Vs();if("function"==typeof e){var n=e;if(e=n(),Cs){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:e},t}function na(e,t,n,r){return e.baseState=n,Ws(e,Es,"function"==typeof r?r:$s)}function ra(e,t,n,r,i){if(qa(e))throw Error(s(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==M.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,ia(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ia(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var s=M.T,a={};M.T=a;try{var o=n(i,r),l=M.S;null!==l&&l(a,o),sa(e,t,o)}catch(u){oa(e,t,u)}finally{M.T=s}}else try{sa(e,t,s=n(i,r))}catch(c){oa(e,t,c)}}function sa(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){aa(e,t,n)},function(n){return oa(e,t,n)}):aa(e,t,n)}function aa(e,t,n){t.status="fulfilled",t.value=n,la(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ia(e,n)))}function oa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,la(t),t=t.next}while(t!==r)}e.action=null}function la(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ua(e,t){return t}function ca(e,t){if(oi){var n=su.formState;if(null!==n){e:{var r=_s;if(oi){if(ai){t:{for(var i=ai,s=ui;8!==i.nodeType;){if(!s){i=null;break t}if(null===(i=wh(i.nextSibling))){i=null;break t}}i="F!"===(s=i.data)||"F"===s?i:null}if(i){ai=wh(i.nextSibling),r="F!"===i.data;break e}}hi(r)}r=!1}r&&(t=n[0])}}return(n=Vs()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n.queue=r,n=Va.bind(null,_s,r),r.dispatch=n,r=ta(!1),s=Ba.bind(null,_s,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Vs()).queue=i,n=ra.bind(null,_s,i,s,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ha(e){return da(js(),Es,e)}function da(e,t,n){if(t=Ws(e,t,ua)[0],e=Ks($s)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=Bs(t)}catch(a){if(a===Wi)throw Qi;throw a}else r=t;var i=(t=js()).queue,s=i.dispatch;return n!==t.memoizedState&&(_s.flags|=2048,ma(9,{destroy:void 0,resource:void 0},fa.bind(null,i,n),null)),[r,s,e]}function fa(e,t){e.action=t}function pa(e){var t=js(),n=Es;if(null!==n)return da(t,n,e);js(),t=t.memoizedState;var r=(n=js()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ma(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=_s.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},_s.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ga(){return js().memoizedState}function ya(e,t,n,r){var i=Vs();r=void 0===r?null:r,_s.flags|=e,i.memoizedState=ma(1|t,{destroy:void 0,resource:void 0},n,r)}function va(e,t,n,r){var i=js();r=void 0===r?null:r;var s=i.memoizedState.inst;null!==Es&&null!==r&&xs(r,Es.memoizedState.deps)?i.memoizedState=ma(t,s,n,r):(_s.flags|=e,i.memoizedState=ma(1|t,s,n,r))}function wa(e,t){ya(8390656,8,e,t)}function ba(e,t){va(2048,8,e,t)}function _a(e,t){return va(4,2,e,t)}function Ea(e,t){return va(4,4,e,t)}function ka(e,t){if("function"==typeof t){e=e();var n=t(e);return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){n=null!=n?n.concat([e]):null,va(4,4,ka.bind(null,t,e),n)}function Ta(){}function Ca(e,t){var n=js();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ia(e,t){var n=js();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&xs(t,r[1]))return r[0];if(r=e(),Cs){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function Aa(e,t,n){return void 0===n||1073741824&bs?e.memoizedState=t:(e.memoizedState=n,e=Uu(),_s.lanes|=e,mu|=e,n)}function Na(e,t,n,r){return Yn(n,t)?n:null!==ms.current?(e=Aa(e,n,r),Yn(e,t)||(No=!0),e):42&bs?(e=Uu(),_s.lanes|=e,mu|=e,t):(No=!0,e.memoizedState=n)}function Ra(e,t,n,r,i){var s=U.p;U.p=0!==s&&8>s?s:8;var a,o,l,u=M.T,c={};M.T=c,Ba(e,!1,t,n);try{var h=i(),d=M.S;if(null!==d&&d(c,h),null!==h&&"object"==typeof h&&"function"==typeof h.then)ja(e,t,(a=r,o=[],l={status:"pending",value:null,reason:null,then:function(e){o.push(e)}},h.then(function(){l.status="fulfilled",l.value=a;for(var e=0;e<o.length;e++)(0,o[e])(a)},function(e){for(l.status="rejected",l.reason=e,e=0;e<o.length;e++)(0,o[e])(void 0)}),l),Mu());else ja(e,t,r,Mu())}catch(f){ja(e,t,{then:function(){},status:"rejected",reason:f},Mu())}finally{U.p=s,M.T=u}}function Pa(){}function xa(e,t,n,r){if(5!==e.tag)throw Error(s(476));var i=Da(e).queue;Ra(e,i,t,z,null===n?Pa:function(){return La(e),n(r)})}function Da(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function La(e){ja(e,Da(e).next.queue,{},Mu())}function Oa(){return Ai(Xh)}function Ma(){return js().memoizedState}function Ua(){return js().memoizedState}function za(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Mu(),r=os(t,e=as(n),n);return null!==r&&(zu(r,t,n),ls(r,t,n)),t={cache:Oi()},void(e.payload=t)}t=t.return}}function Fa(e,t,n){var r=Mu();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},qa(e)?Ha(t,n):null!==(n=xr(e,t,n,r))&&(zu(n,e,r),$a(n,t,r))}function Va(e,t,n){ja(e,t,n,Mu())}function ja(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(qa(e))Ha(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,Yn(o,a))return Pr(e,t,i,0),null===su&&Rr(),!1}catch(l){}if(null!==(n=xr(e,t,i,r)))return zu(n,e,r),$a(n,t,r),!0}return!1}function Ba(e,t,n,r){if(r={lane:2,revertLane:Pc(),action:r,hasEagerState:!1,eagerState:null,next:null},qa(e)){if(t)throw Error(s(479))}else null!==(t=xr(e,n,r,2))&&zu(t,e,2)}function qa(e){var t=e.alternate;return e===_s||null!==t&&t===_s}function Ha(e,t){Ts=Ss=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $a(e,t,n){if(4194048&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}var Ka={readContext:Ai,use:qs,useCallback:Ps,useContext:Ps,useEffect:Ps,useImperativeHandle:Ps,useLayoutEffect:Ps,useInsertionEffect:Ps,useMemo:Ps,useReducer:Ps,useRef:Ps,useState:Ps,useDebugValue:Ps,useDeferredValue:Ps,useTransition:Ps,useSyncExternalStore:Ps,useId:Ps,useHostTransitionStatus:Ps,useFormState:Ps,useActionState:Ps,useOptimistic:Ps,useMemoCache:Ps,useCacheRefresh:Ps},Wa={readContext:Ai,use:qs,useCallback:function(e,t){return Vs().memoizedState=[e,void 0===t?null:t],e},useContext:Ai,useEffect:wa,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,ya(4194308,4,ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){ya(4,2,e,t)},useMemo:function(e,t){var n=Vs();t=void 0===t?null:t;var r=e();if(Cs){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Vs();if(void 0!==n){var i=n(t);if(Cs){pe(!0);try{n(t)}finally{pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fa.bind(null,_s,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Vs().memoizedState=e},useState:function(e){var t=(e=ta(e)).queue,n=Va.bind(null,_s,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ta,useDeferredValue:function(e,t){return Aa(Vs(),e,t)},useTransition:function(){var e=ta(!1);return e=Ra.bind(null,_s,e.queue,!0,!1),Vs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=_s,i=Vs();if(oi){if(void 0===n)throw Error(s(407));n=n()}else{if(n=t(),null===su)throw Error(s(349));124&ou||Xs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,wa(Js.bind(null,r,a,e),[e]),r.flags|=2048,ma(9,{destroy:void 0,resource:void 0},Ys.bind(null,r,a,n,t),null),n},useId:function(){var e=Vs(),t=su.identifierPrefix;if(oi){var n=ei;t="«"+t+"R"+(n=(Zr&~(1<<32-me(Zr)-1)).toString(32)+n),0<(n=Is++)&&(t+="H"+n.toString(32)),t+="»"}else t="«"+t+"r"+(n=Rs++).toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Oa,useFormState:ca,useActionState:ca,useOptimistic:function(e){var t=Vs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ba.bind(null,_s,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hs,useCacheRefresh:function(){return Vs().memoizedState=za.bind(null,_s)}},Ga={readContext:Ai,use:qs,useCallback:Ca,useContext:Ai,useEffect:ba,useImperativeHandle:Sa,useInsertionEffect:_a,useLayoutEffect:Ea,useMemo:Ia,useReducer:Ks,useRef:ga,useState:function(){return Ks($s)},useDebugValue:Ta,useDeferredValue:function(e,t){return Na(js(),Es.memoizedState,e,t)},useTransition:function(){var e=Ks($s)[0],t=js().memoizedState;return["boolean"==typeof e?e:Bs(e),t]},useSyncExternalStore:Qs,useId:Ma,useHostTransitionStatus:Oa,useFormState:ha,useActionState:ha,useOptimistic:function(e,t){return na(js(),0,e,t)},useMemoCache:Hs,useCacheRefresh:Ua},Qa={readContext:Ai,use:qs,useCallback:Ca,useContext:Ai,useEffect:ba,useImperativeHandle:Sa,useInsertionEffect:_a,useLayoutEffect:Ea,useMemo:Ia,useReducer:Gs,useRef:ga,useState:function(){return Gs($s)},useDebugValue:Ta,useDeferredValue:function(e,t){var n=js();return null===Es?Aa(n,e,t):Na(n,Es.memoizedState,e,t)},useTransition:function(){var e=Gs($s)[0],t=js().memoizedState;return["boolean"==typeof e?e:Bs(e),t]},useSyncExternalStore:Qs,useId:Ma,useHostTransitionStatus:Oa,useFormState:pa,useActionState:pa,useOptimistic:function(e,t){var n=js();return null!==Es?na(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hs,useCacheRefresh:Ua},Xa=null,Ya=0;function Ja(e){var t=Ya;return Ya+=1,null===Xa&&(Xa=[]),Zi(Xa,e,t)}function Za(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function eo(e,t){if(t.$$typeof===p)throw Error(s(525));throw e=Object.prototype.toString.call(t),Error(s(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function to(e){return(0,e._init)(e._payload)}function no(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Vr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Hr(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var s=n.type;return s===v?h(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===A&&to(s)===t.type)?(Za(t=i(t,n.props),n),t.return=e,t):(Za(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=$r(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function h(e,t,n,r,s){return null===t||7!==t.tag?((t=qr(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=Hr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case m:return Za(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case y:return(t=$r(t,e.mode,n)).return=e,t;case A:return d(e,t=(0,t._init)(t._payload),n)}if(O(t)||x(t))return(t=qr(t,e.mode,n,null)).return=e,t;if("function"==typeof t.then)return d(e,Ja(t),n);if(t.$$typeof===k)return d(e,Ni(e,t),n);eo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===i?u(e,t,n,r):null;case y:return n.key===i?c(e,t,n,r):null;case A:return f(e,t,n=(i=n._init)(n._payload),r)}if(O(n)||x(n))return null!==i?null:h(e,t,n,r,null);if("function"==typeof n.then)return f(e,t,Ja(n),r);if(n.$$typeof===k)return f(e,t,Ni(e,n),r);eo(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case y:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case A:return p(e,t,n,r=(0,r._init)(r._payload),i)}if(O(r)||x(r))return h(t,e=e.get(n)||null,r,i,null);if("function"==typeof r.then)return p(e,t,n,Ja(r),i);if(r.$$typeof===k)return p(e,t,n,Ni(t,r),i);eo(t,r)}return null}function g(l,u,c,h){if("object"==typeof c&&null!==c&&c.type===v&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case m:e:{for(var w=c.key;null!==u;){if(u.key===w){if((w=c.type)===v){if(7===u.tag){n(l,u.sibling),(h=i(u,c.props.children)).return=l,l=h;break e}}else if(u.elementType===w||"object"==typeof w&&null!==w&&w.$$typeof===A&&to(w)===u.type){n(l,u.sibling),Za(h=i(u,c.props),c),h.return=l,l=h;break e}n(l,u);break}t(l,u),u=u.sibling}c.type===v?((h=qr(c.props.children,l.mode,h,c.key)).return=l,l=h):(Za(h=Br(c.type,c.key,c.props,null,l.mode,h),c),h.return=l,l=h)}return o(l);case y:e:{for(w=c.key;null!==u;){if(u.key===w){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(h=i(u,c.children||[])).return=l,l=h;break e}n(l,u);break}t(l,u),u=u.sibling}(h=$r(c,l.mode,h)).return=l,l=h}return o(l);case A:return g(l,u,c=(w=c._init)(c._payload),h)}if(O(c))return function(i,s,o,l){for(var u=null,c=null,h=s,m=s=0,g=null;null!==h&&m<o.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var y=f(i,h,o[m],l);if(null===y){null===h&&(h=g);break}e&&h&&null===y.alternate&&t(i,h),s=a(y,s,m),null===c?u=y:c.sibling=y,c=y,h=g}if(m===o.length)return n(i,h),oi&&ti(i,m),u;if(null===h){for(;m<o.length;m++)null!==(h=d(i,o[m],l))&&(s=a(h,s,m),null===c?u=h:c.sibling=h,c=h);return oi&&ti(i,m),u}for(h=r(h);m<o.length;m++)null!==(g=p(h,i,m,o[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),s=a(g,s,m),null===c?u=g:c.sibling=g,c=g);return e&&h.forEach(function(e){return t(i,e)}),oi&&ti(i,m),u}(l,u,c,h);if(x(c)){if("function"!=typeof(w=x(c)))throw Error(s(150));return function(i,o,l,u){if(null==l)throw Error(s(151));for(var c=null,h=null,m=o,g=o=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var w=f(i,m,v.value,u);if(null===w){null===m&&(m=y);break}e&&m&&null===w.alternate&&t(i,m),o=a(w,o,g),null===h?c=w:h.sibling=w,h=w,m=y}if(v.done)return n(i,m),oi&&ti(i,g),c;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=d(i,v.value,u))&&(o=a(v,o,g),null===h?c=v:h.sibling=v,h=v);return oi&&ti(i,g),c}for(m=r(m);!v.done;g++,v=l.next())null!==(v=p(m,i,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),o=a(v,o,g),null===h?c=v:h.sibling=v,h=v);return e&&m.forEach(function(e){return t(i,e)}),oi&&ti(i,g),c}(l,u,c=w.call(c),h)}if("function"==typeof c.then)return g(l,u,Ja(c),h);if(c.$$typeof===k)return g(l,u,Ni(l,c),h);eo(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c||"bigint"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(h=i(u,c)).return=l,l=h):(n(l,u),(h=Hr(c,l.mode,h)).return=l,l=h),o(l)):n(l,u)}return function(e,t,n,r){try{Ya=0;var i=g(e,t,n,r);return Xa=null,i}catch(a){if(a===Wi||a===Qi)throw a;var s=zr(29,a,null,e.mode);return s.lanes=r,s.return=e,s}}}var ro=no(!0),io=no(!1),so=j(null),ao=null;function oo(e){var t=e.alternate;q(ho,1&ho.current),q(so,e),null===ao&&(null===t||null!==ms.current||null!==t.memoizedState)&&(ao=e)}function lo(e){if(22===e.tag){if(q(ho,ho.current),q(so,e),null===ao){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ao=e)}}else uo()}function uo(){q(ho,ho.current),q(so,so.current)}function co(e){B(so),ao===e&&(ao=null),B(ho)}var ho=j(0);function fo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||vh(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function po(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:d({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var mo={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Mu(),i=as(r);i.payload=t,null!=n&&(i.callback=n),null!==(t=os(e,i,r))&&(zu(t,e,r),ls(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Mu(),i=as(r);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=os(e,i,r))&&(zu(t,e,r),ls(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mu(),r=as(n);r.tag=2,null!=t&&(r.callback=t),null!==(t=os(e,r,n))&&(zu(t,e,n),ls(t,e,n))}};function go(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!Jn(n,r)||!Jn(i,s))}function yo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function vo(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=d({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var wo="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)};function bo(e){wo(e)}function _o(e){}function Eo(e){wo(e)}function ko(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function So(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function To(e,t,n){return(n=as(n)).tag=3,n.payload={element:null},n.callback=function(){ko(e,t)},n}function Co(e){return(e=as(e)).tag=3,e}function Io(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"==typeof i){var s=r.value;e.payload=function(){return i(s)},e.callback=function(){So(t,n,r)}}var a=n.stateNode;null!==a&&"function"==typeof a.componentDidCatch&&(e.callback=function(){So(t,n,r),"function"!=typeof i&&(null===Cu?Cu=new Set([this]):Cu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ao=Error(s(461)),No=!1;function Ro(e,t,n,r){t.child=null===e?io(t,null,n,r):ro(t,e.child,n,r)}function Po(e,t,n,r,i){n=n.render;var s=t.ref;if("ref"in r){var a={};for(var o in r)"ref"!==o&&(a[o]=r[o])}else a=r;return Ii(t),r=Ds(e,t,n,a,s,i),o=Us(),null===e||No?(oi&&o&&ri(t),t.flags|=1,Ro(e,t,r,i),t.child):(zs(e,t,i),Yo(e,t,i))}function xo(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Fr(s)||void 0!==s.defaultProps||null!==n.compare?((e=Br(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Do(e,t,s,r,i))}if(s=e.child,!Jo(e,i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:Jn)(a,r)&&e.ref===t.ref)return Yo(e,t,i)}return t.flags|=1,(e=Vr(s,r)).ref=t.ref,e.return=t,t.child=e}function Do(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(Jn(s,r)&&e.ref===t.ref){if(No=!1,t.pendingProps=r=s,!Jo(e,i))return t.lanes=e.lanes,Yo(e,t,i);131072&e.flags&&(No=!0)}}return Uo(e,t,n,r,i)}function Lo(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(128&t.flags){if(r=null!==s?s.baseLanes|n:n,null!==e){for(i=t.child=e.child,s=0;null!==i;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~r}else t.childLanes=0,t.child=null;return Oo(e,t,r,n)}if(!(536870912&n))return t.lanes=t.childLanes=536870912,Oo(e,t,null!==s?s.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&$i(0,null!==s?s.cachePool:null),null!==s?ys(t,s):vs(),lo(t)}else null!==s?($i(0,s.cachePool),ys(t,s),uo(),t.memoizedState=null):(null!==e&&$i(0,null),vs(),uo());return Ro(e,t,i,n),t.child}function Oo(e,t,n,r){var i=Hi();return i=null===i?null:{parent:Li._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&$i(0,null),vs(),lo(t),null!==e&&Ti(e,t,r,!0),null}function Mo(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!=typeof n&&"object"!=typeof n)throw Error(s(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Uo(e,t,n,r,i){return Ii(t),n=Ds(e,t,n,r,void 0,i),r=Us(),null===e||No?(oi&&r&&ri(t),t.flags|=1,Ro(e,t,n,i),t.child):(zs(e,t,i),Yo(e,t,i))}function zo(e,t,n,r,i,s){return Ii(t),t.updateQueue=null,n=Os(t,r,n,i),Ls(e),r=Us(),null===e||No?(oi&&r&&ri(t),t.flags|=1,Ro(e,t,n,s),t.child):(zs(e,t,s),Yo(e,t,s))}function Fo(e,t,n,r,i){if(Ii(t),null===t.stateNode){var s=Mr,a=n.contextType;"object"==typeof a&&null!==a&&(s=Ai(a)),s=new n(r,s),t.memoizedState=null!==s.state&&void 0!==s.state?s.state:null,s.updater=mo,t.stateNode=s,s._reactInternals=t,(s=t.stateNode).props=r,s.state=t.memoizedState,s.refs={},is(t),a=n.contextType,s.context="object"==typeof a&&null!==a?Ai(a):Mr,s.state=t.memoizedState,"function"==typeof(a=n.getDerivedStateFromProps)&&(po(t,n,a,r),s.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof s.getSnapshotBeforeUpdate||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||(a=s.state,"function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount(),a!==s.state&&mo.enqueueReplaceState(s,s.state,null),ds(t,r,s,i),hs(),s.state=t.memoizedState),"function"==typeof s.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){s=t.stateNode;var o=t.memoizedProps,l=vo(n,o);s.props=l;var u=s.context,c=n.contextType;a=Mr,"object"==typeof c&&null!==c&&(a=Ai(c));var h=n.getDerivedStateFromProps;c="function"==typeof h||"function"==typeof s.getSnapshotBeforeUpdate,o=t.pendingProps!==o,c||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o||u!==a)&&yo(t,s,r,a),rs=!1;var d=t.memoizedState;s.state=d,ds(t,r,s,i),hs(),u=t.memoizedState,o||d!==u||rs?("function"==typeof h&&(po(t,n,h,r),u=t.memoizedState),(l=rs||go(t,n,l,r,d,u,a))?(c||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=a,r=l):("function"==typeof s.componentDidMount&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ss(e,t),c=vo(n,a=t.memoizedProps),s.props=c,h=t.pendingProps,d=s.context,u=n.contextType,l=Mr,"object"==typeof u&&null!==u&&(l=Ai(u)),(u="function"==typeof(o=n.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==h||d!==l)&&yo(t,s,r,l),rs=!1,d=t.memoizedState,s.state=d,ds(t,r,s,i),hs();var f=t.memoizedState;a!==h||d!==f||rs||null!==e&&null!==e.dependencies&&Ci(e.dependencies)?("function"==typeof o&&(po(t,n,o,r),f=t.memoizedState),(c=rs||go(t,n,c,r,d,f,l)||null!==e&&null!==e.dependencies&&Ci(e.dependencies))?(u||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,f,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,f,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=l,r=c):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return s=r,Mo(e,t),r=!!(128&t.flags),s||r?(s=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:s.render(),t.flags|=1,null!==e&&r?(t.child=ro(t,e.child,null,i),t.child=ro(t,null,n,i)):Ro(e,t,n,i),t.memoizedState=s.state,e=t.child):e=Yo(e,t,i),e}function Vo(e,t,n,r){return mi(),t.flags|=256,Ro(e,t,n,r),t.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bo(e){return{baseLanes:e,cachePool:Ki()}}function qo(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=vu),e}function Ho(e,t,n){var r,i=t.pendingProps,a=!1,o=!!(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&!!(2&ho.current)),r&&(a=!0,t.flags&=-129),r=!!(32&t.flags),t.flags&=-33,null===e){if(oi){if(a?oo(t):uo(),oi){var l,u=ai;if(l=u){e:{for(l=u,u=ui;8!==l.nodeType;){if(!u){u=null;break e}if(null===(l=wh(l.nextSibling))){u=null;break e}}u=l}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Jr?{id:Zr,overflow:ei}:null,retryLane:536870912,hydrationErrors:null},(l=zr(18,null,null,0)).stateNode=u,l.return=t,t.child=l,si=t,ai=null,l=!0):l=!1}l||hi(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return vh(u)?t.lanes=32:t.lanes=536870912,null;co(t)}return u=i.children,i=i.fallback,a?(uo(),u=Ko({mode:"hidden",children:u},a=t.mode),i=qr(i,a,n,null),u.return=t,i.return=t,u.sibling=i,t.child=u,(a=t.child).memoizedState=Bo(n),a.childLanes=qo(e,r,n),t.memoizedState=jo,i):(oo(t),$o(t,u))}if(null!==(l=e.memoizedState)&&null!==(u=l.dehydrated)){if(o)256&t.flags?(oo(t),t.flags&=-257,t=Wo(e,t,n)):null!==t.memoizedState?(uo(),t.child=e.child,t.flags|=128,t=null):(uo(),a=i.fallback,u=t.mode,i=Ko({mode:"visible",children:i.children},u),(a=qr(a,u,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ro(t,e.child,null,n),(i=t.child).memoizedState=Bo(n),i.childLanes=qo(e,r,n),t.memoizedState=jo,t=a);else if(oo(t),vh(u)){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(i=Error(s(419))).stack="",i.digest=r,yi({value:i,source:null,stack:null}),t=Wo(e,t,n)}else if(No||Ti(e,t,n,!1),r=0!==(n&e.childLanes),No||r){if(null!==(r=su)&&(0!==(i=0!==((i=42&(i=n&-n)?1:Re(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Dr(e,i),zu(r,e,i),Ao;"$?"===u.data||Qu(),t=Wo(e,t,n)}else"$?"===u.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ai=wh(u.nextSibling),si=t,oi=!0,li=null,ui=!1,null!==e&&(Xr[Yr++]=Zr,Xr[Yr++]=ei,Xr[Yr++]=Jr,Zr=e.id,ei=e.overflow,Jr=t),(t=$o(t,i.children)).flags|=4096);return t}return a?(uo(),a=i.fallback,u=t.mode,c=(l=e.child).sibling,(i=Vr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==c?a=Vr(c,a):(a=qr(a,u,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(u=e.child.memoizedState)?u=Bo(n):(null!==(l=u.cachePool)?(c=Li._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Ki(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=qo(e,r,n),t.memoizedState=jo,i):(oo(t),e=(n=e.child).sibling,(n=Vr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function $o(e,t){return(t=Ko({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ko(e,t){return(e=zr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Wo(e,t,n){return ro(t,e.child,null,n),(e=$o(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Go(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ki(e.return,t,n)}function Qo(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xo(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ro(e,t,r.children,n),2&(r=ho.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Go(e,n,t);else if(19===e.tag)Go(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(q(ho,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===fo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===fo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qo(t,!0,n,null,s);break;case"together":Qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),mu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ti(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(s(153));if(null!==t.child){for(n=Vr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Vr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Jo(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ci(e))}function Zo(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)No=!0;else{if(!(Jo(e,n)||128&t.flags))return No=!1,function(e,t,n){switch(t.tag){case 3:G(t,t.stateNode.containerInfo),_i(0,Li,e.memoizedState.cache),mi();break;case 27:case 5:X(t);break;case 4:G(t,t.stateNode.containerInfo);break;case 10:_i(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(oo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Ho(e,t,n):(oo(t),null!==(e=Yo(e,t,n))?e.sibling:null);oo(t);break;case 19:var i=!!(128&e.flags);if((r=0!==(n&t.childLanes))||(Ti(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return Xo(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ho,ho.current),r)break;return null;case 22:case 23:return t.lanes=0,Lo(e,t,n);case 24:_i(0,Li,e.memoizedState.cache)}return Yo(e,t,n)}(e,t,n);No=!!(131072&e.flags)}else No=!1,oi&&1048576&t.flags&&ni(t,Qr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!=typeof r){if(null!=r){if((i=r.$$typeof)===S){t.tag=11,t=Po(null,t,r,e,n);break e}if(i===I){t.tag=14,t=xo(null,t,r,e,n);break e}}throw t=L(r)||r,Error(s(306,t,""))}Fr(r)?(e=vo(r,e),t.tag=1,t=Fo(null,t,r,e,n)):(t.tag=0,t=Uo(null,t,r,e,n))}return t;case 0:return Uo(e,t,t.type,t.pendingProps,n);case 1:return Fo(e,t,r=t.type,i=vo(r,t.pendingProps),n);case 3:e:{if(G(t,t.stateNode.containerInfo),null===e)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ss(e,t),ds(t,r,null,n);var o=t.memoizedState;if(r=o.cache,_i(0,Li,r),r!==a.cache&&Si(t,[Li],n,!0),hs(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Vo(e,t,r,n);break e}if(r!==i){yi(i=Cr(Error(s(424)),t)),t=Vo(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ai=wh(e.firstChild),si=t,oi=!0,li=null,ui=!0,n=io(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mi(),r===i){t=Yo(e,t,n);break e}Ro(e,t,r,n)}t=t.child}return t;case 26:return Mo(e,t),null===e?(n=Rh(t.type,null,t.pendingProps,null))?t.memoizedState=n:oi||(n=t.type,e=t.pendingProps,(r=sh(K.current).createElement(n))[Le]=t,r[Oe]=e,nh(r,n,e),We(r),t.stateNode=r):t.memoizedState=Rh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return X(t),null===e&&oi&&(r=t.stateNode=Eh(t.type,t.pendingProps,K.current),si=t,ui=!0,i=ai,mh(t.type)?(bh=i,ai=wh(r.firstChild)):ai=i),Ro(e,t,t.pendingProps.children,n),Mo(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oi&&((i=r=ai)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[je])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(s=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((s=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var s=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===s)return e}if(null===(e=wh(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ui))?(t.stateNode=r,si=t,ai=wh(r.firstChild),ui=!1,i=!0):i=!1),i||hi(t)),X(t),i=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,r=a.children,lh(i,a)?r=null:null!==o&&lh(i,o)&&(t.flags|=32),null!==t.memoizedState&&(i=Ds(e,t,Ms,null,null,n),Xh._currentValue=i),Mo(e,t),Ro(e,t,r,n),t.child;case 6:return null===e&&oi&&((e=n=ai)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=wh(e.nextSibling)))return null}return e}(n,t.pendingProps,ui))?(t.stateNode=n,si=t,ai=null,e=!0):e=!1),e||hi(t)),null;case 13:return Ho(e,t,n);case 4:return G(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ro(t,null,r,n):Ro(e,t,r,n),t.child;case 11:return Po(e,t,t.type,t.pendingProps,n);case 7:return Ro(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ro(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,_i(0,t.type,r.value),Ro(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ii(t),r=r(i=Ai(i)),t.flags|=1,Ro(e,t,r,n),t.child;case 14:return xo(e,t,t.type,t.pendingProps,n);case 15:return Do(e,t,t.type,t.pendingProps,n);case 19:return Xo(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Ko(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Vr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Lo(e,t,n);case 24:return Ii(t),r=Ai(Li),null===e?(null===(i=Hi())&&(i=su,a=Oi(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},is(t),_i(0,Li,i)):(0!==(e.lanes&n)&&(ss(e,t),ds(t,null,null,n),hs()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),_i(0,Li,r)):(r=a.cache,_i(0,Li,r),r!==i.cache&&Si(t,[Li],n,!0))),Ro(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function el(e){e.flags|=4}function tl(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217;else if(e.flags|=16777216,!qh(t)){if(null!==(t=so.current)&&((4194048&ou)===ou?null!==ao:(62914560&ou)!==ou&&!(536870912&ou)||t!==ao))throw es=Xi,Gi;e.flags|=8192}}function nl(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Te():536870912,e.lanes|=t,wu|=t)}function rl(e,t){if(!oi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function il(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sl(e,t,n){var r=t.pendingProps;switch(ii(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return il(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ei(Li),Q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?el(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,gi())),il(t),null;case 26:return n=t.memoizedState,null===e?(el(t),null!==n?(il(t),tl(t,n)):(il(t),t.flags&=-16777217)):n?n!==e.memoizedState?(el(t),il(t),tl(t,n)):(il(t),t.flags&=-16777217):(e.memoizedProps!==r&&el(t),il(t),t.flags&=-16777217),null;case 27:Y(t),n=K.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&el(t);else{if(!r){if(null===t.stateNode)throw Error(s(166));return il(t),null}e=H.current,pi(t)?di(t):(e=Eh(i,r,n),t.stateNode=e,el(t))}return il(t),null;case 5:if(Y(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&el(t);else{if(!r){if(null===t.stateNode)throw Error(s(166));return il(t),null}if(e=H.current,pi(t))di(t);else{switch(i=sh(K.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"==typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"==typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Le]=t,e[Oe]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(nh(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&el(t)}}return il(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&el(t);else{if("string"!=typeof r&&null===t.stateNode)throw Error(s(166));if(e=K.current,pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=si))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Le]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Jc(e.nodeValue,n)))||hi(t)}else(e=sh(e).createTextNode(r))[Le]=t,t.stateNode=e}return il(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(s(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(s(317));i[Le]=t}else mi(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;il(t),i=!1}else i=gi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(co(t),t):(co(t),null)}if(co(t),128&t.flags)return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),nl(t,t.updateQueue),il(t),null;case 4:return Q(),null===e&&Bc(t.stateNode.containerInfo),il(t),null;case 10:return Ei(t.type),il(t),null;case 19:if(B(ho),null===(i=t.memoizedState))return il(t),null;if(r=!!(128&t.flags),null===(a=i.rendering))if(r)rl(i,!1);else{if(0!==pu||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=fo(e))){for(t.flags|=128,rl(i,!1),e=a.updateQueue,t.updateQueue=e,nl(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)jr(n,e),n=n.sibling;return q(ho,1&ho.current|2),t.child}e=e.sibling}null!==i.tail&&re()>Su&&(t.flags|=128,r=!0,rl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=fo(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,nl(t,e),rl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!oi)return il(t),null}else 2*re()-i.renderingStartTime>Su&&536870912!==n&&(t.flags|=128,r=!0,rl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,e=ho.current,q(ho,r?1&e|2:1&e),t):(il(t),null);case 22:case 23:return co(t),ws(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?!!(536870912&n)&&!(128&t.flags)&&(il(t),6&t.subtreeFlags&&(t.flags|=8192)):il(t),null!==(n=t.updateQueue)&&nl(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&B(qi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ei(Li),il(t),null;case 25:case 30:return null}throw Error(s(156,t.tag))}function al(e,t){switch(ii(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ei(Li),Q(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(co(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(s(340));mi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return B(ho),null;case 4:return Q(),null;case 10:return Ei(t.type),null;case 22:case 23:return co(t),ws(),null!==e&&B(qi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Ei(Li),null;default:return null}}function ol(e,t){switch(ii(t),t.tag){case 3:Ei(Li),Q();break;case 26:case 27:case 5:Y(t);break;case 4:Q();break;case 13:co(t);break;case 19:B(ho);break;case 10:Ei(t.type);break;case 22:case 23:co(t),ws(),null!==e&&B(qi);break;case 24:Ei(Li)}}function ll(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var s=n.create,a=n.inst;r=s(),a.destroy=r}n=n.next}while(n!==i)}}catch(o){dc(t,t.return,o)}}function ul(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var s=i.next;r=s;do{if((r.tag&e)===e){var a=r.inst,o=a.destroy;if(void 0!==o){a.destroy=void 0,i=t;var l=n,u=o;try{u()}catch(c){dc(i,l,c)}}}r=r.next}while(r!==s)}}catch(c){dc(t,t.return,c)}}function cl(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ps(t,n)}catch(r){dc(e,e.return,r)}}}function hl(e,t,n){n.props=vo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){dc(e,t,r)}}function dl(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(i){dc(e,t,i)}}function fl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"==typeof r)try{r()}catch(i){dc(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(s){dc(e,t,s)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){dc(e,e.return,i)}}function ml(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,o=null,l=null,u=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&null!=d)switch(p){case"checked":case"value":break;case"defaultValue":u=d;default:r.hasOwnProperty(p)||eh(e,t,p,null,r,d)}}for(var f in r){var p=r[f];if(d=n[f],r.hasOwnProperty(f)&&(null!=p||null!=d))switch(f){case"type":a=p;break;case"name":i=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":o=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(s(137,t));break;default:p!==d&&eh(e,t,f,p,r,d)}}return void vt(e,o,l,u,c,h,a,i);case"select":for(a in p=o=l=f=null,n)if(u=n[a],n.hasOwnProperty(a)&&null!=u)switch(a){case"value":break;case"multiple":p=u;default:r.hasOwnProperty(a)||eh(e,t,a,null,r,u)}for(i in r)if(a=r[i],u=n[i],r.hasOwnProperty(i)&&(null!=a||null!=u))switch(i){case"value":f=a;break;case"defaultValue":l=a;break;case"multiple":o=a;default:a!==u&&eh(e,t,i,a,r,u)}return t=l,n=o,r=p,void(null!=f?_t(e,!!n,f,!1):!!r!=!!n&&(null!=t?_t(e,!!n,t,!0):_t(e,!!n,n?[]:"",!1)));case"textarea":for(l in p=f=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:eh(e,t,l,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(null!=i||null!=a))switch(o){case"value":f=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(s(91));break;default:i!==a&&eh(e,t,o,i,r,a)}return void Et(e,f,p);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else eh(e,t,m,null,r,f);for(u in r)if(f=r[u],p=n[u],r.hasOwnProperty(u)&&f!==p&&(null!=f||null!=p))if("selected"===u)e.selected=f&&"function"!=typeof f&&"symbol"!=typeof f;else eh(e,t,u,f,r,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&eh(e,t,g,null,r,f);for(c in r)if(f=r[c],p=n[c],r.hasOwnProperty(c)&&f!==p&&(null!=f||null!=p))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(s(137,t));break;default:eh(e,t,c,f,r,p)}return;default:if(At(t)){for(var y in n)f=n[y],n.hasOwnProperty(y)&&void 0!==f&&!r.hasOwnProperty(y)&&th(e,t,y,void 0,r,f);for(h in r)f=r[h],p=n[h],!r.hasOwnProperty(h)||f===p||void 0===f&&void 0===p||th(e,t,h,f,r,p);return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&null!=f&&!r.hasOwnProperty(v)&&eh(e,t,v,null,r,f);for(d in r)f=r[d],p=n[d],!r.hasOwnProperty(d)||f===p||null==f&&null==p||eh(e,t,d,f,r,p)}(r,e.type,n,t),r[Oe]=t}catch(i){dc(e,e.return,i)}}function gl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&mh(e.type)||4===e.tag}function yl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||gl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&mh(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zc));else if(4!==r&&(27===r&&mh(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&mh(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(wl(e,t,n),e=e.sibling;null!==e;)wl(e,t,n),e=e.sibling}function bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);nh(t,r,n),t[Le]=e,t[Oe]=n}catch(s){dc(e,e.return,s)}}var _l=!1,El=!1,kl=!1,Sl="function"==typeof WeakSet?WeakSet:Set,Tl=null;function Cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fl(e,n),4&r&&ll(5,n);break;case 1:if(Fl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){dc(n,n.return,a)}else{var i=vo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){dc(n,n.return,o)}}64&r&&cl(n),512&r&&dl(n,n.return);break;case 3:if(Fl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ps(e,t)}catch(a){dc(n,n.return,a)}}break;case 27:null===t&&4&r&&bl(n);case 26:case 5:Fl(e,n),null===t&&4&r&&pl(n),512&r&&dl(n,n.return);break;case 12:Fl(e,n);break;case 13:Fl(e,n),4&r&&xl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=gc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||_l)){t=null!==t&&null!==t.memoizedState||El,i=_l;var s=El;_l=r,(El=t)&&!s?jl(e,n,!!(8772&n.subtreeFlags)):Fl(e,n),_l=i,El=s}break;case 30:break;default:Fl(e,n)}}function Il(e){var t=e.alternate;null!==t&&(e.alternate=null,Il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Be(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Al=null,Nl=!1;function Rl(e,t,n){for(n=n.child;null!==n;)Pl(e,t,n),n=n.sibling}function Pl(e,t,n){if(fe&&"function"==typeof fe.onCommitFiberUnmount)try{fe.onCommitFiberUnmount(de,n)}catch(s){}switch(n.tag){case 26:El||fl(n,t),Rl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:El||fl(n,t);var r=Al,i=Nl;mh(n.type)&&(Al=n.stateNode,Nl=!1),Rl(e,t,n),kh(n.stateNode),Al=r,Nl=i;break;case 5:El||fl(n,t);case 6:if(r=Al,i=Nl,Al=null,Rl(e,t,n),Nl=i,null!==(Al=r))if(Nl)try{(9===Al.nodeType?Al.body:"HTML"===Al.nodeName?Al.ownerDocument.body:Al).removeChild(n.stateNode)}catch(a){dc(n,t,a)}else try{Al.removeChild(n.stateNode)}catch(a){dc(n,t,a)}break;case 18:null!==Al&&(Nl?(gh(9===(e=Al).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Nd(e)):gh(Al,n.stateNode));break;case 4:r=Al,i=Nl,Al=n.stateNode.containerInfo,Nl=!0,Rl(e,t,n),Al=r,Nl=i;break;case 0:case 11:case 14:case 15:El||ul(2,n,t),El||ul(4,n,t),Rl(e,t,n);break;case 1:El||(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&hl(n,t,r)),Rl(e,t,n);break;case 21:Rl(e,t,n);break;case 22:El=(r=El)||null!==n.memoizedState,Rl(e,t,n),El=r;break;default:Rl(e,t,n)}}function xl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Nd(e)}catch(n){dc(t,t.return,n)}}function Dl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(s(435,e.tag))}}(e);t.forEach(function(t){var r=yc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Ll(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,l=o;e:for(;null!==l;){switch(l.tag){case 27:if(mh(l.type)){Al=l.stateNode,Nl=!1;break e}break;case 5:Al=l.stateNode,Nl=!1;break e;case 3:case 4:Al=l.stateNode.containerInfo,Nl=!0;break e}l=l.return}if(null===Al)throw Error(s(160));Pl(a,o,i),Al=null,Nl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ml(t,e),t=t.sibling}var Ol=null;function Ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ll(t,e),Ul(e),4&r&&(ul(3,e,e.return),ll(3,e),ul(5,e,e.return));break;case 1:Ll(t,e),Ul(e),512&r&&(El||null===n||fl(n,n.return)),64&r&&_l&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Ol;if(Ll(t,e),Ul(e),512&r&&(El||null===n||fl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[je]||a[Le]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),nh(a,r,n),a[Le]=e,We(a),r=a;break e;case"link":var o=jh("link","href",i).get(r+(n.href||""));if(o)for(var l=0;l<o.length;l++)if((a=o[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){o.splice(l,1);break t}nh(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(o=jh("meta","content",i).get(r+(n.content||"")))for(l=0;l<o.length;l++)if((a=o[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){o.splice(l,1);break t}nh(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[Le]=e,We(a),r=a}e.stateNode=r}else Bh(i,e.type,e.stateNode);else e.stateNode=Mh(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?Bh(i,e.type,e.stateNode):Mh(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ml(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ll(t,e),Ul(e),512&r&&(El||null===n||fl(n,n.return)),null!==n&&4&r&&ml(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ll(t,e),Ul(e),512&r&&(El||null===n||fl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(p){dc(e,e.return,p)}}4&r&&null!=e.stateNode&&ml(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(kl=!0);break;case 6:if(Ll(t,e),Ul(e),4&r){if(null===e.stateNode)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(p){dc(e,e.return,p)}}break;case 3:if(Vh=null,i=Ol,Ol=Ch(t.containerInfo),Ll(t,e),Ol=i,Ul(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Nd(t.containerInfo)}catch(p){dc(e,e.return,p)}kl&&(kl=!1,zl(e));break;case 4:r=Ol,Ol=Ch(e.stateNode.containerInfo),Ll(t,e),Ul(e),Ol=r;break;case 12:default:Ll(t,e),Ul(e);break;case 13:Ll(t,e),Ul(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(ku=re()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Dl(e,r)));break;case 22:i=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=_l,h=El;if(_l=c||i,El=h||u,Ll(t,e),El=h,_l=c,Ul(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||u||_l||El||Vl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(a=u.stateNode,i)"function"==typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none";else{l=u.stateNode;var d=u.memoizedProps.style,f=null!=d&&d.hasOwnProperty("display")?d.display:null;l.style.display=null==f||"boolean"==typeof f?"":(""+f).trim()}}catch(p){dc(u,u.return,p)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(p){dc(u,u.return,p)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Dl(e,n))));break;case 19:Ll(t,e),Ul(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Dl(e,r)));case 30:case 21:}}function Ul(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(gl(r)){n=r;break}r=r.return}if(null==n)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;wl(e,yl(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),wl(e,yl(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;vl(e,yl(e),o);break;default:throw Error(s(161))}}catch(l){dc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function zl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;zl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Cl(e,t.alternate,t),t=t.sibling}function Vl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ul(4,t,t.return),Vl(t);break;case 1:fl(t,t.return);var n=t.stateNode;"function"==typeof n.componentWillUnmount&&hl(t,t.return,n),Vl(t);break;case 27:kh(t.stateNode);case 26:case 5:fl(t,t.return),Vl(t);break;case 22:null===t.memoizedState&&Vl(t);break;default:Vl(t)}e=e.sibling}}function jl(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,s=t,a=s.flags;switch(s.tag){case 0:case 11:case 15:jl(i,s,n),ll(4,s);break;case 1:if(jl(i,s,n),"function"==typeof(i=(r=s).stateNode).componentDidMount)try{i.componentDidMount()}catch(u){dc(r,r.return,u)}if(null!==(i=(r=s).updateQueue)){var o=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)fs(l[i],o)}catch(u){dc(r,r.return,u)}}n&&64&a&&cl(s),dl(s,s.return);break;case 27:bl(s);case 26:case 5:jl(i,s,n),n&&null===r&&4&a&&pl(s),dl(s,s.return);break;case 12:jl(i,s,n);break;case 13:jl(i,s,n),n&&4&a&&xl(i,s);break;case 22:null===s.memoizedState&&jl(i,s,n),dl(s,s.return);break;case 30:break;default:jl(i,s,n)}t=t.sibling}}function Bl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Mi(n))}function ql(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Mi(e))}function Hl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)$l(e,t,n,r),t=t.sibling}function $l(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Hl(e,t,n,r),2048&i&&ll(9,t);break;case 1:case 13:default:Hl(e,t,n,r);break;case 3:Hl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Mi(e)));break;case 12:if(2048&i){Hl(e,t,n,r),e=t.stateNode;try{var s=t.memoizedProps,a=s.id,o=s.onPostCommit;"function"==typeof o&&o(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){dc(t,t.return,l)}}else Hl(e,t,n,r);break;case 23:break;case 22:s=t.stateNode,a=t.alternate,null!==t.memoizedState?2&s._visibility?Hl(e,t,n,r):Wl(e,t):2&s._visibility?Hl(e,t,n,r):(s._visibility|=2,Kl(e,t,n,r,!!(10256&t.subtreeFlags))),2048&i&&Bl(a,t);break;case 24:Hl(e,t,n,r),2048&i&&ql(t.alternate,t)}}function Kl(e,t,n,r,i){for(i=i&&!!(10256&t.subtreeFlags),t=t.child;null!==t;){var s=e,a=t,o=n,l=r,u=a.flags;switch(a.tag){case 0:case 11:case 15:Kl(s,a,o,l,i),ll(8,a);break;case 23:break;case 22:var c=a.stateNode;null!==a.memoizedState?2&c._visibility?Kl(s,a,o,l,i):Wl(s,a):(c._visibility|=2,Kl(s,a,o,l,i)),i&&2048&u&&Bl(a.alternate,a);break;case 24:Kl(s,a,o,l,i),i&&2048&u&&ql(a.alternate,a);break;default:Kl(s,a,o,l,i)}t=t.sibling}}function Wl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Wl(n,r),2048&i&&Bl(r.alternate,r);break;case 24:Wl(n,r),2048&i&&ql(r.alternate,r);break;default:Wl(n,r)}t=t.sibling}}var Gl=8192;function Ql(e){if(e.subtreeFlags&Gl)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 26:Ql(e),e.flags&Gl&&null!==e.memoizedState&&function(e,t,n){if(null===Hh)throw Error(s(475));var r=Hh;if(!("stylesheet"!==t.type||"string"==typeof n.media&&!1===matchMedia(n.media).matches||4&t.state.loading)){if(null===t.instance){var i=Ph(n.href),a=e.querySelector(xh(i));if(a)return null!==(e=a._p)&&"object"==typeof e&&"function"==typeof e.then&&(r.count++,r=Kh.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void We(a);a=e.ownerDocument||e,n=Dh(n),(i=Sh.get(i))&&zh(n,i),We(a=a.createElement("link"));var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),nh(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(3&t.state.loading)&&(r.count++,t=Kh.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ol,e.memoizedState,e.memoizedProps);break;case 5:default:Ql(e);break;case 3:case 4:var t=Ol;Ol=Ch(e.stateNode.containerInfo),Ql(e),Ol=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Gl,Gl=16777216,Ql(e),Gl=t):Ql(e))}}function Yl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Jl(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Tl=r,tu(r,e)}Yl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Zl(e),e=e.sibling}function Zl(e){switch(e.tag){case 0:case 11:case 15:Jl(e),2048&e.flags&&ul(9,e,e.return);break;case 3:case 12:default:Jl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,eu(e)):Jl(e)}}function eu(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Tl=r,tu(r,e)}Yl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ul(8,t,t.return),eu(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,eu(t));break;default:eu(t)}e=e.sibling}}function tu(e,t){for(;null!==Tl;){var n=Tl;switch(n.tag){case 0:case 11:case 15:ul(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Mi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Tl=r;else e:for(n=e;null!==Tl;){var i=(r=Tl).sibling,s=r.return;if(Il(r),r===n){Tl=null;break e}if(null!==i){i.return=s,Tl=i;break e}Tl=s}}}var nu={getCacheForType:function(e){var t=Ai(Li),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},ru="function"==typeof WeakMap?WeakMap:Map,iu=0,su=null,au=null,ou=0,lu=0,uu=null,cu=!1,hu=!1,du=!1,fu=0,pu=0,mu=0,gu=0,yu=0,vu=0,wu=0,bu=null,_u=null,Eu=!1,ku=0,Su=1/0,Tu=null,Cu=null,Iu=0,Au=null,Nu=null,Ru=0,Pu=0,xu=null,Du=null,Lu=0,Ou=null;function Mu(){if(2&iu&&0!==ou)return ou&-ou;if(null!==M.T){return 0!==Fi?Fi:Pc()}return xe()}function Uu(){0===vu&&(vu=536870912&ou&&!oi?536870912:Se());var e=so.current;return null!==e&&(e.flags|=32),vu}function zu(e,t,n){(e!==su||2!==lu&&9!==lu)&&null===e.cancelPendingCommit||($u(e,0),Bu(e,ou,vu,!1)),Ie(e,n),2&iu&&e===su||(e===su&&(!(2&iu)&&(gu|=n),4===pu&&Bu(e,ou,vu,!1)),Sc(e))}function Fu(e,t,n){if(6&iu)throw Error(s(327));for(var r=!n&&!(124&t)&&0===(t&e.expiredLanes)||Ee(e,t),i=r?function(e,t){var n=iu;iu|=2;var r=Wu(),i=Gu();su!==e||ou!==t?(Tu=null,Su=re()+500,$u(e,t)):hu=Ee(e,t);e:for(;;)try{if(0!==lu&&null!==au){t=au;var a=uu;t:switch(lu){case 1:lu=0,uu=null,tc(e,t,a,1);break;case 2:case 9:if(Yi(a)){lu=0,uu=null,ec(t);break}t=function(){2!==lu&&9!==lu||su!==e||(lu=7),Sc(e)},a.then(t,t);break e;case 3:lu=7;break e;case 4:lu=5;break e;case 7:Yi(a)?(lu=0,uu=null,ec(t)):(lu=0,uu=null,tc(e,t,a,7));break;case 5:var o=null;switch(au.tag){case 26:o=au.memoizedState;case 5:case 27:var l=au;if(!o||qh(o)){lu=0,uu=null;var u=l.sibling;if(null!==u)au=u;else{var c=l.return;null!==c?(au=c,nc(c)):au=null}break t}}lu=0,uu=null,tc(e,t,a,5);break;case 6:lu=0,uu=null,tc(e,t,a,6);break;case 8:Hu(),pu=6;break e;default:throw Error(s(462))}}Ju();break}catch(h){Ku(e,h)}return bi=wi=null,M.H=r,M.A=i,iu=n,null!==au?0:(su=null,ou=0,Rr(),pu)}(e,t):Xu(e,t,!0),a=r;;){if(0===i){hu&&!r&&Bu(e,t,0,!1);break}if(n=e.current.alternate,!a||ju(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=0!==(o=-536870913&e.pendingLanes)?o:536870912&o?536870912:0;if(0!==o){t=o;e:{var l=e;i=bu;var u=l.current.memoizedState.isDehydrated;if(u&&($u(l,o).flags|=256),2!==(o=Xu(l,o,!1))){if(du&&!u){l.errorRecoveryDisabledLanes|=a,gu|=a,i=4;break e}a=_u,_u=i,null!==a&&(null===_u?_u=a:_u.push.apply(_u,a))}i=o}if(a=!1,2!==i)continue}}if(1===i){$u(e,0),Bu(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(s(345));case 4:if((4194048&t)!==t)break;case 6:Bu(r,t,vu,!cu);break e;case 2:_u=null;break;case 3:case 5:break;default:throw Error(s(329))}if((62914560&t)===t&&10<(i=ku+300-re())){if(Bu(r,t,vu,!cu),0!==_e(r,0,!0))break e;r.timeoutHandle=ch(Vu.bind(null,r,n,_u,Tu,Eu,t,vu,gu,wu,cu,a,2,-0,0),i)}else Vu(r,n,_u,Tu,Eu,t,vu,gu,wu,cu,a,0,-0,0)}break}i=Xu(e,t,!1),a=!1}Sc(e)}function Vu(e,t,n,r,i,a,o,l,u,c,h,d,f,p){if(e.timeoutHandle=-1,(8192&(d=t.subtreeFlags)||!(16785408&~d))&&(Hh={stylesheets:null,count:0,unsuspend:$h},Xl(t),null!==(d=function(){if(null===Hh)throw Error(s(475));var e=Hh;return e.stylesheets&&0===e.count&&Gh(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Gh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=d(ic.bind(null,e,t,a,n,r,i,o,l,u,h,1,f,p)),void Bu(e,a,o,!c);ic(e,t,a,n,r,i,o,l,u)}function ju(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yn(s(),i))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bu(e,t,n,r){t&=~yu,t&=~gu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var s=31-me(i),a=1<<s;r[s]=-1,i&=~a}0!==n&&Ae(e,n,t)}function qu(){return!!(6&iu)||(Tc(0),!1)}function Hu(){if(null!==au){if(0===lu)var e=au.return;else bi=wi=null,Fs(e=au),Xa=null,Ya=0,e=au;for(;null!==e;)ol(e.alternate,e),e=e.return;au=null}}function $u(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,hh(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Hu(),su=e,au=n=Vr(e.current,null),ou=t,lu=0,uu=null,cu=!1,hu=Ee(e,t),du=!1,wu=vu=yu=gu=mu=pu=0,_u=bu=null,Eu=!1,8&t&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-me(r),s=1<<i;t|=e[i],r&=~s}return fu=t,Rr(),n}function Ku(e,t){_s=null,M.H=Ka,t===Wi||t===Qi?(t=ts(),lu=3):t===Gi?(t=ts(),lu=4):lu=t===Ao?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,uu=t,null===au&&(pu=1,ko(e,Cr(t,e.current)))}function Wu(){var e=M.H;return M.H=Ka,null===e?Ka:e}function Gu(){var e=M.A;return M.A=nu,e}function Qu(){pu=4,cu||(4194048&ou)!==ou&&null!==so.current||(hu=!0),!(134217727&mu)&&!(134217727&gu)||null===su||Bu(su,ou,vu,!1)}function Xu(e,t,n){var r=iu;iu|=2;var i=Wu(),s=Gu();su===e&&ou===t||(Tu=null,$u(e,t)),t=!1;var a=pu;e:for(;;)try{if(0!==lu&&null!==au){var o=au,l=uu;switch(lu){case 8:Hu(),a=6;break e;case 3:case 2:case 9:case 6:null===so.current&&(t=!0);var u=lu;if(lu=0,uu=null,tc(e,o,l,u),n&&hu){a=0;break e}break;default:u=lu,lu=0,uu=null,tc(e,o,l,u)}}Yu(),a=pu;break}catch(c){Ku(e,c)}return t&&e.shellSuspendCounter++,bi=wi=null,iu=r,M.H=i,M.A=s,null===au&&(su=null,ou=0,Rr()),a}function Yu(){for(;null!==au;)Zu(au)}function Ju(){for(;null!==au&&!te();)Zu(au)}function Zu(e){var t=Zo(e.alternate,e,fu);e.memoizedProps=e.pendingProps,null===t?nc(e):au=t}function ec(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zo(n,t,t.pendingProps,t.type,void 0,ou);break;case 11:t=zo(n,t,t.pendingProps,t.type.render,t.ref,ou);break;case 5:Fs(t);default:ol(n,t),t=Zo(n,t=au=jr(t,fu),fu)}e.memoizedProps=e.pendingProps,null===t?nc(e):au=t}function tc(e,t,n,r){bi=wi=null,Fs(t),Xa=null,Ya=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"==typeof r&&"function"==typeof r.then){if(null!==(t=n.alternate)&&Ti(t,n,i,!0),null!==(n=so.current)){switch(n.tag){case 13:return null===ao?Qu():null===n.alternate&&0===pu&&(pu=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Xi?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),fc(e,r,i)),!1;case 22:return n.flags|=65536,r===Xi?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),fc(e,r,i)),!1}throw Error(s(435,n.tag))}return fc(e,r,i),Qu(),!1}if(oi)return null!==(t=so.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==ci&&yi(Cr(e=Error(s(422),{cause:r}),n))):(r!==ci&&yi(Cr(t=Error(s(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Cr(r,n),us(e,i=To(e.stateNode,r,i)),4!==pu&&(pu=2)),!1;var a=Error(s(520),{cause:r});if(a=Cr(a,n),null===bu?bu=[a]:bu.push(a),4!==pu&&(pu=2),null===t)return!0;r=Cr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,us(n,e=To(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===a||"function"!=typeof a.componentDidCatch||null!==Cu&&Cu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Io(i=Co(i),e,n,r),us(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ou))return pu=1,ko(e,Cr(n,e.current)),void(au=null)}catch(a){if(null!==i)throw au=i,a;return pu=1,ko(e,Cr(n,e.current)),void(au=null)}32768&t.flags?(oi||1===r?e=!0:hu||536870912&ou?e=!1:(cu=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=so.current)&&13===r.tag&&(r.flags|=16384))),rc(t,e)):nc(t)}function nc(e){var t=e;do{if(32768&t.flags)return void rc(t,cu);e=t.return;var n=sl(t.alternate,t,fu);if(null!==n)return void(au=n);if(null!==(t=t.sibling))return void(au=t);au=t=e}while(null!==t);0===pu&&(pu=5)}function rc(e,t){do{var n=al(e.alternate,e);if(null!==n)return n.flags&=32767,void(au=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(au=e);au=e=n}while(null!==e);pu=6,au=null}function ic(e,t,n,r,i,a,o,l,u){e.cancelPendingCommit=null;do{uc()}while(0!==Iu);if(6&iu)throw Error(s(327));if(null!==t){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,s){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=a&~n;0<n;){var c=31-me(n),h=1<<c;o[c]=0,l[c]=-1;var d=u[c];if(null!==d)for(u[c]=null,c=0;c<d.length;c++){var f=d[c];null!==f&&(f.lane&=-536870913)}n&=~h}0!==r&&Ae(e,r,0),0!==s&&0===i&&0!==e.tag&&(e.suspendedLanes|=s&~(a&~t))}(e,n,a|=Nr,o,l,u),e===su&&(au=su=null,ou=0),Nu=t,Au=e,Ru=n,Pu=a,xu=i,Du=r,10256&t.subtreeFlags||10256&t.flags?(e.callbackNode=null,e.callbackPriority=0,Z(oe,function(){return cc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(13878&t.flags),13878&t.subtreeFlags||r){r=M.T,M.T=null,i=U.p,U.p=2,o=iu,iu|=4;try{!function(e,t){if(e=e.containerInfo,rh=id,rr(e=nr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,d=e,f=null;t:for(;;){for(var p;d!==n||0!==i&&3!==d.nodeType||(l=o+i),d!==a||0!==r&&3!==d.nodeType||(u=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(p=d.firstChild);)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++c===i&&(l=o),f===a&&++h===r&&(u=o),null!==(p=d.nextSibling))break;f=(d=f).parentNode}d=p}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:e,selectionRange:n},id=!1,Tl=t;null!==Tl;)if(e=(t=Tl).child,1024&t.subtreeFlags&&null!==e)e.return=t,Tl=e;else for(;null!==Tl;){switch(a=(t=Tl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(1024&e&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=vo(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){dc(n,n.return,y)}}break;case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))yh(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yh(e);break;default:e.textContent=""}break;default:if(1024&e)throw Error(s(163))}if(null!==(e=t.sibling)){e.return=t.return,Tl=e;break}Tl=t.return}}(e,t)}finally{iu=o,U.p=i,M.T=r}}Iu=1,sc(),ac(),oc()}}function sc(){if(1===Iu){Iu=0;var e=Au,t=Nu,n=!!(13878&t.flags);if(13878&t.subtreeFlags||n){n=M.T,M.T=null;var r=U.p;U.p=2;var i=iu;iu|=4;try{Ml(t,e);var s=ih,a=nr(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(a!==o&&o&&o.ownerDocument&&tr(o.ownerDocument.documentElement,o)){if(null!==l&&rr(o)){var u=l.start,c=l.end;if(void 0===c&&(c=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(c,o.value.length);else{var h=o.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var f=d.getSelection(),p=o.textContent.length,m=Math.min(l.start,p),g=void 0===l.end?m:Math.min(l.end,p);!f.extend&&m>g&&(a=g,g=m,m=a);var y=er(o,m),v=er(o,g);if(y&&v&&(1!==f.rangeCount||f.anchorNode!==y.node||f.anchorOffset!==y.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var w=h.createRange();w.setStart(y.node,y.offset),f.removeAllRanges(),m>g?(f.addRange(w),f.extend(v.node,v.offset)):(w.setEnd(v.node,v.offset),f.addRange(w))}}}}for(h=[],f=o;f=f.parentNode;)1===f.nodeType&&h.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"==typeof o.focus&&o.focus(),o=0;o<h.length;o++){var b=h[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}id=!!rh,ih=rh=null}finally{iu=i,U.p=r,M.T=n}}e.current=t,Iu=2}}function ac(){if(2===Iu){Iu=0;var e=Au,t=Nu,n=!!(8772&t.flags);if(8772&t.subtreeFlags||n){n=M.T,M.T=null;var r=U.p;U.p=2;var i=iu;iu|=4;try{Cl(e,t.alternate,t)}finally{iu=i,U.p=r,M.T=n}}Iu=3}}function oc(){if(4===Iu||3===Iu){Iu=0,ne();var e=Au,t=Nu,n=Ru,r=Du;10256&t.subtreeFlags||10256&t.flags?Iu=5:(Iu=0,Nu=Au=null,lc(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Cu=null),Pe(n),t=t.stateNode,fe&&"function"==typeof fe.onCommitFiberRoot)try{fe.onCommitFiberRoot(de,t,void 0,!(128&~t.current.flags))}catch(l){}if(null!==r){t=M.T,i=U.p,U.p=2,M.T=null;try{for(var s=e.onRecoverableError,a=0;a<r.length;a++){var o=r[a];s(o.value,{componentStack:o.stack})}}finally{M.T=t,U.p=i}}3&Ru&&uc(),Sc(e),i=e.pendingLanes,4194090&n&&42&i?e===Ou?Lu++:(Lu=0,Ou=e):Lu=0,Tc(0)}}function lc(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Mi(t)))}function uc(e){return sc(),ac(),oc(),cc()}function cc(){if(5!==Iu)return!1;var e=Au,t=Pu;Pu=0;var n=Pe(Ru),r=M.T,i=U.p;try{U.p=32>n?32:n,M.T=null,n=xu,xu=null;var a=Au,o=Ru;if(Iu=0,Nu=Au=null,Ru=0,6&iu)throw Error(s(331));var l=iu;if(iu|=4,Zl(a.current),$l(a,a.current,o,n),iu=l,Tc(0,!1),fe&&"function"==typeof fe.onPostCommitFiberRoot)try{fe.onPostCommitFiberRoot(de,a)}catch(u){}return!0}finally{U.p=i,M.T=r,lc(e,t)}}function hc(e,t,n){t=Cr(n,t),null!==(e=os(e,t=To(e.stateNode,t,2),2))&&(Ie(e,2),Sc(e))}function dc(e,t,n){if(3===e.tag)hc(e,e,n);else for(;null!==t;){if(3===t.tag){hc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Cu||!Cu.has(r))){e=Cr(n,e),null!==(r=os(t,n=Co(2),2))&&(Io(n,r,t,e),Ie(r,2),Sc(r));break}}t=t.return}}function fc(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ru;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(du=!0,i.add(n),e=pc.bind(null,e,t,n),t.then(e,e))}function pc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,su===e&&(ou&n)===n&&(4===pu||3===pu&&(62914560&ou)===ou&&300>re()-ku?!(2&iu)&&$u(e,0):yu|=n,wu===ou&&(wu=0)),Sc(e)}function mc(e,t){0===t&&(t=Te()),null!==(e=Dr(e,t))&&(Ie(e,t),Sc(e))}function gc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),mc(e,n)}function yc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}null!==r&&r.delete(t),mc(e,n)}var vc=null,wc=null,bc=!1,_c=!1,Ec=!1,kc=0;function Sc(e){e!==wc&&null===e.next&&(null===wc?vc=wc=e:wc=wc.next=e),_c=!0,bc||(bc=!0,fh(function(){6&iu?Z(se,Cc):Ic()}))}function Tc(e,t){if(!Ec&&_c){Ec=!0;do{for(var n=!1,r=vc;null!==r;){if(0!==e){var i=r.pendingLanes;if(0===i)var s=0;else{var a=r.suspendedLanes,o=r.pingedLanes;s=(1<<31-me(42|e)+1)-1,s=201326741&(s&=i&~(a&~o))?201326741&s|1:s?2|s:0}0!==s&&(n=!0,Rc(r,s))}else s=ou,!(3&(s=_e(r,r===su?s:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Ee(r,s)||(n=!0,Rc(r,s));r=r.next}}while(n);Ec=!1}}function Cc(){Ic()}function Ic(){_c=bc=!1;var e=0;0!==kc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==uh&&(uh=e,!0);return uh=null,!1}()&&(e=kc),kc=0);for(var t=re(),n=null,r=vc;null!==r;){var i=r.next,s=Ac(r,t);0===s?(r.next=null,null===n?vc=i:n.next=i,null===i&&(wc=n)):(n=r,(0!==e||3&s)&&(_c=!0)),r=i}Tc(e)}function Ac(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=-62914561&e.pendingLanes;0<s;){var a=31-me(s),o=1<<a,l=i[a];-1===l?0!==(o&n)&&0===(o&r)||(i[a]=ke(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(n=ou,n=_e(e,e===(t=su)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===lu||9===lu)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(3&n)||Ee(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ee(r),Pe(n)){case 2:case 8:n=ae;break;case 32:default:n=oe;break;case 268435456:n=ue}return r=Nc.bind(null,e),n=Z(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ee(r),e.callbackPriority=2,e.callbackNode=null,2}function Nc(e,t){if(0!==Iu&&5!==Iu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uc()&&e.callbackNode!==n)return null;var r=ou;return 0===(r=_e(e,e===su?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fu(e,r,t),Ac(e,re()),null!=e.callbackNode&&e.callbackNode===n?Nc.bind(null,e):null)}function Rc(e,t){if(uc())return null;Fu(e,t,!0)}function Pc(){return 0===kc&&(kc=Se()),kc}function xc(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Pt(""+e)}function Dc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Lc=0;Lc<kr.length;Lc++){var Oc=kr[Lc];Sr(Oc.toLowerCase(),"on"+(Oc[0].toUpperCase()+Oc.slice(1)))}Sr(mr,"onAnimationEnd"),Sr(gr,"onAnimationIteration"),Sr(yr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(vr,"onTransitionRun"),Sr(wr,"onTransitionStart"),Sr(br,"onTransitionCancel"),Sr(_r,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Xe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));function zc(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(c){wo(c)}i.currentTarget=null,s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(c){wo(c)}i.currentTarget=null,s=l}}}}function Fc(e,t){var n=t[Ue];void 0===n&&(n=t[Ue]=new Set);var r=e+"__bubble";n.has(r)||(qc(t,e,2,!1),n.add(r))}function Vc(e,t,n){var r=0;t&&(r|=4),qc(n,e,r,t)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Bc(e){if(!e[jc]){e[jc]=!0,Ge.forEach(function(t){"selectionchange"!==t&&(Uc.has(t)||Vc(t,!1,e),Vc(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[jc]||(t[jc]=!0,Vc("selectionchange",!1,t))}}function qc(e,t,n,r){switch(hd(t)){case 2:var i=sd;break;case 8:i=ad;break;default:i=od}n=i.bind(null,t,n,e),i=void 0,!jt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hc(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i)break;if(4===a)for(a=r.return;null!==a;){var u=a.tag;if((3===u||4===u)&&a.stateNode.containerInfo===i)return;a=a.return}for(;null!==l;){if(null===(a=qe(l)))return;if(5===(u=a.tag)||6===u||26===u||27===u){r=s=a;continue e}l=l.parentNode}}r=r.return}zt(function(){var r=s,i=Dt(n),a=[];e:{var l=Er.get(e);if(void 0!==l){var u=tn,c=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":u=yn;break;case"focusin":c="focus",u=ln;break;case"focusout":c="blur",u=ln;break;case"beforeblur":case"afterblur":u=ln;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=an;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=wn;break;case mr:case gr:case yr:u=un;break;case _r:u=bn;break;case"scroll":case"scrollend":u=rn;break;case"wheel":u=_n;break;case"copy":case"cut":case"paste":u=cn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=vn;break;case"toggle":case"beforetoggle":u=En}var h=!!(4&t),d=!h&&("scroll"===e||"scrollend"===e),f=h?null!==l?l+"Capture":null:l;h=[];for(var p,m=r;null!==m;){var g=m;if(p=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===p||null===f||null!=(g=Ft(m,f))&&h.push($c(m,g,p)),d)break;m=m.return}0<h.length&&(l=new u(l,c,null,n,i),a.push({event:l,listeners:h}))}}if(!(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xt||!(c=n.relatedTarget||n.fromElement)||!qe(c)&&!c[Me])&&(u||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?qe(c):null)&&(d=o(c),h=c.tag,c!==d||5!==h&&27!==h&&6!==h)&&(c=null)):(u=null,c=r),u!==c)){if(h=an,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(h=vn,g="onPointerLeave",f="onPointerEnter",m="pointer"),d=null==u?l:$e(u),p=null==c?l:$e(c),(l=new h(g,m+"leave",u,n,i)).target=d,l.relatedTarget=p,g=null,qe(i)===r&&((h=new h(f,m+"enter",c,n,i)).target=p,h.relatedTarget=d,g=h),d=g,u&&c)e:{for(f=c,m=0,p=h=u;p;p=Wc(p))m++;for(p=0,g=f;g;g=Wc(g))p++;for(;0<m-p;)h=Wc(h),m--;for(;0<p-m;)f=Wc(f),p--;for(;m--;){if(h===f||null!==f&&h===f.alternate)break e;h=Wc(h),f=Wc(f)}h=null}else h=null;null!==u&&Gc(a,l,u,h,!1),null!==c&&null!==d&&Gc(a,d,c,h,!0)}if("select"===(u=(l=r?$e(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var y=Vn;else if(Ln(l))if(jn)y=Xn;else{y=Gn;var v=Wn}else!(u=l.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&At(r.elementType)&&(y=Vn):y=Qn;switch(y&&(y=y(e,r))?On(a,y,n,i):(v&&v(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&bt(l,"number",l.value)),v=r?$e(r):window,e){case"focusin":(Ln(v)||"true"===v.contentEditable)&&(sr=v,ar=r,or=null);break;case"focusout":or=ar=sr=null;break;case"mousedown":lr=!0;break;case"contextmenu":case"mouseup":case"dragend":lr=!1,ur(a,n,i);break;case"selectionchange":if(ir)break;case"keydown":case"keyup":ur(a,n,i)}var w;if(Sn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else xn?Rn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(In&&"ko"!==n.locale&&(xn||"onCompositionStart"!==b?"onCompositionEnd"===b&&xn&&(w=Kt()):(Ht="value"in(qt=i)?qt.value:qt.textContent,xn=!0)),0<(v=Kc(r,b)).length&&(b=new hn(b,e,null,n,i),a.push({event:b,listeners:v}),w?b.data=w:null!==(w=Pn(n))&&(b.data=w))),(w=Cn?function(e,t){switch(e){case"compositionend":return Pn(t);case"keypress":return 32!==t.which?null:(Nn=!0,An);case"textInput":return(e=t.data)===An&&Nn?null:e;default:return null}}(e,n):function(e,t){if(xn)return"compositionend"===e||!Sn&&Rn(e,t)?(e=Kt(),$t=Ht=qt=null,xn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Kc(r,"onBeforeInput")).length&&(v=new hn("onBeforeInput","beforeinput",null,n,i),a.push({event:v,listeners:b}),v.data=w)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var s=xc((i[Oe]||null).action),a=r.submitter;a&&null!==(t=(t=a[Oe]||null)?xc(t.formAction):a.getAttribute("formAction"))&&(s=t,a=null);var o=new tn("action","action",null,r,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==kc){var e=a?Dc(i,a):new FormData(i);xa(n,{pending:!0,data:e,method:i.method,action:s},null,e)}}else"function"==typeof s&&(o.preventDefault(),e=a?Dc(i,a):new FormData(i),xa(n,{pending:!0,data:e,method:i.method,action:s},s,e))},currentTarget:i}]})}}(a,e,r,n,i)}zc(a,t)})}function $c(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kc(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===s||(null!=(i=Ft(e,n))&&r.unshift($c(e,i,s)),null!=(i=Ft(e,t))&&r.push($c(e,i,s))),3===e.tag)return r;e=e.return}return[]}function Wc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Gc(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,null!==l&&l===r)break;5!==o&&26!==o&&27!==o||null===u||(l=u,i?null!=(u=Ft(n,s))&&a.unshift($c(n,u,l)):i||null!=(u=Ft(n,s))&&a.push($c(n,u,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qc=/\r\n?/g,Xc=/\u0000|\uFFFD/g;function Yc(e){return("string"==typeof e?e:""+e).replace(Qc,"\n").replace(Xc,"")}function Jc(e,t){return t=Yc(t),Yc(e)===t}function Zc(){}function eh(e,t,n,r,i,a){switch(n){case"children":"string"==typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"==typeof r||"bigint"==typeof r)&&"body"!==t&&St(e,""+r);break;case"className":it(e,"class",r);break;case"tabIndex":it(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":it(e,n,r);break;case"style":It(e,r,a);break;case"data":if("object"!==t){it(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"==typeof r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"==typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"==typeof a&&("formAction"===n?("input"!==t&&eh(e,t,"name",i.name,i,null),eh(e,t,"formEncType",i.formEncType,i,null),eh(e,t,"formMethod",i.formMethod,i,null),eh(e,t,"formTarget",i.formTarget,i,null)):(eh(e,t,"encType",i.encType,i,null),eh(e,t,"method",i.method,i,null),eh(e,t,"target",i.target,i,null))),null==r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Zc);break;case"onScroll":null!=r&&Fc("scroll",e);break;case"onScrollEnd":null!=r&&Fc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(s(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!=typeof r&&"symbol"!=typeof r;break;case"muted":e.muted=r&&"function"!=typeof r&&"symbol"!=typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"==typeof r||"boolean"==typeof r||"symbol"==typeof r){e.removeAttribute("xlink:href");break}n=Pt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!=typeof r&&"symbol"!=typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"==typeof r||"symbol"==typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Fc("beforetoggle",e),Fc("toggle",e),rt(e,"popover",r);break;case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":rt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&rt(e,n=Nt.get(n)||n,r)}}function th(e,t,n,r,i,a){switch(n){case"style":It(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(s(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(s(60));e.innerHTML=n}}break;case"children":"string"==typeof r?St(e,r):("number"==typeof r||"bigint"==typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Fc("scroll",e);break;case"onScrollEnd":null!=r&&Fc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Zc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Qe.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"==typeof(a=null!=(a=e[Oe]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!=typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):rt(e,n,r):("function"!=typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function nh(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fc("error",e),Fc("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(null!=o)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:eh(e,t,r,o,n,null)}}return a&&eh(e,t,"srcSet",n.srcSet,n,null),void(i&&eh(e,t,"src",n.src,n,null));case"input":Fc("invalid",e);var l=r=o=a=null,u=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(null!=h)switch(i){case"name":a=h;break;case"type":o=h;break;case"checked":u=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(s(137,t));break;default:eh(e,t,i,h,n,null)}}return wt(e,r,l,u,c,o,a,!1),void ft(e);case"select":for(a in Fc("invalid",e),i=o=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":o=l;break;case"multiple":i=l;default:eh(e,t,a,l,n,null)}return t=r,n=o,e.multiple=!!i,void(null!=t?_t(e,!!i,t,!1):null!=n&&_t(e,!!i,n,!0));case"textarea":for(o in Fc("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(o)&&null!=(l=n[o]))switch(o){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(s(91));break;default:eh(e,t,o,l,n,null)}return kt(e,i,a,r),void ft(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))if("selected"===u)e.selected=i&&"function"!=typeof i&&"symbol"!=typeof i;else eh(e,t,u,i,n,null);return;case"dialog":Fc("beforetoggle",e),Fc("toggle",e),Fc("cancel",e),Fc("close",e);break;case"iframe":case"object":Fc("load",e);break;case"video":case"audio":for(i=0;i<Mc.length;i++)Fc(Mc[i],e);break;case"image":Fc("error",e),Fc("load",e);break;case"details":Fc("toggle",e);break;case"embed":case"source":case"link":Fc("error",e),Fc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:eh(e,t,c,i,n,null)}return;default:if(At(t)){for(h in n)n.hasOwnProperty(h)&&(void 0!==(i=n[h])&&th(e,t,h,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&eh(e,t,l,i,n,null))}var rh=null,ih=null;function sh(e){return 9===e.nodeType?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function oh(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function lh(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var uh=null;var ch="function"==typeof setTimeout?setTimeout:void 0,hh="function"==typeof clearTimeout?clearTimeout:void 0,dh="function"==typeof Promise?Promise:void 0,fh="function"==typeof queueMicrotask?queueMicrotask:void 0!==dh?function(e){return dh.resolve(null).then(e).catch(ph)}:ch;function ph(e){setTimeout(function(){throw e})}function mh(e){return"head"===e}function gh(e,t){var n=t,r=0,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&8===s.nodeType)if("/$"===(n=s.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&kh(a.documentElement),2&n&&kh(a.body),4&n)for(kh(n=a.head),a=n.firstChild;a;){var o=a.nextSibling,l=a.nodeName;a[je]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=o}}if(0===i)return e.removeChild(s),void Nd(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=s}while(n);Nd(t)}function yh(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yh(n),Be(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function vh(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function wh(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bh=null;function _h(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function Eh(e,t,n){switch(t=sh(n),e){case"html":if(!(e=t.documentElement))throw Error(s(452));return e;case"head":if(!(e=t.head))throw Error(s(453));return e;case"body":if(!(e=t.body))throw Error(s(454));return e;default:throw Error(s(451))}}function kh(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Be(e)}var Sh=new Map,Th=new Set;function Ch(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ih=U.d;U.d={f:function(){var e=Ih.f(),t=qu();return e||t},r:function(e){var t=He(e);null!==t&&5===t.tag&&"form"===t.type?La(t):Ih.r(e)},D:function(e){Ih.D(e),Nh("dns-prefetch",e,null)},C:function(e,t){Ih.C(e,t),Nh("preconnect",e,t)},L:function(e,t,n){Ih.L(e,t,n);var r=Ah;if(r&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(i+='[imagesizes="'+yt(n.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var s=i;switch(t){case"style":s=Ph(e);break;case"script":s=Lh(e)}Sh.has(s)||(e=d({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sh.set(s,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(xh(s))||"script"===t&&r.querySelector(Oh(s))||(nh(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}},m:function(e,t){Ih.m(e,t);var n=Ah;if(n&&e){var r=t&&"string"==typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Lh(e)}if(!Sh.has(s)&&(e=d({rel:"modulepreload",href:e},t),Sh.set(s,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oh(s)))return}nh(r=n.createElement("link"),"link",e),We(r),n.head.appendChild(r)}}},X:function(e,t){Ih.X(e,t);var n=Ah;if(n&&e){var r=Ke(n).hoistableScripts,i=Lh(e),s=r.get(i);s||((s=n.querySelector(Oh(i)))||(e=d({src:e,async:!0},t),(t=Sh.get(i))&&Fh(e,t),We(s=n.createElement("script")),nh(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}},S:function(e,t,n){Ih.S(e,t,n);var r=Ah;if(r&&e){var i=Ke(r).hoistableStyles,s=Ph(e);t=t||"default";var a=i.get(s);if(!a){var o={loading:0,preload:null};if(a=r.querySelector(xh(s)))o.loading=5;else{e=d({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sh.get(s))&&zh(e,n);var l=a=r.createElement("link");We(l),nh(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Uh(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:o},i.set(s,a)}}},M:function(e,t){Ih.M(e,t);var n=Ah;if(n&&e){var r=Ke(n).hoistableScripts,i=Lh(e),s=r.get(i);s||((s=n.querySelector(Oh(i)))||(e=d({src:e,async:!0,type:"module"},t),(t=Sh.get(i))&&Fh(e,t),We(s=n.createElement("script")),nh(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}};var Ah="undefined"==typeof document?null:document;function Nh(e,t,n){var r=Ah;if(r&&"string"==typeof t&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"==typeof n&&(i+='[crossorigin="'+n+'"]'),Th.has(i)||(Th.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(nh(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}}function Rh(e,t,n,r){var i,a,o,l,u=(u=K.current)?Ch(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(t=Ph(n.href),(r=(n=Ke(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=Ph(n.href);var c=Ke(u).hoistableStyles,h=c.get(e);if(h||(u=u.ownerDocument||u,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=u.querySelector(xh(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Sh.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sh.set(e,n),c||(i=u,a=e,o=n,l=h.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),nh(a,"link",o),We(a),i.head.appendChild(a))))),t&&null===r)throw Error(s(528,""));return h}if(t&&null!==r)throw Error(s(529,""));return null;case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=Lh(n),(r=(n=Ke(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ph(e){return'href="'+yt(e)+'"'}function xh(e){return'link[rel="stylesheet"]['+e+"]"}function Dh(e){return d({},e,{"data-precedence":e.precedence,precedence:null})}function Lh(e){return'[src="'+yt(e)+'"]'}function Oh(e){return"script[async]"+e}function Mh(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,We(r),r;var i=d({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return We(r=(e.ownerDocument||e).createElement("style")),nh(r,"style",i),Uh(r,n.precedence,e),t.instance=r;case"stylesheet":i=Ph(n.href);var a=e.querySelector(xh(i));if(a)return t.state.loading|=4,t.instance=a,We(a),a;r=Dh(n),(i=Sh.get(i))&&zh(r,i),We(a=(e.ownerDocument||e).createElement("link"));var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),nh(a,"link",r),t.state.loading|=4,Uh(a,n.precedence,e),t.instance=a;case"script":return a=Lh(n.src),(i=e.querySelector(Oh(a)))?(t.instance=i,We(i),i):(r=n,(i=Sh.get(a))&&Fh(r=d({},n),i),We(i=(e=e.ownerDocument||e).createElement("script")),nh(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Uh(r,n.precedence,e));return t.instance}function Uh(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,a=0;a<r.length;a++){var o=r[a];if(o.dataset.precedence===t)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function zh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Vh=null;function jh(e,t,n){if(null===Vh){var r=new Map,i=Vh=new Map;i.set(n,r)}else(r=(i=Vh).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[je]||s[Le]||"link"===e&&"stylesheet"===s.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==s.namespaceURI){var a=s.getAttribute(t)||"";a=e+a;var o=r.get(a);o?o.push(s):r.set(a,[s])}}return r}function Bh(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function qh(e){return!!("stylesheet"!==e.type||3&e.state.loading)}var Hh=null;function $h(){}function Kh(){if(this.count--,0===this.count)if(this.stylesheets)Gh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Wh=null;function Gh(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wh=new Map,t.forEach(Qh,e),Wh=null,Kh.call(e))}function Qh(e,t){if(!(4&t.state.loading)){var n=Wh.get(e);if(n)var r=n.get(null);else{n=new Map,Wh.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var a=i[s];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(i=t.instance).getAttribute("data-precedence"),(s=n.get(a)||r)===r&&n.set(null,i),n.set(a,i),this.count++,r=Kh.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Xh={$$typeof:k,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Yh(e,t,n,r,i,s,a,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Jh(e,t,n,r,i,s,a,o,l,u,c,h){return e=new Yh(e,t,n,a,o,l,u,h),t=1,!0===s&&(t|=24),s=zr(3,null,null,t),e.current=s,s.stateNode=e,(t=Oi()).refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:t},is(s),e}function Zh(e){return e?e=Mr:Mr}function ed(e,t,n,r,i,s){i=Zh(i),null===r.context?r.context=i:r.pendingContext=i,(r=as(t)).payload={element:n},null!==(s=void 0===s?null:s)&&(r.callback=s),null!==(n=os(e,r,t))&&(zu(n,0,t),ls(n,e,t))}function td(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function nd(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function rd(e){if(13===e.tag){var t=Dr(e,67108864);null!==t&&zu(t,0,67108864),nd(e,67108864)}}var id=!0;function sd(e,t,n,r){var i=M.T;M.T=null;var s=U.p;try{U.p=2,od(e,t,n,r)}finally{U.p=s,M.T=i}}function ad(e,t,n,r){var i=M.T;M.T=null;var s=U.p;try{U.p=8,od(e,t,n,r)}finally{U.p=s,M.T=i}}function od(e,t,n,r){if(id){var i=ld(r);if(null===i)Hc(e,t,r,ud,n),bd(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return fd=_d(fd,e,t,n,r,i),!0;case"dragenter":return pd=_d(pd,e,t,n,r,i),!0;case"mouseover":return md=_d(md,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return gd.set(s,_d(gd.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yd.set(s,_d(yd.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(bd(e,r),4&t&&-1<wd.indexOf(e)){for(;null!==i;){var s=He(i);if(null!==s)switch(s.tag){case 3:if((s=s.stateNode).current.memoizedState.isDehydrated){var a=be(s.pendingLanes);if(0!==a){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-me(a);o.entanglements[1]|=l,a&=~l}Sc(s),!(6&iu)&&(Su=re()+500,Tc(0))}}break;case 13:null!==(o=Dr(s,2))&&zu(o,0,2),qu(),nd(s,2)}if(null===(s=ld(r))&&Hc(e,t,r,ud,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else Hc(e,t,r,null,n)}}function ld(e){return cd(e=Dt(e))}var ud=null;function cd(e){if(ud=null,null!==(e=qe(e))){var t=o(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=l(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ud=e,null}function hd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case se:return 2;case ae:return 8;case oe:case le:return 32;case ue:return 268435456;default:return 32}default:return 32}}var dd=!1,fd=null,pd=null,md=null,gd=new Map,yd=new Map,vd=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bd(e,t){switch(e){case"focusin":case"focusout":fd=null;break;case"dragenter":case"dragleave":pd=null;break;case"mouseover":case"mouseout":md=null;break;case"pointerover":case"pointerout":gd.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yd.delete(t.pointerId)}}function _d(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=He(t))&&rd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ed(e){var t=qe(e.target);if(null!==t){var n=o(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=l(n)))return e.blockedOn=t,void function(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}(e.priority,function(){if(13===n.tag){var e=Mu();e=Re(e);var t=Dr(n,e);null!==t&&zu(t,0,e),nd(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function kd(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ld(e.nativeEvent);if(null!==n)return null!==(t=He(n))&&rd(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xt=r,n.target.dispatchEvent(r),xt=null,t.shift()}return!0}function Sd(e,t,n){kd(e)&&n.delete(t)}function Td(){dd=!1,null!==fd&&kd(fd)&&(fd=null),null!==pd&&kd(pd)&&(pd=null),null!==md&&kd(md)&&(md=null),gd.forEach(Sd),yd.forEach(Sd)}function Cd(t,n){t.blockedOn===n&&(t.blockedOn=null,dd||(dd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Td)))}var Id=null;function Ad(t){Id!==t&&(Id=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Id===t&&(Id=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],i=t[e+2];if("function"!=typeof r){if(null===cd(r||n))continue;break}var s=He(n);null!==s&&(t.splice(e,3),e-=3,xa(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Nd(e){function t(t){return Cd(t,e)}null!==fd&&Cd(fd,e),null!==pd&&Cd(pd,e),null!==md&&Cd(md,e),gd.forEach(t),yd.forEach(t);for(var n=0;n<vd.length;n++){var r=vd[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vd.length&&null===(n=vd[0]).blockedOn;)Ed(n),null===n.blockedOn&&vd.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],a=i[Oe]||null;if("function"==typeof s)a||Ad(n);else if(a){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,a=s[Oe]||null)o=a.formAction;else if(null!==cd(i))continue}else o=a.action;"function"==typeof o?n[r+1]=o:(n.splice(r,3),r-=3),Ad(n)}}}function Rd(e){this._internalRoot=e}function Pd(e){this._internalRoot=e}Pd.prototype.render=Rd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(s(409));ed(t.current,Mu(),e,t,null,null)},Pd.prototype.unmount=Rd.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ed(e.current,2,null,e,null,null),qu(),t[Me]=null}},Pd.prototype.unstable_scheduleHydration=function(e){if(e){var t=xe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vd.length&&0!==t&&t<vd[n].priority;n++);vd.splice(n,0,e),0===n&&Ed(e)}};var xd=r.version;if("19.1.0"!==xd)throw Error(s(527,xd,"19.1.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(s(188));throw e=Object.keys(e).join(","),Error(s(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=o(e)))throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return u(i),e;if(a===r)return u(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(3!==n.tag)throw Error(s(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var Dd={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ld=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ld.isDisabled&&Ld.supportsFiber)try{de=Ld.inject(Dd),fe=Ld}catch(Md){}}return f.createRoot=function(e,t){if(!a(e))throw Error(s(299));var n=!1,r="",i=bo,o=_o,l=Eo;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Jh(e,1,!1,null,0,n,r,i,o,l,0,null),e[Me]=t.current,Bc(e),new Rd(t)},f.hydrateRoot=function(e,t,n){if(!a(e))throw Error(s(299));var r=!1,i="",o=bo,l=_o,u=Eo,c=null;return null!=n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=Jh(e,1,!0,t,0,r,i,o,l,u,0,c)).context=Zh(null),n=t.current,(i=as(r=Re(r=Mu()))).callback=null,os(n,i,r),n=r,t.current.lanes=n,Ie(t,n),Sc(t),e[Me]=t.current,Bc(e),new Pd(t)},f.version="19.1.0",f}var v=(h||(h=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),d.exports=y()),d.exports);const w={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=n?.nonce||n?.getAttribute("nonce");r=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in w)return;w[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,i&&r.setAttribute("nonce",i),document.head.appendChild(r),t?new Promise((t,n)=>{r.addEventListener("load",t),r.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function i(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(const e of t||[])"rejected"===e.status&&i(e.reason);return e().catch(i)})};function _(e){return o({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function E(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function k(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function S(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function T(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function C(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function I(e){return o({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function A(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function N(e){return o({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(e)}function R(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function P(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function x(e){return o({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function D(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function L(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function O(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function M(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function U(e){return o({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function z(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function F(e){return o({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function V(e){return o({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function j(e){return o({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function B(e){return o({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(e)}function q(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(e)}function H(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function $(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function K(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function W(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function G(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(e)}function Q(e){return o({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function X(e){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"},child:[]}]})(e)}function Y(e){return o({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function J(e){return o({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(e)}function Z(e){return o({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(e)}function ee(e){return o({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}const te="June 2026",ne="June 19, 2026",re="2026-06-19",ie="https://wa.me/2349112612877",se=2e5,ae=()=>e.jsxs("a",{href:`${ie}?text=Hi%20IntelliGeeks%2C%20I%27d%20like%20to%20know%20more%20about%20your%20program.`,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",className:"fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group",children:[e.jsx(S,{className:"text-2xl flex-shrink-0"}),e.jsx("span",{className:"max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium",children:"Chat with us"})]}),oe=r.lazy(()=>b(()=>import("./Home-CvnynxAW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),le=r.lazy(()=>b(()=>import("./ContactUs-daNLLfLa.js"),__vite__mapDeps([8,1,2,3,4,5,7]))),ue=r.lazy(()=>b(()=>import("./AboutUs-BOW3ZDyW.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]))),ce=r.lazy(()=>b(()=>import("./Privacy-m2Ag2IBc.js"),__vite__mapDeps([10,1,2,3,4,5,7]))),he=r.lazy(()=>b(()=>import("./Terms-9yRGTEg9.js"),__vite__mapDeps([11,1,2,3,4,5,7]))),de=r.lazy(()=>b(()=>import("./Careers-DWAqfpZI.js"),__vite__mapDeps([12,1,2,3,4,5,7]))),fe=r.lazy(()=>b(()=>import("./SignUp-Bhd0G6vu.js"),__vite__mapDeps([13,1,2,4,7]))),pe=r.lazy(()=>b(()=>import("./SignIn-CI8HmXxe.js"),__vite__mapDeps([14,1,2,4,7]))),me=r.lazy(()=>b(()=>import("./ParentDashboard-BwRs2dsj.js"),__vite__mapDeps([15,1,2,4,7]))),ge=r.lazy(()=>b(()=>import("./StudentDashboard-kwrAIMd3.js"),__vite__mapDeps([16,1,2,4,7]))),ye=r.lazy(()=>b(()=>import("./Assessment-mypvcQmx.js"),__vite__mapDeps([17,1,2,7]))),ve=r.lazy(()=>b(()=>import("./Payment-yek8ZZJc.js"),__vite__mapDeps([18,1,2,7]))),we=r.lazy(()=>b(()=>import("./PaymentSuccess-BM4iJK1h.js"),__vite__mapDeps([19,1,2,7]))),be=r.lazy(()=>b(()=>import("./Schedule-CSscNHGP.js"),__vite__mapDeps([20,1,2,7]))),_e=r.lazy(()=>b(()=>import("./Blog-BrJcZooi.js"),__vite__mapDeps([21,1,2,3,4,5,22,7]))),Ee=r.lazy(()=>b(()=>import("./BlogPost-B37goEUC.js"),__vite__mapDeps([23,1,2,3,4,5,22,7]))),ke=r.lazy(()=>b(()=>import("./JuniorGeeks-BHi8JOnK.js"),__vite__mapDeps([24,1,2,3,4,5,7]))),Se=r.lazy(()=>b(()=>import("./OtherPrograms-62DrdiW9.js"),__vite__mapDeps([25,1,2,3,4,5,7]))),Te=()=>e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"}),e.jsx("p",{className:"text-xl font-semibold text-gray-700",children:"Loading..."})]})});function Ce(){return e.jsxs(r.Suspense,{fallback:e.jsx(Te,{}),children:[e.jsx(ae,{}),e.jsxs(i,{className:"scroll-smooth",children:[e.jsx(s,{path:"/",element:e.jsx(oe,{})}),e.jsx(s,{path:"/about",element:e.jsx(ue,{})}),e.jsx(s,{path:"/contact",element:e.jsx(le,{})}),e.jsx(s,{path:"/privacy",element:e.jsx(ce,{})}),e.jsx(s,{path:"/terms",element:e.jsx(he,{})}),e.jsx(s,{path:"/careers",element:e.jsx(de,{})}),e.jsx(s,{path:"/signup",element:e.jsx(fe,{})}),e.jsx(s,{path:"/signin",element:e.jsx(pe,{})}),e.jsx(s,{path:"/parent-dashboard",element:e.jsx(me,{})}),e.jsx(s,{path:"/student-dashboard",element:e.jsx(ge,{})}),e.jsx(s,{path:"/assessment/:studentId?",element:e.jsx(ye,{})}),e.jsx(s,{path:"/payment/:studentId",element:e.jsx(ve,{})}),e.jsx(s,{path:"/payment-success",element:e.jsx(we,{})}),e.jsx(s,{path:"/schedule/:studentId",element:e.jsx(be,{})}),e.jsx(s,{path:"/blog",element:e.jsx(_e,{})}),e.jsx(s,{path:"/blog/:slug",element:e.jsx(Ee,{})}),e.jsx(s,{path:"/junior-geeks",element:e.jsx(ke,{})}),e.jsx(s,{path:"/other-programs",element:e.jsx(Se,{})})]})]})}var Ie={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ne={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ae(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new Re;const l=t<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Re extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pe=function(e){return function(e){const t=Ae(e);return Ne.encodeByteArray(t,!0)}(e).replace(/\./g,"")},xe=function(e){try{return Ne.decodeString(e,!0)}catch(t){}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const De=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Le=()=>{try{return De()||(()=>{if("undefined"==typeof process)return;const e=Ie.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&xe(e[1]);return t&&JSON.parse(t)})()}catch(e){return}},Oe=e=>Le()?.emulatorHosts?.[e],Me=e=>{const t=Oe(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ue=()=>Le()?.config,ze=e=>Le()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function je(e){return(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Pe(JSON.stringify({alg:"none",type:"JWT"})),Pe(JSON.stringify(s)),""].join(".")}const qe={};let He=!1;function $e(e,t){if("undefined"==typeof window||"undefined"==typeof document||!Ve(window.location.host)||qe[e]===t||qe[e]||He)return;function n(e){return`__firebase__banner__${e}`}qe[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(qe))qe[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{He=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function a(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),a=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),l=document.getElementById(o)||document.createElement("a"),u=n("preprendIcon"),c=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,o);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(c,u),t.append(c,a,l,n),document.body.appendChild(t)}i?(a.innerText="Preview backend disconnected.",c.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(c.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',a.innerText="Preview backend running in this workspace."),a.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function We(){return!function(){const e=Le()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class Ge extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}class Qe{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Xe,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Ge(r,a,n)}}const Xe=/\{\$([^}]+)}/g;function Ye(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Je(n)&&Je(s)){if(!Ye(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Je(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function et(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function tt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class nt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=rt),void 0===r.error&&(r.error=rt),void 0===r.complete&&(r.complete=rt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rt(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e){return e&&e._delegate?e._delegate:e}class st{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Fe;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===at?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class lt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ot(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,ct;(ct=ut||(ut={}))[ct.DEBUG=0]="DEBUG",ct[ct.VERBOSE=1]="VERBOSE",ct[ct.INFO=2]="INFO",ct[ct.WARN=3]="WARN",ct[ct.ERROR=4]="ERROR",ct[ct.SILENT=5]="SILENT";const ht={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},dt=ut.INFO,ft={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},pt=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!ft[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mt{constructor(e){this.name=e,this._logLevel=dt,this._logHandler=pt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ht[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...e),this._logHandler(this,ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...e),this._logHandler(this,ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...e),this._logHandler(this,ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...e),this._logHandler(this,ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...e),this._logHandler(this,ut.ERROR,...e)}}let gt,yt;const vt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,Et=new WeakMap;let kt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return wt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||bt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function St(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(yt||(yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(It(this),t),Ct(vt.get(this))}:function(...t){return Ct(e.apply(It(this),t))}:function(t,...n){const r=e.call(It(this),t,...n);return bt.set(r,t.sort?t.sort():[t]),Ct(r)}}function Tt(e){return"function"==typeof e?St(e):(e instanceof IDBTransaction&&function(e){if(wt.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});wt.set(e,t)}(e),t=e,(gt||(gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,kt):e);var t}function Ct(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Ct(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&vt.set(t,e)}).catch(()=>{}),Et.set(t,e),t}(e);if(_t.has(e))return _t.get(e);const t=Tt(e);return t!==e&&(_t.set(e,t),Et.set(t,e)),t}const It=e=>Et.get(e);const At=["get","getKey","getAll","getAllKeys","count"],Nt=["put","add","delete","clear"],Rt=new Map;function Pt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Rt.get(t))return Rt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Nt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!At.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return Rt.set(t,s),s}kt=(e=>({...e,get:(t,n,r)=>Pt(t,n)||e.get(t,n,r),has:(t,n)=>!!Pt(t,n)||e.has(t,n)}))(kt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Dt="@firebase/app",Lt="0.14.6",Ot=new mt("@firebase/app"),Mt="@firebase/app-compat",Ut="@firebase/analytics-compat",zt="@firebase/analytics",Ft="@firebase/app-check-compat",Vt="@firebase/app-check",jt="@firebase/auth",Bt="@firebase/auth-compat",qt="@firebase/database",Ht="@firebase/data-connect",$t="@firebase/database-compat",Kt="@firebase/functions",Wt="@firebase/functions-compat",Gt="@firebase/installations",Qt="@firebase/installations-compat",Xt="@firebase/messaging",Yt="@firebase/messaging-compat",Jt="@firebase/performance",Zt="@firebase/performance-compat",en="@firebase/remote-config",tn="@firebase/remote-config-compat",nn="@firebase/storage",rn="@firebase/storage-compat",sn="@firebase/firestore",an="@firebase/ai",on="@firebase/firestore-compat",ln="firebase",un="[DEFAULT]",cn={[Dt]:"fire-core",[Mt]:"fire-core-compat",[zt]:"fire-analytics",[Ut]:"fire-analytics-compat",[Vt]:"fire-app-check",[Ft]:"fire-app-check-compat",[jt]:"fire-auth",[Bt]:"fire-auth-compat",[qt]:"fire-rtdb",[Ht]:"fire-data-connect",[$t]:"fire-rtdb-compat",[Kt]:"fire-fn",[Wt]:"fire-fn-compat",[Gt]:"fire-iid",[Qt]:"fire-iid-compat",[Xt]:"fire-fcm",[Yt]:"fire-fcm-compat",[Jt]:"fire-perf",[Zt]:"fire-perf-compat",[en]:"fire-rc",[tn]:"fire-rc-compat",[nn]:"fire-gcs",[rn]:"fire-gcs-compat",[sn]:"fire-fst",[on]:"fire-fst-compat",[an]:"fire-vertex","fire-js":"fire-js",[ln]:"fire-js-all"},hn=new Map,dn=new Map,fn=new Map;function pn(e,t){try{e.container.addComponent(t)}catch(n){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mn(e){const t=e.name;if(fn.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;fn.set(t,e);for(const n of hn.values())pn(n,e);for(const n of dn.values())pn(n,e);return!0}function gn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function yn(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Qe("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="12.6.0";function _n(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:un,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!=typeof i||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=Ue()),!n)throw vn.create("no-options");const s=hn.get(i);if(s){if(Ye(n,s.options)&&Ye(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const a=new lt(i);for(const l of fn.values())a.addComponent(l);const o=new wn(n,r,a);return hn.set(i,o),o}function En(e=un){const t=hn.get(e);if(!t&&e===un&&Ue())return _n();if(!t)throw vn.create("no-app",{appName:e});return t}function kn(e,t,n){let r=cn[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ot.warn(e.join(" "))}mn(new st(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="firebase-heartbeat-store";let Tn=null;function Cn(){return Tn||(Tn=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Ct(a);return r&&a.addEventListener("upgradeneeded",e=>{r(Ct(a.result),e.oldVersion,e.newVersion,Ct(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Sn)}catch(n){}}}).catch(e=>{throw vn.create("idb-open",{originalErrorMessage:e.message})})),Tn}async function In(e,t){try{const n=(await Cn()).transaction(Sn,"readwrite"),r=n.objectStore(Sn);await r.put(t,An(e)),await n.done}catch(n){if(n instanceof Ge)Ot.warn(n.message);else{const e=vn.create("idb-set",{originalErrorMessage:n?.message});Ot.warn(e.message)}}}function An(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pn(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Rn();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ot.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Rn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),xn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Pe(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Ot.warn(e),""}}}function Rn(){return(new Date).toISOString().substring(0,10)}class Pn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Cn()).transaction(Sn),n=await t.objectStore(Sn).get(An(e));return await t.done,n}catch(t){if(t instanceof Ge)Ot.warn(t.message);else{const e=vn.create("idb-get",{originalErrorMessage:t?.message});Ot.warn(e.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return In(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return In(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function xn(e){return Pe(JSON.stringify({version:2,heartbeats:e})).length}var Dn;function Ln(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Dn="",mn(new st("platform-logger",e=>new xt(e),"PRIVATE")),mn(new st("heartbeat",e=>new Nn(e),"PRIVATE")),kn(Dt,Lt,Dn),kn(Dt,Lt,"esm2020"),kn("fire-js","");const On=Ln,Mn=new Qe("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Un=new mt("@firebase/auth");function zn(e,...t){Un.logLevel<=ut.ERROR&&Un.error(`Auth (${bn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,...t){throw qn(e,...t)}function Vn(e,...t){return qn(e,...t)}function jn(e,t,n){const r={...On(),[t]:n};return new Qe("auth","Firebase",r).create(t,{appName:e.name})}function Bn(e){return jn(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qn(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Mn.create(e,...t)}function Hn(e,t,...n){if(!e)throw qn(t,...n)}function $n(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zn(t),new Error(t)}function Kn(e,t){e||$n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return"undefined"!=typeof self&&self.location?.href||""}function Gn(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Gn()&&"https:"!==Gn()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Qn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t){Kn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void $n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void $n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void $n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},er=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tr=new Xn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function rr(e,t,n,r,i={}){return ir(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=Ze({key:e.config.apiKey,...s}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:o,...i};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Ve(e.emulatorConfig.host)&&(l.credentials="include"),Jn.fetch()(await ar(e,e.config.apiHost,n,a),l)})}async function ir(e,t,n){e._canInitEmulator=!1;const r={...Zn,...t};try{const t=new lr(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ur(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ur(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ur(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ur(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw jn(e,o,a);Fn(e,o)}}catch(i){if(i instanceof Ge)throw i;Fn(e,"network-request-failed",{message:String(i)})}}async function sr(e,t,n,r,i={}){const s=await rr(e,t,n,r,i);return"mfaPendingCredential"in s&&Fn(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function ar(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?Yn(e.config,i):`${e.config.apiScheme}://${i}`;if(er.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(a).toString()}return a}function or(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Vn(this.auth,"network-request-failed")),tr.get())})}}function ur(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(e,t,r);return i.customData._tokenResponse=n,i}function cr(e){return void 0!==e&&void 0!==e.enterprise}class hr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return or(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dr(e,t){return rr(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function pr(e){return 1e3*Number(e)}function mr(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return zn("JWT malformed, contained fewer than 3 sections"),null;try{const e=xe(n);return e?JSON.parse(e):(zn("Failed to decode base64 JWT payload"),null)}catch(i){return zn("Caught error parsing JWT payload as JSON",i?.toString()),null}}function gr(e){const t=mr(e);return Hn(t,"internal-error"),Hn(void 0!==t.exp,"internal-error"),Hn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ge&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class vr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(e){const t=e.auth,n=await e.getIdToken(),r=await yr(e,dr(t,{idToken:n}));Hn(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?_r(i.providerUserInfo):[],a=(o=e.providerData,l=s,[...o.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var o,l;const u=e.isAnonymous,c=!(e.email&&i.passwordHash||a?.length),h=!!u&&c,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wr(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function _r(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Hn(e.idToken,"internal-error"),Hn(void 0!==e.idToken,"internal-error"),Hn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):gr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Hn(0!==e.length,"internal-error");const t=gr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Hn(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await ir(e,{},async()=>{const n=Ze({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await ar(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:a,body:n};return e.emulatorConfig&&Ve(e.emulatorConfig.host)&&(o.credentials="include"),Jn.fetch()(s,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Er;return n&&(Hn("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Hn("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Hn("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return $n("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){Hn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Sr{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new vr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return Hn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=it(e),r=await n.getIdToken(t),i=mr(r);Hn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:fr(pr(i.auth_time)),issuedAtTime:fr(pr(i.iat)),expirationTime:fr(pr(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=it(e);await br(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Hn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Hn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await br(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await yr(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return rr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,a=t.tenantId??void 0,o=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:c,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=t;Hn(c&&p,e,"internal-error");const m=Er.fromJSON(this.name,p);Hn("string"==typeof c,e,"internal-error"),kr(n,e.name),kr(r,e.name),Hn("boolean"==typeof h,e,"internal-error"),Hn("boolean"==typeof d,e,"internal-error"),kr(i,e.name),kr(s,e.name),kr(a,e.name),kr(o,e.name),kr(l,e.name),kr(u,e.name);const g=new Sr({uid:c,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:s,phoneNumber:i,tenantId:a,stsTokenManager:m,createdAt:l,lastLoginAt:u});return f&&Array.isArray(f)&&(g.providerData=f.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Er;r.updateFromServerResponse(t);const i=new Sr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await br(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Hn(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?_r(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||i?.length),a=new Er;a.updateFromIdToken(n);const o=new Sr({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new wr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||i?.length)};return Object.assign(o,l),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map;function Cr(e){Kn(e instanceof Function,"Expected a class definition");let t=Tr.get(e);return t?(Kn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Tr.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ir.type="NONE";const Ar=Ir;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e,t,n){return`firebase:${e}:${t}:${n}`}class Rr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Nr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Nr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await dr(this.auth,{idToken:e}).catch(()=>{});return t?Sr._fromGetAccountInfoResponse(this.auth,t,e):null}return Sr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Rr(Cr(Ar),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Cr(Ar);const s=Nr(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const t=await l._get(s);if(t){let n;if("string"==typeof t){const r=await dr(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Sr._fromGetAccountInfoResponse(e,r,t)}else n=Sr._fromJSON(e,t);l!==i&&(a=n),i=l;break}}catch{}const o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}})),new Rr(i,e,n)):new Rr(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Or(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ur(t))return"Blackberry";if(zr(t))return"Webos";if(Dr(t))return"Safari";if((t.includes("chrome/")||Lr(t))&&!t.includes("edge/"))return"Chrome";if(Mr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function xr(e=Ke()){return/firefox\//i.test(e)}function Dr(e=Ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lr(e=Ke()){return/crios\//i.test(e)}function Or(e=Ke()){return/iemobile/i.test(e)}function Mr(e=Ke()){return/android/i.test(e)}function Ur(e=Ke()){return/blackberry/i.test(e)}function zr(e=Ke()){return/webos/i.test(e)}function Fr(e=Ke()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Vr(){return function(){const e=Ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function jr(e=Ke()){return Fr(e)||Mr(e)||zr(e)||Ur(e)||/windows phone/i.test(e)||Or(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e,t=[]){let n;switch(e){case"Browser":n=Pr(Ke());break;case"Worker":n=`${Pr(Ke())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${bn}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wr(this),this.idTokenSubscription=new Wr(this),this.beforeStateQueue=new qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await dr(this,{idToken:e}),n=await Sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(yn(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==i||!s?.user||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Hn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await br(e)}catch(t){if("auth/network-request-failed"!==t?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Bn(this));const t=e?it(e):null;return t&&Hn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Hn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return rr(e,"GET","/v2/passwordPolicy",nr(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Hr(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return rr(e,"POST","/v2/accounts:revokeToken",nr(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;Hn(t,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Hn(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Hn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Br(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){Un.logLevel<=ut.WARN&&Un.warn(`Auth (${bn}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Kr(e){return it(e)}class Wr{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new nt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return Hn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qr(e){return Gr.loadJS(e)}class Xr{constructor(){this.enterprise=new Yr}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yr{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Jr="NO_RECAPTCHA";class Zr{constructor(e){this.type="recaptcha-enterprise",this.auth=Kr(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return rr(e,"GET","/v2/recaptchaConfig",nr(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new hr(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;cr(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Jr)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Xr).execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&cr(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Gr.recaptchaEnterpriseScript;0!==t.length&&(t+=n),Qr(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ei(e,t,n,r=!1,i=!1){const s=new Zr(e);let a;if(i)a=Jr;else try{a=await s.verify(n)}catch(l){a=await s.verify(n,!0)}const o={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ti(e,t,n,r,i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ei(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){const i=await ei(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,t,n){const r=Kr(e);Hn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=ri(t),{host:s,port:a}=function(e){const t=ri(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ii(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ii(t)}}}(t),o=null===a?"":`:${a}`,l={url:`${i}//${s}${o}/`},u=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return Hn(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void Hn(Ye(l,r.config.emulator)&&Ye(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ve(s)?(je(`${i}//${s}${o}`),$e("Auth",!0)):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ri(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ii(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class si{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,t){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function ai(e,t){return rr(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e,t){return sr(e,"POST","/v1/accounts:signInWithPassword",nr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li extends si{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new li(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new li(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ti(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",oi);case"emailLink":return async function(e,t){return sr(e,"POST","/v1/accounts:signInWithEmailLink",nr(e,t))}(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ti(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ai);case"emailLink":return async function(e,t){return sr(e,"POST","/v1/accounts:signInWithEmailLink",nr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(e,t){return sr(e,"POST","/v1/accounts:signInWithIdp",nr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new ci(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ui(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ui(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ui(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ze(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){const t=et(tt(e)),n=t.apiKey??null,r=t.oobCode??null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);Hn(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=et(tt(e)).link,n=t?et(tt(t)).deep_link_id:null,r=et(tt(e)).deep_link_id;return(r?et(tt(r)).link:null)||r||n||t||e}(e);try{return new hi(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,t){return li._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=hi.parseLink(t);return Hn(n,"argument-error"),li._fromEmailAndCode(e,n.code,n.tenantId)}}di.PROVIDER_ID="password",di.EMAIL_PASSWORD_SIGN_IN_METHOD="password",di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends pi{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com",mi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ci._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gi.credential(t,n)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com",gi.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi extends pi{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com",yi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi extends pi{constructor(){super("twitter.com")}static credential(e,t){return ci._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vi.credential(t,n)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wi(e,t){return sr(e,"POST","/v1/accounts:signUp",nr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.TWITTER_SIGN_IN_METHOD="twitter.com",vi.PROVIDER_ID="twitter.com";class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Sr._fromIdTokenResponse(e,n,r),s=_i(n);return new bi({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=_i(n);return new bi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function _i(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Ge{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ei.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ei(e,t,n,r)}}function ki(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ei._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Si(e,t,n=!1){if(yn(e.app))return Promise.reject(Bn(e));const r="signIn",i=await ki(e,r,t),s=await bi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ti(e){const t=Kr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Ci(e,t,n){return yn(e.app)?Promise.reject(Bn(e)):async function(e,t){return Si(Kr(e),t)}(it(e),di.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ti(e),t})}const Ii="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ai{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Vr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ni.type="LOCAL";const Ri=Ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ai{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pi.type="SESSION";const xi=Pi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Di(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map(async e=>e(t.origin,i)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di.receivers=[];class Oi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((a,o)=>{const l=Li("",20);r.port1.start();const u=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ui(){return void 0!==Mi().WorkerGlobalScope&&"function"==typeof Mi().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi="firebaseLocalStorageDb",Fi="firebaseLocalStorage",Vi="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bi(e,t){return e.transaction([Fi],t?"readwrite":"readonly").objectStore(Fi)}function qi(){const e=indexedDB.open(zi,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Fi,{keyPath:Vi})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Fi)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(zi);return new ji(e).toPromise()}(),t(await qi()))})})}async function Hi(e,t,n){const r=Bi(e,!0).put({[Vi]:t,value:n});return new ji(r).toPromise()}function $i(e,t){const n=Bi(e,!0).delete(t);return new ji(n).toPromise()}class Ki{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await qi()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ui()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Ui()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Oi(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qi();return await Hi(e,Ii,"1"),await $i(e,Ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hi(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Bi(e,!1).get(t),r=await new ji(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$i(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Bi(e,!1).getAll();return new ji(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ki.type="LOCAL";const Wi=Ki;new Xn(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi extends si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ui(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qi(e){return Si(e.auth,new Gi(e),e.bypassAuthState)}function Xi(e){const{auth:t,user:n}=e;return Hn(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(yn(r.app))return Promise.reject(Bn(r));const i="reauthenticate";try{const s=await yr(e,ki(r,i,t,e),n);Hn(s.idToken,r,"internal-error");const a=mr(s.idToken);Hn(a,r,"internal-error");const{sub:o}=a;return Hn(e.uid===o,r,"user-mismatch"),bi._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===s?.code&&Fn(r,"user-mismatch"),s}}(n,new Gi(e),e.bypassAuthState)}async function Yi(e){const{auth:t,user:n}=e;return Hn(n,t,"internal-error"),async function(e,t,n=!1){const r=await yr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bi._forOperation(e,"link",r)}(n,new Gi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qi;case"linkViaPopup":case"linkViaRedirect":return Yi;case"reauthViaPopup":case"reauthViaRedirect":return Xi;default:Fn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Xn(2e3,1e4);class es extends Ji{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Hn(e,this.auth,"internal-error"),e}async onExecution(){Kn(1===this.filter.length,"Popup operations only handle one event");const e=Li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Zi.get())};e()}}es.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ts="pendingRedirect",ns=new Map;class rs extends Ji{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ns.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Nr(ts,e.config.apiKey,e.name)}(t),r=function(e){return Cr(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ns.set(this.auth._key(),e)}return this.bypassAuthState||ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function is(e,t){ns.set(e._key(),t)}async function ss(e,t,n=!1){if(yn(e.app))return Promise.reject(Bn(e));const r=Kr(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Cr(t):(Hn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new rs(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ls(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ls(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Vn(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(os(e))}saveEventToCache(e){this.cachedEventUids.add(os(e)),this.lastProcessedEventTime=Date.now()}}function os(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ls({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const us=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cs=/^https?/;async function hs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return rr(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(ds(n))return}catch{}Fn(e,"unauthorized-domain")}function ds(e){const t=Wn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cs.test(n))return!1;if(us.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Xn(3e4,6e4);function ps(){const e=Mi().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ms(e){return new Promise((t,n)=>{function r(){ps(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ps(),n(Vn(e,"network-request-failed"))},timeout:fs.get()})}if(Mi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Mi().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Mi()[t]=()=>{gapi.load?r():n(Vn(e,"network-request-failed"))},Qr(`${Gr.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw gs=null,e})}let gs=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ys=new Xn(5e3,15e3),vs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ws=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bs(e){const t=e.config;Hn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Yn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:bn},i=ws.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ze(r).slice(1)}`}async function _s(e){const t=await function(e){return gs=gs||ms(e),gs}(e),n=Mi().gapi;return Hn(n,e,"internal-error"),t.open({where:document.body,url:bs(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vs,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Vn(e,"network-request-failed"),s=Mi().setTimeout(()=>{r(i)},ys.get());function a(){Mi().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ks{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ss(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...Es,width:r.toString(),height:i.toString(),top:s,left:a},u=Ke().toLowerCase();n&&(o=Lr(u)?"_blank":n),xr(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Ke()){return Fr(e)&&!!window.navigator?.standalone}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new ks(null);const h=window.open(t||"",o,c);Hn(h,e,"popup-blocked");try{h.focus()}catch(d){}return new ks(h)}const Ts="__/auth/handler",Cs="emulator/auth/handler",Is=encodeURIComponent("fac");async function As(e,t,n,r,i,s){Hn(e.config.authDomain,e,"auth-domain-config-required"),Hn(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:bn,eventId:i};if(t instanceof fi){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof pi){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${Is}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ts}`;return Yn(e,Cs)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ze(o).slice(1)}${u}`}const Ns="webStorageSupport";const Rs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xi,this._completeRedirectFn=ss,this._overrideRedirectResult=is}async _openPopup(e,t,n,r){Kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Ss(e,await As(e,t,n,Wn(),r),Li())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Mi().location.href=e}(await As(e,t,n,Wn(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Kn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await _s(e),n=new as(e);return t.register("authEvent",t=>{Hn(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ns,{type:Ns},n=>{const r=n?.[0]?.[Ns];void 0!==r&&t(!!r),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jr()||Dr()||Fr()}};var Ps="@firebase/auth",xs="1.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Hn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ls=ze("authIdTokenMaxAge")||300;let Os=null;var Ms;Gr={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Vn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Ms="Browser",mn(new st("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;Hn(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:Ms,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Br(Ms)},l=new $r(n,r,i,o);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Cr);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),mn(new st("auth-internal",e=>{const t=Kr(e.getProvider("auth").getImmediate());return new Ds(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Ps,xs,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Ms)),kn(Ps,xs,"esm2020");var Us,zs,Fs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let s,a=e.g[3];s=t+(a^n&(i^a))+r[0]+3614090360&4294967295,s=a+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[1]+3905402710&4294967295,a=t+(s<<12&4294967295|s>>>20),s=i+(n^a&(t^n))+r[2]+606105819&4294967295,s=n+(t^(i=a+(s<<17&4294967295|s>>>15))&(a^t))+r[3]+3250441966&4294967295,s=t+(a^(n=i+(s<<22&4294967295|s>>>10))&(i^a))+r[4]+4118548399&4294967295,s=a+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[5]+1200080426&4294967295,a=t+(s<<12&4294967295|s>>>20),s=i+(n^a&(t^n))+r[6]+2821735955&4294967295,s=n+(t^(i=a+(s<<17&4294967295|s>>>15))&(a^t))+r[7]+4249261313&4294967295,s=t+(a^(n=i+(s<<22&4294967295|s>>>10))&(i^a))+r[8]+1770035416&4294967295,s=a+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[9]+2336552879&4294967295,a=t+(s<<12&4294967295|s>>>20),s=i+(n^a&(t^n))+r[10]+4294925233&4294967295,s=n+(t^(i=a+(s<<17&4294967295|s>>>15))&(a^t))+r[11]+2304563134&4294967295,s=t+(a^(n=i+(s<<22&4294967295|s>>>10))&(i^a))+r[12]+1804603682&4294967295,s=a+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[13]+4254626195&4294967295,a=t+(s<<12&4294967295|s>>>20),s=i+(n^a&(t^n))+r[14]+2792965006&4294967295,s=n+(t^(i=a+(s<<17&4294967295|s>>>15))&(a^t))+r[15]+1236535329&4294967295,s=t+(i^a&((n=i+(s<<22&4294967295|s>>>10))^i))+r[1]+4129170786&4294967295,s=a+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[6]+3225465664&4294967295,a=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(a^t))+r[11]+643717713&4294967295,s=n+(a^t&((i=a+(s<<14&4294967295|s>>>18))^a))+r[0]+3921069994&4294967295,s=t+(i^a&((n=i+(s<<20&4294967295|s>>>12))^i))+r[5]+3593408605&4294967295,s=a+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[10]+38016083&4294967295,a=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(a^t))+r[15]+3634488961&4294967295,s=n+(a^t&((i=a+(s<<14&4294967295|s>>>18))^a))+r[4]+3889429448&4294967295,s=t+(i^a&((n=i+(s<<20&4294967295|s>>>12))^i))+r[9]+568446438&4294967295,s=a+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[14]+3275163606&4294967295,a=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(a^t))+r[3]+4107603335&4294967295,s=n+(a^t&((i=a+(s<<14&4294967295|s>>>18))^a))+r[8]+1163531501&4294967295,s=t+(i^a&((n=i+(s<<20&4294967295|s>>>12))^i))+r[13]+2850285829&4294967295,s=a+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[2]+4243563512&4294967295,a=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(a^t))+r[7]+1735328473&4294967295,s=n+(a^t&((i=a+(s<<14&4294967295|s>>>18))^a))+r[12]+2368359562&4294967295,s=t+((n=i+(s<<20&4294967295|s>>>12))^i^a)+r[5]+4294588738&4294967295,s=a+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[8]+2272392833&4294967295,a=t+(s<<11&4294967295|s>>>21),s=i+(a^t^n)+r[11]+1839030562&4294967295,s=n+((i=a+(s<<16&4294967295|s>>>16))^a^t)+r[14]+4259657740&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^a)+r[1]+2763975236&4294967295,s=a+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[4]+1272893353&4294967295,a=t+(s<<11&4294967295|s>>>21),s=i+(a^t^n)+r[7]+4139469664&4294967295,s=n+((i=a+(s<<16&4294967295|s>>>16))^a^t)+r[10]+3200236656&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^a)+r[13]+681279174&4294967295,s=a+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[0]+3936430074&4294967295,a=t+(s<<11&4294967295|s>>>21),s=i+(a^t^n)+r[3]+3572445317&4294967295,s=n+((i=a+(s<<16&4294967295|s>>>16))^a^t)+r[6]+76029189&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^a)+r[9]+3654602809&4294967295,s=a+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[12]+3873151461&4294967295,a=t+(s<<11&4294967295|s>>>21),s=i+(a^t^n)+r[15]+530742520&4294967295,s=n+((i=a+(s<<16&4294967295|s>>>16))^a^t)+r[2]+3299628645&4294967295,s=t+(i^((n=i+(s<<23&4294967295|s>>>9))|~a))+r[0]+4096336452&4294967295,s=a+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[7]+1126891415&4294967295,a=t+(s<<10&4294967295|s>>>22),s=i+(t^(a|~n))+r[14]+2878612391&4294967295,s=n+(a^((i=a+(s<<15&4294967295|s>>>17))|~t))+r[5]+4237533241&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~a))+r[12]+1700485571&4294967295,s=a+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[3]+2399980690&4294967295,a=t+(s<<10&4294967295|s>>>22),s=i+(t^(a|~n))+r[10]+4293915773&4294967295,s=n+(a^((i=a+(s<<15&4294967295|s>>>17))|~t))+r[1]+2240044497&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~a))+r[8]+1873313359&4294967295,s=a+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[15]+4264355552&4294967295,a=t+(s<<10&4294967295|s>>>22),s=i+(t^(a|~n))+r[6]+2734768916&4294967295,s=n+(a^((i=a+(s<<15&4294967295|s>>>17))|~t))+r[13]+1309151649&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~a))+r[4]+4149444226&4294967295,s=a+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[11]+3174756917&4294967295,a=t+(s<<10&4294967295|s>>>22),s=i+(t^(a|~n))+r[2]+718787259&4294967295,s=n+(a^((i=a+(s<<15&4294967295|s>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,i=this.C;let s=this.h,a=0;for(;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var i={};function s(e){return-128<=e&&e<128?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return d(a(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;r.l(e)<=0;)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);u.l(e)<=0&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),u=(s=a(n)).j(t);h(u)||u.l(e)>0;)u=(s=a(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const i=e.g.length-n,s=[];for(let r=0;r<i;r++)s[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=a(Math.pow(e,6));var n=this;let r="";for(;;){const i=g(n,t).g;let s=(((n=f(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),s=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=s>>>16,t&=65535,s&=65535,n[r]=s<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(u)<0&&e.l(u)<0)return a(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){const r=this.i(i)>>>16,s=65535&this.i(i),a=e.i(t)>>>16,o=65535&e.i(t);n[2*i+2*t]+=s*o,p(n,2*i+2*t),n[2*i+2*t+1]+=r*o,p(n,2*i+2*t+1),n[2*i+2*t+1]+=s*a,p(n,2*i+2*t+1),n[2*i+2*t+2]+=r*a,p(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,zs=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=a(Math.pow(n,8));let i=o;for(let o=0;o<t.length;o+=8){var s=Math.min(8,t.length-o);const e=parseInt(t.substring(o,o+s),n);s<8?(s=a(Math.pow(n,s)),i=i.j(s).add(a(e))):(i=i.j(r),i=i.add(a(e)))}return i},Us=r}).apply(void 0!==Fs?Fs:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Vs,js,Bs,qs,Hs,$s,Ks,Ws,Gs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Gs&&Gs];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var i=i||{},s=this||self;function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=o).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function c(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){s.setTimeout(()=>{throw e},0)}function m(){var e=b;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,b=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},_=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(E)}};function E(){for(var e;e=m();){try{e.h.call(e.g)}catch(n){p(n)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function k(){this.u=this.u,this.C=this.C}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}function I(e,t){S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}c(I,S),I.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&I.Z.h.call(this)},I.prototype.h=function(){I.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var A="closure_listenable_"+(1e6*Math.random()|0),N=0;function R(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++N,this.da=this.fa=!1}function P(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function x(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function D(e){const t={};for(const n in e)t[n]=e[n];return t}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function M(e){this.src=e,this.g={},this.h=0}function U(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(P(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function z(e,t,n,r){for(let i=0;i<e.length;++i){const s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}M.prototype.add=function(e,t,n,r,i){const s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);const a=z(e,t,r,i);return a>-1?(t=e[a],n||(t.fa=!1)):((t=new R(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var F="closure_lm_"+(1e6*Math.random()|0),V={};function j(e,t,n,r,i){if(Array.isArray(t)){for(let s=0;s<t.length;s++)j(e,t[s],n,r,i);return null}return n=G(n),e&&e[A]?e.J(t,n,!!a(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let l=K(e);if(l||(e[F]=l=new M(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=$;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(H(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function B(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)B(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=G(n),e&&e[A]?(e=e.i,(s=String(t).toString())in e.g&&((n=z(t=e.g[s],n,r,i))>-1&&(P(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[s],e.h--)))):e&&(e=K(e))&&(t=e.g[t.toString()],e=-1,t&&(e=z(t,n,r,i)),(n=e>-1?t[e]:null)&&q(n))}function q(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[A])U(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(H(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=K(t))?(U(n,e),0==n.h&&(n.src=null,t[F]=null)):P(e)}}}function H(e){return e in V?V[e]:V[e]="on"+e}function $(e,t){if(e.da)e=!0;else{t=new I(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&q(e),e=n.call(r,t)}return e}function K(e){return(e=e[F])instanceof M?e:null}var W="__closure_events_fn_"+(1e9*Math.random()>>>0);function G(e){return"function"==typeof e?e:(e[W]||(e[W]=function(t){return e.handleEvent(t)}),e[W])}function Q(){k.call(this),this.i=new M(this),this.M=this,this.G=null}function X(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var i=t;O(t=new S(r,e),i)}let s,a;if(i=!0,n)for(a=n.length-1;a>=0;a--)s=t.g=n[a],i=Y(s,r,!0,t)&&i;if(s=t.g=e,i=Y(s,r,!0,t)&&i,i=Y(s,r,!1,t)&&i,n)for(a=0;a<n.length;a++)s=t.g=n[a],i=Y(s,r,!1,t)&&i}function Y(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let s=0;s<t.length;++s){const a=t[s];if(a&&!a.da&&a.capture==n){const t=a.listener,n=a.ha||a.src;a.fa&&U(e.i,a),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function J(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:s.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,J(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}c(Q,k),Q.prototype[A]=!0,Q.prototype.removeEventListener=function(e,t,n,r){B(this,e,t,n,r)},Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)P(n[e]);delete e.g[t],e.h--}}this.G=null},Q.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Q.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Z extends k{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(e){k.call(this),this.h=e,this.g={}}c(ee,k);var te=[];function ne(e){x(e.g,function(e,t){this.g.hasOwnProperty(t)&&q(e)},e),e.g={}}ee.prototype.N=function(){ee.Z.N.call(this),ne(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var re=s.JSON.stringify,ie=s.JSON.parse,se=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function ae(){}function oe(){}var le={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ue(){S.call(this,"d")}function ce(){S.call(this,"c")}c(ue,S),c(ce,S);var he={},de=null;function fe(){return de=de||new Q}function pe(e){S.call(this,he.Ia,e)}function me(e){const t=fe();X(t,new pe(t))}function ge(e,t){S.call(this,he.STAT_EVENT,e),this.stat=t}function ye(e){const t=fe();X(t,new ge(t,e))}function ve(e,t){S.call(this,he.Ja,e),this.size=t}function we(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){e()},t)}function be(){this.g=!0}function _e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const s=JSON.parse(t);if(s)for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var n=s[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return re(s)}catch(s){return t}}(e,n)+(r?" "+r:"")})}he.Ia="serverreachability",c(pe,S),he.STAT_EVENT="statevent",c(ge,S),he.Ja="timingevent",c(ve,S),be.prototype.ua=function(){this.g=!1},be.prototype.info=function(){};var Ee,ke={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Se={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Te(){}function Ce(e){return encodeURIComponent(String(e))}function Ie(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ae(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ne}function Ne(){this.i=null,this.g="",this.h=!1}c(Te,ae),Te.prototype.g=function(){return new XMLHttpRequest},Ee=new Te;var Re={},Pe={};function xe(e,t,n){e.M=1,e.A=rt(Je(t)),e.u=n,e.R=!0,De(e,null)}function De(e,t){e.F=Date.now(),Me(e),e.B=Je(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),yt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ne,e.g=rn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new Z(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(te[0]=i.toString()),i=te);for(let s=0;s<i.length;s++){const e=j(n,i[s],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?D(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),me(),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s){var a="",o=s.split("&");for(let e=0;e<o.length;e++){var l=o[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");a=t.length>=2&&"type"==t[1]?a+(e+"=")+l+"&":a+(e+"=redacted&")}}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Le(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Oe(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Pe:(n=Number(t.substring(n,r)),isNaN(n)?Re:(r+=1)+n>t.length?Pe:(t=t.slice(r,r+n),e.C=r+n,t))}function Me(e){e.T=Date.now()+e.H,Ue(e,e.H)}function Ue(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=we(l(e.aa,e),t)}function ze(e){e.D&&(s.clearTimeout(e.D),e.D=null)}function Fe(e){0==e.j.I||e.K||Jt(e.j,e)}function Ve(e){ze(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ne(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function je(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ke(n.h,e)))if(!e.L&&Ke(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Yt(n),jt(n)}Gt(n),ye(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=we(l(n.Va,n),6e3));$e(n.h)<=1&&n.ta&&(n.ta=void 0)}else en(n,11)}else if((e.L||n.g==e)&&Yt(n),!C(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let l=i[t];const c=l[0];if(!(c<=n.K))if(n.K=c,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=l[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const c=l[5];null!=c&&"number"==typeof c&&c>0&&(r=1.5*c,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(We(s,s.h),s.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,nt(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var a=e;if((r=n).na=nn(r,r.L?r.ba:null,r.W),a.L){Ge(r.h,a);var o=a,u=r.O;u&&(o.H=u),o.D&&(ze(o),Me(o)),r.g=a}else Wt(r);n.i.length>0&&qt(n)}else"stop"!=l[0]&&"close"!=l[0]||en(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?en(n,7):Vt(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}me()}catch(c){}}Ae.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Mt(e)?t.j():this.Y(e)},Ae.prototype.Y=function(e){try{if(e==this.g)e:{const l=Mt(this.g),u=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||Ut(this.g)))){this.K||4!=l||7==u||me(),ze(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Le(e))return e.g.la();const t=Ut(e.g);if(""===t)return"";let n="";const r=t.length,i=4==Mt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Ve(e),Fe(e),"";e.h.i=new s.TextDecoder}for(let s=0;s<r;s++)e.h.h=!0,n+=e.h.i.decode(t[s],{stream:!(i&&s==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(r)){var a=r;break t}}a=null}if(!(e=a)){this.o=!1,this.m=3,ye(12),Ve(this),Fe(this);break e}_e(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,je(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Oe(this,n),t==Pe){4==l&&(this.m=4,ye(14),e=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}if(t==Re){this.m=4,ye(15),_e(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}_e(this.i,this.l,t,null),je(this,t)}if(Le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,ye(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qt(o),o.P=!0,ye(11))}}else _e(this.i,this.l,n,"[Invalid Chunked Response]"),Ve(this),Fe(this)}else _e(this.i,this.l,n,null),je(this,n);4==l&&Ve(this),this.o&&!this.K&&(4==l?Jt(this.j,this):(this.o=!1,Me(this)))}else(function(e){const t={};e=(e.g&&Mt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(C(e[r]))continue;var n=Ie(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,ye(12)):(this.m=0,ye(13)),Ve(this),Fe(this)}}}catch(l){}},Ae.prototype.cancel=function(){this.K=!0,Ve(this)},Ae.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(me(),ye(17)),Ve(this),this.m=2,Fe(this)):Ue(this,this.T-e)};var Be=class{constructor(e,t){this.g=e,this.map=t}};function qe(e){this.l=e||10,s.PerformanceNavigationTiming?e=(e=s.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function He(e){return!!e.h||!!e.g&&e.g.size>=e.j}function $e(e){return e.h?1:e.g?e.g.size:0}function Ke(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function We(e,t){e.g?e.g.add(t):e.h=t}function Ge(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Qe(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}qe.prototype.cancel=function(){if(this.i=Qe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ye(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ye?(this.l=e.l,Ze(this,e.j),this.o=e.o,this.g=e.g,et(this,e.u),this.h=e.h,tt(this,vt(e.i)),this.m=e.m):e&&(t=String(e).match(Xe))?(this.l=!1,Ze(this,t[1]||"",!0),this.o=it(t[2]||""),this.g=it(t[3]||"",!0),et(this,t[4]),this.h=it(t[5]||"",!0),tt(this,t[6]||"",!0),this.m=it(t[7]||"")):(this.l=!1,this.i=new dt(null,this.l))}function Je(e){return new Ye(e)}function Ze(e,t,n){e.j=n?it(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function et(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function tt(e,t,n){t instanceof dt?(e.i=t,function(e,t){t&&!e.j&&(ft(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(pt(this,t),yt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=st(t,ct)),e.i=new dt(t,e.l))}function nt(e,t,n){e.i.set(t,n)}function rt(e){return nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function it(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function st(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,at),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function at(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ye.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(st(t,ot,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(st(t,ot,!0),"@"),e.push(Ce(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(st(n,"/"==n.charAt(0)?ut:lt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",st(n,ht)),e.join("")},Ye.prototype.resolve=function(e){const t=Je(this);let n=!!e.j;n?Ze(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)et(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?tt(t,vt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ot=/[#\/\?@]/g,lt=/[#\?:]/g,ut=/[#\?]/g,ct=/[#\?@]/g,ht=/#/g;function dt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ft(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,s=null;r>=0?(i=e[n].substring(0,r),s=e[n].substring(r+1)):i=e[n],t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function pt(e,t){ft(e),t=wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function mt(e,t){return ft(e),t=wt(e,t),e.g.has(t)}function gt(e,t){ft(e);let n=[];if("string"==typeof t)mt(e,t)&&(n=n.concat(e.g.get(wt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function yt(e,t,n){pt(e,t),n.length>0&&(e.i=null,e.g.set(wt(e,t),d(n)),e.h+=n.length)}function vt(e){const t=new dt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function _t(){this.g=new se}function Et(e){this.i=e.Sb||null,this.h=e.ab||!1}function kt(e,t){Q.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function St(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Tt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Ct(e)}function Ct(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function It(e){let t="";return x(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function At(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=It(n),"string"==typeof e?null!=n&&Ce(n):nt(e,t,n))}function Nt(e){Q.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=dt.prototype).add=function(e,t){ft(this),this.i=null,e=wt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){ft(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return ft(this),this.i=null,mt(this,e=wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=gt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=Ce(n);n=gt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+Ce(n[t])),e.push(r)}}return this.i=e.join("&")},c(Et,ae),Et.prototype.g=function(){return new kt(this.i,this.h)},c(kt,Q),(e=kt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Ct(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||s).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Tt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ct(this)),this.g&&(this.readyState=3,Ct(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;St(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Tt(this):Ct(this),3==this.readyState&&St(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Tt(this))},e.Na=function(e){this.g&&(this.response=e,Tt(this))},e.ga=function(){this.g&&Tt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),c(Nt,Q);var Rt=/^https?$/i,Pt=["POST","PUT"];function xt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Dt(e),Ot(e)}function Dt(e){e.A||(e.A=!0,X(e,"complete"),X(e,"error"))}function Lt(e){if(e.h&&void 0!==i)if(e.v&&4==Mt(e))setTimeout(e.Ca.bind(e),0);else if(X(e,"readystatechange"),4==Mt(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(Xe)[1]||null;!t&&s.self&&s.self.location&&(t=s.self.location.protocol.slice(0,-1)),r=!Rt.test(t?t.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.o=6;try{var a=Mt(e)>2?e.g.statusText:""}catch(o){a=""}e.l=a+" ["+e.ca()+"]",Dt(e)}}finally{Ot(e)}}}function Ot(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||X(e,"ready");try{r.onreadystatechange=null}catch(n){}}}function Mt(e){return e.g?e.g.readyState:0}function Ut(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ft(e){this.za=0,this.i=[],this.j=new be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zt("baseRetryDelayMs",5e3,e),this.Za=zt("retryDelaySeedMs",1e4,e),this.Ta=zt("forwardChannelMaxRetries",2,e),this.va=zt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new qe(e&&e.concurrentRequestLimit),this.Ba=new _t,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Vt(e){if(Bt(e),3==e.I){var t=e.V++,n=Je(e.J);if(nt(n,"SID",e.M),nt(n,"RID",t),nt(n,"TYPE","terminate"),$t(e,n),(t=new Ae(e,e.j,t)).M=2,t.A=rt(Je(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.A,n=!0),n||(t.g=rn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Me(t)}tn(e)}function jt(e){e.g&&(Qt(e),e.g.cancel(),e.g=null)}function Bt(e){jt(e),e.v&&(s.clearTimeout(e.v),e.v=null),Yt(e),e.h.cancel(),e.m&&("number"==typeof e.m&&s.clearTimeout(e.m),e.m=null)}function qt(e){if(!He(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||_(),w||(v(),w=!0),b.add(t,e),e.D=0}}function Ht(e,t){var n;n=t?t.l:e.V++;const r=Je(e.J);nt(r,"SID",e.M),nt(r,"RID",n),nt(r,"AID",e.K),$t(e,r),e.u&&e.o&&At(r,e.u,e.o),n=new Ae(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Kt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),We(e.h,n),xe(n,r,t)}function $t(e,t){e.H&&x(e.H,function(e,n){nt(t,n,e)}),e.l&&x({},function(e,n){nt(t,n,e)})}function Kt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?l(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<n;c++){var s=i[c].g;const n=i[c].map;if((s-=t)<0)t=Math.max(0,i[c].g-100),l=!1;else try{s="req"+s+"_"||"";try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;a(n)&&(r=re(n)),e.push(s+t+"="+encodeURIComponent(r))}}catch(u){throw e.push(s+"type="+encodeURIComponent("_badmap")),u}}catch(u){r&&r(n)}}if(l){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Wt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||_(),w||(v(),w=!0),b.add(t,e),e.A=0}}function Gt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=we(l(e.Da,e),Zt(e,e.A)),e.A++,!0)}function Qt(e){null!=e.B&&(s.clearTimeout(e.B),e.B=null)}function Xt(e){e.g=new Ae(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=Je(e.na);nt(t,"RID","rpc"),nt(t,"SID",e.M),nt(t,"AID",e.K),nt(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&nt(t,"TO",e.ia),nt(t,"TYPE","xmlhttp"),$t(e,t),e.u&&e.o&&At(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=rt(Je(t)),n.u=null,n.R=!0,De(n,e)}function Yt(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function Jt(e,t){var n=null;if(e.g==t){Yt(e),Qt(e),e.g=null;var r=2}else{if(!Ke(e.h,t))return;n=t.G,Ge(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;X(r=fe(),new ve(r,n)),qt(e)}else Wt(e);else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!($e(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=we(l(e.Ea,e,t),Zt(e,e.D)),e.D++,0)))}(e,t)||2==r&&Gt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:en(e,5);break;case 4:en(e,10);break;case 3:en(e,6);break;default:en(e,2)}}function Zt(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function en(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),r=e.Ua;const t=!r;r=new Ye(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Ze(r,"https"),rt(r),t?function(e,t){const n=new be;if(s.Image){const r=new Image;r.onload=u(bt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(bt,n,"TestLoadImage: error",!1,t,r),r.onabort=u(bt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(bt,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new be;const n=new AbortController,r=setTimeout(()=>{n.abort(),bt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?bt(0,0,!0,t):bt(0,0,!1,t)}).catch(()=>{clearTimeout(r),bt(0,0,!1,t)})}(r.toString(),n)}else ye(2);e.I=0,e.l&&e.l.pa(t),tn(e),Bt(e)}function tn(e){if(e.I=0,e.ja=[],e.l){const t=Qe(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function nn(e,t,n){var r=n instanceof Ye?Je(n):new Ye(n);if(""!=r.g)t&&(r.g=t+"."+r.g),et(r,r.u);else{var i=s.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Ye(null);r&&Ze(e,r),t&&(e.g=t),i&&et(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&nt(r,n,t),nt(r,"VER",e.ka),$t(e,r),r}function rn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Nt(new Et({ab:n})):new Nt(e.ma)).Fa(e.L),t}function sn(){}function an(){}function on(e,t){Q.call(this),this.g=new Ft(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!C(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new cn(this)}function ln(e){ue.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function un(){ce.call(this),this.status=1}function cn(e){this.g=e}(e=Nt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ee.g(),this.g.onreadystatechange=h(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void xt(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=s.FormData&&e instanceof s.FormData,!(Array.prototype.indexOf.call(Pt,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(a){xt(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,X(this,"complete"),X(this,"abort"),Ot(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ot(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Lt(this):this.Xa())},e.Xa=function(){Lt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ie(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Ft.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){ye(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=nn(this,null,this.W),qt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ae(this,this.j,e);let s=this.o;if(this.U&&(s?(s=D(s),O(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Kt(this,i,t),nt(n=Je(this.J),"RID",e),nt(n,"CVER",22),this.G&&nt(n,"X-HTTP-Session-Id",this.G),$t(this,n),s&&(this.R?t="headers="+Ce(It(s))+"&"+t:this.u&&At(n,this.u,s)),We(this.h,i),this.Ra&&nt(n,"TYPE","init"),this.S?(nt(n,"$req",t),nt(n,"SID","null"),i.U=!0,xe(i,n,null)):xe(i,n,t),this.I=2}}else 3==this.I&&(e?Ht(this,e):0==this.i.length||He(this.h)||Ht(this))},e.Da=function(){if(this.v=null,Xt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=we(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ye(10),jt(this),Xt(this))},e.Va=function(){null!=this.C&&(this.C=null,jt(this),Gt(this),ye(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=sn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},an.prototype.g=function(e,t){return new on(e,t)},c(on,Q),on.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Vt(this.g)},on.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=re(e),e=n);t.i.push(new Be(t.Ya++,e)),3==t.I&&qt(t)},on.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,on.Z.N.call(this)},c(ln,ue),c(un,ce),c(cn,sn),cn.prototype.ra=function(){X(this.g,"a")},cn.prototype.qa=function(e){X(this.g,new ln(e))},cn.prototype.pa=function(e){X(this.g,new un)},cn.prototype.oa=function(){X(this.g,"b")},an.prototype.createWebChannel=an.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,Ws=function(){return new an},Ks=function(){return fe()},$s=he,Hs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ke.NO_ERROR=0,ke.TIMEOUT=8,ke.HTTP_ERROR=6,qs=ke,Se.COMPLETE="complete",Bs=Se,oe.EventType=le,le.OPEN="a",le.CLOSE="b",le.ERROR="c",le.MESSAGE="d",Q.prototype.listen=Q.prototype.J,js=oe,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,Vs=Nt}).apply(void 0!==Gs?Gs:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Qs="@firebase/firestore",Xs="4.9.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ys.UNAUTHENTICATED=new Ys(null),Ys.GOOGLE_CREDENTIALS=new Ys("google-credentials-uid"),Ys.FIRST_PARTY=new Ys("first-party-uid"),Ys.MOCK_USER=new Ys("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Js="12.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new mt("@firebase/firestore");function ea(){return Zs.logLevel}function ta(e,...t){if(Zs.logLevel<=ut.DEBUG){const n=t.map(ia);Zs.debug(`Firestore (${Js}): ${e}`,...n)}}function na(e,...t){if(Zs.logLevel<=ut.ERROR){const n=t.map(ia);Zs.error(`Firestore (${Js}): ${e}`,...n)}}function ra(e,...t){if(Zs.logLevel<=ut.WARN){const n=t.map(ia);Zs.warn(`Firestore (${Js}): ${e}`,...n)}}function ia(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,aa(e,r,n)}function aa(e,t,n){let r=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(i){r+=" CONTEXT: "+n}throw na(r),new Error(r)}function oa(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||aa(t,i,r)}function la(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ca extends Ge{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ys.UNAUTHENTICATED))}shutdown(){}}class pa{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ma{constructor(e){this.t=e,this.currentUser=Ys.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oa(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ha;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ha,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{ta("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(ta("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ha)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ta("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oa("string"==typeof t.accessToken,31837,{l:t}),new da(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oa(null===e||"string"==typeof e,2055,{h:e}),new Ys(e)}}class ga{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ys.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ya{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new ga(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ys.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class va{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wa{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oa(void 0===this.o,3512);const n=e=>{null!=e.error&&ta("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,ta("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{ta("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):ta("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new va(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(oa("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new va(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=ba(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Ea(e,t){return e<t?-1:e>t?1:0}function ka(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return Ca(n)===Ca(i)?Ea(n,i):Ca(n)?1:-1}return Ea(e.length,t.length)}const Sa=55296,Ta=57343;function Ca(e){const t=e.charCodeAt(0);return t>=Sa&&t<=Ta}function Ia(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="__name__";class Na{constructor(e,t,n){void 0===t?t=0:t>e.length&&sa(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&sa(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Na.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Na.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Ea(e.length,t.length)}static compareSegments(e,t){const n=Na.isNumericId(e),r=Na.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Na.extractNumericId(e).compare(Na.extractNumericId(t)):ka(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Us.fromString(e.substring(4,e.length-2))}}class Ra extends Na{construct(e,t,n){return new Ra(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ca(ua.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Ra(t)}static emptyPath(){return new Ra([])}}const Pa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xa extends Na{construct(e,t,n){return new xa(e,t,n)}static isValidIdentifier(e){return Pa.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xa.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Aa}static keyField(){return new xa([Aa])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ca(ua.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ca(ua.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ca(ua.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ca(ua.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xa(t)}static emptyPath(){return new xa([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.path=e}static fromPath(e){return new Da(Ra.fromString(e))}static fromName(e){return new Da(Ra.fromString(e).popFirst(5))}static empty(){return new Da(Ra.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ra.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ra.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Da(new Ra(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e,t,n){if(!n)throw new ca(ua.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Oa(e){if(!Da.isDocumentKey(e))throw new ca(ua.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ma(e){if(Da.isDocumentKey(e))throw new ca(ua.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ua(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function za(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":sa(12329,{type:typeof e})}function Fa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ca(ua.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=za(e);throw new ca(ua.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){const n={typeString:e};return t&&(n.value=t),n}function ja(e,t){if(!Ua(e))throw new ca(ua.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new ca(ua.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=-62135596800,qa=1e6;class Ha{static now(){return Ha.fromMillis(Date.now())}static fromDate(e){return Ha.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*qa);return new Ha(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ca(ua.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ca(ua.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ba)throw new ca(ua.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ca(ua.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qa}_compareTo(e){return this.seconds===e.seconds?Ea(this.nanoseconds,e.nanoseconds):Ea(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ha._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ja(e,Ha._jsonSchema))return new Ha(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ba;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ha._jsonSchemaVersion="firestore/timestamp/1.0",Ha._jsonSchema={type:Va("string",Ha._jsonSchemaVersion),seconds:Va("number"),nanoseconds:Va("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{static fromTimestamp(e){return new $a(e)}static min(){return new $a(new Ha(0,0))}static max(){return new $a(new Ha(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e){return new Wa(e.readTime,e.key,-1)}class Wa{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Wa($a.min(),Da.empty(),-1)}static max(){return new Wa($a.max(),Da.empty(),-1)}}function Ga(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Da.comparator(e.documentKey,t.documentKey),0!==n?n:Ea(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Qa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(e){if(e.code!==ua.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;ta("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&sa(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ya((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ya?t:Ya.resolve(t)}catch(t){return Ya.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ya.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ya.reject(t)}static resolve(e){return new Ya((t,n)=>{t(e)})}static reject(e){return new Ya((t,n)=>{n(e)})}static waitFor(e){return new Ya((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Ya.resolve(!1);for(const n of e)t=t.next(e=>e?Ya.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ya((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next(e=>{s[l]=e,++a,a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Ya((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function Ja(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Za.ce=-1;function eo(e){return null==e}function to(e){return 0===e&&1/e==-1/0}function no(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ro(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function so(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ao(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.comparator=e,this.root=t||uo.EMPTY}insert(e,t){return new oo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,uo.BLACK,null,null))}remove(e){return new oo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,uo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class uo{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:uo.RED,this.left=null!=r?r:uo.EMPTY,this.right=null!=i?i:uo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new uo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return uo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return uo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,uo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,uo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw sa(43730,{key:this.key,value:this.value});if(this.right.isRed())throw sa(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw sa(27949);return e+(this.isRed()?0:1)}}uo.EMPTY=null,uo.RED=!0,uo.BLACK=!1,uo.EMPTY=new class{constructor(){this.size=0}get key(){throw sa(57766)}get value(){throw sa(16141)}get color(){throw sa(16727)}get left(){throw sa(29726)}get right(){throw sa(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new uo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(e){this.comparator=e,this.data=new oo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ho(this.data.getIterator())}getIteratorFrom(e){return new ho(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof co))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new co(this.comparator);return t.data=e,t}}class ho{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.fields=e,e.sort(xa.comparator)}static empty(){return new fo([])}unionWith(e){let t=new co(xa.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new fo(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ia(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new po("Invalid base64 string: "+t):t}}(e);return new mo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new mo(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ea(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mo.EMPTY_BYTE_STRING=new mo("");const go=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yo(e){if(oa(!!e,39018),"string"==typeof e){let t=0;const n=go.exec(e);if(oa(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:vo(e.seconds),nanos:vo(e.nanos)}}function vo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function wo(e){return"string"==typeof e?mo.fromBase64String(e):mo.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="server_timestamp",_o="__type__",Eo="__previous_value__",ko="__local_write_time__";function So(e){const t=(e?.mapValue?.fields||{})[_o]?.stringValue;return t===bo}function To(e){const t=e.mapValue.fields[Eo];return So(t)?To(t):t}function Co(e){const t=yo(e.mapValue.fields[ko].timestampValue);return new Ha(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,n,r,i,s,a,o,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u}}const Ao="(default)";class No{constructor(e,t){this.projectId=e,this.database=t||Ao}static empty(){return new No("","")}get isDefaultDatabase(){return this.database===Ao}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="__type__",Po="__max__",xo={},Do="__vector__",Lo="value";function Oo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?So(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Po}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[Ro]?.stringValue;return t===Do}(e)?10:11:sa(28295,{value:e})}function Mo(e,t){if(e===t)return!0;const n=Oo(e);if(n!==Oo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Co(e).isEqual(Co(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=yo(e.timestampValue),r=yo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,wo(e.bytesValue).isEqual(wo(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return vo(e.geoPointValue.latitude)===vo(t.geoPointValue.latitude)&&vo(e.geoPointValue.longitude)===vo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return vo(e.integerValue)===vo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=vo(e.doubleValue),r=vo(t.doubleValue);return n===r?to(n)===to(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ia(e.arrayValue.values||[],t.arrayValue.values||[],Mo);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(io(n)!==io(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Mo(n[i],r[i])))return!1;return!0}(e,t);default:return sa(52216,{left:e})}var r}function Uo(e,t){return void 0!==(e.values||[]).find(e=>Mo(e,t))}function zo(e,t){if(e===t)return 0;const n=Oo(e),r=Oo(t);if(n!==r)return Ea(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ea(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=vo(e.integerValue||e.doubleValue),r=vo(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Fo(e.timestampValue,t.timestampValue);case 4:return Fo(Co(e),Co(t));case 5:return ka(e.stringValue,t.stringValue);case 6:return function(e,t){const n=wo(e),r=wo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ea(n[i],r[i]);if(0!==e)return e}return Ea(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ea(vo(e.latitude),vo(t.latitude));return 0!==n?n:Ea(vo(e.longitude),vo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Vo(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[Lo]?.arrayValue,s=r[Lo]?.arrayValue,a=Ea(i?.values?.length||0,s?.values?.length||0);return 0!==a?a:Vo(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===xo&&t===xo)return 0;if(e===xo)return 1;if(t===xo)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=ka(r[a],s[a]);if(0!==e)return e;const t=zo(n[r[a]],i[s[a]]);if(0!==t)return t}return Ea(r.length,s.length)}(e.mapValue,t.mapValue);default:throw sa(23264,{he:n})}}function Fo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ea(e,t);const n=yo(e),r=yo(t),i=Ea(n.seconds,r.seconds);return 0!==i?i:Ea(n.nanos,r.nanos)}function Vo(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=zo(n[i],r[i]);if(e)return e}return Ea(n.length,r.length)}function jo(e){return Bo(e)}function Bo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=yo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?wo(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Da.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Bo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Bo(e.fields[i])}`;return n+"}"}(e.mapValue):sa(61005,{value:e})}function qo(e){switch(Oo(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=To(e);return t?16+qo(t):16;case 5:return 2*e.stringValue.length;case 6:return wo(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+qo(t),0);case 10:case 11:return function(e){let t=0;return so(e.fields,(e,n)=>{t+=e.length+qo(n)}),t}(e.mapValue);default:throw sa(13486,{value:e})}}function Ho(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function $o(e){return!!e&&"integerValue"in e}function Ko(e){return!!e&&"arrayValue"in e}function Wo(e){return!!e&&"nullValue"in e}function Go(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qo(e){return!!e&&"mapValue"in e}function Xo(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return so(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Xo(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xo(e.arrayValue.values[n]);return t}return{...e}}class Yo{constructor(e){this.value=e}static empty(){return new Yo({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xo(t)}setAll(e){let t=xa.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Xo(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Qo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Qo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){so(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Yo(Xo(this.value))}}function Jo(e){const t=[];return so(e.fields,(e,n)=>{const r=new xa([e]);if(Qo(n)){const e=Jo(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new fo(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zo{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Zo(e,0,$a.min(),$a.min(),$a.min(),Yo.empty(),0)}static newFoundDocument(e,t,n,r){return new Zo(e,1,t,$a.min(),n,r,0)}static newNoDocument(e,t){return new Zo(e,2,t,$a.min(),$a.min(),Yo.empty(),0)}static newUnknownDocument(e,t){return new Zo(e,3,t,$a.min(),$a.min(),Yo.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($a.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yo.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$a.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zo&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.position=e,this.inclusive=t}}function tl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Da.comparator(Da.fromName(a.referenceValue),n.key):zo(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function nl(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Mo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t="asc"){this.field=e,this.dir=t}}function il(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{}class al extends sl{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new fl(e,t,n):"array-contains"===t?new yl(e,n):"in"===t?new vl(e,n):"not-in"===t?new wl(e,n):"array-contains-any"===t?new bl(e,n):new al(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new pl(e,n):new ml(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(zo(t,this.value)):null!==t&&Oo(this.value)===Oo(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return sa(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ol extends sl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ol(e,t)}matches(e){return ll(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ll(e){return"and"===e.op}function ul(e){return function(e){for(const t of e.filters)if(t instanceof ol)return!1;return!0}(e)&&ll(e)}function cl(e){if(e instanceof al)return e.field.canonicalString()+e.op.toString()+jo(e.value);if(ul(e))return e.filters.map(e=>cl(e)).join(",");{const t=e.filters.map(e=>cl(e)).join(",");return`${e.op}(${t})`}}function hl(e,t){return e instanceof al?(n=e,(r=t)instanceof al&&n.op===r.op&&n.field.isEqual(r.field)&&Mo(n.value,r.value)):e instanceof ol?function(e,t){return t instanceof ol&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&hl(n,t.filters[r]),!0)}(e,t):void sa(19439);var n,r}function dl(e){return e instanceof al?`${(t=e).field.canonicalString()} ${t.op} ${jo(t.value)}`:e instanceof ol?function(e){return e.op.toString()+" {"+e.getFilters().map(dl).join(" ,")+"}"}(e):"Filter";var t}class fl extends al{constructor(e,t,n){super(e,t,n),this.key=Da.fromName(n.referenceValue)}matches(e){const t=Da.comparator(e.key,this.key);return this.matchesComparison(t)}}class pl extends al{constructor(e,t){super(e,"in",t),this.keys=gl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ml extends al{constructor(e,t){super(e,"not-in",t),this.keys=gl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function gl(e,t){return(t.arrayValue?.values||[]).map(e=>Da.fromName(e.referenceValue))}class yl extends al{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ko(t)&&Uo(t.arrayValue,this.value)}}class vl extends al{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Uo(this.value.arrayValue,t)}}class wl extends al{constructor(e,t){super(e,"not-in",t)}matches(e){if(Uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Uo(this.value.arrayValue,t)}}class bl extends al{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ko(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Uo(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function El(e,t=null,n=[],r=[],i=null,s=null,a=null){return new _l(e,t,n,r,i,s,a)}function kl(e){const t=la(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>cl(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),eo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>jo(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>jo(e)).join(",")),t.Te=e}return t.Te}function Sl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!il(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!hl(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!nl(e.startAt,t.startAt)&&nl(e.endAt,t.endAt)}function Tl(e){return Da.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Il(e){return new Cl(e)}function Al(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Nl(e){return null!==e.collectionGroup}function Rl(e){const t=la(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new co(xa.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new rl(r,n))}),e.has(xa.keyField().canonicalString())||t.Ie.push(new rl(xa.keyField(),n))}return t.Ie}function Pl(e){const t=la(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return El(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new rl(e.field,t)});const n=e.endAt?new el(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new el(e.startAt.position,e.startAt.inclusive):null;return El(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Rl(e))),t.Ee}function xl(e,t){const n=e.filters.concat([t]);return new Cl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Dl(e,t,n){return new Cl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ll(e,t){return Sl(Pl(e),Pl(t))&&e.limitType===t.limitType}function Ol(e){return`${kl(Pl(e))}|lt:${e.limitType}`}function Ml(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>dl(e)).join(", ")}]`),eo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>jo(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>jo(e)).join(",")),`Target(${t})`}(Pl(e))}; limitType=${e.limitType})`}function Ul(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Da.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Rl(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=tl(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Rl(n),r)||n.endAt&&!function(e,t,n){const r=tl(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Rl(n),r)));var n,r}function zl(e){return(t,n)=>{let r=!1;for(const i of Rl(e)){const e=Fl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Fl(e,t,n){const r=e.field.isKeyField()?Da.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?zo(r,i):sa(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return sa(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return ao(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new oo(Da.comparator);function Bl(){return jl}const ql=new oo(Da.comparator);function Hl(...e){let t=ql;for(const n of e)t=t.insert(n.key,n);return t}function $l(e){let t=ql;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Kl(){return Gl()}function Wl(){return Gl()}function Gl(){return new Vl(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ql=new oo(Da.comparator),Xl=new co(Da.comparator);function Yl(...e){let t=Xl;for(const n of e)t=t.add(n);return t}const Jl=new co(Ea);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(t)?"-0":t}}function eu(e){return{integerValue:""+e}}function tu(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!to(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?eu(t):Zl(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this._=void 0}}function ru(e,t,n){return e instanceof au?function(e,t){const n={fields:{[_o]:{stringValue:bo},[ko]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&So(t)&&(t=To(t)),t&&(n.fields[Eo]=t),{mapValue:n}}(n,t):e instanceof ou?lu(e,t):e instanceof uu?cu(e,t):function(e,t){const n=su(e,t),r=du(n)+du(e.Ae);return $o(n)&&$o(e.Ae)?eu(r):Zl(e.serializer,r)}(e,t)}function iu(e,t,n){return e instanceof ou?lu(e,t):e instanceof uu?cu(e,t):n}function su(e,t){return e instanceof hu?$o(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class au extends nu{}class ou extends nu{constructor(e){super(),this.elements=e}}function lu(e,t){const n=fu(t);for(const r of e.elements)n.some(e=>Mo(e,r))||n.push(r);return{arrayValue:{values:n}}}class uu extends nu{constructor(e){super(),this.elements=e}}function cu(e,t){let n=fu(t);for(const r of e.elements)n=n.filter(e=>!Mo(e,r));return{arrayValue:{values:n}}}class hu extends nu{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function du(e){return vo(e.integerValue||e.doubleValue)}function fu(e){return Ko(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.field=e,this.transform=t}}class mu{constructor(e,t){this.version=e,this.transformResults=t}}class gu{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gu}static exists(e){return new gu(void 0,e)}static updateTime(e){return new gu(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vu{}function wu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Nu(e.key,gu.none()):new Su(e.key,e.data,gu.none());{const n=e.data,r=Yo.empty();let i=new co(xa.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Tu(e.key,r,new fo(i.toArray()),gu.none())}}function bu(e,t,n){var r;e instanceof Su?function(e,t,n){const r=e.value.clone(),i=Iu(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Tu?function(e,t,n){if(!yu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Iu(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Cu(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function _u(e,t,n,r){return e instanceof Su?function(e,t,n,r){if(!yu(e.precondition,t))return n;const i=e.value.clone(),s=Au(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Tu?function(e,t,n,r){if(!yu(e.precondition,t))return n;const i=Au(e.fieldTransforms,r,t),s=t.data;return s.setAll(Cu(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,s=n,yu(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Eu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=su(r.transform,e||null);null!=i&&(null===n&&(n=Yo.empty()),n.set(r.field,i))}return n||null}function ku(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ia(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ou&&r instanceof ou||n instanceof uu&&r instanceof uu?Ia(n.elements,r.elements,Mo):n instanceof hu&&r instanceof hu?Mo(n.Ae,r.Ae):n instanceof au&&r instanceof au);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Su extends vu{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tu extends vu{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Iu(e,t,n){const r=new Map;oa(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,iu(a,o,n[i]))}return r}function Au(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,ru(e,s,t))}return r}class Nu extends vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ru extends vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&bu(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_u(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_u(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wl();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=wu(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument($a.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Yl())}isEqual(e){return this.batchId===e.batchId&&Ia(this.mutations,e.mutations,(e,t)=>ku(e,t))&&Ia(this.baseMutations,e.baseMutations,(e,t)=>ku(e,t))}}class xu{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oa(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=function(){return Ql}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new xu(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ou,Mu;function Uu(e){if(void 0===e)return na("GRPC error has no .code"),ua.UNKNOWN;switch(e){case Ou.OK:return ua.OK;case Ou.CANCELLED:return ua.CANCELLED;case Ou.UNKNOWN:return ua.UNKNOWN;case Ou.DEADLINE_EXCEEDED:return ua.DEADLINE_EXCEEDED;case Ou.RESOURCE_EXHAUSTED:return ua.RESOURCE_EXHAUSTED;case Ou.INTERNAL:return ua.INTERNAL;case Ou.UNAVAILABLE:return ua.UNAVAILABLE;case Ou.UNAUTHENTICATED:return ua.UNAUTHENTICATED;case Ou.INVALID_ARGUMENT:return ua.INVALID_ARGUMENT;case Ou.NOT_FOUND:return ua.NOT_FOUND;case Ou.ALREADY_EXISTS:return ua.ALREADY_EXISTS;case Ou.PERMISSION_DENIED:return ua.PERMISSION_DENIED;case Ou.FAILED_PRECONDITION:return ua.FAILED_PRECONDITION;case Ou.ABORTED:return ua.ABORTED;case Ou.OUT_OF_RANGE:return ua.OUT_OF_RANGE;case Ou.UNIMPLEMENTED:return ua.UNIMPLEMENTED;case Ou.DATA_LOSS:return ua.DATA_LOSS;default:return sa(39323,{code:e})}}(Mu=Ou||(Ou={}))[Mu.OK=0]="OK",Mu[Mu.CANCELLED=1]="CANCELLED",Mu[Mu.UNKNOWN=2]="UNKNOWN",Mu[Mu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mu[Mu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mu[Mu.NOT_FOUND=5]="NOT_FOUND",Mu[Mu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mu[Mu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mu[Mu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mu[Mu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mu[Mu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mu[Mu.ABORTED=10]="ABORTED",Mu[Mu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mu[Mu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mu[Mu.INTERNAL=13]="INTERNAL",Mu[Mu.UNAVAILABLE=14]="UNAVAILABLE",Mu[Mu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zu=new Us([4294967295,4294967295],0);function Fu(e){const t=(new TextEncoder).encode(e),n=new zs;return n.update(t),new Uint8Array(n.digest())}function Vu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Us([n,r],0),new Us([i,s],0)]}class ju{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Bu(`Invalid padding: ${t}`);if(n<0)throw new Bu(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Bu(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Bu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Us.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Us.fromNumber(n)));return 1===r.compare(zu)&&(r=new Us([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=Fu(e),[n,r]=Vu(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new ju(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.ge)return;const t=Fu(e),[n,r]=Vu(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Bu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Hu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qu($a.min(),r,new oo(Ea),Bl(),Yl())}}class Hu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Hu(n,t,Yl(),Yl(),Yl())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Ku{constructor(e,t){this.targetId=e,this.Ce=t}}class Wu{constructor(e,t,n=mo.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Gu{constructor(){this.ve=0,this.Fe=Yu(),this.Me=mo.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Yl(),t=Yl(),n=Yl();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:sa(38017,{changeType:i})}}),new Hu(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Yu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oa(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Qu{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bl(),this.Je=Xu(),this.He=Xu(),this.Ye=new oo(Ea)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:sa(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Tl(i))if(0===n){const e=new Da(i.path);this.et(t,e,Zo.newNoDocument(e,$a.min()))}else oa(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,a;try{s=wo(n).toUint8Array()}catch(o){if(o instanceof po)return ra("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new ju(s,r,i)}catch(o){return ra(o instanceof Bu?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return 0===a.ge?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Tl(i.target)){const t=new Da(i.target.path);this.It(t).has(r)||this.Et(r,t)||this.et(r,t,Zo.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=Yl();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new qu(e,t,this.Ye,this.je,n);return this.je=Bl(),this.Je=Xu(),this.He=Xu(),this.Ye=new oo(Ea),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Gu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new co(Ea),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new co(Ea),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||ta("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xu(){return new oo(Da.comparator)}function Yu(){return new oo(Da.comparator)}const Ju=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ec=(()=>({and:"AND",or:"OR"}))();class tc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nc(e,t){return e.useProto3Json||eo(t)?t:{value:t}}function rc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ic(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sc(e,t){return rc(e,t.toTimestamp())}function ac(e){return oa(!!e,49232),$a.fromTimestamp(function(e){const t=yo(e);return new Ha(t.seconds,t.nanos)}(e))}function oc(e,t){return lc(e,t).canonicalString()}function lc(e,t){const n=(r=e,new Ra(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function uc(e){const t=Ra.fromString(e);return oa(Ic(t),10190,{key:t.toString()}),t}function cc(e,t){return oc(e.databaseId,t.path)}function hc(e,t){const n=uc(t);if(n.get(1)!==e.databaseId.projectId)throw new ca(ua.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ca(ua.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Da(pc(n))}function dc(e,t){return oc(e.databaseId,t)}function fc(e){return new Ra(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pc(e){return oa(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function mc(e,t,n){return{name:cc(e,t),fields:n.value.mapValue.fields}}function gc(e,t){return{documents:[dc(e,t.path)]}}function yc(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dc(e,i);const s=function(e){if(0!==e.length)return Tc(ol.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map(e=>{return{field:kc((t=e).field),direction:bc(t.dir)};var t})}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=nc(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i};var l}function vc(e){let t=function(e){const t=uc(e);return 4===t.length?Ra.emptyPath():pc(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oa(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=wc(e);return t instanceof ol&&ul(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(e=>{return new rl(Sc((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,eo(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new el(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new el(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new Cl(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",l,u)}function wc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Sc(e.unaryFilter.field);return al.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Sc(e.unaryFilter.field);return al.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sc(e.unaryFilter.field);return al.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sc(e.unaryFilter.field);return al.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return sa(61313);default:return sa(60726)}}(e):void 0!==e.fieldFilter?(t=e,al.create(Sc(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return sa(58110);default:return sa(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return ol.create(e.compositeFilter.filters.map(e=>wc(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return sa(1026)}}(e.compositeFilter.op))}(e):sa(30097,{filter:e});var t}function bc(e){return Ju[e]}function _c(e){return Zu[e]}function Ec(e){return ec[e]}function kc(e){return{fieldPath:e.canonicalString()}}function Sc(e){return xa.fromServerFormat(e.fieldPath)}function Tc(e){return e instanceof al?function(e){if("=="===e.op){if(Go(e.value))return{unaryFilter:{field:kc(e.field),op:"IS_NAN"}};if(Wo(e.value))return{unaryFilter:{field:kc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Go(e.value))return{unaryFilter:{field:kc(e.field),op:"IS_NOT_NAN"}};if(Wo(e.value))return{unaryFilter:{field:kc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kc(e.field),op:_c(e.op),value:e.value}}}(e):e instanceof ol?function(e){const t=e.getFilters().map(e=>Tc(e));return 1===t.length?t[0]:{compositeFilter:{op:Ec(e.op),filters:t}}}(e):sa(54877,{filter:e})}function Cc(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ic(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,n,r,i=$a.min(),s=$a.min(),a=mo.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new Ac(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ac(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ac(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ac(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.yt=e}}function Rc(e){const t=vc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Dl(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.Cn=new xc}addToCollectionParentIndex(e,t){return this.Cn.add(t),Ya.resolve()}getCollectionParents(e,t){return Ya.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Ya.resolve()}deleteFieldIndex(e,t){return Ya.resolve()}deleteAllFieldIndexes(e){return Ya.resolve()}createTargetIndexes(e,t){return Ya.resolve()}getDocumentsMatchingTarget(e,t){return Ya.resolve(null)}getIndexType(e,t){return Ya.resolve(0)}getFieldIndexes(e,t){return Ya.resolve([])}getNextCollectionGroupToUpdate(e){return Ya.resolve(null)}getMinOffset(e,t){return Ya.resolve(Wa.min())}getMinOffsetFromCollectionGroup(e,t){return Ya.resolve(Wa.min())}updateCollectionGroup(e,t,n){return Ya.resolve()}updateIndexEntries(e,t){return Ya.resolve()}}class xc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new co(Ra.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new co(Ra.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lc=41943040;class Oc{static withCacheSize(e){return new Oc(e,Oc.DEFAULT_COLLECTION_PERCENTILE,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oc.DEFAULT_COLLECTION_PERCENTILE=10,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oc.DEFAULT=new Oc(Lc,Oc.DEFAULT_COLLECTION_PERCENTILE,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oc.DISABLED=new Oc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Mc(0)}static cr(){return new Mc(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="LruGarbageCollector";function zc([e,t],[n,r]){const i=Ea(e,n);return 0===i?Ea(t,r):i}class Fc{constructor(e){this.Ir=e,this.buffer=new co(zc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();zc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Vc{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){ta(Uc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ja(e)?ta(Uc,"Ignoring IndexedDB error during garbage collection: ",e):await Xa(e)}await this.Vr(3e5)})}}class jc{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ya.resolve(Za.ce);const n=new Fc(t);return this.mr.forEachTarget(e,e=>n.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>n.Ar(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ta("LruGarbageCollector","Garbage collection skipped; disabled"),Ya.resolve(Dc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ta("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,s,a,o,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(ta("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),ea()<=ut.DEBUG&&ta("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(a-s)+`ms\n\tRemoved ${i} targets in `+(o-a)+`ms\n\tRemoved ${e} documents in `+(l-o)+`ms\nTotal Duration: ${l-u}ms`),Ya.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(){this.changes=new Vl(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zo.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ya.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&_u(n.mutation,e,fo.empty(),Ha.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Yl()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Yl()){const r=Kl();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Hl();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Kl();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Yl()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Bl();const s=Gl(),a=Gl();return t.forEach((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Tu)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),_u(a.mutation,t,a.mutation.getFieldMask(),Ha.now())):s.set(t.key,fo.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new qc(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){const n=Gl();let r=new oo((e,t)=>e-t),i=Yl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||fo.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||Yl()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,l=r.value,u=Wl();l.forEach(e=>{if(!i.has(e)){const r=wu(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Ya.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Da.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Nl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ya.resolve(Kl());let a=-1,o=i;return s.next(t=>Ya.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Ya.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,Yl())).next(e=>({batchId:a,changes:$l(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Da(t)).next(e=>{let t=Hl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Hl();return this.indexManager.getCollectionParents(e,i).next(a=>Ya.forEach(a,a=>{const o=(l=t,u=a.child(i),new Cl(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Zo.newInvalidDocument(r)))});let n=Hl();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&_u(s.mutation,r,fo.empty(),Ha.now()),Ul(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Ya.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,{id:(n=t).id,version:n.version,createTime:ac(n.createTime)}),Ya.resolve();var n}getNamedQuery(e,t){return Ya.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,{name:(n=t).name,query:Rc(n.bundledQuery),readTime:ac(n.readTime)}),Ya.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.overlays=new oo(Da.comparator),this.qr=new Map}getOverlay(e,t){return Ya.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Kl();return Ya.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Ya.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(n)),Ya.resolve()}getOverlaysForCollection(e,t,n){const r=Kl(),i=t.length+1,s=new Da(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ya.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new oo((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Kl(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Kl(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return Ya.resolve(a)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Du(t,n));let i=this.qr.get(t);void 0===i&&(i=Yl(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.sessionToken=mo.EMPTY_BYTE_STRING}getSessionToken(e){return Ya.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ya.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.Qr=new co(Qc.$r),this.Ur=new co(Qc.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Qc(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new Qc(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new Da(new Ra([])),n=new Qc(t,e),r=new Qc(t,e+1),i=[];return this.Ur.forEachInRange([n,r],e=>{this.Gr(e),i.push(e.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Da(new Ra([])),n=new Qc(t,e),r=new Qc(t,e+1);let i=Yl();return this.Ur.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Qc(e,0),n=this.Qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Qc{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Da.comparator(e.key,t.key)||Ea(e.Yr,t.Yr)}static Kr(e,t){return Ea(e.Yr,t.Yr)||Da.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new co(Qc.$r)}checkEmpty(e){return Ya.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Pu(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.Zr=this.Zr.add(new Qc(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Ya.resolve(s)}lookupMutationBatch(e,t){return Ya.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return Ya.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ya.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return Ya.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Qc(t,0),r=new Qc(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],e=>{const t=this.Xr(e.Yr);i.push(t)}),Ya.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new co(Ea);return t.forEach(e=>{const t=new Qc(e,0),r=new Qc(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,r],e=>{n=n.add(e.Yr)})}),Ya.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Da.isDocumentKey(i)||(i=i.child(""));const s=new Qc(new Da(i),0);let a=new co(Ea);return this.Zr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Yr)),!0)},s),Ya.resolve(this.ti(a))}ti(e){const t=[];return e.forEach(e=>{const n=this.Xr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){oa(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return Ya.forEach(t.mutations,r=>{const i=new Qc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Qc(t,0),r=this.Zr.firstAfterOrEqual(n);return Ya.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ya.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.ri=e,this.docs=new oo(Da.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ya.resolve(n?n.document.mutableCopy():Zo.newInvalidDocument(t))}getEntries(e,t){let n=Bl();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Zo.newInvalidDocument(e))}),Ya.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Bl();const s=t.path,a=new Da(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ga(Ka(a),n)<=0||(r.has(a.key)||Ul(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Ya.resolve(i)}getAllFromCollectionGroup(e,t,n,r){sa(9500)}ii(e,t){return Ya.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Jc(this)}getSize(e){return Ya.resolve(this.size)}}class Jc extends Bc{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),Ya.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.persistence=e,this.si=new Vl(e=>kl(e),Sl),this.lastRemoteSnapshotVersion=$a.min(),this.highestTargetId=0,this.oi=0,this._i=new Gc,this.targetCount=0,this.ai=Mc.ur()}forEachTarget(e,t){return this.si.forEach((e,n)=>t(n)),Ya.resolve()}getLastRemoteSnapshotVersion(e){return Ya.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ya.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Ya.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),Ya.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Mc(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Ya.resolve()}updateTargetData(e,t){return this.Pr(t),Ya.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Ya.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.si.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),Ya.waitFor(i).next(()=>r)}getTargetCount(e){return Ya.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return Ya.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),Ya.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Ya.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Ya.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return Ya.resolve(n)}containsKey(e,t){return Ya.resolve(this._i.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this.ui={},this.overlays={},this.ci=new Za(0),this.li=!1,this.li=!0,this.hi=new Wc,this.referenceDelegate=e(this),this.Pi=new Zc(this),this.indexManager=new Pc,this.remoteDocumentCache=new Yc(e=>this.referenceDelegate.Ti(e)),this.serializer=new Nc(t),this.Ii=new $c(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Kc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Xc(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){ta("MemoryPersistence","Starting transaction:",e);const r=new th(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return Ya.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class th extends Qa{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Ri=new Gc,this.Vi=null}static mi(e){return new nh(e)}get fi(){if(this.Vi)return this.Vi;throw sa(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),Ya.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),Ya.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Ya.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ya.forEach(this.fi,n=>{const r=Da.fromPath(n);return this.gi(e,r).next(e=>{e||t.removeEntry(r,$a.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return Ya.or([()=>Ya.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class rh{constructor(e,t){this.persistence=e,this.pi=new Vl(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ro(t)),t=no(e.get(n),t);return ro(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new jc(e,t)}(this,t)}static mi(e,t){return new rh(e,t)}Ei(){}di(e){return Ya.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return Ya.forEach(this.pi,(n,r)=>this.br(e,n,r).next(e=>e?Ya.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,r=>this.br(e,r,t).next(e=>{e||(n++,i.removeEntry(r,$a.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Ya.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ya.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ya.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Ya.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qo(e.data.value)),t}br(e,t,n){return Ya.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t);return Ya.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=Yl(),r=Yl();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ih(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=We()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Ke())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ws(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new sh;return this.Ss(e,t,n).next(r=>{if(i.result=r,this.Vs)return this.bs(e,t,n,r.size)})}).next(()=>i.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(ea()<=ut.DEBUG&&ta("QueryEngine","SDK will not create cache indexes for query:",Ml(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Ya.resolve()):(ea()<=ut.DEBUG&&ta("QueryEngine","Query:",Ml(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(ea()<=ut.DEBUG&&ta("QueryEngine","The SDK decides to create cache indexes for query:",Ml(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pl(t))):Ya.resolve())}ys(e,t){if(Al(t))return Ya.resolve(null);let n=Pl(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Dl(t,null,"F"),n=Pl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Yl(...r);return this.ps.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Ds(t,r);return this.Cs(t,s,i,n.readTime)?this.ys(e,Dl(t,null,"F")):this.vs(e,s,t,n)}))})))}ws(e,t,n,r){return Al(t)||r.isEqual($a.min())?Ya.resolve(null):this.ps.getDocuments(e,n).next(i=>{const s=this.Ds(t,i);return this.Cs(t,s,n,r)?Ya.resolve(null):(ea()<=ut.DEBUG&&ta("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ml(t)),this.vs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=$a.fromTimestamp(1e9===r?new Ha(n+1,0):new Ha(n,r));return new Wa(i,Da.empty(),t)}(r,-1)).next(e=>e))})}Ds(e,t){let n=new co(zl(e));return t.forEach((t,r)=>{Ul(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return ea()<=ut.DEBUG&&ta("QueryEngine","Using full collection scan to execute query:",Ml(t)),this.ps.getDocumentsMatchingQuery(e,t,Wa.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="LocalStore";class lh{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new oo(Ea),this.xs=new Vl(e=>kl(e),Sl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hc(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}async function uh(e,t){const n=la(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let a=Yl();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next(e=>({Ls:e,removedBatchIds:i,addedBatchIds:s}))})})}function ch(e){const t=la(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function hh(e,t){const n=la(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];t.targetChanges.forEach((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.Pi.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Pi.addMatchingKeys(e,s.addedDocuments,o)));let u=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(mo.EMPTY_BYTE_STRING,$a.min()).withLastLimboFreeSnapshotVersion($a.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,u,s)&&a.push(n.Pi.updateTargetData(e,u))});let o=Bl(),l=Yl();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(function(e,t,n){let r=Yl(),i=Yl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Bl();return n.forEach((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual($a.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ta(oh,"Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{ks:r,qs:i}})}(e,s,t.documentUpdates).next(e=>{o=e.ks,l=e.qs})),!r.isEqual($a.min())){const t=n.Pi.getLastRemoteSnapshotVersion(e).next(t=>n.Pi.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return Ya.waitFor(a).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,l)).next(()=>o)}).then(e=>(n.Ms=i,e))}function dh(e,t){const n=la(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function fh(e,t,n){const r=la(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(a){if(!Ja(a))throw a;ta(oh,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function ph(e,t,n){const r=la(e);let i=$a.min(),s=Yl();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=la(e),i=r.xs.get(n);return void 0!==i?Ya.resolve(r.Ms.get(i)):r.Pi.getTargetData(t,n)}(r,e,Pl(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Fs.getDocumentsMatchingQuery(e,t,n?i:$a.min(),n?s:Yl())).next(e=>(function(e,t,n){let r=e.Os.get(t)||$a.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Os.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Qs:s})))}class mh{constructor(){this.activeTargetIds=Jl}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gh{constructor(){this.Mo=new mh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new mh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{Oo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="ConnectivityMonitor";class wh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ta(vh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ta(vh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh=null;function _h(){return null===bh?bh=268435456+Math.round(2147483648*Math.random()):bh++,"0x"+bh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Eh="RestConnection",kh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Sh{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Ao?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const s=_h(),a=this.zo(e,t.toUriEncodedString());ta(Eh,`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(o,r,i);const{host:l}=new URL(a),u=Ve(l);return this.Jo(e,a,o,n,u).then(t=>(ta(Eh,`Received RPC '${e}' ${s}: `,t),t),t=>{throw ra(Eh,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Ho(e,t,n,r,i,s){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}zo(e,t){const n=kh[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="WebChannelConnection";class Ih extends Sh{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const s=_h();return new Promise((i,a)=>{const o=new Vs;o.setWithCredentials(!0),o.listenOnce(Bs.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case qs.NO_ERROR:const t=o.getResponseJson();ta(Ch,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case qs.TIMEOUT:ta(Ch,`RPC '${e}' ${s} timed out`),a(new ca(ua.DEADLINE_EXCEEDED,"Request time out"));break;case qs.HTTP_ERROR:const n=o.getStatus();if(ta(Ch,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ua).indexOf(t)>=0?t:ua.UNKNOWN}(t.status);a(new ca(e,t.message))}else a(new ca(ua.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ca(ua.UNAVAILABLE,"Connection failed."));break;default:sa(9055,{l_:e,streamId:s,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{ta(Ch,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);ta(Ch,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}T_(e,t,n){const r=_h(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ws(),a=Ks(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.jo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=i.join("");ta(Ch,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=s.createWebChannel(u,o);this.I_(c);let h=!1,d=!1;const f=new Th({Yo:t=>{d?ta(Ch,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ta(Ch,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),ta(Ch,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Zo:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(c,js.EventType.OPEN,()=>{d||(ta(Ch,`RPC '${e}' stream ${r} transport opened.`),f.o_())}),p(c,js.EventType.CLOSE,()=>{d||(d=!0,ta(Ch,`RPC '${e}' stream ${r} transport closed`),f.a_(),this.E_(c))}),p(c,js.EventType.ERROR,t=>{d||(d=!0,ra(Ch,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),f.a_(new ca(ua.UNAVAILABLE,"The operation could not be completed")))}),p(c,js.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];oa(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){ta(Ch,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=Ou[e];if(void 0!==t)return Uu(t)}(t),i=s.message;void 0===n&&(n=ua.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.a_(new ca(n,i)),c.close()}else ta(Ch,`RPC '${e}' stream ${r} received:`,n),f.u_(n)}}),p(a,$s.STAT_EVENT,t=>{t.stat===Hs.PROXY?ta(Ch,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Hs.NOPROXY&&ta(Ch,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.__()},0),f}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ah(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e){return new tc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&ta("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="PersistentStream";class xh{constructor(e,t,n,r,i,s,a,o){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rh(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===ua.RESOURCE_EXHAUSTED?(na(t.toString()),na("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ua.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new ca(ua.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ta(Ph,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(ta(Ph,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dh extends xh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:sa(39313,{state:r}),s=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(oa(void 0===t||"string"==typeof t,58123),mo.fromBase64String(t||"")):(oa(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),mo.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?ua.UNKNOWN:Uu(e.code);return new ca(t,e.message||"")}(o);n=new Wu(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=hc(e,r.document.name),s=ac(r.document.updateTime),a=r.document.createTime?ac(r.document.createTime):$a.min(),o=new Yo({mapValue:{fields:r.document.fields}}),l=Zo.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new $u(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=hc(e,r.document),s=r.readTime?ac(r.readTime):$a.min(),a=Zo.newNoDocument(i,s),o=r.removedTargetIds||[];n=new $u([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=hc(e,r.document),s=r.removedTargetIds||[];n=new $u([],s,i,null)}else{if(!("filter"in t))return sa(11601,{Rt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Lu(r,i),a=e.targetId;n=new Ku(a,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return $a.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?$a.min():t.readTime?ac(t.readTime):$a.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=fc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Tl(r)?{documents:gc(e,r)}:{query:yc(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ic(e,t.resumeToken);const r=nc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo($a.min())>0){n.readTime=rc(e,t.snapshotVersion.toTimestamp());const r=nc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return sa(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=fc(this.serializer),t.removeTarget=e,this.q_(t)}}class Lh extends xh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return oa(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oa(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){oa(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(oa(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?ac(e.updateTime):ac(t);return n.isEqual($a.min())&&(n=ac(t)),new mu(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=ac(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=fc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof Su)n={update:mc(e,t.key,t.value)};else if(t instanceof Nu)n={delete:cc(e,t.key)};else if(t instanceof Tu)n={update:mc(e,t.key,t.data),updateMask:Cc(t.fieldMask)};else{if(!(t instanceof Ru))return sa(16599,{Vt:t.type});n={verify:cc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof au)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ou)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof uu)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hu)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw sa(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:sc(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:sa(27497))),n;var r,i}(this.serializer,e))};this.q_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{}class Mh extends Oh{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new ca(ua.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Go(e,lc(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ua.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ca(ua.UNKNOWN,e.toString())})}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Ho(e,lc(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ua.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ca(ua.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Uh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(na(t),this.aa=!1):ta("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="RemoteStore";class Fh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(e=>{n.enqueueAndForget(async()=>{Gh(this)&&(ta(zh,"Restarting streams for network reachability change."),await async function(e){const t=la(e);t.Ea.add(4),await jh(t),t.Ra.set("Unknown"),t.Ea.delete(4),await Vh(t)}(this))})}),this.Ra=new Uh(n,r)}}async function Vh(e){if(Gh(e))for(const t of e.da)await t(!0)}async function jh(e){for(const t of e.da)await t(!1)}function Bh(e,t){const n=la(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Wh(n)?Kh(n):dd(n).O_()&&Hh(n,t))}function qh(e,t){const n=la(e),r=dd(n);n.Ia.delete(t),r.O_()&&$h(n,t),0===n.Ia.size&&(r.O_()?r.L_():Gh(n)&&n.Ra.set("Unknown"))}function Hh(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($a.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}dd(e).Y_(t)}function $h(e,t){e.Va.Ue(t),dd(e).Z_(t)}function Kh(e){e.Va=new Qu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),dd(e).start(),e.Ra.ua()}function Wh(e){return Gh(e)&&!dd(e).x_()&&e.Ia.size>0}function Gh(e){return 0===la(e).Ea.size}function Qh(e){e.Va=void 0}async function Xh(e){e.Ra.set("Online")}async function Yh(e){e.Ia.forEach((t,n)=>{Hh(e,t)})}async function Jh(e,t){Qh(e),Wh(e)?(e.Ra.ha(t),Kh(e)):e.Ra.set("Unknown")}async function Zh(e,t,n){if(e.Ra.set("Online"),t instanceof Wu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ia.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ia.delete(r),e.Va.removeTarget(r))}(e,t)}catch(r){ta(zh,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ed(e,r)}else if(t instanceof $u?e.Va.Ze(t):t instanceof Ku?e.Va.st(t):e.Va.tt(t),!n.isEqual($a.min()))try{const t=await ch(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Va.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ia.get(r);i&&e.Ia.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ia.get(t);if(!r)return;e.Ia.set(t,r.withResumeToken(mo.EMPTY_BYTE_STRING,r.snapshotVersion)),$h(e,t);const i=new Ac(r.target,t,n,r.sequenceNumber);Hh(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){ta(zh,"Failed to raise snapshot:",i),await ed(e,i)}}async function ed(e,t,n){if(!Ja(t))throw t;e.Ea.add(1),await jh(e),e.Ra.set("Offline"),n||(n=()=>ch(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ta(zh,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await Vh(e)})}function td(e,t){return t().catch(n=>ed(e,n,t))}async function nd(e){const t=la(e),n=fd(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;rd(t);)try{const e=await dh(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,id(t,e)}catch(i){await ed(t,i)}sd(t)&&ad(t)}function rd(e){return Gh(e)&&e.Ta.length<10}function id(e,t){e.Ta.push(t);const n=fd(e);n.O_()&&n.X_&&n.ea(t.mutations)}function sd(e){return Gh(e)&&!fd(e).x_()&&e.Ta.length>0}function ad(e){fd(e).start()}async function od(e){fd(e).ra()}async function ld(e){const t=fd(e);for(const n of e.Ta)t.ea(n.mutations)}async function ud(e,t,n){const r=e.Ta.shift(),i=xu.from(r,t,n);await td(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await nd(e)}async function cd(e,t){t&&fd(e).X_&&await async function(e,t){if(function(e){switch(e){case ua.OK:return sa(64938);case ua.CANCELLED:case ua.UNKNOWN:case ua.DEADLINE_EXCEEDED:case ua.RESOURCE_EXHAUSTED:case ua.INTERNAL:case ua.UNAVAILABLE:case ua.UNAUTHENTICATED:return!1;case ua.INVALID_ARGUMENT:case ua.NOT_FOUND:case ua.ALREADY_EXISTS:case ua.PERMISSION_DENIED:case ua.FAILED_PRECONDITION:case ua.ABORTED:case ua.OUT_OF_RANGE:case ua.UNIMPLEMENTED:case ua.DATA_LOSS:return!0;default:return sa(15467,{code:e})}}(n=t.code)&&n!==ua.ABORTED){const n=e.Ta.shift();fd(e).B_(),await td(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await nd(e)}var n}(e,t),sd(e)&&ad(e)}async function hd(e,t){const n=la(e);n.asyncQueue.verifyOperationInProgress(),ta(zh,"RemoteStore received new credentials");const r=Gh(n);n.Ea.add(3),await jh(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Vh(n)}function dd(e){return e.ma||(e.ma=function(e,t,n){const r=la(e);return r.sa(),new Dh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:Xh.bind(null,e),t_:Yh.bind(null,e),r_:Jh.bind(null,e),H_:Zh.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),Wh(e)?Kh(e):e.Ra.set("Unknown")):(await e.ma.stop(),Qh(e))})),e.ma}function fd(e){return e.fa||(e.fa=function(e,t,n){const r=la(e);return r.sa(),new Lh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:od.bind(null,e),r_:cd.bind(null,e),ta:ld.bind(null,e),na:ud.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await nd(e)):(await e.fa.stop(),e.Ta.length>0&&(ta(zh,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ha,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new pd(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ca(ua.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function md(e,t){if(na("AsyncQueue",`${t}: ${e}`),Ja(e))return new ca(ua.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{static emptySet(e){return new gd(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Da.comparator(t.key,n.key):(e,t)=>Da.comparator(e.key,t.key),this.keyedMap=Hl(),this.sortedSet=new oo(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new gd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.ga=new oo(Da.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):sa(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class vd{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new vd(e,t,gd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class bd{constructor(){this.queries=_d(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=la(e),r=n.queries;n.queries=_d(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new ca(ua.ABORTED,"Firestore shutting down"))}}function _d(){return new Vl(e=>Ol(e),Ll)}async function Ed(e,t){const n=la(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.ba()&&t.Da()&&(r=2):(s=new wd,r=t.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const e=md(a,`Initialization of query '${Ml(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&Cd(n)}async function kd(e,t){const n=la(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.Sa.indexOf(t);e>=0&&(s.Sa.splice(e,1),0===s.Sa.length?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Sd(e,t){const n=la(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0);t.wa=i}}r&&Cd(n)}function Td(e,t,n){const r=la(e),i=r.queries.get(t);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(t)}function Cd(e){e.Ca.forEach(e=>{e.next()})}var Id,Ad;(Ad=Id||(Id={})).Ma="default",Ad.Cache="cache";class Nd{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new vd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=vd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Id.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.key=e}}class Pd{constructor(e){this.key=e}}class xd{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Yl(),this.mutatedKeys=Yl(),this.eu=zl(e),this.tu=new gd(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new yd,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),c=Ul(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.su(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.eu(c,o)>0||l&&this.eu(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:s,iu:n,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const s=e.iu.ya();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return sa(20277,{Rt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const a=t&&!r?this._u():[],o=0===this.Xa.size&&this.current&&!r?1:0,l=o!==this.Za;return this.Za=o,0!==s.length||l?{snapshot:new vd(this.query,e.tu,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Yl(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Xa=this.Xa.add(e.key))});const t=[];return e.forEach(e=>{this.Xa.has(e)||t.push(new Pd(e))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Rd(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=Yl();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vd.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}}const Dd="SyncEngine";class Ld{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Od{constructor(e){this.key=e,this.hu=!1}}class Md{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Vl(e=>Ol(e),Ll),this.Iu=new Map,this.Eu=new Set,this.du=new oo(Da.comparator),this.Au=new Map,this.Ru=new Gc,this.Vu={},this.mu=new Map,this.fu=Mc.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function Ud(e,t,n=!0){const r=sf(e);let i;const s=r.Tu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Fd(r,t,n,!0),i}async function zd(e,t){const n=sf(e);await Fd(n,t,!0,!1)}async function Fd(e,t,n,r){const i=await function(e,t){const n=la(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Pi.getTargetData(e,t).next(i=>i?(r=i,Ya.resolve(r)):n.Pi.allocateTargetId(e).next(i=>(r=new Ac(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Pi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.xs.set(t,e.targetId)),e})}(e.localStore,Pl(t)),s=i.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await async function(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.Cs&&(i=await ph(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));const s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return Jd(e,t.targetId,o.au),o.snapshot}(e,t,n,r);const s=await ph(e.localStore,t,!0),a=new xd(t,s.Qs),o=a.ru(s.documents),l=Hu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);Jd(e,n,u.au);const c=new Ld(t,n,a);return e.Tu.set(t,c),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),u.snapshot}(e,t,s,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&Bh(e.remoteStore,i),o}async function Vd(e,t,n){const r=la(e),i=r.Tu.get(t),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(e=>!Ll(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qh(r.remoteStore,i.targetId),Xd(r,i.targetId)}).catch(Xa)):(Xd(r,i.targetId),await fh(r.localStore,i.targetId,!0))}async function jd(e,t){const n=la(e),r=n.Tu.get(t),i=n.Iu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qh(n.remoteStore,r.targetId))}async function Bd(e,t,n){const r=function(e){const t=la(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wd.bind(null,t),t}(e);try{const e=await function(e,t){const n=la(e),r=Ha.now(),i=t.reduce((e,t)=>e.add(t.key),Yl());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=Bl(),l=Yl();return n.Ns.getEntries(e,i).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,o)).next(i=>{s=i;const a=[];for(const e of t){const t=Eu(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Tu(e.key,t,Jo(t.value.mapValue),gu.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)}).next(t=>{a=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:$l(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Vu[e.currentUser.toKey()];r||(r=new oo(Ea)),r=r.insert(t,n),e.Vu[e.currentUser.toKey()]=r}(r,e.batchId,n),await tf(r,e.changes),await nd(r.remoteStore)}catch(i){const e=md(i,"Failed to persist write");n.reject(e)}}async function qd(e,t){const n=la(e);try{const e=await hh(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(oa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?oa(r.hu,14607):e.removedDocuments.size>0&&(oa(r.hu,42227),r.hu=!1))}),await tf(n,e,t)}catch(r){await Xa(r)}}function Hd(e,t,n){const r=la(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=la(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&Cd(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $d(e,t,n){const r=la(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),s=i&&i.key;if(s){let e=new oo(Da.comparator);e=e.insert(s,Zo.newNoDocument(s,$a.min()));const n=Yl().add(s),i=new qu($a.min(),new Map,new oo(Ea),e,n);await qd(r,i),r.du=r.du.remove(s),r.Au.delete(t),ef(r)}else await fh(r.localStore,t,!1).then(()=>Xd(r,t,n)).catch(Xa)}async function Kd(e,t){const n=la(e),r=t.batch.batchId;try{const e=await function(e,t){const n=la(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=Ya.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);oa(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Yl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);Qd(n,r,null),Gd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tf(n,e)}catch(i){await Xa(i)}}async function Wd(e,t,n){const r=la(e);try{const e=await function(e,t){const n=la(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(oa(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Qd(r,t,n),Gd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await tf(r,e)}catch(i){await Xa(i)}}function Gd(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function Qd(e,t,n){const r=la(e);let i=r.Vu[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function Xd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(t=>{e.Ru.containsKey(t)||Yd(e,t)})}function Yd(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(qh(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),ef(e))}function Jd(e,t,n){for(const r of n)r instanceof Rd?(e.Ru.addReference(r.key,t),Zd(e,r)):r instanceof Pd?(ta(Dd,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||Yd(e,r.key)):sa(19791,{wu:r})}function Zd(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(ta(Dd,"New document in limbo: "+n),e.Eu.add(r),ef(e))}function ef(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new Da(Ra.fromString(t)),r=e.fu.next();e.Au.set(r,new Od(n)),e.du=e.du.insert(n,r),Bh(e.remoteStore,new Ac(Pl(Il(n.path)),r,"TargetPurposeLimboResolution",Za.ce))}}async function tf(e,t,n){const r=la(e),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((e,o)=>{a.push(r.pu(o,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(o.targetId)?.current;r.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){i.push(e);const t=ih.As(o.targetId,e);s.push(t)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(e,t){const n=la(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ya.forEach(t,t=>Ya.forEach(t.Es,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ya.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!Ja(r))throw r;ta(oh,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,i)}}}(r.localStore,s))}async function nf(e,t){const n=la(e);if(!n.currentUser.isEqual(t)){ta(Dd,"User change. New user:",t.toKey());const e=await uh(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new ca(ua.CANCELLED,i))})}),r.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await tf(n,e.Ls)}var r,i}function rf(e,t){const n=la(e),r=n.Au.get(t);if(r&&r.hu)return Yl().add(r.key);{let e=Yl();const r=n.Iu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function sf(e){const t=la(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$d.bind(null,t),t.Pu.H_=Sd.bind(null,t.eventManager),t.Pu.yu=Td.bind(null,t.eventManager),t}class af{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new lh(e,t,n,r)}(this.persistence,new ah,e.initialUser,this.serializer)}Cu(e){return new eh(nh.mi,this.serializer)}Du(e){return new gh}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}af.provider={build:()=>new af};class of extends af{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){oa(this.persistence.referenceDelegate instanceof rh,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Vc(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?Oc.withCacheSize(this.cacheSizeBytes):Oc.DEFAULT;return new eh(e=>rh.mi(e,t),this.serializer)}}class lf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nf.bind(null,this.syncEngine),await async function(e,t){const n=la(e);t?(n.Ea.delete(2),await Vh(n)):t||(n.Ea.add(2),await jh(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bd}createDatastore(e){const t=Nh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ih(r));var r;return function(e,t,n,r){return new Mh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Hd(this.syncEngine,e,0),s=wh.v()?new wh:new yh,new Fh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new Md(e,t,n,r,i,s);return a&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=la(e);ta(zh,"RemoteStore shutting down."),t.Ea.add(5),await jh(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}lf.provider={build:()=>new lf};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):na("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="FirestoreClient";class hf{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ys.UNAUTHENTICATED,this.clientId=_a.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{ta(cf,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(ta(cf,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ha;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=md(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function df(e,t){e.asyncQueue.verifyOperationInProgress(),ta(cf,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await uh(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ff(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ta(cf,"Using user provided OfflineComponentProvider");try{await df(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===ua.FAILED_PRECONDITION||n.code===ua.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;ra("Error using user provided cache. Falling back to memory cache: "+i),await df(e,new af)}}else ta(cf,"Using default OfflineComponentProvider"),await df(e,new of(void 0));var n;return e._offlineComponents}(e);ta(cf,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>hd(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>hd(t.remoteStore,n)),e._onlineComponents=t}async function pf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ta(cf,"Using user provided OnlineComponentProvider"),await ff(e,e._uninitializedComponentsProvider._online)):(ta(cf,"Using default OnlineComponentProvider"),await ff(e,new lf))),e._onlineComponents}async function mf(e){const t=await pf(e),n=t.eventManager;return n.onListen=Ud.bind(null,t.syncEngine),n.onUnlisten=Vd.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=zd.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=jd.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gf(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const yf=new Map,vf="firestore.googleapis.com",wf=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new ca(ua.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vf,this.ssl=wf}else this.host=e.host,this.ssl=e.ssl??wf;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Lc;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ca(ua.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ca(ua.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gf(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ca(ua.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ca(ua.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ca(ua.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class _f{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ca(ua.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ca(ua.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new fa;switch(e.type){case"firstParty":return new ya(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ca(ua.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=yf.get(e);t&&(ta("ComponentProvider","Removing Datastore"),yf.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ef{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ef(this.firestore,e,this._query)}}class kf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kf(this.firestore,e,this._key)}toJSON(){return{type:kf._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ja(t,kf._jsonSchema))return new kf(e,n||null,new Da(Ra.fromString(t.referencePath)))}}kf._jsonSchemaVersion="firestore/documentReference/1.0",kf._jsonSchema={type:Va("string",kf._jsonSchemaVersion),referencePath:Va("string")};class Sf extends Ef{constructor(e,t,n){super(e,t,Il(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kf(this.firestore,null,new Da(e))}withConverter(e){return new Sf(this.firestore,e,this._path)}}function Tf(e,t,...n){if(e=it(e),La("collection","path",t),e instanceof _f){const r=Ra.fromString(t,...n);return Ma(r),new Sf(e,null,r)}{if(!(e instanceof kf||e instanceof Sf))throw new ca(ua.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ra.fromString(t,...n));return Ma(r),new Sf(e.firestore,null,r)}}function Cf(e,t,...n){if(e=it(e),1===arguments.length&&(t=_a.newId()),La("doc","path",t),e instanceof _f){const r=Ra.fromString(t,...n);return Oa(r),new kf(e,null,new Da(r))}{if(!(e instanceof kf||e instanceof Sf))throw new ca(ua.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ra.fromString(t,...n));return Oa(r),new kf(e.firestore,e instanceof Sf?e.converter:null,new Da(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="AsyncQueue";class Af{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rh(this,"async_queue_retry"),this._c=()=>{const e=Ah();e&&ta(If,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=Ah();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ah();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ha;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ja(e))throw e;ta(If,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,na("INTERNAL UNHANDLED ERROR: ",Nf(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=pd.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&sa(47125,{Pc:Nf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Nf(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Rf extends _f{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Af,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Af(e),this._firestoreClient=void 0,await e}}}function Pf(e,t){const n="object"==typeof e?e:En(),r="string"==typeof e?e:Ao,i=gn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=Me("firestore");e&&function(e,t,n,r={}){e=Fa(e,_f);const i=Ve(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&(je(`https://${o}`),$e("Firestore",!0)),s.host!==vf&&s.host!==o&&ra("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:o,ssl:i,emulatorOptions:r};if(!Ye(l,a)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ys.MOCK_USER;else{t=Be(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new ca(ua.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ys(i)}e._authCredentials=new pa(new da(t,n))}}(i,...e)}return i}function xf(e){if(e._terminated)throw new ca(ua.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=(r=e._databaseId,i=e._app?.options.appId||"",s=e._persistenceKey,a=t,new Io(r,i,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,gf(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator));var r,i,s,a;e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new hf(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Df{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Df(mo.fromBase64String(e))}catch(t){throw new ca(ua.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Df(mo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Df._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ja(e,Df._jsonSchema))return Df.fromBase64String(e.bytes)}}Df._jsonSchemaVersion="firestore/bytes/1.0",Df._jsonSchema={type:Va("string",Df._jsonSchemaVersion),bytes:Va("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ca(ua.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ca(ua.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ca(ua.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ea(this._lat,e._lat)||Ea(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mf._jsonSchemaVersion}}static fromJSON(e){if(ja(e,Mf._jsonSchema))return new Mf(e.latitude,e.longitude)}}Mf._jsonSchemaVersion="firestore/geoPoint/1.0",Mf._jsonSchema={type:Va("string",Mf._jsonSchemaVersion),latitude:Va("number"),longitude:Va("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uf{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Uf._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ja(e,Uf._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Uf(e.vectorValues);throw new ca(ua.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Uf._jsonSchemaVersion="firestore/vectorValue/1.0",Uf._jsonSchema={type:Va("string",Uf._jsonSchemaVersion),vectorValues:Va("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zf=/^__.*__$/;class Ff{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Tu(e,this.data,this.fieldMask,t,this.fieldTransforms):new Su(e,this.data,t,this.fieldTransforms)}}class Vf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Tu(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw sa(40011,{Ac:e})}}class Bf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return tp(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(jf(this.Ac)&&zf.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class qf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Nh(e)}Cc(e,t,n,r=!1){return new Bf({Ac:e,methodName:t,Dc:n,path:xa.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hf(e){const t=e._freezeSettings(),n=Nh(e._databaseId);return new qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $f(e,t,n,r,i,s={}){const a=e.Cc(s.merge||s.mergeFields?2:0,t,n,i);Yf("Data must be an object, but it was:",a,r);const o=Qf(r,a);let l,u;if(s.merge)l=new fo(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Jf(t,r,n);if(!a.contains(i))throw new ca(ua.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);np(e,i)||e.push(i)}l=new fo(e),u=a.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=a.fieldTransforms;return new Ff(new Yo(o),l,u)}class Kf extends Of{_toFieldTransform(e){if(2!==e.Ac)throw 1===e.Ac?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kf}}class Wf extends Of{_toFieldTransform(e){return new pu(e.path,new au)}isEqual(e){return e instanceof Wf}}function Gf(e,t){if(Xf(e=it(e)))return Yf("Unsupported field value:",t,e),Qf(e,t);if(e instanceof Of)return function(e,t){if(!jf(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Gf(i,t.wc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=it(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tu(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ha.fromDate(e);return{timestampValue:rc(t.serializer,n)}}if(e instanceof Ha){const n=new Ha(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rc(t.serializer,n)}}if(e instanceof Mf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Df)return{bytesValue:ic(t.serializer,e._byteString)};if(e instanceof kf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:oc(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Uf)return n=e,r=t,{mapValue:{fields:{[Ro]:{stringValue:Do},[Lo]:{arrayValue:{values:n.toArray().map(e=>{if("number"!=typeof e)throw r.Sc("VectorValues must only contain numeric values.");return Zl(r.serializer,e)})}}}}};var n,r;throw t.Sc(`Unsupported field value: ${za(e)}`)}(e,t)}function Qf(e,t){const n={};return ao(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):so(e,(e,r)=>{const i=Gf(r,t.mc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Xf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ha||e instanceof Mf||e instanceof Df||e instanceof kf||e instanceof Of||e instanceof Uf)}function Yf(e,t,n){if(!Xf(n)||!Ua(n)){const r=za(n);throw"an object"===r?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function Jf(e,t,n){if((t=it(t))instanceof Lf)return t._internalPath;if("string"==typeof t)return ep(e,t);throw tp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Zf=new RegExp("[~\\*/\\[\\]]");function ep(e,t,n){if(t.search(Zf)>=0)throw tp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Lf(...t.split("."))._internalPath}catch(r){throw tp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tp(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new ca(ua.INVALID_ARGUMENT,o+e+l)}function np(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ip(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ip extends rp{data(){return super.data()}}function sp(e,t){return"string"==typeof t?ep(e,t):t instanceof Lf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{}class op extends ap{}function lp(e,t,...n){let r=[];t instanceof ap&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof hp).length,n=e.filter(e=>e instanceof up).length;if(t>1||t>0&&n>0)throw new ca(ua.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class up extends op{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new up(e,t,n)}_apply(e){const t=this._parse(e);return pp(e._query,t),new Ef(e.firestore,e.converter,xl(e._query,t))}_parse(e){const t=Hf(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ca(ua.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){fp(a,s);const t=[];for(const n of a)t.push(dp(r,e,n));o={arrayValue:{values:t}}}else o=dp(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||fp(a,s),o=function(e,t,n,r=!1){return Gf(n,e.Cc(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return al.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function cp(e,t,n){const r=t,i=sp("where",e);return up._create(i,r,n)}class hp extends ap{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hp(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:ol.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)pp(n,i),n=xl(n,i)}(e._query,t),new Ef(e.firestore,e.converter,xl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function dp(e,t,n){if("string"==typeof(n=it(n))){if(""===n)throw new ca(ua.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nl(t)&&-1!==n.indexOf("/"))throw new ca(ua.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ra.fromString(n));if(!Da.isDocumentKey(r))throw new ca(ua.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ho(e,new Da(r))}if(n instanceof kf)return Ho(e,n._key);throw new ca(ua.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${za(n)}.`)}function fp(e,t){if(!Array.isArray(e)||0===e.length)throw new ca(ua.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function pp(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ca(ua.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ca(ua.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class mp{convertValue(e,t="none"){switch(Oo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw sa(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return so(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Lo].arrayValue?.values?.map(e=>vo(e.doubleValue));return new Uf(t)}convertGeoPoint(e){return new Mf(vo(e.latitude),vo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=To(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const t=yo(e);return new Ha(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ra.fromString(e);oa(Ic(n),9688,{name:e});const r=new No(n.get(1),n.get(3)),i=new Da(n.popFirst(5));return r.isEqual(t)||na(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class yp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vp extends rp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ca(ua.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vp._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}vp._jsonSchemaVersion="firestore/documentSnapshot/1.0",vp._jsonSchema={type:Va("string",vp._jsonSchemaVersion),bundleSource:Va("string","DocumentSnapshot"),bundleName:Va("string"),bundle:Va("string")};class wp extends vp{data(e={}){return super.data(e)}}class bp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new yp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new wp(this._firestore,this._userDataWriter,n.key,n,new yp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ca(ua.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new wp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new yp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new wp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new yp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:_p(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ca(ua.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bp._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_a.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _p(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return sa(61501,{type:e})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(e){e=Fa(e,kf);const t=Fa(e.firestore,Rf);return function(e,t,n={}){const r=new ha;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new uf({next:o=>{s.Nu(),t.enqueueAndForget(()=>kd(e,a));const l=o.docs.has(n);!l&&o.fromCache?i.reject(new ca(ua.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new ca(ua.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new Nd(Il(n.path),s,{includeMetadataChanges:!0,qa:!0});return Ed(e,a)}(await mf(e),e.asyncQueue,t,n,r)),r.promise}(xf(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),i=new kp(e);return new vp(e,i,t._key,r,new yp(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}bp._jsonSchemaVersion="firestore/querySnapshot/1.0",bp._jsonSchema={type:Va("string",bp._jsonSchemaVersion),bundleSource:Va("string","QuerySnapshot"),bundleName:Va("string"),bundle:Va("string")};class kp extends mp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Df(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kf(this.firestore,null,t)}}function Sp(e){e=Fa(e,Ef);const t=Fa(e.firestore,Rf),n=xf(t),r=new kp(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ca(ua.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new ha;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new uf({next:n=>{s.Nu(),t.enqueueAndForget(()=>kd(e,a)),n.fromCache&&"server"===r.source?i.reject(new ca(ua.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new Nd(n,s,{includeMetadataChanges:!0,qa:!0});return Ed(e,a)}(await mf(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new bp(t,r,e,n))}function Tp(e,t,n,...r){e=Fa(e,kf);const i=Fa(e.firestore,Rf),s=Hf(i);let a;return a="string"==typeof(t=it(t))||t instanceof Lf?function(e,t,n,r,i,s){const a=e.Cc(1,t,n),o=[Jf(t,r,n)],l=[i];if(s.length%2!=0)throw new ca(ua.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)o.push(Jf(t,s[d])),l.push(s[d+1]);const u=[],c=Yo.empty();for(let d=o.length-1;d>=0;--d)if(!np(u,o[d])){const e=o[d];let t=l[d];t=it(t);const n=a.yc(e);if(t instanceof Kf)u.push(e);else{const r=Gf(t,n);null!=r&&(u.push(e),c.set(e,r))}}const h=new fo(u);return new Vf(c,h,a.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.Cc(1,t,n);Yf("Data must be an object, but it was:",i,r);const s=[],a=Yo.empty();so(r,(e,r)=>{const o=ep(t,e,n);r=it(r);const l=i.yc(o);if(r instanceof Kf)s.push(o);else{const e=Gf(r,l);null!=e&&(s.push(o),a.set(o,e))}});const o=new fo(s);return new Vf(a,o,i.fieldTransforms)}(s,"updateDoc",e._key,t),Ip(i,[a.toMutation(e._key,gu.exists(!0))])}function Cp(e,t){const n=Fa(e.firestore,Rf),r=Cf(e),i=gp(e.converter,t);return Ip(n,[$f(Hf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,gu.exists(!1))]).then(()=>r)}function Ip(e,t){return function(e,t){const n=new ha;return e.asyncQueue.enqueueAndForget(async()=>Bd(await function(e){return pf(e).then(e=>e.syncEngine)}(e),t,n)),n.promise}(xf(e),t)}function Ap(){return new Wf("serverTimestamp")}!function(e,t=!0){Js=bn,mn(new st("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Rf(new ma(e.getProvider("auth-internal")),new wa(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ca(ua.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(e.options.projectId,t)}(i,n),i);return r={useFetchStreams:t,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),kn(Qs,Xs,e),kn(Qs,Xs,"esm2020")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
kn("firebase","12.7.0","app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Np="firebasestorage.googleapis.com",Rp="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pp extends Ge{constructor(e,t,n=0){super(Mp(e),`Firebase Storage: ${t} (${Mp(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pp.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var xp,Dp,Lp,Op;function Mp(e){return"storage/"+e}function Up(){return new Pp(xp.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function zp(e){return new Pp(xp.INVALID_ARGUMENT,e)}function Fp(){return new Pp(xp.APP_DELETED,"The Firebase app was deleted.")}function Vp(e,t){return new Pp(xp.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function jp(e){throw new Pp(xp.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Dp=xp||(xp={})).UNKNOWN="unknown",Dp.OBJECT_NOT_FOUND="object-not-found",Dp.BUCKET_NOT_FOUND="bucket-not-found",Dp.PROJECT_NOT_FOUND="project-not-found",Dp.QUOTA_EXCEEDED="quota-exceeded",Dp.UNAUTHENTICATED="unauthenticated",Dp.UNAUTHORIZED="unauthorized",Dp.UNAUTHORIZED_APP="unauthorized-app",Dp.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",Dp.INVALID_CHECKSUM="invalid-checksum",Dp.CANCELED="canceled",Dp.INVALID_EVENT_NAME="invalid-event-name",Dp.INVALID_URL="invalid-url",Dp.INVALID_DEFAULT_BUCKET="invalid-default-bucket",Dp.NO_DEFAULT_BUCKET="no-default-bucket",Dp.CANNOT_SLICE_BLOB="cannot-slice-blob",Dp.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",Dp.NO_DOWNLOAD_URL="no-download-url",Dp.INVALID_ARGUMENT="invalid-argument",Dp.INVALID_ARGUMENT_COUNT="invalid-argument-count",Dp.APP_DELETED="app-deleted",Dp.INVALID_ROOT_OPERATION="invalid-root-operation",Dp.INVALID_FORMAT="invalid-format",Dp.INTERNAL_ERROR="internal-error",Dp.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class Bp{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Bp.makeFromUrl(e,t)}catch(i){return new Bp(e,"")}if(""===n.path)return n;throw r=e,new Pp(xp.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const a=t.replace(/[.]/g,"\\."),o=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===Np?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let l=0;l<o.length;l++){const t=o[l],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new Bp(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new Pp(xp.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class qp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(e){return"string"==typeof e||e instanceof String}function $p(e){return Kp()&&e instanceof Blob}function Kp(){return"undefined"!=typeof Blob}function Wp(e,t,n,r){if(r<t)throw zp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw zp(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Qp(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}(Op=Lp||(Lp={}))[Op.NO_ERROR=0]="NO_ERROR",Op[Op.NETWORK_ERROR=1]="NETWORK_ERROR",Op[Op.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xp{constructor(e,t,n,r,i,s,a,o,l,u,c,h=!0,d=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.isUsingEmulator=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Yp(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Lp.NO_ERROR,i=n.getStatus();if(!t||
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Lp.ABORT;return void e(!1,new Yp(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Yp(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return void 0!==e}(e)?n():n(e)}catch(s){r(s)}else if(null!==i){const e=Up();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?Fp():new Pp(xp.CANCELED,"User canceled the upload/download."))}else{r(new Pp(xp.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new Yp(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return 2===o}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,l())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void c.call(null,e,...t);if(l()||a)return d(),void c.call(null,e,...t);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(o=2),clearTimeout(i),h(0)):e||(o=1)))}return h(0),s=setTimeout(()=>{a=!0,m(!0)},n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Yp{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Jp(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Kp())return new Blob(e);throw new Pp(xp.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zp(e){if("undefined"==typeof atob)throw t="base-64",new Pp(xp.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="raw",tm="base64",nm="base64url",rm="data_url";class im{constructor(e,t){this.data=e,this.contentType=t||null}}function sm(e,t){switch(e){case em:return new im(am(t));case tm:case nm:return new im(om(e,t));case rm:return new im(function(e){const t=new lm(e);return t.base64?om(tm,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw Vp(rm,"Malformed data URL.")}return am(t)}(t.rest)}(t),new lm(t).contentType)}throw Up()}function am(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function om(e,t){switch(e){case tm:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Vp(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case nm:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Vp(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Zp(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw Vp(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class lm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Vp(rm,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class um{constructor(e,t){let n=0,r="";$p(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if($p(this.data_)){const s=this.data_,a=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===a?null:new um(a)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new um(n,!0)}var n,r,i}static getBlob(...e){if(Kp()){const t=e.map(e=>e instanceof um?e.data_:e);return new um(Jp.apply(null,t))}{const t=e.map(e=>Hp(e)?sm(em,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new um(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(e){let t;try{t=JSON.parse(e)}catch(n){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e,t){return t}class fm{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||dm}}let pm=null;function mm(){if(pm)return pm;const e=[];e.push(new fm("bucket")),e.push(new fm("generation")),e.push(new fm("metageneration")),e.push(new fm("name","fullPath",!0));const t=new fm("name");t.xform=function(e,t){return function(e){return!Hp(e)||e.length<2?e:hm(e)}(t)},e.push(t);const n=new fm("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new fm("timeCreated")),e.push(new fm("updated")),e.push(new fm("md5Hash",null,!0)),e.push(new fm("cacheControl",null,!0)),e.push(new fm("contentDisposition",null,!0)),e.push(new fm("contentEncoding",null,!0)),e.push(new fm("contentLanguage",null,!0)),e.push(new fm("contentType",null,!0)),e.push(new fm("metadata","customMetadata",!0)),pm=e,pm}function gm(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new Bp(n,r);return t._makeStorageReference(i)}})}(r,e),r}function ym(e,t,n){const r=cm(t);if(null===r)return null;return gm(e,r,n)}class vm{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(e){if(!e)throw Up()}function bm(e,t){return function(n,r){const i=ym(e,r,t);return wm(null!==i),function(e,t,n,r){const i=cm(t);if(null===i)return null;if(!Hp(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const a=encodeURIComponent;return s.split(",").map(t=>{const i=e.bucket,s=e.fullPath;return Gp("/b/"+a(i)+"/o/"+a(s),n,r)+Qp({alt:"media",token:t})})[0]}(i,r,e.host,e._protocol)}}function _m(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Pp(xp.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Pp(xp.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new Pp(xp.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new Pp(xp.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function Em(e){const t=_m(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new Pp(xp.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function km(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};const o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+o;const l=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}(t,r,i),u=function(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(l,n),c="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",h="\r\n--"+o+"--",d=um.getBlob(c,r,h);if(null===d)throw new Pp(xp.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");const f={name:l.fullPath},p=Gp(s,e.host,e._protocol),m=e.maxUploadRetryTime,g=new vm(p,"POST",function(e,t){return function(n,r){const i=ym(e,r,t);return wm(null!==i),i}}(e,n),m);return g.urlParams=f,g.headers=a,g.body=d.uploadData(),g.errorHandler=_m(t),g}class Sm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lp.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lp.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lp.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r,i){if(this.sent_)throw jp("cannot .send() more than once");if(Ve(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw jp("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw jp("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw jp("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw jp("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Tm extends Sm{initXhr(){this.xhr_.responseType="text"}}function Cm(){return new Tm}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this._service=e,this._location=t instanceof Bp?t:Bp.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Im(e,t)}get root(){const e=new Bp(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hm(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Bp(this._location.bucket,e);return new Im(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Pp(xp.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Am(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Gp(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new vm(r,"GET",bm(e,n),i);return s.errorHandler=Em(t),s}(e.storage,e._location,mm());return e.storage.makeRequestWithTokens(t,Cm).then(e=>{if(null===e)throw new Pp(xp.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}function Nm(e,t){if(e instanceof xm){const n=e;if(null==n._bucket)throw new Pp(xp.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rp+"' property when initializing the app?");const r=new Im(n,n._bucket);return null!=t?Nm(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new Bp(e._location.bucket,n);return new Im(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function Rm(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof xm)return new Im(e,t);throw zp("To use ref(service, url), the first argument must be a Storage instance.")}return Nm(e,t)}function Pm(e,t){const n=t?.[Rp];return null==n?null:Bp.makeFromBucketSpec(n,e)}class xm{constructor(e,t,n,r,i,s=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=Np,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?Bp.makeFromBucketSpec(r,this._host):Pm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Bp.makeFromBucketSpec(this._url,e):this._bucket=Pm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Im(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new qp(Fp());{const s=function(e,t,n,r,i,s,a=!0,o=!1){const l=Qp(e.urlParams),u=e.url+l,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new Xp(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Dm="@firebase/storage",Lm="0.14.0",Om="storage";function Mm(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=km(e.storage,e._location,mm(),new um(t,!0),n);return e.storage.makeRequestWithTokens(r,Cm).then(t=>({metadata:t,ref:e}))}(e=it(e),t,n)}function Um(e){return Am(e=it(e))}function zm(e,t){return Rm(e=it(e),t)}function Fm(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new xm(n,r,i,t,bn)}mn(new st(Om,Fm,"PUBLIC").setMultipleInstances(!0)),kn(Dm,Lm,""),kn(Dm,Lm,"esm2020");const Vm=_n({apiKey:"AIzaSyBNERfY0ZjJErXB5N78jP01s4dlggRkSnE",authDomain:"intelligeeks-c612d.firebaseapp.com",projectId:"intelligeeks-c612d",storageBucket:"intelligeeks-c612d.firebasestorage.app",messagingSenderId:"73065433370",appId:"1:73065433370:web:ca9b789bab85bb73fa44a3"}),jm=function(e=En()){const t=gn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=gn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ye(n.getOptions(),t??{}))return e;Fn(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Rs,persistence:[Wi,Ri,xi]}),r=ze("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ls)return;const r=t?.token;Os!==r&&(Os=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){it(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){it(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const s=Oe("auth");return s&&ni(n,`http://${s}`),n}(Vm),Bm=Pf(Vm),qm=function(e=En(),t){const n=gn(e=it(e),Om).getImmediate({identifier:t}),r=Me("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`;const i=Ve(t);i&&(je(`https://${e.host}/b`),$e("Storage",!0)),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:Be(s,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}(Vm),Hm=r.createContext(),$m=()=>{const e=r.useContext(Hm);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Km=({children:t})=>{const[n,i]=r.useState(null),[s,a]=r.useState(null),[o,l]=r.useState(!0);r.useEffect(()=>{var e,t,n;return e=async e=>{if(i(e),e){const t=Cf(Bm,"users",e.uid),n=await Ep(t);n.exists()&&a(n.data())}else a(null);l(!1)},it(jm).onAuthStateChanged(e,t,n)},[]);const u={currentUser:n,userProfile:s,signup:async(e,t,n)=>{const r=await async function(e,t,n){if(yn(e.app))return Promise.reject(Bn(e));const r=Kr(e),i=ti(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wi),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ti(e),t}),a=await bi._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}(jm,e,t),i=r.user;return await function(e,t,n){e=Fa(e,kf);const r=Fa(e.firestore,Rf),i=gp(e.converter,t);return Ip(r,[$f(Hf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,gu.none())])}(Cf(Bm,"users",i.uid),{email:e,role:n.role,firstName:n.firstName,lastName:n.lastName,phoneNumber:n.phoneNumber,createdAt:(new Date).toISOString(),...n}),i},login:async(e,t)=>Ci(jm,e,t),logout:()=>it(jm).signOut(),loading:o};return e.jsx(Hm.Provider,{value:u,children:!o&&t})};v.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(a,{children:e.jsx(Km,{children:e.jsx(Ce,{})})})}));export{A as $,G as A,Cp as B,te as C,Tf as D,Pf as E,P as F,_n as G,$m as H,Ep as I,Cf as J,Bm as K,lp as L,cp as M,Sp as N,Tp as O,zm as P,qm as Q,Mm as R,Um as S,re as T,X as U,M as V,ie as W,T as X,Ap as Y,O as Z,Y as _,Z as a,_ as a0,E as a1,x as b,R as c,ne as d,S as e,C as f,J as g,L as h,V as i,Q as j,ee as k,N as l,j as m,U as n,se as o,q as p,H as q,K as r,z as s,$ as t,I as u,W as v,B as w,D as x,k as y,F as z};
