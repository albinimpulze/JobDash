(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{2167:function(e,r,t){"use strict";var n=t(3038);r.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),c=t(4651),u=t(7426);var l={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var r,t=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var r=i.resolveHref(o,e.href,!0),t=n(r,2),a=t[0],c=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=(r=a.default.Children.only(v))&&"object"===typeof r&&r.ref,m=u.useIntersection({rootMargin:"200px"}),k=n(m,2),E=k[0],O=k[1],L=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);a.default.useEffect((function(){var e=O&&t&&i.isLocalURL(p),r="undefined"!==typeof b?b:o&&o.locale,n=l[p+"%"+d+(r?"%"+r:"")];e&&!n&&f(o,p,d,{locale:r})}),[d,p,O,b,t,o]);var M={ref:L,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:u,scroll:c}))}(e,o,p,d,h,y,g,b)},onMouseEnter:function(e){i.isLocalURL(p)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),f(o,p,d,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof b?b:o&&o.locale,_=o&&o.isLocaleDomain&&i.getDomainLocale(d,C,o&&o.locales,o&&o.domainLocales);M.href=_||i.addBasePath(i.addLocale(d,C,o&&o.defaultLocale))}return a.default.cloneElement(r,M)};r.default=s},7426:function(e,r,t){"use strict";var n=t(3038);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,u=o.useRef(),l=o.useState(!1),f=n(l,2),s=f[0],p=f[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:r}))}),[t,r,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),a=t(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},9008:function(e,r,t){e.exports=t(639)},1664:function(e,r,t){e.exports=t(2167)},5169:function(e,r,t){"use strict";var n=t(7294),o=t(5697),a=t.n(o);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,a=e.size,u=void 0===a?24:a,l=c(e,["color","size"]);return n.createElement("svg",i({ref:r,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.createElement("polyline",{points:"12 5 19 12 12 19"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="ArrowRight",r.Z=u},9327:function(e,r,t){"use strict";t.d(r,{WU:function(){return l}});var n=["second","minute","hour","day","week","month","year"];var o=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var a={},i=function(e,r){a[e]=r},c=[60,60,24,7,365/7/12,12];function u(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var l=function(e,r,t){return function(e,r){for(var t=e<0?1:0,n=e=Math.abs(e),o=0;e>=c[o]&&o<c.length;o++)e/=c[o];return(e=Math.floor(e))>(0===(o*=2)?9:1)&&(o+=1),r(e,o,n)[t].replace("%s",e.toString())}(function(e,r){return(+(r?u(r):new Date)-+u(e))/1e3}(e,t&&t.relativeDate),function(e){return a[e]||a.en_US}(r))};i("en_US",(function(e,r){if(0===r)return["just now","right now"];var t=n[Math.floor(r/2)];return e>1&&(t+="s"),[e+" "+t+" ago","in "+e+" "+t]})),i("zh_CN",(function(e,r){if(0===r)return["\u521a\u521a","\u7247\u523b\u540e"];var t=o[~~(r/2)];return[e+" "+t+"\u524d",e+" "+t+"\u540e"]}))}}]);