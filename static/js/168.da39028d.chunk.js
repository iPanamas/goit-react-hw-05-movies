"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{2168:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(5861),a=r(885),s=r(7757),u=r.n(s),c=r(2791),i=r(6871),o=r(6066),v=(r(5462),{reviews:"Reviews_reviews__n3fdK",reviewsItem:"Reviews_reviewsItem__Su53A",reviewsTitle:"Reviews_reviewsTitle__mxqAS",reviewsText:"Reviews_reviewsText__pIre-",notFound:"Reviews_notFound__FzYY5",notFoundTitle:"Reviews_notFoundTitle__OsTCn",notFoundImage:"Reviews_notFoundImage__c-C3a"}),p=r(4390),f=r(184),l="idle",d="pending",w="resolved",h="rejected",m=function(){var e=(0,i.UO)().moviesId,t=(0,c.useState)([]),r=(0,a.Z)(t,2),s=r[0],m=r[1],_=(0,c.useState)("idle"),x=(0,a.Z)(_,2),k=x[0],g=x[1];return(0,c.useEffect)((function(){g(d);var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.tx(e);case 3:if(0!==(r=t.sent).length){t.next=7;break}return g(l),t.abrupt("return");case 7:g(w),m(r),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),g(h),t.abrupt("return",o.Am.error("Whoops something went wrong, please try again later \ud83d\ude45\u200d\u2642\ufe0f"));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,f.jsxs)("div",{className:v.reviews,children:[k===l&&(0,f.jsx)("h1",{className:v.reviewsTitle,children:"We dont have any reviews for this movie \ud83d\ude14"}),k===w&&(0,f.jsx)("ul",{className:v.reviewsList,children:s.map((function(e){var t=e.author,r=e.content;return(0,f.jsxs)("li",{className:v.reviewsItem,children:[(0,f.jsxs)("h2",{className:v.reviewsTitle,children:["Author: ",t]}),(0,f.jsx)("p",{className:v.reviewsText,children:r})]},t)}))})]})}},4390:function(e,t,r){r.d(t,{Df:function(){return o},M1:function(){return p},ME:function(){return l},YJ:function(){return v},tx:function(){return f}});var n=r(5861),a=r(7757),s=r.n(a),u=r(4569),c=r.n(u);c().defaults.baseURL="https://api.themoviedb.org/3";var i="b5a4402f376b07e7f2b259d1d47ff1e6",o=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie/?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.da39028d.chunk.js.map