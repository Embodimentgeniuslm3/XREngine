(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[28806],{30876:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return c}});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=l(a),c=n,u=d["".concat(m,".").concat(c)]||d[c]||s[c]||o;return a?r.createElement(u,i(i({ref:t},k),{},{components:a})):r.createElement(u,i({ref:t},k))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76412:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var r=a(7560),n=a(98283),o=(a(2784),a(30876)),i={id:"hooks_notifications",title:"Module: hooks/notifications",sidebar_label:"hooks/notifications",custom_edit_url:null},p={unversionedId:"docs-server-core/modules/hooks_notifications",id:"docs-server-core/modules/hooks_notifications",isDocsHomePage:!1,title:"Module: hooks/notifications",description:"Functions",source:"@site/docs/docs-server-core/modules/hooks_notifications.md",sourceDirName:"docs-server-core/modules",slug:"/docs-server-core/modules/hooks_notifications",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-server-core/modules/hooks_notifications",editUrl:null,version:"current",sidebar_label:"hooks/notifications",frontMatter:{id:"hooks_notifications",title:"Module: hooks/notifications",sidebar_label:"hooks/notifications",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: hooks/message-permission-authenticate",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-server-core/modules/hooks_message_permission_authenticate"},next:{title:"Module: hooks/party-permission-authenticate",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-server-core/modules/hooks_party_permission_authenticate"}},m=[{value:"Functions",id:"functions",children:[{value:"addFeedBookmark",id:"addfeedbookmark",children:[]},{value:"addFeedComment",id:"addfeedcomment",children:[]},{value:"addFeedCommentFire",id:"addfeedcommentfire",children:[]},{value:"addFeedFire",id:"addfeedfire",children:[]},{value:"addFollowCreator",id:"addfollowcreator",children:[]},{value:"removeFeedBookmark",id:"removefeedbookmark",children:[]},{value:"removeFeedCommentFire",id:"removefeedcommentfire",children:[]},{value:"removeFeedFire",id:"removefeedfire",children:[]},{value:"removeFollowCreator",id:"removefollowcreator",children:[]}]}],l={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addfeedbookmark"},"addFeedBookmark"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addFeedBookmark"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L33"},"packages/server-core/src/hooks/notifications.ts:33")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"addfeedcomment"},"addFeedComment"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addFeedComment"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L62"},"packages/server-core/src/hooks/notifications.ts:62")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"addfeedcommentfire"},"addFeedCommentFire"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addFeedCommentFire"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L80"},"packages/server-core/src/hooks/notifications.ts:80")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"addfeedfire"},"addFeedFire"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addFeedFire"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L4"},"packages/server-core/src/hooks/notifications.ts:4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"addfollowcreator"},"addFollowCreator"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addFollowCreator"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L116"},"packages/server-core/src/hooks/notifications.ts:116")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removefeedbookmark"},"removeFeedBookmark"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"removeFeedBookmark"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L50"},"packages/server-core/src/hooks/notifications.ts:50")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removefeedcommentfire"},"removeFeedCommentFire"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"removeFeedCommentFire"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L100"},"packages/server-core/src/hooks/notifications.ts:100")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removefeedfire"},"removeFeedFire"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"removeFeedFire"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L21"},"packages/server-core/src/hooks/notifications.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removefollowcreator"},"removeFollowCreator"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"removeFollowCreator"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<HookContext",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/server-core/src/hooks/notifications.ts#L131"},"packages/server-core/src/hooks/notifications.ts:131")))}k.isMDXComponent=!0}}]);