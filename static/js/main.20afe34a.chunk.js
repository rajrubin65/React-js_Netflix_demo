(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(17),i=a.n(s),r=(a(71),a(36)),o=a(118),l=a(120),j=a(119),d=a(1);var b=function(){return Object(d.jsx)("div",{className:"navbar",children:Object(d.jsx)(r.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(r.a.Brand,{href:"",children:"Movies Details"}),Object(d.jsx)(r.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(r.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsxs)(l.a,{className:"me-auto",children:[Object(d.jsx)(l.a.Link,{href:"#features",children:"Features"}),Object(d.jsx)(l.a.Link,{href:"#pricing",children:"Pricing"}),Object(d.jsxs)(j.a,{title:"Dropdown",id:"collasible-nav-dropdown",children:[Object(d.jsx)(j.a.Item,{href:"#action/3.1",children:"Action"}),Object(d.jsx)(j.a.Item,{href:"#action/3.2",children:"Another action"}),Object(d.jsx)(j.a.Item,{href:"#action/3.3",children:"Something"}),Object(d.jsx)(j.a.Divider,{}),Object(d.jsx)(j.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Link,{href:"#deets",children:"More deets"}),Object(d.jsx)(l.a.Link,{eventKey:2,href:"#memes",children:"Dank memes"})]})]})]})})})},h=(a(78),a(5)),u="88271655df4247591766a3a4c5c1344c",O="https://image.tmdb.org/t/p/original",m=(a(79),a(62)),v=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),g=a(51);var p=function(){var e=Object(c.useState)(),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),i=Object(h.a)(s,2);i[0],i[1],Object(c.useEffect)((function(){v.get("trending/all/week?api_key=".concat(u,"&language=en-US")).then((function(e){console.log(e.data.results[0]),n(e.data.results[0])}))}),[]);var r=function(e){v.get("trending/all/week?api_key=".concat(u,"&language=en-US")).then((function(e){var t,a=(t=e.data.results.length,Math.floor(Math.random()*t));n(e.data.results[a])}))};return Object(d.jsxs)("div",{style:{backgroundImage:"url(".concat(a?O+a.backdrop_path:"",")")},className:"banner",children:[Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h1",{className:"title",children:a?a.title:""}),Object(d.jsx)("div",{className:"banner_buttons",children:Object(d.jsx)("button",{onClick:function(){return r(a.id)},className:"button",children:"Next"})}),Object(d.jsx)("h1",{className:"description",children:a?a.overview:""})]}),Object(d.jsx)("div",{className:"fade_bottom"})]})};a(110);var x=function(e){var t=Object(c.useState)([]),a=Object(h.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(),r=Object(h.a)(i,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){v.get(e.urls).then((function(e){s(e.data.results)}))}),[]),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("div",{className:"posters",children:n.map((function(t){return Object(d.jsx)("img",{onClick:function(){return e=t.id,void v.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(u,"&language=en-US")).then((function(e){0!==e.data.results.length?(console.log(e.data.results[0].key),l(e.data.results[0])):console.log("Trailer not Found")}));var e},className:e.isSmall?"smallPoster":"poster",alt:"poster",src:"".concat(O+t.backdrop_path)})}))}),o&&Object(d.jsx)(g.a,{videoId:o.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},f="trending/all/week?api_key=".concat(u,"&language=en-US"),k="discover/movie?api_key=".concat(u,"&with_genres=28"),y="discover/movie?api_key=".concat(u,"&with_genres=10749"),S="discover/movie?api_key=".concat(u,"&with_genres=27");"org/3/discover/movie?api_key=".concat(u,"&with_genres=35");var _=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{}),Object(d.jsx)(x,{urls:f,title:"Trending"}),Object(d.jsx)(x,{urls:k,title:"Action",isSmall:!0}),Object(d.jsx)(x,{urls:S,title:"Horror",isSmall:!0}),Object(d.jsx)(x,{urls:y,title:"Romance",isSmall:!0}),Object(d.jsx)(x,{urls:S,title:"Comedy"})]})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))},71:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.20afe34a.chunk.js.map