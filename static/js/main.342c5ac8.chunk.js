(this["webpackJsonptrending-movies"]=this["webpackJsonptrending-movies"]||[]).push([[0],{138:function(e,a,t){e.exports=t(270)},143:function(e,a,t){},269:function(e,a,t){},270:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),i=t.n(l),c=t(17),m=(t(143),t(76)),o=t.n(m),u=t(114),s=t(127),d=t(8),E=t(275),p=t(277),v=t(279),g=t(280),f=t(126),b=t(123),h=t(128),y=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var w=function(e){var a=Object(d.f)().pathname.replace(e.path,"");return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{basic:!0,color:"blue",as:c.b,to:e.path},"Back"),e.movies.results.map((function(e){return e.id===Number(a)?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{as:"h1",style:{display:"flex",justifyContent:"center"}},e.title+" ("+e.release_date+")"),r.a.createElement(g.a,{columns:3,centered:!0,doubling:!0},r.a.createElement(g.a.Column,null,r.a.createElement(f.a,{size:"large",src:"https://image.tmdb.org/t/p/w500/"+e.poster_path})),r.a.createElement(g.a.Column,null,r.a.createElement(b.a,{stackable:!0,itemsPerRow:2},r.a.createElement(h.a,{color:"blue"},r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Header,null,"Synopsis"),r.a.createElement(h.a.Description,null,e.overview))),r.a.createElement(h.a,{color:"blue"},r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Header,null,"Genre"),r.a.createElement(h.a.Description,null,y.map((function(a){return e.genre_ids.includes(a.id)?r.a.createElement("p",null,a.name):void 0}))))),r.a.createElement(h.a,{color:"blue"},r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Header,null,"Rating"),r.a.createElement(h.a.Description,null,e.vote_average," / 10"))))))):r.a.createElement(r.a.Fragment,null)}))))},C=t(281);var _=function(e){return Object(n.useEffect)((function(){}),[e.vote_average]),r.a.createElement(h.a,null,r.a.createElement(f.a,{src:"https://image.tmdb.org/t/p/w300/"+e.backdrop,wrapped:!0,ui:!1}),r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Header,null,e.title),r.a.createElement(h.a.Meta,null,e.releasedate),r.a.createElement(h.a.Description,null,e.synopsis.slice(0,80)+" ...")),r.a.createElement(h.a.Content,{extra:!0},r.a.createElement(C.a,{disabled:!0,maxRating:5,rating:e.vote_average,icon:"star"}),r.a.createElement(p.a,{basic:!0,color:"blue",as:c.b,to:{pathname:e.path+e.id,state:{id:e.id}}},"Read more")))};var k=function(e){return r.a.createElement(E.a,null,r.a.createElement(g.a,{centered:!0,columns:6,doubling:!0},e.movies.results.map((function(a){return a.title?r.a.createElement(g.a.Column,null,r.a.createElement(_,{title:a.title,releasedate:a.release_date,synopsis:a.overview,vote_average:a.vote_average,backdrop:a.poster_path,key:a.id,id:a.id,path:e.path})):""}))))},F=t(278);var j=function(e){return r.a.createElement(F.a,{inverted:!0},r.a.createElement(F.a.Item,{as:c.b,to:e.path},"TrendingMovies"))};var x=function(){var e=Object(n.useState)({results:[]}),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("a7c72915d9ca22d06835063429d58c63"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,l(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/trending-movies/movie/:id",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{path:"/trending-movies"}),r.a.createElement(w,{movies:t,path:"/trending-movies/movie/"}))}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{path:"/trending-movies"}),r.a.createElement(k,{movies:t,path:"/trending-movies/movie/"}))}})))};t(269);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.342c5ac8.chunk.js.map