(this["webpackJsonpmov-app"]=this["webpackJsonpmov-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=(n(14),n(15),n(8)),o=n(3),j=n(5),h=n(6),u=n(9),d=n(7),p=n(0),l=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.title,t=this.props.poster_path,n=this.props.overview,c=this.props.vote_average;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t,alt:e}),Object(p.jsxs)("div",{className:"movie-info",children:[Object(p.jsx)("h4",{children:e}),Object(p.jsx)("span",{id:"vote_span",children:c})]}),Object(p.jsxs)("div",{className:"movie-over",children:[Object(p.jsx)("h2",{children:"Overview:"}),Object(p.jsx)("p",{children:n})]})]})}}]),n}(c.Component);n(17);var v=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([""]),r=Object(o.a)(s,2),j=r[0],h=r[1];Object(c.useEffect)((function(){u("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=813e4d6e9a0fa4f3d4ee41fc05061863")}),[]);var u=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.results)}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("h1",{id:"tit",children:"MOVAPP"}),Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),j&&(u("https://api.themoviedb.org/3/search/movie?api_key=813e4d6e9a0fa4f3d4ee41fc05061863&query="+j),h(""))},children:Object(p.jsx)("input",{className:"search",type:"search",placeholder:"search movies...",value:j,onChange:function(e){h(e.target.value)}})})]}),Object(p.jsx)("div",{className:"movie-container",children:n.length>0&&n.map((function(e){return Object(p.jsx)(l,Object(a.a)({},e),e.id)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.e5f073b3.chunk.js.map