(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),o=n(10),i=n.n(o),a=(n(22),n(23),n(3)),r=(n(24),n(5)),j=n(17),l={pokemons:[]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADPOKEMONS":var n=Object(j.a)(e.pokemons);return n.push(t.payload),n.sort((function(e,t){return e.id-t.id})),Object(a.a)(Object(a.a)({},e),{},{pokemons:n});case"LOADPOKEMON":return{pokemons:t.payload};default:return e}},O=n(37),h=n(6),p=(n(31),n(1));function b(e){return Object(p.jsx)("div",{className:"card",children:e.children})}var d={infos:[]};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADINFOS":return{infos:t.payload};case"UNSETINFOS":return{infos:[]};default:return e}},m=function(e){return function(t){fetch("https://pokeapi.co/api/v2/pokemon/"+e).then((function(e){return e.json()})).then((function(e){t({type:"LOADINFOS",payload:[e]})}))}},v={evolutions:[]};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADEVOLUTION":return{evolutions:t.payload};case"UNSETEVOLUTION":return{evolutions:[]};default:return e}};function N(){var e=Object(r.c)((function(e){return Object(a.a)(Object(a.a)({},e.pokemonReducer),e.infosReducer)})),t=e.pokemons,n=e.infos,s=Object(r.b)();return Object(c.useEffect)((function(){0===t.length&&s((function(e){for(var t=1;t<152;t++)fetch("https://pokeapi.co/api/v2/pokemon/"+t).then((function(e){return e.json()})).then((function(t){e({type:"LOADPOKEMONS",payload:t})}))})),0!==n.length&&(s((function(e){e({type:"UNSETEVOLUTION"})})),s((function(e){e({type:"UNSETINFOS"})})))})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"home-title",children:"Le Pokedex en REACT"}),Object(p.jsx)("div",{className:"container-pokemon",children:151===t.length?t.map((function(e){return Object(p.jsx)(h.b,{className:"card-link",to:{pathname:"Infos/".concat(e.species.name)},children:Object(p.jsxs)(b,{children:[Object(p.jsx)("h4",{children:e.species.name}),Object(p.jsx)("img",{src:e.sprites.front_default,alt:e.species.name})]})},Object(O.a)())})):Object(p.jsx)("h2",{className:"charging",children:"Charging..."})})]})}n(33);var g=n(2);function k(){var e=Object(g.g)(),t=Object(r.c)((function(e){return Object(a.a)(Object(a.a)({},e.evolutionReducer),e.infosReducer)})),n=t.evolutions,s=t.infos,o=Object(r.b)();return Object(c.useEffect)((function(){0===s.length&&o(m(e.slug))}),[]),Object(c.useEffect)((function(){var e;s[0]&&o((e=s[0].species.url,function(t){e?fetch(e).then((function(e){return e.json()})).then((function(e){fetch(e.evolution_chain.url).then((function(e){return e.json()})).then((function(e){e.chain.evolves_to[0]&&(e.chain.evolves_to[0].evolves_to[0]?t({type:"LOADEVOLUTION",payload:[e.chain.species.name,e.chain.evolves_to[0].species.name,e.chain.evolves_to[0].evolves_to[0].species.name]}):t({type:"LOADEVOLUTION",payload:[e.chain.species.name,e.chain.evolves_to[0].species.name]}))}))})):t({type:"LOADEVOLUTION",payload:["none"]})}))}),[s]),Object(p.jsx)(p.Fragment,{children:s.map((function(t){return Object(p.jsxs)("div",{className:"infos-pokemon",children:[Object(p.jsx)("h1",{children:t.name}),Object(p.jsx)("img",{className:"pokemon-img",src:t.sprites.other["official-artwork"].front_default,alt:t.name}),Object(p.jsxs)("div",{className:"pokemon-size",children:[Object(p.jsxs)("div",{className:"pokemon-types",children:[Object(p.jsx)("p",{children:"Type(s) :"}),Object(p.jsx)("ul",{children:t.types.map((function(e){return Object(p.jsx)("li",{className:"pokemon-type",children:e.type.name},Object(O.a)())}))})]}),Object(p.jsxs)("p",{children:["Weight : ",t.weight/10," kg",Object(p.jsx)("br",{}),"Height : ",t.height/10," m"]})]}),Object(p.jsx)("div",{className:"pokemon-evolution",children:n.map((function(t){return t!==e.slug?Object(p.jsxs)(h.b,{onClick:function(){o((function(e){e({type:"UNSETINFOS"})})),o((function(e){e({type:"UNSETEVOLUTION"})}))},to:"/-Pokedex-en-REACT/Evolution/"+t,state:e.slug,children:["Evolution  : ",t]},Object(O.a)()):""}))})]},Object(O.a)())}))})}n(34);function y(){var e=Object(g.e)(),t=Object(g.g)(),n=Object(r.c)((function(e){return Object(a.a)({},e.infosReducer)})).infos,s=Object(r.b)();return Object(c.useEffect)((function(){0===n.length&&s(m(t.slug))}),[]),Object(p.jsx)(p.Fragment,{children:n.map((function(t){return Object(p.jsxs)("div",{className:"infos-pokemon",children:[Object(p.jsx)("h1",{children:t.name}),Object(p.jsx)("img",{className:"pokemon-img",src:t.sprites.other["official-artwork"].front_default,alt:t.name}),Object(p.jsxs)("div",{className:"pokemon-size",children:[Object(p.jsxs)("div",{className:"pokemon-types",children:[Object(p.jsx)("p",{children:"Type(s) :"}),Object(p.jsx)("ul",{children:t.types.map((function(e){return Object(p.jsx)("li",{className:"pokemon-type",children:e.type.name},Object(O.a)())}))})]}),Object(p.jsxs)("p",{children:["Weight : ",t.weight/10," kg",Object(p.jsx)("br",{}),"Height : ",t.height/10," m"]})]}),Object(p.jsx)("div",{className:"pokemon-evolution",children:Object(p.jsxs)(h.b,{onClick:function(){s((function(e){e({type:"UNSETINFOS"})}))},to:"/-Pokedex-en-REACT/Infos/"+e.state,state:e.state,children:["Return to previous state : ",e.state]})})]},Object(O.a)())}))})}var E=n.p+"static/media/home.8327a4ec.svg";n(35);function T(){var e=Object(r.b)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(h.b,{className:"link-home",to:"/-Pokedex-en-REACT",onClick:function(){e((function(e){e({type:"UNSETINFOS"})})),e((function(e){e({type:"UNSETEVOLUTION"})}))},children:Object(p.jsx)("img",{className:"img-home",src:E,alt:"home"})})})}var I=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(T,{}),Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{path:"/-Pokedex-en-REACT",element:Object(p.jsx)(N,{})}),Object(p.jsx)(g.a,{path:"/-Pokedex-en-REACT/Infos/:slug",element:Object(p.jsx)(k,{})}),Object(p.jsx)(g.a,{path:"/-Pokedex-en-REACT/Evolution/:slug",element:Object(p.jsx)(y,{})})]})]})},S=n(11),L=n(16),A=Object(S.b)({pokemonReducer:u,evolutionReducer:x,infosReducer:f}),U=Object(S.c)(A,Object(S.a)(L.a));i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(r.a,{store:U,children:Object(p.jsx)(I,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a1c33984.chunk.js.map