(this["webpackJsonpzukunftsfonds-mobile-site"]=this["webpackJsonpzukunftsfonds-mobile-site"]||[]).push([[0],{26:function(e,t,n){},42:function(e,t,n){e.exports=n(87)},54:function(e,t,n){var a={"./messages_de.json":55};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=54},55:function(e){e.exports=JSON.parse('{"About Us":"\xdcber Uns","Help":"Hilfe","Home":"Startseite","Language":"Sprache","Orthodox Europe":"Orthodoxes Europa","People":"Personen","Places":"Orte","Projects":"Projekte","Search":"Suche","Walking Tours":"Spazierg\xe4nge","Digital Geoportal of the History of the Orthodox in Austria":"Digitales Geoportal der Geschichte der Orthodoxen in \xd6sterreich"}')},56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),l=n.n(r),c=n(14),o=n.n(c),i=n(3),s=n(8),u=n(1),m=Object(s.b)({key:"language",default:window.localStorage.getItem("zukunftsfonds.language")||"en"}),d=Object(s.b)({key:"searchQuery",default:""}),h=Object(s.b)({key:"searchResults",default:[]}),f=n(9),E=new function e(){var t=this;Object(f.a)(this,e),this.loadMessages=function(e){t.messages[e]=n(54)("./messages_".concat(e,".json"))},this.t=function(e){return function(n){return e in t.messages&&n in t.messages[e]?t.messages[e][n]:n}},this.messages={},this.loadMessages("de")},p=function(){var e=Object(s.d)(m);return E.t(e)},g=function(){var e=Object(s.d)(m);return function(t){return-1===t.indexOf("------------")?t:"de"===e?t.split("------------")[0].trim():t.split("------------")[1].trim()}},v=n(41),b=n(35),O=(n(56),{"crm:E18_Physical_Thing":"md-pin","crm:E21_Person":"md-account","crm:E74_Group":"md-accounts"}),k=function(e){var t=function(t){var n=t.index,a=t.style,r=e.results[n];return l.a.createElement("div",{className:"search-result",style:a,onClick:function(){return e.onSelect(e.results[n])}},l.a.createElement(u.Ripple,{modifier:"light-gray"}),l.a.createElement(u.Icon,{icon:O[r.crmClass]}),l.a.createElement("label",null,r.properties.title))};return l.a.createElement("div",{className:"search-results"},l.a.createElement(b.a,null,(function(n){var a=n.height,r=n.width;return l.a.createElement(v.a,{height:a,itemCount:e.results.length,itemSize:58,width:r},t)})))},y=(n(26),function(e){var t=p(),n=g(),a=e.item,r=e.store,c=e.navigator,o=x(a,r);return l.a.createElement(D,{backButton:!0,className:"profile actor",title:a.properties.title,navigator:e.navigator},a.description.map((function(e,t){return l.a.createElement("div",{key:t,className:"description"},n(e.value))})),l.a.createElement(u.List,{className:"related places",dataSource:o,renderHeader:function(){return l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-pin"}),l.a.createElement("label",null,t("Places")))},renderRow:function(e,t){return l.a.createElement(u.ListItem,{key:t,className:"related residence",onClick:S(e,c)},l.a.createElement("span",{className:"title"},e.properties.title))}}))}),N=n(91),j=n(93),_=n(92),I=n(36),w=n.n(I),P=(n(59),{"crm:E18_Physical_Thing":function(e){var t=p(),n=g(),a=Object(r.useRef)(),c=e.item,o=e.navigator,i=e.store;Object(r.useEffect)((function(){a.current&&a.current.leafletElement.fitBounds(function(e){var t=w()(e);return[[t[1],t[0]],[t[3],t[2]]]}(c))}),[c]);var s=C(c,i);return l.a.createElement(D,{backButton:!0,className:"profile place",title:c.properties.title,navigator:e.navigator},l.a.createElement("div",{className:"map-container"},l.a.createElement(N.a,{ref:a,zoomControl:!1,style:{height:"200px"}},l.a.createElement(j.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(_.a,{data:c}))),c.description.map((function(e,t){return l.a.createElement("div",{key:t,className:"description"},n(e.value))})),l.a.createElement(u.List,{className:"related actors",dataSource:s,renderHeader:function(){return l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-account"}),l.a.createElement("label",null,t("People")))},renderRow:function(e,t){return l.a.createElement(u.ListItem,{key:t,className:"related residence",onClick:S(e,o)},l.a.createElement("span",{className:"title"},e.properties.title))}}))},"crm:E21_Person":y,"crm:E74_Group":y}),L=function(e){return P[e.crmClass]},S=function(e,t){return function(n){return t.pushPage({component:L(e),item:e})}},x=function(e,t){return e.relations.filter((function(e){return"crm:P74_has_current_or_former_residence"===e.relationType})).map((function(e){return t.getPlaceWithLocation(e.relationTo)}))},C=function(e,t){var n=e.relations.find((function(e){return"crm:P53_has_former_or_current_location"===e.relationType}));return(null===n||void 0===n?void 0:n.relationTo)?t.getActorsWithResidence(n.relationTo):[]},T=(n(62),function(e){var t=p(),n=Object(s.d)(d),a=Object(s.e)(d),r=Object(s.d)(h),c=Object(s.e)(h),o=function(t){var r=t.target.value.toLowerCase();if(n!==r){a(r);var l=e.store.searchAll(r);c(l)}},i=function(){a(""),c([])};return l.a.createElement(u.Page,{className:"search",renderToolbar:function(){return l.a.createElement(u.Toolbar,null,l.a.createElement("div",{className:"left"},l.a.createElement(u.BackButton,null)),l.a.createElement("div",{className:"center"},l.a.createElement(u.Input,{value:n,placeholder:t("Search"),onChange:o})),l.a.createElement("div",{className:"right"},l.a.createElement(u.ToolbarButton,null,l.a.createElement(u.Icon,{icon:"md-close",onClick:i}))))}},l.a.createElement(k,{results:r,onSelect:function(t){return e.navigator.pushPage({component:L(t),item:t})}}))}),H=(n(63),function(e){var t=Object(s.c)(m),n=Object(a.a)(t,2),r=n[0],c=n[1],o=p(),i=function(e){c(e),window.localStorage.setItem("zukunftsfonds.language",e)};return l.a.createElement(u.Page,{className:"side-menu"},l.a.createElement(u.List,null,l.a.createElement(u.ListItem,{onClick:function(){return e.navigator.pushPage({component:z})}},l.a.createElement(u.Icon,{icon:"md-home"}),l.a.createElement("label",null,o("Home"))),l.a.createElement(u.ListItem,{onClick:function(){return e.navigator.pushPage({component:T})}},l.a.createElement(u.Icon,{icon:"md-search"}),l.a.createElement("label",null,o("Search")))),l.a.createElement(u.List,null,l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-info-outline"}),l.a.createElement("label",null,o("Information"))),l.a.createElement(u.ListItem,null,l.a.createElement("label",null,o("Help"))),l.a.createElement(u.ListItem,{className:"projects"},l.a.createElement("div",null,l.a.createElement("label",null,o("Projects")),l.a.createElement("ul",null,l.a.createElement("li",null,"Orthodoxes Wien"),l.a.createElement("li",null,"Oberhollabrunn")))),l.a.createElement(u.ListItem,null,l.a.createElement("label",null,o("About Us")))),l.a.createElement(u.List,null,l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-walk"}),l.a.createElement("label",null,o("Walking Tours"))),l.a.createElement(u.ListItem,{onClick:function(){return new Promise((function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){return e(t)}),(function(){return t()})):t()})).then((function(e){return console.log(e)})).catch((function(){return console.log("rejected or not available")}))}},l.a.createElement("label",null,"Oberhollabrunn"))),l.a.createElement(u.List,{className:"set-language"},l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-translate"}),l.a.createElement("label",null,o("Language"))),l.a.createElement(u.ListItem,null,l.a.createElement("label",{className:"left"},l.a.createElement(u.Radio,{inputId:"EN",name:"EN",onChange:function(){return i("en")},checked:"en"===r})),l.a.createElement("label",{htmlFor:"EN",className:"center"},"English")),l.a.createElement(u.ListItem,null,l.a.createElement("label",{className:"left"},l.a.createElement(u.Radio,{inputId:"DE",name:"DE",onChange:function(){return i("de")},checked:"de"===r})),l.a.createElement("label",{htmlFor:"DE",className:"center"},"Deutsch"))))}),D=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),c=n[0],o=n[1];return l.a.createElement(u.Page,{className:e.className},l.a.createElement(u.Splitter,null,l.a.createElement(u.SplitterContent,null,l.a.createElement(u.Page,{renderToolbar:function(){return l.a.createElement(u.Toolbar,null,e.backButton&&l.a.createElement(u.BackButton,null),l.a.createElement("div",{className:"center"},e.title),l.a.createElement("div",{className:"right"},l.a.createElement(u.ToolbarButton,{onClick:function(){return o(!0)}},l.a.createElement(u.Icon,{icon:"md-menu"}))))}},e.children)),l.a.createElement(u.SplitterSide,{animation:"overlay",mode:"collapse",side:"right",collapse:!0,width:"300px",isOpen:c,onClose:function(){return o(!1)}},l.a.createElement(H,{navigator:e.navigator}))))},z=(n(64),function(e){var t=p(),n=g();return l.a.createElement(D,{title:t("Orthodox Europe"),navigator:e.navigator},l.a.createElement("div",{className:"splash-page-container"},l.a.createElement("div",{className:"splash-image-container"},l.a.createElement("img",{className:"splash-image",src:"images/OrthodoxyInEurope.png",alt:"Orthodoxy in Europe - Map"})),l.a.createElement("div",{className:"splash-message"},l.a.createElement("h1",null,t("Digital Geoportal of the History of the Orthodox in Austria")),l.a.createElement("p",null,n('Das "Digitale Geoportal der Geschichte der Orthodoxen in \xd6sterreich" hat das Ziel, die Geschichte,\n   den Glauben und die Kultur der orthodoxen Kirchen und von deren Gl\xe4ubigen in Europa, mit einem Schwerpunkt \n   auf \xd6sterreich, mit Hilfe von wissenschaftlichen Projekten zu erforschen und einer breiten \xd6ffentlichkeit \n   zug\xe4nglich zu machen. ------------ The "Digital Geoportal of the History of the Orthodox in Austria" has the \n   aim to research the history, faith and culture of the Orthodox churches and their believers in Europe, with \n   a special emphasis on Austria, based on scholarly projects and to popularise all of the aforesaid aspects in \n   the general public.')))))}),B=(n(65),n(66),n(90)),G=(n(67),function(e){return l.a.createElement(s.a,null,l.a.createElement(u.Navigator,{renderPage:function(t,n){return l.a.createElement(t.component,Object(i.a)(Object(i.a)({},t),{},{navigator:n,key:Object(B.a)(),store:e.store}))},initialRoute:{component:z},animation:"slide",swipeable:!0}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(19),A=n(17),U=n(39),W=n.n(U),M=n(40),F=function(){function e(){Object(f.a)(this,e),this.actors=[],this.events=[],this.places=[],this.search=new M.a("@id"),this.search.tokenizer={tokenize:function(e){return e.split(/[\s,-]+/)}},this.search.addIndex(["properties","title"])}return Object(A.a)(e,[{key:"load",value:function(){var e=this,t=function(e){return W.a.get("data/api/items_".concat(e,".json")).then((function(e){return e.data[0].reduce((function(e,t){return e.concat(t.features)}),[])}))};return Promise.all([t("actor"),t("event"),t("place")]).then((function(t){var n=Object(a.a)(t,3),r=n[0],l=n[1],c=n[2];e.actors=r,e.events=l,e.places=c,e.search.addDocuments([].concat(Object(R.a)(r),Object(R.a)(c)))}))}},{key:"findById",value:function(e){return this.items.find((function(t){return t["@id"]===e}))}},{key:"searchAll",value:function(e){return this.search.search(e.toLowerCase())}},{key:"getPlaceWithLocation",value:function(e){return this.places.find((function(t){return t.relations.find((function(t){return t.relationTo===e&&"crm:P53_has_former_or_current_location"===t.relationType}))}))}},{key:"getActorsWithResidence",value:function(e){return this.actors.filter((function(t){return t.relations.find((function(t){return t.relationTo===e&&"crm:P74_has_current_or_former_residence"===t.relationType}))}))}}]),e}(),J=n(7),K=n.n(J);delete K.a.Icon.Default.prototype._getIconUrl,K.a.Icon.Default.mergeOptions({iconRetinaUrl:n(84),iconUrl:n(85),shadowUrl:n(86)});var Q=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],c=t[1],o=new F;return o.load().then((function(){return c(!1)})),l.a.createElement(l.a.Fragment,null,n?l.a.createElement("div",null,"Loading"):l.a.createElement(G,{store:o}))};o.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b4857134.chunk.js.map