(this["webpackJsonpzukunftsfonds-mobile-site"]=this["webpackJsonpzukunftsfonds-mobile-site"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),l=n.n(r),i=n(14),o=n.n(i),c=n(4),s=n(9),u=n(1),m=Object(s.b)({key:"language",default:window.localStorage.getItem("zukunftsfonds.language")||"en"}),d=Object(s.b)({key:"searchQuery",default:""}),h=Object(s.b)({key:"searchResults",default:[]}),f=n(8),p=new function e(){var t=this;Object(f.a)(this,e),this.loadMessages=function(e){t.messages[e]=n(68)("./messages_".concat(e,".json"))},this.t=function(e){return function(n){return e in t.messages&&n in t.messages[e]?t.messages[e][n]:n}},this.messages={},this.loadMessages("de")},g=function(){var e=Object(s.d)(m);return p.t(e)},E=function(){var e=Object(s.d)(m);return function(t){return-1===t.indexOf("------------")?t:"de"===e?t.split("------------")[0].trim():t.split("------------")[1].trim()}},b=n(56),v=n(47),k=(n(70),{"crm:E18_Physical_Thing":"md-pin","crm:E21_Person":"md-account","crm:E74_Group":"md-accounts"}),O=function(e){var t=function(t){var n=t.index,a=t.style,r=e.results[n];return l.a.createElement("div",{className:"search-result",style:a,onClick:function(){return e.onSelect(e.results[n])}},l.a.createElement(u.Ripple,{modifier:"light-gray"}),l.a.createElement(u.Icon,{icon:k[r.crmClass]}),l.a.createElement("label",null,r.properties.title))};return l.a.createElement("div",{className:"search-results"},l.a.createElement(v.a,null,(function(n){var a=n.height,r=n.width;return l.a.createElement(b.a,{height:a,itemCount:e.results.length,itemSize:58,width:r},t)})))},y=n(16),j=function(e){var t=e.map((function(e){return e["@id"]}));return e.filter((function(e,n){return t.indexOf(e["@id"])===n}))},_=function(){function e(t,n){Object(f.a)(this,e),this.item=t,this.store=n}return Object(y.a)(e,[{key:"places",get:function(){var e=this,t=["crm:P74_has_current_or_former_residence","crm:OA8_begins_in","crm:OA9_ends_in"],n=this.item.relations.filter((function(e){return t.includes(e.relationType)})).map((function(t){return{label:t.label,relationType:t.relationType,resolved:e.store.getPlaceWithLocation(t.relationTo)}})),a=function(e){return n.filter((function(t){return t.relationType===e})).map((function(e){return e.resolved}))};return{begins_in:a("crm:OA8_begins_in"),ends_in:a("crm:OA9_ends_in"),has_residence:a("crm:P74_has_current_or_former_residence"),all:j(n.map((function(e){return e.resolved})))}}},{key:"actors",get:function(){var e=this.item.relations.find((function(e){return"crm:P53_has_former_or_current_location"===e.relationType}));return e?this.store.getActorsWithLocation(e.relationTo):[]}}]),e}(),S=function(e,t){return new _(e,t)},w=n(48),N=n.n(w),I=n(49),P=(n(106),n(107),function(e){return e?e.filter((function(e){return 0===e.url.indexOf("http")})):[]}),L=function(e){return P(e.depictions).length>0},G=function(e){var t=Object(r.useState)(null),n=Object(a.a)(t,2),i=n[0],o=n[1],c=Object(r.useState)(!0),s=Object(a.a)(c,2),u=s[0],m=s[1],d=P(e.depictions);Promise.all(d.map((function(e){return t=e.url,new Promise((function(e,n){var a=new Image;a.src=t,a.onload=function(){return e()},a.onerror=function(){return n()}}));var t}))).then((function(){return m(!1)}));var h=d.map((function(e,t){return l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("div",{className:"inner"},l.a.createElement("img",{src:e.url,alt:e.title,onClick:function(){return o(t)}})))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"image-carousel"},!u&&l.a.createElement(N.a,{mouseTracking:!0,disableDotsControls:!0,disableButtonsControls:!0,autoWidth:!0,items:h})),null!==i&&l.a.createElement(I.a,{mainSrc:d[i].url,prevSrc:function(e){if(null!==i&&d.length>0){var t=(d.length+i-1)%d.length;return d[t].url}}(),nextSrc:function(e){if(null!==i&&d.length>0){var t=(i+1)%d.length;return d[t].url}}(),onMovePrevRequest:function(){return o((d.length+i-1)%d.length)},onMoveNextRequest:function(){return o((i+1)%d.length)},onCloseRequest:function(){return o(null)}}))},x=(n(38),function(e){var t=g(),n=E(),a=e.item,r=e.store,i=e.navigator,o=S(a,r).places.all;return l.a.createElement(Q,{backButton:!0,className:"profile actor",title:a.properties.title,navigator:e.navigator},a.description.map((function(e,t){return l.a.createElement("div",{key:t,className:"description"},n(e.value))})),L(a)&&l.a.createElement(G,{depictions:a.depictions}),l.a.createElement(u.List,{className:"related places",dataSource:o,renderHeader:function(){return l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-pin"}),l.a.createElement("label",null,t("Places")))},renderRow:function(e,t){return l.a.createElement(u.ListItem,{key:t,className:"related residence",onClick:H(e,i)},l.a.createElement("span",{className:"title"},e.properties.title))}}))}),C=n(143),D=n(145),W=n(144),T=n(51),z=n.n(T),A=(n(110),{"crm:E18_Physical_Thing":function(e){var t=g(),n=E(),a=Object(r.useRef)(),i=e.item,o=e.navigator,c=e.store,s=R(i);Object(r.useEffect)((function(){a.current&&s&&a.current.leafletElement.fitBounds(function(e){var t=z()(e);return[[t[1],t[0]],[t[3],t[2]]]}(i))}),[i,s]);var m=S(i,c).actors;return l.a.createElement(Q,{backButton:!0,className:"profile place",title:i.properties.title,navigator:e.navigator},l.a.createElement("div",{className:"map-container"},l.a.createElement(C.a,{ref:a,zoomControl:!1,style:{height:"200px"}},l.a.createElement(D.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s&&l.a.createElement(W.a,{data:i}))),i.description&&i.description.map((function(e,t){return l.a.createElement("div",{key:t,className:"description"},n(e.value))})),L(i)&&l.a.createElement(G,{depictions:i.depictions}),l.a.createElement(u.List,{className:"related actors",dataSource:m,renderHeader:function(){return l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-account"}),l.a.createElement("label",null,t("People")))},renderRow:function(e,t){return l.a.createElement(u.ListItem,{key:t,className:"related residence",onClick:H(e,o)},l.a.createElement("span",{className:"title"},e.properties.title))}}))},"crm:E21_Person":x,"crm:E74_Group":x}),B=function(e){return A[e.crmClass]},H=function(e,t){return function(n){return t.pushPage({component:B(e),item:e})}},R=function(e){var t,n,a;return!!e&&(!!e.geometry&&("GeometryCollection"===e.geometry.type?(null===(t=e.geometry.geometries)||void 0===t?void 0:t.length)>0&&e.geometry.geometries[0].coordinates:(null===(n=e.geometry)||void 0===n||null===(a=n.coordinates)||void 0===a?void 0:a.length)>0))},M=(n(113),function(e){var t=g(),n=Object(s.d)(d),a=Object(s.e)(d),r=Object(s.d)(h),i=Object(s.e)(h),o=function(t){var r=t.target.value.toLowerCase();if(n!==r){a(r);var l=e.store.searchAll(r);i(l)}},c=function(){a(""),i([])};return l.a.createElement(u.Page,{className:"search",renderToolbar:function(){return l.a.createElement(u.Toolbar,null,l.a.createElement("div",{className:"left"},l.a.createElement(u.BackButton,null)),l.a.createElement("div",{className:"center"},l.a.createElement(u.Input,{value:n,placeholder:t("Search"),onChange:o})),l.a.createElement("div",{className:"right"},l.a.createElement(u.ToolbarButton,null,l.a.createElement(u.Icon,{icon:"md-close",onClick:c}))))}},l.a.createElement(O,{results:r,onSelect:function(t){return e.navigator.pushPage({component:B(t),item:t})}}))}),F=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"project-description"},'In diesem Forschungsprojekt wurden biographische Daten zu den orthodoxen Wiener SerbInnen von 1741 bis 1918, und hier zu bedeutenden Pers\xf6nlichkeiten des politischen, sozialen, wirtschaftlichen, wissenschaftlichen und kulturellen Lebens der Zeit, in den Wiener Archiven, zu ihren Wohnorten und zu ihren Wirkungsst\xe4tten in Wien recherchiert. Die biographischen Abrisse und Lokalisierungen von Wohnorten und Wirkungsst\xe4tten wurden in eine OpenAtlas Datenbank eingegeben und sind online \xfcber das "Digitale Geoportal der Geschichte der Orthodoxen in \xd6sterreich" f\xfcr interessierte InternetnutzerInnen frei abrufbar. Die Daten umfassen insgesamt 282 Personen und 256 Orte. Solch eine Forschung ist f\xfcr Wien unter anderem deshalb von gro\xdfer Bedeutung, weil die Spuren ber\xfchmter SerbInnen in Wien derzeit lediglich mit einigen wenigen Gedenktafeln im \xf6ffentlichen Raum dokumentiert sind. Mit Hilfe des Geoportals k\xf6nnen Stadtspazierg\xe4nge gezielt geplant und interessante, historische Pl\xe4tze aufgesucht werden.'),l.a.createElement("table",{className:"project-meta"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Laufzeit des Projekts:"),l.a.createElement("td",null,"1. J\xe4nner 2018-30. Juni 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,"Gef\xf6rdert von:"),l.a.createElement("td",null,"Magistratsabteilung (MA) 7 \u2013Kultur, Wissenschafts-und Forschungsf\xf6rderung der Stadt Wien f\xfcr 2017")),l.a.createElement("tr",null,l.a.createElement("td",null,"Siehe dazu im Detail:"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://orthodoxes-europa.at/projekte/Digitales-Geoportal-der-Geschichte-der-SerbInnen-in-Wien"},"Digitales Geoportal der Geschichte der SerbInnen in Wien")))))),V=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"project-description"},'In this project research on the biographies of the Orthodox Viennese Serbs from 1741 until 1918, i.e. significant personalities of the political, social, economic, scientific and cultural life of the time, was conducted in Viennese archives as well as on their places of residence and of work in Vienna. The biographical data and the respective localisations of places of residence and of work were embedded into an OpenAtlas database and may be accessed freely online by the general public via the "Digital Geoportal of the History of the Orthodox in Austria". The data comprises 282 personalities and 256 places. Such research is of great importance for Vienna, amongst others, because the traces of famous Serbs in Vienna are currently only documented with a few memorial plaques in public space. Based on the Geoportal specific city walks can be planned and interesting, historic places can be visited.'),l.a.createElement("table",{className:"project-meta"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Duration of the Project:"),l.a.createElement("td",null,"1 January 2018-30. June 2019")),l.a.createElement("tr",null,l.a.createElement("td",null,"Sponsored by:"),l.a.createElement("td",null,"Magistratsabteilung (MA) 7 \u2013Kultur, Wissenschafts-und Forschungsf\xf6rderung der Stadt Wien f\xfcr 2017")),l.a.createElement("tr",null,l.a.createElement("td",null,"Cf. in detail:"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://orthodoxes-europa.at/projekte/Digitales-Geoportal-der-Geschichte-der-SerbInnen-in-Wien"},"Digitales Geoportal der Geschichte der SerbInnen in Wien")))))),U={de:"SerbInnen in Wien 1741-1918",en:"Serbs in Vienna 1741-1918"},J={de:"Ein digitales Geoportal der Geschichte der SerbInnen in Wien (1741-1918)",en:"A Digital Geoportal of the History of the Serbs in Vienna (1741-1918)"},q={de:F,en:V},K=function(e){var t=Object(s.d)(m);return l.a.createElement(Q,{title:U[t],navigator:e.navigator,backButton:!0},l.a.createElement("div",{className:"page-container"},l.a.createElement("h1",null,J[t]),l.a.createElement("div",null,q[t])),l.a.createElement("footer",null,l.a.createElement("img",{src:"images/wienkultur_logo_RGB.png",alt:"Logo Wien Kultur"})))},Z=(n(114),function(e){var t=Object(s.c)(m),n=Object(a.a)(t,2),r=n[0],i=n[1],o=g(),c=function(e){i(e),window.localStorage.setItem("zukunftsfonds.language",e)},d=function(t){return function(){return e.navigator.pushPage({component:t})}};return l.a.createElement(u.Page,{className:"side-menu"},l.a.createElement(u.List,null,l.a.createElement(u.ListItem,{onClick:d($)},l.a.createElement(u.Icon,{icon:"md-home"}),l.a.createElement("label",null,o("Home"))),l.a.createElement(u.ListItem,{onClick:d(M)},l.a.createElement(u.Icon,{icon:"md-search"}),l.a.createElement("label",null,o("Search")))),l.a.createElement(u.List,null,l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-info-outline"}),l.a.createElement("label",null,o("Information"))),l.a.createElement(u.ListItem,null,l.a.createElement("label",null,o("Help"))),l.a.createElement(u.ListItem,{className:"projects"},l.a.createElement("div",null,l.a.createElement("label",null,o("Projects")),l.a.createElement("ul",null,l.a.createElement("li",{onClick:d(K)},o("Serbs in Vienna 1741-1918")),l.a.createElement("li",null,"Oberhollabrunn"))))),l.a.createElement(u.List,null,l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-walk"}),l.a.createElement("label",null,o("Walking Tours"))),l.a.createElement(u.ListItem,{onClick:function(){return new Promise((function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){return e(t)}),(function(){return t()})):t()})).then((function(e){return console.log(e)})).catch((function(){return console.log("rejected or not available")}))}},l.a.createElement("label",null,"Oberhollabrunn"))),l.a.createElement(u.List,{className:"set-language"},l.a.createElement(u.ListHeader,null,l.a.createElement(u.Icon,{icon:"md-translate"}),l.a.createElement("label",null,o("Language"))),l.a.createElement(u.ListItem,null,l.a.createElement("label",{className:"left"},l.a.createElement(u.Radio,{inputId:"EN",name:"EN",onChange:function(){return c("en")},checked:"en"===r})),l.a.createElement("label",{htmlFor:"EN",className:"center"},"English")),l.a.createElement(u.ListItem,null,l.a.createElement("label",{className:"left"},l.a.createElement(u.Radio,{inputId:"DE",name:"DE",onChange:function(){return c("de")},checked:"de"===r})),l.a.createElement("label",{htmlFor:"DE",className:"center"},"Deutsch"))))}),Q=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),i=n[0],o=n[1];return l.a.createElement(u.Page,{className:e.className},l.a.createElement(u.Splitter,null,l.a.createElement(u.SplitterContent,null,l.a.createElement(u.Page,{renderToolbar:function(){return l.a.createElement(u.Toolbar,null,e.backButton&&l.a.createElement(u.BackButton,null),l.a.createElement("div",{className:"center"},e.title),l.a.createElement("div",{className:"right"},l.a.createElement(u.ToolbarButton,{onClick:function(){return o(!0)}},l.a.createElement(u.Icon,{icon:"md-menu"}))))}},e.children)),l.a.createElement(u.SplitterSide,{animation:"overlay",mode:"collapse",side:"right",collapse:!0,width:"300px",isOpen:i,onClose:function(){return o(!1)}},l.a.createElement(Z,{navigator:e.navigator}))))},$=(n(115),function(e){var t=g(),n=E(),a=function(t){return function(){return e.navigator.pushPage({component:t})}};return l.a.createElement(Q,{title:t("Orthodox Europe"),navigator:e.navigator},l.a.createElement("div",{className:"splash-page-container"},l.a.createElement("div",{className:"splash-image-container"},l.a.createElement("img",{className:"splash-image",src:"images/OrthodoxyInEurope.png",alt:"Orthodoxy in Europe - Map"})),l.a.createElement("div",{className:"buttons"},l.a.createElement(u.Button,{modifier:"large",onClick:a(M)},l.a.createElement(u.Icon,{icon:"md-search"}),l.a.createElement("label",null,t("Search")))),l.a.createElement("div",{className:"splash-message"},l.a.createElement("h1",null,t("Digital Geoportal of the History of the Orthodox in Austria")),l.a.createElement("p",null,n('Das "Digitale Geoportal der Geschichte der Orthodoxen in \xd6sterreich" hat das Ziel, die Geschichte,\n   den Glauben und die Kultur der orthodoxen Kirchen und von deren Gl\xe4ubigen in Europa, mit einem Schwerpunkt \n   auf \xd6sterreich, mit Hilfe von wissenschaftlichen Projekten zu erforschen und einer breiten \xd6ffentlichkeit \n   zug\xe4nglich zu machen. ------------ The "Digital Geoportal of the History of the Orthodox in Austria" has the \n   aim to research the history, faith and culture of the Orthodox churches and their believers in Europe, with \n   a special emphasis on Austria, based on scholarly projects and to popularise all of the aforesaid aspects in \n   the general public.'))),l.a.createElement("div",{className:"projects"},l.a.createElement("h2",null,t("Projects")),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(u.Button,{modifier:"large--quiet",onClick:a(K)},t("Serbs in Vienna 1741-1918"))))),l.a.createElement("footer",null)))}),X=(n(116),n(117),n(142)),Y=(n(118),function(e){return l.a.createElement(s.a,null,l.a.createElement(u.Navigator,{renderPage:function(t,n){return l.a.createElement(t.component,Object(c.a)(Object(c.a)({},t),{},{navigator:n,key:e.key||Object(X.a)(),store:e.store}))},initialRoute:{component:$,key:"SplashPage"},animation:"slide",swipeable:!0}))}),ee=(n(119),function(e){return l.a.createElement("div",{className:"loading-screen"},l.a.createElement("div",{className:"loading-wrapper"},l.a.createElement("label",null,"Loading"),l.a.createElement("div",null,l.a.createElement(u.ProgressCircular,{indeterminate:!0}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(21),ne=n(54),ae=n.n(ne),re=n(55),le=function(){function e(){Object(f.a)(this,e),this.actors=[],this.places=[],this.search=new re.a("@id"),this.search.tokenizer={tokenize:function(e){return e.split(/[\s,-]+/)}},this.search.addIndex(["properties","title"])}return Object(y.a)(e,[{key:"load",value:function(){var e=this,t=function(e){return ae.a.get("data/items_".concat(e,".json")).then((function(e){return e.data[0].reduce((function(e,t){return e.concat(t.features)}),[])}))};return Promise.all([t("actor"),t("place")]).then((function(t){var n=Object(a.a)(t,2),r=n[0],l=n[1];e.actors=r,e.places=l,e.search.addDocuments([].concat(Object(te.a)(r),Object(te.a)(l)))}))}},{key:"findById",value:function(e){return this.items.find((function(t){return t["@id"]===e}))}},{key:"searchAll",value:function(e){return this.search.search(e.toLowerCase())}},{key:"getPlaceWithLocation",value:function(e){return this.places.find((function(t){return t.relations.find((function(t){return t.relationTo===e&&"crm:P53_has_former_or_current_location"===t.relationType}))}))}},{key:"getActorsWithLocation",value:function(e){var t=["crm:OA8_begins_in","crm:OA9_ends_in","crm:P74_has_current_or_former_residence"];return this.actors.filter((function(n){return n.relations.find((function(n){return n.relationTo===e&&t.includes(n.relationType)}))}))}}]),e}(),ie=n(10),oe=n.n(ie);delete oe.a.Icon.Default.prototype._getIconUrl,oe.a.Icon.Default.mergeOptions({iconRetinaUrl:n(136),iconUrl:n(137),shadowUrl:n(138)});var ce=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=new le;return o.load().then((function(){return i(!1)})),l.a.createElement(l.a.Fragment,null,n?l.a.createElement(ee,null):l.a.createElement(Y,{store:o}))};o.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){},57:function(e,t,n){e.exports=n(139)},68:function(e,t,n){var a={"./messages_de.json":69};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=68},69:function(e){e.exports=JSON.parse('{"About Us":"\xdcber Uns","Help":"Hilfe","Home":"Startseite","Language":"Sprache","Orthodox Europe":"Orthodoxes Europa","People":"Personen","Places":"Orte","Projects":"Projekte","Search":"Suche","Walking Tours":"Spazierg\xe4nge","Digital Geoportal of the History of the Orthodox in Austria":"Digitales Geoportal der Geschichte der Orthodoxen in \xd6sterreich","Serbs in Vienna 1741-1918":"SerbInnen in Wien 1741-1918"}')},70:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.131948b4.chunk.js.map