(this["webpackJsonptrending-movies"]=this["webpackJsonptrending-movies"]||[]).push([[0],{138:function(e,a,t){e.exports=t(270)},143:function(e,a,t){},269:function(e,a,t){},270:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),i=t(17),m=(t(143),t(76)),o=t.n(m),s=t(114),u=t(127),d=t(8),E=t(275),p=t(277),v=t(279),g=t(280),h=t(126),f=t(123),b=t(128),y=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var w=function(e){var a=Object(d.f)().pathname.replace(e.path,"");return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{basic:!0,color:"blue",as:i.b,to:e.path},"Back"),e.movies.results.map((function(e){return e.id===Number(a)?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{as:"h1",style:{display:"flex",justifyContent:"center"}},e.title+" ("+e.release_date+")"),r.a.createElement(g.a,{columns:3,centered:!0,doubling:!0},r.a.createElement(g.a.Column,null,r.a.createElement(h.a,{size:"large",src:"https://image.tmdb.org/t/p/w500/"+e.poster_path})),r.a.createElement(g.a.Column,null,r.a.createElement(f.a,{stackable:!0,itemsPerRow:2},r.a.createElement(b.a,{color:"blue"},r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,null,"Synopsis"),r.a.createElement(b.a.Description,null,e.overview))),r.a.createElement(b.a,{color:"blue"},r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,null,"Genre"),r.a.createElement(b.a.Description,null,y.map((function(a){return e.genre_ids.includes(a.id)?r.a.createElement("p",null,a.name):void 0}))))),r.a.createElement(b.a,{color:"blue"},r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,null,"Rating"),r.a.createElement(b.a.Description,null,e.vote_average," / 10"))))))):r.a.createElement(r.a.Fragment,null)}))))},C=t(281);var D=function(e){return Object(n.useEffect)((function(){}),[e.vote_average]),r.a.createElement(b.a,null,r.a.createElement(h.a,{src:"https://image.tmdb.org/t/p/w300/"+e.backdrop,wrapped:!0,ui:!1}),r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,null,e.title),r.a.createElement(b.a.Meta,null,e.releasedate),r.a.createElement(b.a.Description,null,e.synopsis.slice(0,80)+" ...")),r.a.createElement(b.a.Content,{extra:!0},"Rating: ",e.vote_average,r.a.createElement(C.a,{disabled:!0,maxRating:5,rating:e.vote_average,icon:"star"}),r.a.createElement(p.a,{basic:!0,color:"blue",as:i.b,to:{pathname:e.path+e.id,state:{id:e.id}}},"Read more")))};var _=function(e){return r.a.createElement(E.a,null,r.a.createElement(g.a,{centered:!0,columns:6,doubling:!0},e.movies.results.map((function(a){return a.title?r.a.createElement(g.a.Column,null,r.a.createElement(D,{title:a.title,releasedate:a.release_date,synopsis:a.overview,vote_average:a.vote_average,backdrop:a.poster_path,key:a.id,id:a.id,path:e.path})):""}))))},k=t(278);var S=function(e){return r.a.createElement(k.a,{inverted:!0},r.a.createElement(k.a.Item,{as:i.b,to:e.path},"TrendingMovies"))};var F=function(){var e=Object(n.useState)({results:[]}),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cachedData"))||null;(e&&(new Date).toDateString()!==e.date&&(e=null,console.log("Cache was too old.")),e)?l(e.items):(console.log("NO cached data"),function(){var e=Object(s.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("a7c72915d9ca22d06835063429d58c63"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=(new Date).toDateString(),localStorage.setItem("cachedData",JSON.stringify({date:n,items:t})),l(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/trending-movies/movie/:id",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{path:"/trending-movies"}),r.a.createElement(w,{movies:t,path:"/trending-movies/movie/"}))}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{path:"/trending-movies"}),r.a.createElement(_,{movies:t,path:"/trending-movies/movie/"}))}})))};t(269);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(F,null))),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.7df1888b.chunk.js.map