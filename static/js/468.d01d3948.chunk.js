"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[468],{8468:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(5861),a=t(885),i=t(7757),c=t.n(i),u=t(2791),s=t(6066),o=(t(5462),t(58)),p=t(4390),d=t(501),f={trendingList:"TrendingMovies_trendingList__WO4te",trendingItem:"TrendingMovies_trendingItem__6G284",trendingLink:"TrendingMovies_trendingLink__xFcRb",trendingTitle:"TrendingMovies_trendingTitle__b+HOO"},l=t(184),v=function(e){var n=e.movies;return(0,l.jsxs)("div",{className:f.trending,children:[(0,l.jsx)("h1",{className:f.trendingTitle,children:"Trending today"}),(0,l.jsx)("ul",{className:f.trendingList,children:n.map((function(e){var n=e.id,t=e.original_title;return(0,l.jsx)("li",{className:f.trendingItem,children:(0,l.jsx)(d.OL,{className:f.trendingLink,to:"movies/".concat(n),children:t})},n)}))})]})},g="idle",h="pending",m="resolved",_="rejected",x=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],i=n[1],d=(0,u.useState)("idle"),f=(0,a.Z)(d,2),x=f[0],k=f[1];return(0,u.useEffect)((function(){k(h);var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Df();case 3:if(0!==(n=e.sent).length){e.next=7;break}return k(g),e.abrupt("return");case 7:k(m),i(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),k(_),e.abrupt("return",s.Am.error("Whoops something went wrong, please try again later \ud83d\ude45\u200d\u2642\ufe0f"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)(l.Fragment,{children:[x===g&&(0,l.jsx)("h1",{className:o.Z.pagesTitle,children:"We don't have popular movies, come back later \ud83d\ude14"}),x===m&&(0,l.jsx)(v,{movies:t})]})}},4390:function(e,n,t){t.d(n,{Df:function(){return o},M1:function(){return d},ME:function(){return l},YJ:function(){return p},tx:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),u=t.n(c);u().defaults.baseURL="https://api.themoviedb.org/3";var s="b5a4402f376b07e7f2b259d1d47ff1e6",o=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/search/movie?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},58:function(e,n){n.Z={pagesTitle:"Pages_pagesTitle__a4WnR"}}}]);
//# sourceMappingURL=468.d01d3948.chunk.js.map