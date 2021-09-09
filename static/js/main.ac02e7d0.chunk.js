(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{44:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(20),a=s.n(c),o=s(19),i=(s(44),s(12)),l=s(4),u=s(0),d=function(){return Object(u.jsx)("header",{className:"fixed z-10 top-0 left-0 w-full bg-white shadow-md hover:shadow-lg transition duration-500",children:Object(u.jsxs)("nav",{className:"container mx-auto flex items-center justify-between p-6 h-20",children:[Object(u.jsx)("h2",{className:"text-xl lg:text-3xl text-blue-600 font-bold",children:"Hacker News"}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{className:"block space-x-5 text-xl",children:Object(u.jsx)(i.c,{to:"/",exact:!0,activeClassName:"text-blue-500",className:"hover:text-blue-500",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})})]})})},m=s(15),b=function(e){var t=e.text;return Object(u.jsxs)("div",{className:"flex justify-center items-center space-x-1 text-sm text-gray-700",children:[Object(u.jsx)("svg",{fill:"none",className:"w-8 h-8 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{clipRule:"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor",fillRule:"evenodd"})}),Object(u.jsx)("div",{className:"text-lg",children:t})]})},j=function(e){var t=e.story;return Object(u.jsxs)(i.b,{to:"".concat(".","/").concat(t.id),className:"block group bg-white p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500 my-4 cursor-pointer",children:[Object(u.jsx)("h2",{className:"text-lg md:text-2xl text-gray-800 font-semibold mb-3 group-hover:text-blue-500",children:t.title}),Object(u.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",Object(u.jsx)("span",{className:"font-bold",children:t.score})]}),Object(u.jsxs)("p",{className:"leading-6 tracking-normal",children:["\u0410\u0432\u0442\u043e\u0440: ",Object(u.jsx)("span",{className:"font-bold",children:t.by})]}),Object(u.jsxs)("p",{className:"text-gray-600 text-sm mt-2",children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e: ",function(){var e=new Date(1e3*t.time),s="0".concat(e.getDate()),n="0".concat(e.getMonth()+1),r=e.getFullYear(),c="0".concat(e.getHours()),a="0".concat(e.getMinutes()),o="0".concat(e.getSeconds());return"".concat(s.substr(-2),"/").concat(n.substr(-2),"/").concat(r," ").concat(c.substr(-2),":").concat(a.substr(-2),":").concat(o.substr(-2))}()]})]})},x=function(e){var t=e.storiesStatus,s=e.storiesList;return Object(u.jsx)("div",{children:"success"===t?s.map((function(e){return Object(u.jsx)(j,{story:e},e.id)})):null})},f=s.p+"static/media/refresh.d4f2ea6d.svg",h=function(e){var t=e.onClick;return Object(u.jsxs)("div",{className:"group flex rounded border-b-2 border-grey-dark overflow-hidden cursor-pointer",onClick:t,children:[Object(u.jsx)("button",{className:"block text-white text-sm shadow-border bg-blue-500 group-hover:bg-blue-800 text-sm py-2 px-3 font-sans tracking-wide uppercase font-bold",type:"button",children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),Object(u.jsx)("div",{className:"bg-blue-400 group-hover:bg-blue-800 shadow-border p-3",children:Object(u.jsx)("div",{className:"w-4 h-4",children:Object(u.jsx)("img",{src:f,alt:"",className:"w-full"})})})]})},p=function(){return Object(o.b)()},g=o.c,O=s(13),v=s(3),y=s.n(v),w=s(11),S=s(10),N=s(14),k=s.n(N),I=Object(S.b)("newStories/fetchStoryIds",Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://hacker-news.firebaseio.com/v0/newstories.json");case 3:return t=e.sent,e.abrupt("return",t.data.slice(0,100));case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),C=Object(S.b)("newStories/fetchStories",function(){var e=Object(w.a)(y.a.mark((function e(t,s){var n,r,c,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.start,r=t.end,c=s.getState(),a=c.newStories,e.prev=2,e.next=5,Promise.all(a.storyIdsList.slice(n,r+1).map(function(){var e=Object(w.a)(y.a.mark((function e(t){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json"));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return o=e.sent,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e.catch(2),Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,s){return e.apply(this,arguments)}}()),E=Object(S.c)({name:"newStories",initialState:{storyIdsList:[],storyIdsStatus:"loading",storiesStatus:"loading",storiesList:[]},reducers:{},extraReducers:function(e){e.addCase(I.pending,(function(e){e.storyIdsStatus="loading",e.storiesStatus="loading"})),e.addCase(I.fulfilled,(function(e,t){e.storyIdsStatus="success",e.storyIdsList=t.payload})),e.addCase(I.rejected,(function(e){e.storyIdsStatus="error"})),e.addCase(C.fulfilled,(function(e,t){e.storiesStatus="success",e.storiesList=t.meta.arg.isRefreshing||null===e.storiesList?Object(O.a)(t.payload):[].concat(Object(O.a)(e.storiesList),Object(O.a)(t.payload))})),e.addCase(C.rejected,(function(e){e.storiesStatus="error"}))}}).reducer,D=function(){var e=p(),t=g((function(e){return e.newStories})),s=t.storyIdsStatus,r=t.storiesStatus,c=t.storiesList,a=Object(n.useState)({start:c.length,end:c.length+4}),o=Object(m.a)(a,2),i=o[0],l=o[1],d=Object(n.useState)("success"!==r),j=Object(m.a)(d,2),f=j[0],O=j[1],v=Object(n.useState)(!1),y=Object(m.a)(v,2),w=y[0],S=y[1],N=function(e){var t=e.target;t.documentElement.scrollHeight-(t.documentElement.scrollTop+window.innerHeight)<300&&O(!0)},k=function(){l({start:0,end:4}),S(!0),O(!0),e(I())};return Object(n.useEffect)((function(){var t=setInterval((function(){k()}),6e4);return document.addEventListener("scroll",N),"success"!==s&&e(I()),function(){document.removeEventListener("scroll",N),clearInterval(t)}}),[]),Object(n.useEffect)((function(){"success"===s&&f&&c.length<100&&e(C({start:i.start,end:i.end,isRefreshing:w})).then((function(){l((function(e){return{start:e.end+1,end:e.end+5}}))})).finally((function(){O(!1),S(!1)}))}),[s,f]),Object(u.jsx)("div",{className:"lg:w-1/2 mx-auto",children:"loading"===r?Object(u.jsx)(b,{text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[Object(u.jsx)("h3",{className:" text-lg font-semibold text-gray-900",children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(u.jsx)(h,{onClick:k})]}),Object(u.jsx)(x,{storiesStatus:r,storiesList:c})]})})},L=function(){return Object(u.jsxs)("div",{className:"bg-gray-100 justify-center",children:[Object(u.jsxs)("div",{className:"mt-24 m-auto",children:[Object(u.jsx)("span",{className:"text-gray-500 text-6xl block text-center",children:"4 0 4"}),Object(u.jsx)("span",{className:"mt-6 text-gray-500 text-xl block text-center",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]}),Object(u.jsx)("div",{className:"mt-6 flex justify-center",children:Object(u.jsx)(i.c,{to:"".concat(".","/"),className:"text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md ",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})},H=s(27),M=Object(S.b)("openedStory/fetchOpenedStory",function(){var e=Object(w.a)(y.a.mark((function e(t){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json"));case 3:if(null!==(s=e.sent).data){e.next=6;break}throw Error();case 6:return e.abrupt("return",s.data);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),F=Object(S.b)("openedStory/fetchComments",function(){var e=Object(w.a)(y.a.mark((function e(t,s){var n,r,c,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.start,r=t.end,c=s.getState(),a=c.openedStory,e.prev=2,a.storyData.kids){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,Promise.all(a.storyData.kids.slice(n,r).map(function(){var e=Object(w.a)(y.a.mark((function e(t){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json"));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return o=e.sent,e.abrupt("return",o);case 11:throw e.prev=11,e.t0=e.catch(2),Error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,s){return e.apply(this,arguments)}}()),R=Object(S.b)("openedStory/refreshComments",function(){var e=Object(w.a)(y.a.mark((function e(t){var s,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json"));case 3:if(s=e.sent,n=s.data.kids){e.next=7;break}return e.abrupt("return",{ids:null,comments:[]});case 7:return e.next=9,Promise.all(n.slice(0,4).map(function(){var e=Object(w.a)(y.a.mark((function e(t){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json"));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:return r=e.sent,e.abrupt("return",{ids:n,comments:r});case 13:throw e.prev=13,e.t0=e.catch(0),Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()),A=Object(S.b)("openedStory/fetchAnswers",function(){var e=Object(w.a)(y.a.mark((function e(t,s){var n,r,c,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commentId,r=s.getState(),c=r.openedStory,e.prev=2,e.next=5,Promise.all(c.comments.find((function(e){return e.id===n})).kids.map(function(){var e=Object(w.a)(y.a.mark((function e(t){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json"));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return a=e.sent,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(2),Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,s){return e.apply(this,arguments)}}()),P=Object(S.c)({name:"openedStory",initialState:{commentsStatus:"loading",storyStatus:"loading",storyData:null,comments:[]},reducers:{clearAll:function(e){e.comments=[],e.commentsStatus="loading",e.storyData=null,e.storyStatus="loading"}},extraReducers:function(e){e.addCase(M.fulfilled,(function(e,t){e.storyStatus="success",e.storyData=t.payload,t.payload.kids||(e.commentsStatus="success")})),e.addCase(M.rejected,(function(e){e.storyStatus="error"})),e.addCase(F.fulfilled,(function(e,t){e.commentsStatus="success",e.comments=[].concat(Object(O.a)(e.comments),Object(O.a)(t.payload))})),e.addCase(F.rejected,(function(e){e.commentsStatus="error"})),e.addCase(R.pending,(function(e){e.commentsStatus="loading",e.comments=[]})),e.addCase(R.fulfilled,(function(e,t){if(e.commentsStatus="success",e.comments=Object(O.a)(t.payload.comments),t.payload.ids){var s=Object(H.a)(Object(H.a)({},e.storyData),{},{kids:Object(O.a)(t.payload.ids)});e.storyData=s}})),e.addCase(A.pending,(function(e,t){var s=e.comments.findIndex((function(e){return e.id===t.meta.arg.commentId}));e.comments[s].answers={answersStatus:"loading",answersData:[]}})),e.addCase(A.fulfilled,(function(e,t){var s=e.comments.findIndex((function(e){return e.id===t.meta.arg.commentId}));e.comments[s].answers={answersStatus:"success",answersData:Object(O.a)(t.payload)}})),e.addCase(A.rejected,(function(e,t){var s=e.comments.findIndex((function(e){return e.id===t.meta.arg.commentId}));e.comments[s].answers={answersStatus:"error",answersData:[]}}))}}),T=P.actions.clearAll,Y=P.reducer,z=function(e){var t=e.commentsStatus,s=e.comments,n=p(),r=function(e){var t=new Date(1e3*e),s="0".concat(t.getDate()),n="0".concat(t.getMonth()+1),r=t.getFullYear(),c="0".concat(t.getHours()),a="0".concat(t.getMinutes()),o="0".concat(t.getSeconds());return"".concat(s.substr(-2),"/").concat(n.substr(-2),"/").concat(r," ").concat(c.substr(-2),":").concat(a.substr(-2),":").concat(o.substr(-2))};return Object(u.jsx)(u.Fragment,{children:"success"===t&&s?Object(u.jsx)("div",{className:"space-y-4",children:s.map((function(e){return Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("div",{className:"flex-shrink-0 mr-3"}),Object(u.jsxs)("div",{className:"flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed",children:[Object(u.jsx)("strong",{children:e.deleted?"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043b\u0435\u043d":e.by})," ",Object(u.jsx)("span",{className:"text-xs text-gray-400",children:r(e.time)}),Object(u.jsx)("p",{className:"text-sm",children:e.text}),Object(u.jsx)("div",{className:"mt-4 flex items-center",children:e.kids?Object(u.jsxs)("div",{className:"text-md text-gray-500 font-semibold cursor-pointer hover:text-blue-500",onClick:function(){return n(A({commentId:e.id}))},children:[e.kids.length," \u043e\u0442\u0432\u0435\u0442\u043e\u0432"," ",e.answers&&"loading"===e.answers.answersStatus?Object(u.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):null]}):null}),e.answers&&"success"===e.answers.answersStatus?Object(u.jsx)("div",{className:"space-y-4",children:e.answers.answersData.map((function(e){return Object(u.jsx)("div",{className:"flex",children:Object(u.jsxs)("div",{className:"flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed",children:[Object(u.jsx)("strong",{children:e.by})," ",Object(u.jsx)("span",{className:"text-xs text-gray-400",children:r(e.time)}),Object(u.jsx)("p",{className:"text-xs sm:text-sm",children:e.text})]})},e.id)}))}):null]})]},e.id)}))}):null})},B=s.p+"static/media/left-arrow.de2ce4a5.svg",J=function(){var e=Object(l.f)().id,t=p(),s=g((function(e){return e.openedStory})),r=s.commentsStatus,c=s.storyStatus,a=s.storyData,o=s.comments,d=Object(n.useState)({start:0,end:4}),j=Object(m.a)(d,2),x=j[0],f=j[1],O=Object(n.useState)(!0),v=Object(m.a)(O,2),y=v[0],w=v[1],S=function(e){var t=e.target;t.documentElement.scrollHeight-(t.documentElement.scrollTop+window.innerHeight)<200&&w(!0)},N=function(){w(!1),f({start:0,end:4}),t(R(parseInt(e,10)))};Object(n.useEffect)((function(){var s=setInterval((function(){N()}),6e4);return document.addEventListener("scroll",S),t(M(parseInt(e,10))),function(){document.removeEventListener("scroll",S),t(T()),clearInterval(s)}}),[]),Object(n.useEffect)((function(){"success"===c&&y&&(null===a||void 0===a?void 0:a.kids)&&a.kids.length>o.length&&t(F({start:x.start,end:x.end})).then((function(){f((function(e){return{start:e.end+1,end:e.end+5}}))})).finally((function(){return w(!1)}))}),[c,y]);return Object(u.jsx)("div",{children:"error"===c?Object(u.jsx)(L,{}):"success"===c&&a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"max-w-4xl px-10 mx-auto my-4 py-6 bg-white rounded-lg shadow-md",children:[Object(u.jsxs)("div",{className:"flex justify-between items-center",children:[Object(u.jsx)("span",{className:"font-light text-gray-600",children:function(){var e=new Date(1e3*a.time),t="0".concat(e.getDate()),s="0".concat(e.getMonth()+1),n=e.getFullYear(),r="0".concat(e.getHours()),c="0".concat(e.getMinutes()),o="0".concat(e.getSeconds());return"".concat(t.substr(-2),"/").concat(s.substr(-2),"/").concat(n," ").concat(r.substr(-2),":").concat(c.substr(-2),":").concat(o.substr(-2))}()}),a.url?Object(u.jsx)("a",{className:"px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500",href:a.url,target:"_blank",rel:"noreferrer",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442"}):Object(u.jsx)("span",{className:"px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500",children:"\u041d\u0435\u0442 \u0441\u0441\u044b\u043b\u043a\u0438"})]}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsx)("p",{className:"text-2xl text-gray-700 font-bold",children:a.title})}),Object(u.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[Object(u.jsxs)(i.c,{className:"text-blue-600 hover:underline flex justify-left items-center",to:"".concat(".","/"),children:[Object(u.jsx)("img",{src:B,alt:"",className:"w-3 mr-1"}),Object(u.jsx)("span",{children:"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{className:"flex items-center",children:["\u0410\u0432\u0442\u043e\u0440:"," ",Object(u.jsx)("p",{className:"text-gray-700 font-bold",children:a.by})]})})]})]}),"loading"===r?Object(u.jsx)(b,{text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432..."}):Object(u.jsxs)("div",{className:"mx-auto max-w-4xl bg-white rounded-lg shadow-md px-10 py-6",children:[Object(u.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[Object(u.jsxs)("h3",{className:" text-lg font-semibold text-gray-900",children:["\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 (",a.kids?a.kids.length:0,")"]}),Object(u.jsx)(h,{onClick:N})]}),Object(u.jsx)(z,{commentsStatus:r,comments:o})]})]}):null})};function _(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("main",{className:"min-h-screen bg-gray-100 py-32",children:Object(u.jsx)("div",{className:"containter mx-auto px-2 md:px-20",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"".concat(".","/"),children:Object(u.jsx)(D,{})}),Object(u.jsx)(l.a,{path:"".concat(".","/:id"),children:Object(u.jsx)(J,{})}),Object(u.jsx)(l.a,{component:L})]})})})]})}var q=Object(S.a)({reducer:{newStories:E,openedStory:Y},devTools:!1});a.a.render(Object(u.jsx)(o.a,{store:q,children:Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(_,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.ac02e7d0.chunk.js.map