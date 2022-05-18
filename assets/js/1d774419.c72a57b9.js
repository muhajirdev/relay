(self.webpackChunk=self.webpackChunk||[]).push([[98832],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){return function(n){var t=u(n.components);return a.createElement(e,r({},n,{components:t}))}},u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(g,s(s({ref:n},l),{},{components:t})):a.createElement(g,s({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var a=t(79973),i=t(67294),r=t(73727),o=t(52263),s=t(13919),d=t(10412),l=(0,i.createContext)({collectLink:function(){}}),c=t(44996),u=t(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var n,t,p=e.isNavLink,g=e.to,f=e.href,h=e.activeClassName,v=e.isActive,w=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,x=(0,a.Z)(e,m),C=(0,o.default)().siteConfig,k=C.trailingSlash,N=C.baseUrl,P=(0,c.useBaseUrlUtils)().withBaseUrl,O=(0,i.useContext)(l),F=g||f,_=(0,s.Z)(F),E=null==F?void 0:F.replace("pathname://",""),L=void 0!==E?(t=E,y&&function(e){return e.startsWith("/")}(t)?P(t):t):void 0;L&&_&&(L=(0,u.applyTrailingSlash)(L,{trailingSlash:k,baseUrl:N}));var R=(0,i.useRef)(!1),T=p?r.OL:r.rU,q=d.default.canUseIntersectionObserver,j=(0,i.useRef)();(0,i.useEffect)((function(){return!q&&_&&null!=L&&window.docusaurus.prefetch(L),function(){q&&j.current&&j.current.disconnect()}}),[j,L,q,_]);var U=null!==(n=null==L?void 0:L.startsWith("#"))&&void 0!==n&&n,D=!L||!_||U;return L&&_&&!U&&!w&&O.collectLink(L),D?i.createElement("a",Object.assign({href:L},F&&!_&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(T,Object.assign({},x,{onMouseEnter:function(){R.current||null==L||(window.docusaurus.preload(L),R.current=!0)},innerRef:function(e){var n,t;q&&e&&_&&(n=e,t=function(){null!=L&&window.docusaurus.prefetch(L)},j.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.current.unobserve(n),j.current.disconnect(),t())}))})),j.current.observe(n))},to:L||""},p&&{isActive:v,activeClassName:h}))}},13919:(e,n,t)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>i})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>r,default:()=>o});var a=t(52263),i=t(13919);function r(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,d=r.absolute,l=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(s)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+c:c}(r,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,a=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,r=e.split(/[#?]/)[0],o="/"===r||r===a?r:(i=r,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,o)}},18780:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(r).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(36742),i=t(44256),r=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var d=function(){var e=r.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return r.createElement(s,null,r.createElement(l,null),r.createElement(d,null),r.createElement(c,null))},m=function(){return r.createElement(s,null,r.createElement(d,null),r.createElement(c,null))};const p=function(){return(0,i.fbContent)({internal:r.createElement(u,null),external:r.createElement(m,null)})}},42461:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>p});var a=t(74034),i=t(79973),r=(t(67294),t(3905)),o=t(68629),s=(t(44256),["components"]),d={id:"advanced-pagination",title:"Advanced Pagination",slug:"/guided-tour/list-data/advanced-pagination/",description:"Relay guide for advanced pagination",keywords:["pagination","usePaginationFragment","prefetching"]},l=void 0,c={unversionedId:"guided-tour/list-data/advanced-pagination",id:"version-v13.0.0/guided-tour/list-data/advanced-pagination",isDocsHomePage:!1,title:"Advanced Pagination",description:"Relay guide for advanced pagination",source:"@site/versioned_docs/version-v13.0.0/guided-tour/list-data/advanced-pagination.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/advanced-pagination/",permalink:"/docs/guided-tour/list-data/advanced-pagination/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/list-data/advanced-pagination.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Tobias Tengler",lastUpdatedAt:1652907348,formattedLastUpdatedAt:"5/18/2022",frontMatter:{id:"advanced-pagination",title:"Advanced Pagination",slug:"/guided-tour/list-data/advanced-pagination/",description:"Relay guide for advanced pagination",keywords:["pagination","usePaginationFragment","prefetching"]},sidebar:"version-v13.0.0/docs",previous:{title:"Updating Connections",permalink:"/docs/guided-tour/list-data/updating-connections/"},next:{title:"Introduction",permalink:"/docs/guided-tour/updating-data/"}},u=[{value:"Pagination Over Multiple Connections",id:"pagination-over-multiple-connections",children:[],level:2},{value:"Bi-directional Pagination",id:"bi-directional-pagination",children:[],level:2},{value:"Custom Connection State",id:"custom-connection-state",children:[],level:2},{value:"Refreshing connections",id:"refreshing-connections",children:[],level:2},{value:"Prefetching Pages of a Connection",id:"prefetching-pages-of-a-connection",children:[],level:2},{value:"Rendering One Page of Items at a Time",id:"rendering-one-page-of-items-at-a-time",children:[],level:2}],m={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"In this section we're going to cover how to implement more advanced pagination use cases than the default cases covered by ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),"."),(0,r.mdx)("h2",{id:"pagination-over-multiple-connections"},"Pagination Over Multiple Connections"),(0,r.mdx)("p",null,"If you need to paginate over multiple connections within the same component, you can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," multiple times:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {CombinedFriendsListComponent_user$key} from 'CombinedFriendsListComponent_user.graphql';\nimport type {CombinedFriendsListComponent_viewer$key} from 'CombinedFriendsListComponent_viewer.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: CombinedFriendsListComponent_user$key,\n  viewer: CombinedFriendsListComponent_viewer$key,\n};\n\nfunction CombinedFriendsListComponent(props: Props) {\n\n  const {data: userData, ...userPagination} = usePaginationFragment(\n    graphql`\n      fragment CombinedFriendsListComponent_user on User {\n        name\n        friends\n          @connection(\n            key: \"CombinedFriendsListComponent_user_friends_connection\"\n          ) {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const {data: viewerData, ...viewerPagination} = usePaginationFragment(\n    graphql`\n      fragment CombinedFriendsListComponent_user on Viewer {\n        actor {\n          ... on User {\n            name\n            friends\n              @connection(\n                key: \"CombinedFriendsListComponent_viewer_friends_connection\"\n              ) {\n              edges {\n                node {\n                  name\n                  age\n                }\n              }\n            }\n          }\n        }\n      }\n    `,\n    props.viewer,\n  );\n\n  return (...);\n}\n")),(0,r.mdx)("p",null,"However, we recommend trying to keep a single connection per component, to keep the components easier to follow."),(0,r.mdx)("h2",{id:"bi-directional-pagination"},"Bi-directional Pagination"),(0,r.mdx)("p",null,"In the ",(0,r.mdx)("a",{parentName:"p",href:"../pagination/"},"Pagination")," section we covered how to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," to paginate in a single ",(0,r.mdx)("em",{parentName:"p"},'"forward"')," direction. However, connections also allow paginating in the opposite ",(0,r.mdx)("em",{parentName:"p"},'"backward"')," direction. The meaning of ",(0,r.mdx)("em",{parentName:"p"},'"forward"')," and ",(0,r.mdx)("em",{parentName:"p"},'"backward"')," directions will depend on how the items in the connection are sorted, for example  ",(0,r.mdx)("em",{parentName:"p"},'"forward"')," could mean more recent",(0,r.mdx)("em",{parentName:"p"},', and "backward"')," could mean less recent."),(0,r.mdx)("p",null,"Regardless of the semantic meaning of the direction, Relay also provides the same APIs to paginate in the opposite direction, using ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),", as long  as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"before")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"last")," connection arguments are also used along with ",(0,r.mdx)("inlineCode",{parentName:"p"},"after")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"first"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListComponent_user$key} from 'FriendsListComponent_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {\n    data,\n    loadPrevious,\n    hasPrevious,\n    // ... forward pagination values\n  } = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(after: $after, before: $before, first: $first, last: $last)\n          @connection(key: \"FriendsListComponent_user_friends_connection\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <List items={data.friends?.edges.map(edge => edge.node)}>\n        {node => {\n          return (\n            <div>\n              {node.name} - {node.age}\n            </div>\n          );\n        }}\n      </List>\n\n      {hasPrevious ? (\n        <Button onClick={() => loadPrevious(10)}>\n          Load more friends\n        </Button>\n      ) : null}\n\n      {/* Forward pagination controls can go simultaneously here */}\n    </>\n  );\n}\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The APIs for both ",(0,r.mdx)("em",{parentName:"li"},'"forward"')," and ",(0,r.mdx)("em",{parentName:"li"},'"backward"')," are exactly the same, they're only named differently. When paginating forward, then the  ",(0,r.mdx)("inlineCode",{parentName:"li"},"after")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"first")," connection arguments will be used, when paginating backward, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"before")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"last")," connection arguments will be used."),(0,r.mdx)("li",{parentName:"ul"},"Note that the primitives for both ",(0,r.mdx)("em",{parentName:"li"},'"forward"')," and ",(0,r.mdx)("em",{parentName:"li"},'"backward"')," pagination are exposed from a single call to ",(0,r.mdx)("inlineCode",{parentName:"li"},"usePaginationFragment"),", so both ",(0,r.mdx)("em",{parentName:"li"},'"forward"')," and ",(0,r.mdx)("em",{parentName:"li"},'"backward"')," pagination can be performed simultaneously in the same component.")),(0,r.mdx)("h2",{id:"custom-connection-state"},"Custom Connection State"),(0,r.mdx)("p",null,"By default, when using ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@connection"),", Relay will ",(0,r.mdx)("em",{parentName:"p"},"append")," new pages of items to the connection when paginating ",(0,r.mdx)("em",{parentName:"p"},'"forward",')," and ",(0,r.mdx)("em",{parentName:"p"},"prepend")," new pages of items when paginating ",(0,r.mdx)("em",{parentName:"p"},'"backward"'),". This means that your component will always render the ",(0,r.mdx)("em",{parentName:"p"},"full")," connection, with ",(0,r.mdx)("em",{parentName:"p"},"all")," of the items that have been accumulated so far via pagination, and/or items that have been added or removed via mutations or subscriptions."),(0,r.mdx)("p",null,"However, it is possible that you'd need different behavior for how to merge and accumulate pagination results (or other updates to the connection), and/or derive local component state from changes to the connection. Some examples of this might be:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keeping track of different ",(0,r.mdx)("em",{parentName:"li"},"visible")," slices or windows of the connection."),(0,r.mdx)("li",{parentName:"ul"},"Visually separating each ",(0,r.mdx)("em",{parentName:"li"},"page")," of items. This requires knowledge of the exact set of items inside each page that has been fetched."),(0,r.mdx)("li",{parentName:"ul"},'Displaying different ends of the same connection simultaneously, while keeping track of the "gaps" between them, and being able to merge results when preforming pagination between the gaps. For example, imagine rendering a list of comments where the oldest comments are displayed at the top, then a "gap" that can be interacted with to paginate, and then a section at the bottom which shows the most recent comments that have been added by the user or by real-time subscriptions.')),(0,r.mdx)("p",null,"To address these more complex use cases, Relay is still working on a solution:"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"TBD")),(0,r.mdx)("h2",{id:"refreshing-connections"},"Refreshing connections"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"TBD")),(0,r.mdx)("h2",{id:"prefetching-pages-of-a-connection"},"Prefetching Pages of a Connection"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"TBD")),(0,r.mdx)("h2",{id:"rendering-one-page-of-items-at-a-time"},"Rendering One Page of Items at a Time"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"TBD")),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);