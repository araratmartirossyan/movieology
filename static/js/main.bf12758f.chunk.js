(this.webpackJsonpmovieology=this.webpackJsonpmovieology||[]).push([[0],{172:function(e,t,a){e.exports=a(281)},275:function(e,t,a){},276:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);a(173),a(199),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241);var n=a(0),r=a.n(n),c=a(34),s=a.n(c),o=a(13),i=a.n(o),l=a(33),u=a(3),v=a.n(u),p=a(25),m=a(35),d=a(39),f=a(40),w=a(101),h=a.n(w),b={movies:"https://api.themoviedb.org",api:"https://movie.incodewetrust.dev",omdb:"https://www.omdbapi.com"},x=function(e,t,a){var n,r,c,s,o=arguments;return v.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=o.length>3&&void 0!==o[3]?o[3]:{},i.prev=1,r="omdb"===a?"".concat(t,"&apikey=").concat("f5f111a3"):t,i.next=5,v.a.awrap(h()({url:"".concat(b[a],"/").concat(r),method:e,data:n}));case 5:return c=i.sent,s=c.data,i.abrupt("return",s);case 10:return i.prev=10,i.t0=i.catch(1),i.abrupt("return",i.t0);case 13:case"end":return i.stop()}}),null,null,[[1,10]])},E=a(284),g=a(285),k=a(283),y=function(e){return i.a.send("VKWebAppStorageGet",{keys:[e]}),new Promise((function(e){i.a.subscribe((function(t){var a=t.detail,n=void 0===a?{}:a;if("VKWebAppStorageGetResult"===n.type){var r=Object(E.a)(null,"value")(Object(g.a)(n.data.keys));e(r)}}))}))},j=function(e,t){i.a.send("VKWebAppStorageSet",{key:e,value:String(t)})},O=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"fetchMovie",value:function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(x("get","movies/".concat(e),"api"));case 3:return t=a.sent,a.abrupt("return",t);case 7:throw a.prev=7,a.t0=a.catch(0),a.t0;case 10:case"end":return a.stop()}}),null,null,[[0,7]])}},{key:"fetchMovies",value:function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(x("get","movies","api",{}));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),null,null,[[0,7]])}},{key:"like",value:function(e){var t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(y(["userId"]));case 3:return t=n.sent,n.next=6,v.a.awrap(x("post","favorites","api",{profile:t,movie:e}));case 6:return a=n.sent,j("favId",a._id),n.abrupt("return",a);case 11:throw n.prev=11,n.t0=n.catch(0),n.t0;case 14:case"end":return n.stop()}}),null,null,[[0,11]])}},{key:"unlike",value:function(){var e,t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(y(["favId"]));case 3:return e=a.sent,a.next=6,v.a.awrap(x("delete","favorites/".concat(e),"api"));case 6:return t=a.sent,a.abrupt("return",t);case 10:throw a.prev=10,a.t0=a.catch(0),a.t0;case 13:case"end":return a.stop()}}),null,null,[[0,10]])}},{key:"checkIsFav",value:function(e){var t,a,n;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(y(["userId"]));case 3:return t=r.sent,r.next=6,v.a.awrap(x("get","favorites?movie=".concat(e,"&profile=").concat(t),"api"));case 6:return a=r.sent,n=Object(E.a)(null,"id")(Object(g.a)(a)),j("favId",n),r.abrupt("return",!Object(k.a)(a));case 12:throw r.prev=12,r.t0=r.catch(0),r.t0;case 15:case"end":return r.stop()}}),null,null,[[0,12]])}},{key:"fetchFavs",value:function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(x("get","favorites?profile=".concat(e),"api"));case 3:return t=a.sent,a.abrupt("return",t);case 7:throw a.prev=7,a.t0=a.catch(0),a.t0;case 10:case"end":return a.stop()}}),null,null,[[0,7]])}}]),e}(),N=a(282),C=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"getUserFromVk",value:function(){var e,t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(i.a.sendPromise("VKWebAppGetUserInfo"));case 3:return e=n.sent,n.next=6,v.a.awrap(this.getProfile(e.id));case 6:if(!(t=n.sent)){n.next=9;break}return n.abrupt("return",t);case 9:return n.next=11,v.a.awrap(x("post","profiles","api",Object(l.a)({},Object(N.a)(["photo_max_orig","first_name","last_name"],e),{userId:String(e.id)})));case 11:return a=n.sent,j("userId",a.id),n.abrupt("return",a);case 16:throw n.prev=16,n.t0=n.catch(0),n.t0;case 19:case"end":return n.stop()}}),null,this,[[0,16]])}},{key:"getProfile",value:function(e){var t,a,n,r;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,v.a.awrap(x("get","profiles/?userId=".concat(e),"api"));case 2:if(t=c.sent,a=Object(p.a)(t,1),n=a[0],!(r=void 0===n?null:n)){c.next=9;break}return j("userId",r.id),c.abrupt("return",r);case 9:return c.abrupt("return",null);case 10:case"end":return c.stop()}}))}},{key:"showImage",value:function(e){i.a.send("VKWebAppShowImages",{images:[e]})}}]),e}();i.a.subscribe((function(){}));var I=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"onMovieShare",value:function(e){i.a.send("VKWebAppShare",{link:"https://vk.com/app7273858#movieId=".concat(e,"&view=movie")})}}]),e}(),S=new O,L=new C,M=new I,F=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(L.getUserFromVk());case 2:return e=t.sent,t.abrupt("return",{user:e});case 4:case"end":return t.stop()}}))},_=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(S.fetchMovies());case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),null,null,[[0,7]])},V=function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(S.like(e));case 3:return t=a.sent,a.abrupt("return",t);case 7:throw a.prev=7,a.t0=a.catch(0),a.t0;case 10:case"end":return a.stop()}}),null,null,[[0,7]])},A=function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(S.checkIsFav(e));case 3:return t=a.sent,a.abrupt("return",t);case 7:throw a.prev=7,a.t0=a.catch(0),a.t0;case 10:case"end":return a.stop()}}),null,null,[[0,7]])},P=function(e){return L.showImage(e)},K=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(S.unlike());case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),null,null,[[0,7]])},U=function(e){return M.onMovieShare(e)},W=function(e){var t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(S.fetchMovie(e));case 3:return t=n.sent,n.next=6,v.a.awrap(S.checkIsFav(e));case 6:return a=n.sent,n.abrupt("return",Object(l.a)({},t,{isFavorite:a}));case 10:throw n.prev=10,n.t0=n.catch(0),n.t0;case 13:case"end":return n.stop()}}),null,null,[[0,10]])},B=function(e){var t=window.location.hash.replace("#","");return""===t?{}:t.split("&").reduce((function(e,t){var a=t.split("="),n=Object(p.a)(a,2),r=n[0],c=n[1];return e[decodeURIComponent(r)]=decodeURIComponent(c),e}),{})},R=a(102),G=a.n(R),H=(a(275),function(e){var t=e.onFindMovie,a=e.loaded,c=Object(n.useState)({loading:!1}),s=Object(p.a)(c,2),o=s[0],i=s[1];return r.a.createElement("div",{className:"movie-block"},r.a.createElement("div",{className:"movie-button"},r.a.createElement("a",{className:G()({activate:!0,loading:o.loading,done:a}),onClick:function(){i({loading:!0}),t()}},r.a.createElement("span",null,r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#circle"})),r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#arrow"})),r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#check"}))),r.a.createElement("ul",null,r.a.createElement("li",null,"\u041f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0439"),r.a.createElement("li",null,"\u0414\u0443\u043c\u0430\u044e"),r.a.createElement("li",null,"\u041d\u0430\u0448\u0435\u043b"))),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",id:"circle"},r.a.createElement("circle",{cx:"8",cy:"8",r:"7.5"})),r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",id:"arrow"},r.a.createElement("path",{d:"M2.7008908,5.37931459 L2.7008908,5.37931459 C2.9224607,5.60207651 3.2826628,5.60304283 3.50542472,5.38147293 C3.52232305,5.36466502 3.53814843,5.34681177 3.55280728,5.32801875 L5.34805194,3.02646954 L5.34805194,10.3480519 C5.34805194,10.7081129 5.63993903,11 6,11 L6,11 C6.36006097,11 6.65194806,10.7081129 6.65194806,10.3480519 L6.65194806,3.02646954 L8.44719272,5.32801875 C8.6404327,5.57575732 8.99791646,5.61993715 9.24565503,5.42669716 C9.26444805,5.41203831 9.28230129,5.39621293 9.2991092,5.37931459 L9.2991092,5.37931459 C9.55605877,5.12098268 9.57132199,4.70855346 9.33416991,4.43193577 L6.75918715,1.42843795 C6.39972025,1.00915046 5.76841509,0.960656296 5.34912761,1.32012319 C5.31030645,1.35340566 5.27409532,1.38961679 5.24081285,1.42843795 L2.66583009,4.43193577 C2.42867801,4.70855346 2.44394123,5.12098268 2.7008908,5.37931459 Z"})),r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",id:"check"},r.a.createElement("path",{id:"test",d:"M4.76499011,6.7673683 L8.2641848,3.26100386 C8.61147835,2.91299871 9.15190114,2.91299871 9.49919469,3.26100386 C9.51164115,3.27347582 9.52370806,3.28637357 9.53537662,3.29967699 C9.83511755,3.64141434 9.81891834,4.17816549 9.49919469,4.49854425 L5.18121271,8.82537365 C4.94885368,9.05820878 4.58112654,9.05820878 4.34876751,8.82537365 L2.50080531,6.97362503 C2.48835885,6.96115307 2.47629194,6.94825532 2.46462338,6.93495189 C2.16488245,6.59321455 2.18108166,6.0564634 2.50080531,5.73608464 C2.84809886,5.3880795 3.38852165,5.3880795 3.7358152,5.73608464 L4.76499011,6.7673683 Z"})))))}),T=(a(276),function(e){var t=e.onFindMovie,a=e.loaded;return r.a.createElement("div",{className:"welcome_panel"},r.a.createElement(H,{onFindMovie:t,loaded:a}))}),z=a(103),J=a.n(z),Z=a(104),q=a.n(Z),D=a(105),Q=a.n(D),X=a(106),Y=a.n(X),$=(a(278),function(e){var t=e.movie,a=t.Title,n=t.Poster,c=t.Plot,s=t.Actors,o=t.Rated,i=t.Runtime,l=t.Genre,u=t.imdbRating,v=t.isFavorite,p=t._id,d=e.goBack,f=e.onLike,w=e.showImage,h=e.onUnLike,b=e.onMovieShare;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"cellphone-container"},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{onClick:function(){return w(n)},className:"movie-img",style:{backgroundImage:"url(".concat(n,")"),backgroundSize:"cover"}}),r.a.createElement("div",{className:"text-movie-cont"},r.a.createElement("div",{className:"mr-grid"},r.a.createElement("div",{className:"col1"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("ul",{className:"movie-gen"},r.a.createElement("li",null,o," /"),r.a.createElement("li",null,i," /"),r.a.createElement("li",null,l)))),r.a.createElement("div",{className:"mr-grid summary-row"},r.a.createElement("div",{className:"col2"},r.a.createElement("h3",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:")),r.a.createElement("div",{className:"col2"},r.a.createElement("div",{className:"movie-likes"},r.a.createElement(Y.a,{width:20,height:20}),r.a.createElement("span",null,u)))),r.a.createElement("div",{className:"mr-grid"},r.a.createElement("div",{className:"col1"},r.a.createElement("p",{className:"movie-description"},c))),r.a.createElement("div",{className:"mr-grid actors-row"},r.a.createElement("div",{className:"col1"},r.a.createElement("p",{className:"movie-actors"},s.split("...")[0]))),r.a.createElement("div",{className:"mr-grid action-row"},r.a.createElement("div",{className:"col6 action-btn"},v?r.a.createElement(Q.a,{width:30,height:30,style:{color:"#fe4141"},onClick:function(){return h()}}):r.a.createElement(q.a,{width:30,height:30,style:{color:"#fe4141"},onClick:function(){return f(p)}})),r.a.createElement("div",{className:"col6 action-btn"},r.a.createElement(J.a,{width:30,height:30,style:{color:"#fe4141"},onClick:function(){return b(p)}}))),r.a.createElement("div",{className:"back-btn"},r.a.createElement(m.a,{size:"xl",level:"outline",onClick:d},"\u041d\u0430\u0437\u0430\u0434"))))))}),ee=(a(279),a(280),function(){var e=Object(n.useState)({loaded:!1}),t=Object(p.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("welcome"),o=Object(p.a)(s,2),i=o[0],u=o[1],d=Object(n.useState)(null),f=Object(p.a)(d,2),w=(f[0],f[1]),h=Object(n.useState)(null),b=Object(p.a)(h,2),x=b[0],E=b[1];Object(n.useEffect)((function(){var e=B(),t=e.view,a=void 0===t?"welcome":t,n=e.movieId,r=void 0===n?null:n;r&&(u(a),g(r)),function(){var e,t;v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(F());case 2:e=a.sent,t=e.user,w(t);case 5:case"end":return a.stop()}}))}()}),[]);var g=function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(W(e));case 3:t=a.sent,E(Object(l.a)({},t)),a.next=10;break;case 7:throw a.prev=7,a.t0=a.catch(0),a.t0;case 10:case"end":return a.stop()}}),null,null,[[0,7]])},k=function(){var e,t=arguments;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e=t.length>0&&void 0!==t[0]?t[0]:null)){a.next=6;break}return a.next=4,v.a.awrap(V(e));case 4:a.next=8;break;case 6:return a.next=8,v.a.awrap(K());case 8:E(Object(l.a)({},x,{isFavorite:!!e}));case 9:case"end":return a.stop()}}))};return r.a.createElement(m.c,{activeView:i},r.a.createElement(m.d,{header:!1,activePanel:"welcome_panel",id:"welcome"},r.a.createElement(m.b,{id:"welcome_panel"},r.a.createElement(T,{onFindMovie:function(){var e,t,a,n;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return c({loaded:!1}),r.next=3,v.a.awrap(_());case 3:return e=r.sent,t=Math.floor(Math.random()*e.length),a=e[t],r.next=8,v.a.awrap(A(a._id));case 8:n=r.sent,E(Object(l.a)({},a,{isFavorite:n})),setTimeout((function(){return c({loaded:!0})}),1300),setTimeout((function(){return u("movie")}),2e3);case 12:case"end":return r.stop()}}))},loaded:a.loaded}))),r.a.createElement(m.d,{header:!1,activePanel:"movie_panel",id:"movie"},r.a.createElement(m.b,{id:"movie_panel",style:{backgroundColor:"#1e1b26"}},x&&r.a.createElement($,{movie:x,goBack:function(){return u("welcome")},showImage:P,onLike:k,onUnLike:k,onMovieShare:U}))))});i.a.send("VKWebAppInit",{}),s.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.bf12758f.chunk.js.map