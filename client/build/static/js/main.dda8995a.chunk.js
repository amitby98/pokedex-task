(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),c=n(21),i=n.n(c),r=(n(27),n(3)),o=n.n(r),u=n(22),l=n(9),p=n(4),h=n(5),d=n(8),j=n(7),b=n(6),m=n(10),f=n.n(m),k=(n(47),n(48),n(0)),x=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"dismiss",value:function(){this.props.unmountMe()}},{key:"render",value:function(){var t=this;return Object(k.jsxs)("div",{className:"typeLists",children:[Object(k.jsxs)("div",{className:"list-header",children:[Object(k.jsx)("h1",{children:"Pokemon type: ".concat(this.props.currentType)}),Object(k.jsx)("button",{className:"buttons",onClick:function(){t.dismiss()},children:"Close"})]}),Object(k.jsx)("ul",{children:this.props.type.map((function(e){return Object(k.jsx)("li",{className:"pokemon-list-item",onClick:function(){t.props.updatePokemon(e)},children:e})}))})]})}}]),n}(s.Component),v=(n(50),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(p.a)(this,n),(s=e.call(this,t)).state={list:[],isCaught:s.props.data.isCaught,isExist:s.props.isExist,renderList:!1,currentType:""},s.handleListUnmount=s.handleListUnmount.bind(Object(d.a)(s)),s}return Object(h.a)(n,[{key:"handleListUnmount",value:function(){this.setState({renderList:!1})}},{key:"releasePokemon",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.a.delete("/api/collection/release/".concat(this.props.data.name)).then((function(){e.props.updatePokemon(e.props.data.name),e.setState({isExist:e.props.isExist})}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"catchPokemon",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{f.a.post("/api/collection/catch",this.props).then((function(){e.props.updatePokemon(e.props.data.name),e.setState({isExist:e.props.isExist})}))}catch(n){console.log(n),alert("Error in catching pokemon")}case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchList",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,f.a.get("/api/type/".concat(e));case 5:n=t.sent,s=n.data,this.setState({list:s,renderList:!0,currentType:e}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),alert("Error in fetching pokemon list");case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,n=this,s=(null===(t=this.props.data.sprites)||void 0===t?void 0:t.front)?Object(k.jsx)("img",{alt:"pokemonImage",width:"200",height:"230",src:this.props.data.sprites.front,onMouseEnter:function(t){t.target.src=n.props.data.sprites.back},onMouseLeave:function(t){t.target.src=n.props.data.sprites.front}}):null,a=this.state.isExist?Object(k.jsx)("button",{className:"buttons",onClick:function(){n.releasePokemon()},children:"Relese"}):Object(k.jsx)("button",{className:"buttons",onClick:function(){n.catchPokemon()},children:"Catch"}),c=null===(e=this.props.data.types)||void 0===e?void 0:e.map((function(t){return Object(k.jsxs)("span",{onClick:function(){n.fetchList(t.name)},children:[t.name+" "," "]})})),i=this.props.data;return Object(k.jsxs)("div",{className:"pokemon-view",children:[Object(k.jsx)("section",{className:"details",children:Object(k.jsxs)("ul",{className:"details-list",children:[Object(k.jsx)("li",{children:"id: ".concat(i.id?i.id:"")}),Object(k.jsx)("li",{children:"Height: ".concat(i.height?i.height:"")}),Object(k.jsx)("li",{children:"Weight: ".concat(i.weight?i.weight:"")}),Object(k.jsx)("li",{children:"name: ".concat(i.name?i.name:"")}),Object(k.jsxs)("li",{children:[Object(k.jsx)("span",{children:"types: "}),c]})]})}),Object(k.jsxs)("section",{className:"pic-button",children:[s,Object(k.jsx)("p",{className:"catch",children:this.props.data.id?a:""})]}),this.state.renderList?Object(k.jsx)(x,{unmountMe:this.handleListUnmount,type:this.state.list,currentType:this.state.currentType,updatePokemon:this.props.updatePokemon}):null,Object(k.jsx)("div",{class:"center-on-page",children:Object(k.jsx)("div",{class:"pokeball",children:Object(k.jsx)("div",{class:"pokeball__button"})})})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{isExist:t.isExist}}}]),n}(s.Component)),O=(n(51),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(p.a)(this,n),(s=e.call(this,t)).state={userInput:""},s.updateInput=s.updateInput.bind(Object(d.a)(s)),s}return Object(h.a)(n,[{key:"updateInput",value:function(t){this.setState({userInput:t.target.value})}},{key:"render",value:function(){var t=this;return Object(k.jsxs)("div",{className:"search",children:[Object(k.jsx)("input",{className:"search-input",name:"search-input",placeholder:"Search a Pokemon",onChange:this.updateInput}),Object(k.jsx)("button",{className:"search-button",name:"search-button",onClick:function(){t.props.search(t.state.userInput)},children:"GO!"})]})}}]),n}(s.Component)),y=(n(20),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("ul",{children:this.props.list.map((function(t){return Object(k.jsxs)("li",{children:[Object(k.jsx)("div",{children:t.data.name}),Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:t.data.sprites.front})})]})}))})})}}]),n}(s.Component)),g=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(p.a)(this,n),(s=e.call(this,t)).state={currentPokemon:"",pokemonData:{},isExist:!1,collectionList:[],isShown:!1},s.updatePokemon=s.updatePokemon.bind(Object(d.a)(s)),s.fetchPokemon=s.fetchPokemon.bind(Object(d.a)(s)),s}return Object(h.a)(n,[{key:"updatePokemon",value:function(t){this.setState({currentPokemon:t}),this.isInCollection(t),this.fetchPokemon(t)}},{key:"isInCollection",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var n,s,a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("/api/collection");case 2:n=t.sent,s=n.data,this.setState({collectionList:s}),a=Object(u.a)(s),t.prev=6,a.s();case 8:if((c=a.n()).done){t.next=15;break}if(i=c.value,e!==i.data.name&&+e!==i.data.id){t.next=13;break}return this.setState({isExist:!0}),t.abrupt("return");case 13:t.next=8;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(6),a.e(t.t0);case 20:return t.prev=20,a.f(),t.finish(20);case 23:console.log("not found"),this.setState({isExist:!1});case 25:case"end":return t.stop()}}),t,this,[[6,17,20,23]])})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchPokemon",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,f.a.get("/api/pokemon/".concat(e));case 5:n=t.sent,s=n.data,this.setState({pokemonData:s}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),alert("Error in fetchPokemon");case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"clickme",value:function(){var t=parseFloat(document.getElementsByClassName("back_pokedex")[0].style.height);document.getElementsByClassName("back_pokedex")[0].style.height=280===t?"0px":"280px",this.setState({isShown:!this.state.isShown})}},{key:"render",value:function(){var t=this;return Object(k.jsxs)("div",{className:"app-pokemon",children:[Object(k.jsx)("div",{className:"header"}),Object(k.jsx)(O,{search:this.updatePokemon,isInCollection:this.isInCollection}),Object(k.jsx)(v,{data:this.state.pokemonData,updatePokemon:this.updatePokemon,isExist:this.state.isExist,collectionList:this.state.collectionList}),Object(k.jsxs)("div",{className:"center",children:[Object(k.jsx)("div",{className:"pokedex_top",children:Object(k.jsx)("div",{className:"pokedex_button",onClick:function(){t.clickme()},children:Object(k.jsx)("div",{className:"pokedex_button_button"})})}),Object(k.jsx)("div",{className:"back_pokedex",children:this.state.isShown?Object(k.jsx)(y,{list:this.state.collectionList}):null}),Object(k.jsx)("div",{className:"pokedex_bottom"})]})]})}}]),n}(a.a.Component),P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(g,{})}),document.getElementById("root")),P()}},[[52,1,2]]]);
//# sourceMappingURL=main.dda8995a.chunk.js.map