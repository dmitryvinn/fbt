(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{111:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(20),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=a(0),o={Prism:n.a,theme:l};function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},u=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=i({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=i({},a,{backgroundColor:null}),l};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var d=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?u(e.theme,e.language):void 0;return t.themeDict=a})),s(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=i({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?i({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),s(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),s(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=i({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?i({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,s=[],i=[s];o>-1;){for(;(r=n[o]++)<l[o];){var u=void 0,y=t[o],d=a[o][r];if("string"==typeof d?(y=o>0?y:["plain"],u=d):(y=p(y,d.type),d.alias&&(y=p(y,d.alias)),u=d.content),"string"==typeof u){var g=u.split(c),h=g.length;s.push({types:y,content:g[0]});for(var f=1;f<h;f++)m(s),i.push(s=[]),s.push({types:y,content:g[f]})}else o++,t.push(y),a.push(u),n.push(0),l.push(u.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return m(s),i}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=d},121:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(113),o=a.n(r),s=a(102),i=a(101),c=a(105),m=a(48),p=a.n(m);t.a=({showAll:e=!1})=>{const{siteConfig:t={}}=Object(i.a)(),{users:a}=t.customFields,n=(e?a:a.filter((e=>e.pinned))).map(((e,t)=>l.a.createElement("a",{key:t,className:p.a.showcaseLogo,href:e.infoUrl},l.a.createElement("img",{src:Object(c.a)(e.imageUrl),title:e.caption}))));return l.a.createElement("section",{className:o()("text--center margin-top--xl",p.a.showcase)},l.a.createElement("h2",{className:o()("showcaseHeading",p.a.showcaseHeadingColored)},"Who's Using This?"),l.a.createElement("div",{className:p.a.showcaseLogos},n),e&&l.a.createElement("p",null,"Are you using this project?"),l.a.createElement("div",{className:"more-users"},e?l.a.createElement(s.a,{className:o()("button button--primary button--outline",p.a.button),href:"https://github.com/facebook/fbt/edit/main/website/docusaurus.config.js"},"Add your company/project"):l.a.createElement(s.a,{className:o()("button button--primary button--outline",p.a.button),to:Object(c.a)("users")},"More ",t.title," Users")))}},94:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(113),o=a.n(r),s=a(107),i=a(102),c=a(101),m=a(105),p=a(48),u=a.n(p),y=a(1),d=a(111);var g=({code:e})=>l.a.createElement(d.a,Object(y.a)({},d.b,{code:e,language:"jsx"}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>l.a.createElement("pre",{className:e,style:{...t,textAlign:"left"}},a.map(((e,t)=>l.a.createElement("div",n({line:e,key:t}),e.map(((e,t)=>l.a.createElement("span",r({token:e,key:t})))))))))),h=a(121);const f=[{title:l.a.createElement(l.a.Fragment,null,"Inlined translatable text"),description:l.a.createElement(l.a.Fragment,null,"Compose translatable text inline with your source:",l.a.createElement(g,{code:'<button>\n  <fbt desc="Canonical intro text">\n    Hello World!\n  </fbt>\n</button>'}))},{title:l.a.createElement(l.a.Fragment,null,"Seamless text collection"),description:l.a.createElement(l.a.Fragment,null,"Collect your translatable source texts with ease:",l.a.createElement(g,{code:'{\n  "hashToText":{\n    "ni7kanCF2RfGZAS9mDOToQ==":\n    "Hello, World!"\n  },\n  ...,\n  "desc": "Canonical intro text"\n}'}))},{title:l.a.createElement(l.a.Fragment,null,"Integrated translations"),description:l.a.createElement(l.a.Fragment,null,"Easily pull translations into your app",l.a.createElement(g,{code:"<button>Hello, Byd!</button>"}))}],v=()=>f&&f.length?l.a.createElement("section",{className:u.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((({title:e,description:t},a)=>l.a.createElement("div",{key:a,className:o()("col col--4",u.a.featureBlock)},l.a.createElement("h3",null,e),l.a.createElement("p",null,t))))))):null,b=()=>l.a.createElement("section",{className:u.a.description},l.a.createElement("div",{className:o()("row",u.a.row)},l.a.createElement("div",{className:o()("col",u.a.column)},l.a.createElement("h2",null,"Why FBT?"),l.a.createElement("div",null,"FBT is a framework for internationalizing user interfaces in JavaScript. It is designed to be not only powerful and flexible, but also simple and intuitive. Getting grammatically correct translated texts in dynamic applications is hard. Let FBT do the hard work for you.")),l.a.createElement("div",{className:o()("col",u.a.column)},l.a.createElement("div",{className:"splash_image"},l.a.createElement("img",{className:u.a.descriptionImage,src:Object(m.a)("img/fbt.png")})))));t.default=()=>{const{siteConfig:e={}}=Object(c.a)();return l.a.createElement(s.a,{title:`${e.title} - ${e.tagline}`,description:e.tagline},l.a.createElement("header",{className:o()("hero hero--primary",u.a.heroBanner)},l.a.createElement("div",{className:o()("container",u.a.topContainer)},l.a.createElement("div",null,l.a.createElement("h1",{className:"hero__title"},e.title),l.a.createElement("div",{className:u.a.sections},l.a.createElement("div",null,l.a.createElement("p",{className:"hero__subtitle"},"An internationalization framework"),l.a.createElement("div",{className:u.a.buttons},l.a.createElement(i.a,{className:o()("button button--secondary button--lg",u.a.button),to:"https://github.com/facebook/fbt"},"Try it out"))))),l.a.createElement("div",{className:"splash_image"},l.a.createElement("img",{className:u.a.splashImage,src:Object(m.a)("img/fbt.png")})))),l.a.createElement("main",null,l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(h.a,null)))}}}]);