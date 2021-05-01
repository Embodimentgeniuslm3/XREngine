(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[46448],{30876:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(2784);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),l=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(a.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,s(s({ref:e},p),{},{components:n})):r.createElement(g,s({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41029:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return a},default:function(){return p}});var r=n(7560),o=n(98283),i=(n(2784),n(30876)),s={id:"src_world_components_editor_contexts_settingscontext",title:"Module: src/world/components/editor/contexts/SettingsContext",sidebar_label:"src/world/components/editor/contexts/SettingsContext",custom_edit_url:null},c={unversionedId:"docs-client-core/modules/src_world_components_editor_contexts_settingscontext",id:"docs-client-core/modules/src_world_components_editor_contexts_settingscontext",isDocsHomePage:!1,title:"Module: src/world/components/editor/contexts/SettingsContext",description:"Variables",source:"@site/docs/docs-client-core/modules/src_world_components_editor_contexts_settingscontext.md",sourceDirName:"docs-client-core/modules",slug:"/docs-client-core/modules/src_world_components_editor_contexts_settingscontext",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_world_components_editor_contexts_settingscontext",editUrl:null,version:"current",sidebar_label:"src/world/components/editor/contexts/SettingsContext",frontMatter:{id:"src_world_components_editor_contexts_settingscontext",title:"Module: src/world/components/editor/contexts/SettingsContext",sidebar_label:"src/world/components/editor/contexts/SettingsContext",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/world/components/editor/contexts/EditorContext",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_world_components_editor_contexts_editorcontext"},next:{title:"Module: src/world/components/editor/dialogs/ConfirmDialog",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_world_components_editor_dialogs_confirmdialog"}},a=[{value:"Variables",id:"variables",children:[{value:"SettingsContextProvider",id:"settingscontextprovider",children:[]},{value:"defaultSettings",id:"defaultsettings",children:[]}]},{value:"Functions",id:"functions",children:[{value:"withSettings",id:"withsettings",children:[]}]}],l={toc:a};function p(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"settingscontextprovider"},"SettingsContextProvider"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SettingsContextProvider"),": ",(0,i.kt)("em",{parentName:"p"},"Provider"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"settings"),": {} ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updateSetting"),": () => ",(0,i.kt)("em",{parentName:"p"},"void"),"  }",">"),(0,i.kt)("p",null,"SettingsContextProvider provides component context value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Robert Long"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/world/components/editor/contexts/SettingsContext.tsx#L27"},"packages/client-core/src/world/components/editor/contexts/SettingsContext.tsx:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultsettings"},"defaultSettings"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"defaultSettings"),": ",(0,i.kt)("em",{parentName:"p"},"object"),"= {}"),(0,i.kt)("p",null,"initializing defaultSettings with empty context."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Robert Long"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/world/components/editor/contexts/SettingsContext.tsx#L9"},"packages/client-core/src/world/components/editor/contexts/SettingsContext.tsx:9")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"withsettings"},"withSettings"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"withSettings"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"Component"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("p",null,"withSettings setting component context value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Robert Long"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Component")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"props"),": ",(0,i.kt)("em",{parentName:"p"},"any"),") => ",(0,i.kt)("em",{parentName:"p"},"Element")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/world/components/editor/contexts/SettingsContext.tsx#L34"},"packages/client-core/src/world/components/editor/contexts/SettingsContext.tsx:34")))}p.isMDXComponent=!0}}]);