(this.webpackJsonpgitpop3=this.webpackJsonpgitpop3||[]).push([[0],{76:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},85:function(e,t,n){},86:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(1),a=n.n(c),s=n(29),i=n.n(s),j=(n(85),n(86),n(87),n(33)),o=n(79),d=n(35),b=n(104),h=n(101),u=n(107),O=n(102),l=n(27),x=function(e){var t=e.onSubmit,n=Object(c.useState)(),a=Object(d.a)(n,2),s=a[0],i=a[1];return Object(r.jsxs)(h.a,{className:"mb-3",children:[Object(r.jsx)(u.a,{placeholder:"https://github.com/django/django",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)(h.a.Append,{children:Object(r.jsx)(O.a,{variant:"outline-secondary",onClick:function(){return t(s)},children:Object(r.jsx)(l.a,{icon:"search"})})})]})},p=n(103),f=function(e){var t=e.info;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.nameWithOwner}),Object(r.jsx)("td",{children:"Stars"}),Object(r.jsx)("td",{children:"Forks"}),Object(r.jsx)("td",{children:"Modified"})]})},m=function(e){var t=e.forks;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{icon:"search"}),Object(r.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Repo"}),Object(r.jsx)("th",{children:"Stars"}),Object(r.jsx)("th",{children:"Forks"}),Object(r.jsx)("th",{children:"Modified"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(f,{info:e})}))})]})]})},g=n(71),k=n(55),v=n(36),w=n(72);function y(){var e=Object(g.a)(["\n  query Forks($owner: String! $name: String!) {\n    repository(owner: $owner, name: $name) {\n      forks(first: 10) {\n        nodes {\n          nameWithOwner\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var S=Object(v.createHttpLink)({uri:"https://api.github.com/graphql"}),N="611e97c7dd4ef573efcd31e63e9aed084243d282",A=Object(w.a)((function(e,t){var n=t.headers;return{headers:Object(k.a)(Object(k.a)({},n),{},{authorization:"Bearer ".concat(N)})}})),C=new v.ApolloClient({link:A.concat(S),cache:new v.InMemoryCache}),M=Object(v.gql)(y()),q=/https:\/\/github.com\/(\w+)\/(\w+)/,F=function(e,t){var n=function(e){return e.match(q).slice(1,3)}(e),r=Object(d.a)(n,2),c=r[0],a=r[1];C.query({query:M,variables:{owner:c,name:a}}).then((function(e){return t(e)}))},$=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=function(e){return a(e.data.repository.forks.nodes)},i=n?Object(r.jsx)(m,{forks:n}):null;return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(x,{onSubmit:function(e){return F(e,s)}}),i]})},B=n(76),J=function(){return Object(r.jsx)("footer",{className:"footer d-none d-md-block",children:Object(r.jsx)(b.a,{className:"text-center",children:Object(r.jsxs)("span",{children:["Copyright \xa9 Andre Miras 2020 - gitpop3 v",B.a]})})})},L=n(105),H=n(106),I=function(){return Object(r.jsx)(L.a,{bg:"dark",variant:"dark",expand:"sm",className:"mb-4",children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(L.a.Brand,{href:"/gitpop3",children:[Object(r.jsx)(l.a,{icon:"code-branch"})," ","GitPop3"]}),Object(r.jsx)(L.a.Toggle,{}),Object(r.jsx)(L.a.Collapse,{children:Object(r.jsxs)(H.a,{className:"mr-auto",children:[Object(r.jsxs)(H.a.Link,{href:"/gitpop3",children:[Object(r.jsx)(l.a,{icon:"home"})," ","Home"]}),Object(r.jsx)(H.a.Link,{href:"https://github.com/AndreMiras/gitpop3",children:"About"})]})})]})})};j.b.add(o.a);var W=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(I,{}),Object(r.jsx)($,{}),Object(r.jsx)(J,{})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ced991f9.chunk.js.map