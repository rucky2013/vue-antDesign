webpackJsonp([1,14],[,,,function(e,t,n){e.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{apis:Array}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){hljs.initHighlightingOnLoad()},methods:{handleOpen:function(){this.open=!this.open}}}},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}',""])},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t){e.exports=' <section class="markdown api-container"> <h2>API</h2> <slot></slot> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr v-for="api in apis"> <td>{{api.parameter}}</td> <td>{{api.explain}}</td> <td>{{api.type}}</td> <td>{{api.default}}</td> </tr> </tbody> </table> </section> '},function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{title}}</a></div> <div><p>{{describe}}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{code}}</code></pre> </div> </section> </section> '},function(e,t,n){var o,r;n(9),o=n(5),r=n(11),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,n){var o,r;n(10),o=n(6),r=n(12),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,n){var o=n(20),r=n(24);e.exports=n(3)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(15);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){var o=n(19),r=n(31),i=n(33),a=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return a(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var o=n(15),r=n(4).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t,n){var o=n(36),r=n(21);e.exports=function(e){return o(r(e))}},function(e,t,n){var o=n(38)("wks"),r=n(39),i=n(4).Symbol,a="function"==typeof i,c=e.exports=function(e){return o[e]||(o[e]=a&&i[e]||(a?i:r)("Symbol."+e))};c.store=o},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var o=n(28);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var o=n(4),r=n(16),i=n(29),a=n(18),c="prototype",s=function(e,t,n){var u,l,p,d=e&s.F,f=e&s.G,h=e&s.S,b=e&s.P,x=e&s.B,v=e&s.W,g=f?r:r[t]||(r[t]={}),y=g[c],k=f?o:h?o[t]:(o[t]||{})[c];f&&(n=t);for(u in n)l=!d&&k&&void 0!==k[u],l&&u in g||(p=l?k[u]:n[u],g[u]=f&&"function"!=typeof k[u]?n[u]:x&&l?i(p,o):v&&k[u]==p?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[c]=e[c],t}(p):b&&"function"==typeof p?i(Function.call,p):p,b&&((g.virtual||(g.virtual={}))[u]=p,e&s.R&&y&&!y[u]&&a(y,u,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){e.exports=!n(3)&&!n(17)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(38)("keys"),r=n(39);e.exports=function(e){return o[e]||(o[e]=r(e))}},function(e,t,n){var o=n(15);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var o=n(34);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t){e.exports={}},function(e,t,n){var o=n(4),r="__core-js_shared__",i=o[r]||(o[r]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},,,,function(e,t,n){var o=n(26),r=n(47),i=n(46);e.exports=function(e){return function(t,n,a){var c,s=o(t),u=r(s.length),l=i(a,u);if(e&&n!=n){for(;u>l;)if(c=s[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var o=n(23),r=n(26),i=n(43)(!1),a=n(32)("IE_PROTO");e.exports=function(e,t){var n,c=r(e),s=0,u=[];for(n in c)n!=a&&o(c,n)&&u.push(n);for(;t.length>s;)o(c,n=t[s++])&&(~i(u,n)||u.push(n));return u}},function(e,t,n){var o=n(44),r=n(35);e.exports=Object.keys||function(e){return o(e,r)}},function(e,t,n){var o=n(25),r=Math.max,i=Math.min;e.exports=function(e,t){return e=o(e),e<0?r(e+t,0):i(e,t)}},function(e,t,n){var o=n(25),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},function(e,t,n){var o=n(21);e.exports=function(e){return Object(o(e))}},,,,,,,,,function(e,t,n){"use strict";var o=n(74),r=n(30),i=n(81),a=n(18),c=n(23),s=n(37),u=n(72),l=n(58),p=n(79),d=n(27)("iterator"),f=!([].keys&&"next"in[].keys()),h="@@iterator",b="keys",x="values",v=function(){return this};e.exports=function(e,t,n,g,y,k,m){u(n,t,g);var w,_,O,j=function(e){if(!f&&e in P)return P[e];switch(e){case b:return function(){return new n(this,e)};case x:return function(){return new n(this,e)}}return function(){return new n(this,e)}},M=t+" Iterator",S=y==x,C=!1,P=e.prototype,A=P[d]||P[h]||y&&P[y],E=A||j(y),T=y?S?j("entries"):E:void 0,V="Array"==t?P.entries||A:A;if(V&&(O=p(V.call(new e)),O!==Object.prototype&&(l(O,M,!0),o||c(O,d)||a(O,d,v))),S&&A&&A.name!==x&&(C=!0,E=function(){return A.call(this)}),o&&!m||!f&&!C&&P[d]||a(P,d,E),s[t]=E,s[M]=v,y)if(w={values:S?E:j(x),keys:k?E:j(b),entries:T},m)for(_ in w)_ in P||i(P,_,w[_]);else r(r.P+r.F*(f||C),t,w);return w}},function(e,t,n){var o=n(20).f,r=n(23),i=n(27)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t,n){e.exports={"default":n(66),__esModule:!0}},,,,,,,function(e,t,n){n(89),n(88),e.exports=n(84)},,,function(e,t){e.exports=function(){}},function(e,t,n){var o=n(34),r=n(27)("toStringTag"),i="Arguments"==o(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),r))?n:i?o(t):"Object"==(c=o(t))&&"function"==typeof t.callee?"Arguments":c}},function(e,t,n){e.exports=n(4).document&&document.documentElement},function(e,t,n){"use strict";var o=n(76),r=n(24),i=n(58),a={};n(18)(a,n(27)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=o(a,{next:r(1,n)}),i(e,t+" Iterator")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t){e.exports=!0},,function(e,t,n){var o=n(19),r=n(77),i=n(35),a=n(32)("IE_PROTO"),c=function(){},s="prototype",u=function(){var e,t=n(22)("iframe"),o=i.length,r="<",a=">";for(t.style.display="none",n(71).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(r+"script"+a+"document.F=Object"+r+"/script"+a),e.close(),u=e.F;o--;)delete u[s][i[o]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(c[s]=o(e),n=new c,c[s]=null,n[a]=e):n=u(),void 0===t?n:r(n,t)}},function(e,t,n){var o=n(20),r=n(19),i=n(45);e.exports=n(3)?Object.defineProperties:function(e,t){r(e);for(var n,a=i(t),c=a.length,s=0;c>s;)o.f(e,n=a[s++],t[n]);return e}},,function(e,t,n){var o=n(23),r=n(48),i=n(32)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},,function(e,t,n){e.exports=n(18)},function(e,t,n){var o=n(25),r=n(21);e.exports=function(e){return function(t,n){var i,a,c=String(r(t)),s=o(n),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):i:e?c.slice(s,s+2):(i-55296<<10)+(a-56320)+65536)}}},function(e,t,n){var o=n(70),r=n(27)("iterator"),i=n(37);e.exports=n(16).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||i[o(e)]}},function(e,t,n){var o=n(19),r=n(83);e.exports=n(16).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},function(e,t,n){"use strict";var o=n(69),r=n(73),i=n(37),a=n(26);e.exports=n(57)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):"keys"==t?r(0,n):"values"==t?r(0,e[n]):r(0,[n,e[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},,,function(e,t,n){"use strict";var o=n(82)(!0);n(57)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=o(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){n(85);for(var o=n(4),r=n(18),i=n(37),a=n(27)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var u=c[s],l=o[u],p=l&&l.prototype;p&&!p[a]&&r(p,a,u),i[u]=i.Array}},,,,,function(e,t,n){var o,r;o=n(112),r=n(180),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(94),i=o(r),a=n(211),c=o(a);i["default"].Group=c["default"],t["default"]=i["default"]},,,,,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{checked:{tyle:Boolean,"default":!1},disabled:{tyle:Boolean,"default":!1},onChange:{type:Function,"default":function(){}},value:String},methods:{_check:function(){this.disabled||(this.checked=!this.checked,this.onChange(this))}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),i=o(r),a=n(94),c=o(a);t["default"]={props:{options:Array,defaultValue:{type:Array,twoWay:!0},onChange:{type:Function,"default":function(){}}},data:function(){var e=this;return{change:function(t){e.defaultValue=[];var n=!0,o=!1,r=void 0;try{for(var a,c=(0,i["default"])(e.$children);!(n=(a=c.next()).done);n=!0){var s=a.value;s.checked&&e.defaultValue.push(s.value)}}catch(u){o=!0,r=u}finally{try{!n&&c["return"]&&c["return"]()}finally{if(o)throw r}}console.log(e.defaultValue),e.onChange(e.defaultValue)}}},created:function(){var e=!0,t=!1,n=void 0;try{for(var o,r=(0,i["default"])(this.options);!(e=(o=r.next()).done);e=!0){var a=o.value;if(this.defaultValue){var c=!0,s=!1,u=void 0;try{for(var l,p=(0,i["default"])(this.defaultValue);!(c=(l=p.next()).done);c=!0){var d=l.value;a.value===d&&(a.checked=!0)}}catch(f){s=!0,u=f}finally{try{!c&&p["return"]&&p["return"]()}finally{if(s)throw u}}}}}catch(f){t=!0,n=f}finally{try{!e&&r["return"]&&r["return"]()}finally{if(t)throw n}}},methods:{},components:{vCheckbox:c["default"]}}},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(98),i=o(r),a=n(14),c=o(a),s=n(13),u=o(s);t["default"]={data:function(){var e=this;return{checked:!1,disabled:!1,onChange:function(t){e.checked=t.checked},checkGroup:function(e){console.log(e)},defaultValue:["Apple","Orange"],options:[{label:"苹果",value:"Apple"},{label:"梨",value:"Pear"},{label:"橘",value:"Orange"}],optionsWithDisabled:[{label:"苹果",value:"Apple"},{label:"梨",value:"Pear"},{label:"橘",value:"Orange",disabled:!0}],apis:[{parameter:"checked",explain:"指定当前是否选中",type:"boolean","default":"false"},{parameter:"disabled",explain:"只读，无法进行交互",type:"boolean","default":"false"},{parameter:"onChange",explain:"变化时回调函数",type:"Function","default":"无"}],apiGroup:[{parameter:"defaultValue",explain:"默认选中的选项",type:"array","default":"无"},{parameter:"options[ { label,value,disabled } ]",explain:"指定可选项",type:"array","default":"无"},{parameter:"onChange",explain:"变化时回调函数",type:"Function(checkedValue)","default":"无"}]}},components:{codeBox:c["default"],apiTable:u["default"],vCheckbox:i["default"],CheckboxGroup:i["default"].Group}}},,,,,,,,,,,,,,,function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".head-example{width:42px;height:42px;border-radius:6px;background:#eee;display:inline-block}.anticon-notification{width:16px;height:16px;line-height:16px;font-size:16px}.ant-badge{margin-right:16px}.custom-card{padding:10px 16px}",""])},,,,,,,,,,function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"",""])},,,,,,,,,function(e,t,n){var o=n(146);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},,,,,,,,,,function(e,t,n){var o=n(156);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},,,,,function(e,t){e.exports=" <label class=ant-checkbox-wrapper> <span class=ant-checkbox :class=\"{'ant-checkbox-checked': checked, 'ant-checkbox-disabled': disabled}\" @click=_check> <span class=ant-checkbox-inner></span> <input type=checkbox class=ant-checkbox-input> </span> <span><slot></slot></span> </label> "},function(e,t){e.exports=' <div class=ant-checkbox-group> <v-checkbox v-for="option in options" :disabled=option.disabled :checked.sync=option.checked :on-change=change :value=option.value> {{option.label}} </v-checkbox> </div> '},,,,,,,,,,,,,,,,,,function(e,t){e.exports=' <div> <section class=markdown> <h1>Checkbox多选框</h1> <p> 多选框。 </p> <h2>何时使用</h2> <ul> <li>在一组可选项中进行多项选择时；</li> <li>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基本用法 describe="简单的 checkbox。" code="<v-checkbox>checkbox</v-checkbox>"> <v-checkbox>checkbox</v-checkbox> </code-box> <code-box title=和外部组件通信 describe="联动 checkbox。" code=\'onChange: (e) => {\n  this.checked = e.checked\n},\n\n<v-checkbox\n  :checked="checked"\n  :disabled="disabled"\n  :on-change="onChange">\n  <span v-if="!checked">取消</span><span v-if="checked">选中</span>-\n  <span v-if="!disabled">可用</span><span v-if="disabled">不可用</span>\n</v-checkbox>\n\n<button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click="this.checked = !this.checked"><span v-if="checked">取 消</span><span v-if="!checked">选 中</span></button>\n<button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-left: 10px;" @click="this.disabled = !this.disabled"><span v-if="disabled">可用</span><span v-if="!disabled">不可用</span></button>\'> <p style="margin-bottom: 16px"> <v-checkbox :checked=checked :disabled=disabled :on-change=onChange> <span v-if=!checked>取消</span><span v-if=checked>选中</span>- <span v-if=!disabled>可用</span><span v-if=disabled>不可用</span> </v-checkbox> </p> <p> <button type=button class="ant-btn ant-btn-primary ant-btn-sm" @click="this.checked = !this.checked"><span v-if=checked>取 消</span><span v-if=!checked>选 中</span></button> <button type=button class="ant-btn ant-btn-primary ant-btn-sm" style="margin-left: 10px" @click="this.disabled = !this.disabled"><span v-if=disabled>可用</span><span v-if=!disabled>不可用</span></button> </p> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=不可用 describe=checkbox不可用 code="<v-checkbox disabled=\'true\'></v-checkbox>\n<v-checkbox checked=\'true\' disabled=\'true\'></v-checkbox>"> <v-checkbox disabled=true></v-checkbox> <v-checkbox checked=true disabled=true></v-checkbox> </code-box> <code-box title="Checkbox 组" describe="方便的从数组生成 Checkbox 组。" code=\'defaultValue: ["Apple", "Orange"],\noptions: [\n  { label: "苹果", value: "Apple" },\n  { label: "梨", value: "Pear" },\n  { label: "橘", value: "Orange" },\n],\noptionsWithDisabled: [\n{ label: "苹果", value: "Apple" },\n{ label: "梨", value: "Pear" },\n{ label: "橘", value: "Orange", disabled； true },\n],\n\n<checkbox-group :options="options"\n  :default-value.sync="defaultValue">\n</checkbox-group>\n\n<checkbox-group\n  :options="optionsWithDisabled"\n  :on-change="checkGroup">\n</checkbox-group>\'> <p style="margin-bottom: 16px"><checkbox-group :options=options :default-value.sync=defaultValue></checkbox-group></p> <checkbox-group :options=optionsWithDisabled :on-change=checkGroup> </checkbox-group> </code-box> </div> </div> <api-table :apis=apis> <h3>Checkbox</h3> </api-table> <api-table :apis=apiGroup> <h3>Checkbox Group</h3> </api-table> </div> '},,,,,,,,,,,,function(e,t,n){var o,r;n(175),o=n(113),r=n(181),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,,,,,,,,,,,,,,,function(e,t,n){var o,r;n(165),o=n(131),r=n(199),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}]);