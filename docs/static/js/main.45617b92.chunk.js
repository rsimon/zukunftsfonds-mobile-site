(this["webpackJsonpzukunftsfonds-mobile-site"]=this["webpackJsonpzukunftsfonds-mobile-site"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),l=n(17),o=n.n(l),c=n(3),s=n(11),u=n(1),m=Object(s.b)({key:"language",default:window.localStorage.getItem("zukunftsfonds.language")||"en"}),d=Object(s.b)({key:"searchQuery",default:""}),h=Object(s.b)({key:"searchResults",default:[]}),f=n(9),p=new function e(){var t=this;Object(f.a)(this,e),this.loadMessages=function(e){t.messages[e]=n(73)("./messages_".concat(e,".json"))},this.t=function(e){return function(n){return e in t.messages&&n in t.messages[e]?t.messages[e][n]:n}},this.messages={},this.loadMessages("de")},g=function(){var e=Object(s.d)(m);return p.t(e)},E=function(){return Object(s.d)(m)},b=function(){var e=Object(s.d)(m),t=function(e){return e.replace(/^[-,\s]+ | [-,\s]+$/g,"")};return function(n){return-1===n.indexOf("---------")?n:t("de"===e?n.split("---------")[0]:n.split("---------")[1])}},v=n(62),k=n(54),y=(n(75),{"crm:E18_Physical_Thing":"md-pin","crm:E21_Person":"md-account","crm:E74_Group":"md-accounts"}),O=function(e){var t=function(t){var n=t.index,a=t.style,r=e.results[n];return i.a.createElement("div",{className:"search-result",style:a,onClick:function(){return e.onSelect(e.results[n])}},i.a.createElement(u.Ripple,{modifier:"light-gray"}),i.a.createElement(u.Icon,{icon:y[r.crmClass]}),i.a.createElement("label",null,r.properties.title))};return i.a.createElement("div",{className:"search-results"},i.a.createElement(k.a,null,(function(n){var a=n.height,r=n.width;return i.a.createElement(v.a,{height:a,itemCount:e.results.length,itemSize:58,width:r},t)})))},w=n(152),j=n(153),S=n(148),N=n(20),P=n.n(N),z=n(25),I=n.n(z),_=n(15),M=function(e){var t=e.map((function(e){return e["@id"]}));return e.filter((function(e,n){return t.indexOf(e["@id"])===n}))},x=function(){function e(t,n){Object(f.a)(this,e),this.item=t,this.store=n}return Object(_.a)(e,[{key:"places",get:function(){var e=this,t=["crm:P74_has_current_or_former_residence","crm:OA8_begins_in","crm:OA9_ends_in"],n=this.item.relations.filter((function(e){return t.includes(e.relationType)})).map((function(t){return{label:t.label,relationType:t.relationType,resolved:e.store.getPlaceWithLocation(t.relationTo)}})),a=function(e){return n.filter((function(t){return t.relationType===e})).map((function(e){return e.resolved}))};return{begins_in:a("crm:OA8_begins_in"),ends_in:a("crm:OA9_ends_in"),has_residence:a("crm:P74_has_current_or_former_residence"),all:M(n.map((function(e){return e.resolved})))}}},{key:"actors",get:function(){var e=this.item.relations.find((function(e){return"crm:P53_has_former_or_current_location"===e.relationType}));return e?this.store.getActorsWithLocation(e.relationTo):[]}}]),e}(),A=function(e,t){return new x(e,t)},B=n(55),C=n.n(B),G=n(56),W=(n(111),n(112),function(e){return e?e.filter((function(e){return 0===e.url.indexOf("http")})):[]}),D=function(e){return W(e.depictions).length>0},T=function(e){var t=Object(r.useState)(null),n=Object(a.a)(t,2),l=n[0],o=n[1],c=Object(r.useState)(!0),s=Object(a.a)(c,2),m=s[0],d=s[1],h=Object(r.useState)(null),f=Object(a.a)(h,2),p=f[0],g=f[1],E=W(e.depictions);Object(r.useEffect)((function(){Promise.all(E.map((function(e){return t=e.url,new Promise((function(e,n){var a=new Image;a.onload=function(){return e()},a.onerror=function(e){return n({error:e,url:t})},a.src=t}));var t}))).then((function(e){return d(!1)})).catch((function(e){console.error("Error loading image(s)"),console.error(e),d(!1),g(e)}))}),[]);var b=E.map((function(e,t){return i.a.createElement("div",{className:"image-wrapper"},i.a.createElement("div",{className:"inner"},i.a.createElement("img",{src:e.url,alt:e.title,onClick:function(){return o(t)}})))}));return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("div",{className:"image-carousel loading"},i.a.createElement(u.ProgressCircular,{indeterminate:!0})),!m&&!p&&i.a.createElement("div",{className:"image-carousel"},i.a.createElement(C.a,{mouseTracking:!0,disableDotsControls:!0,disableButtonsControls:!0,autoWidth:!0,items:b})),p&&i.a.createElement("div",{className:"image-loading-failed"},"Error loading images ",p.url),null!==l&&i.a.createElement(G.a,{mainSrc:E[l].url,prevSrc:function(e){if(null!==l&&E.length>1){var t=(E.length+l-1)%E.length;return E[t].url}}(),nextSrc:function(e){if(null!==l&&E.length>1){var t=(l+1)%E.length;return E[t].url}}(),onMovePrevRequest:function(){return o((E.length+l-1)%E.length)},onMoveNextRequest:function(){return o((l+1)%E.length)},onCloseRequest:function(){return o(null)}}))},L=n(5),F=n.n(L),R=(n(113),function e(t,n,a){var r=this;Object(f.a)(this,e),this.addTo=function(e){return r.curve.addTo(e),r.handles.map((function(t){return t.addTo(e)})),r.clickBuffer.addTo(e),r},this.onClick=function(e){r.clickBuffer.addEventListener("click",e)};var i=a||{color:"#a98f54",weight:3},l=n[1]-t[1],o=n[0]-t[0],s=Math.sqrt(Math.pow(l,2)+Math.pow(o,2)),u=Math.atan2(o,l),m=-Math.PI/10,d=s/2/Math.cos(m),h=u+m,p=d*Math.cos(h)+t[1],g=["M",t,"Q",[d*Math.sin(h)+t[0],p],n];this.curve=F.a.curve(g,Object(c.a)(Object(c.a)({},i),{},{className:"curve-inner"})),this.clickBuffer=F.a.curve(g,{color:"transparent",weight:20});var E={stroke:!1,fillColor:i.handleColor||"#8a6100",fillOpacity:1,radius:5};this.handles=[F.a.circleMarker(t,E),F.a.circleMarker(n,E)]}),H=(n(45),function(e){var t=g(),n=Object(r.useRef)(),l=b(),o=e.item,c=e.store,s=e.navigator,m=A(o,c).places.all,d=m.filter((function(e){return K(e)})),h=d.map((function(e){return I()(e).geometry.coordinates.reverse()}));return Object(r.useEffect)((function(){if(n.current&&d.length>0){var e=n.current.leafletElement;e.fitBounds(function(e){var t=e.map((function(e){return P()(e)})),n=[Math.min.apply(null,t.map((function(e){return e[0]}))),Math.min.apply(null,t.map((function(e){return e[1]}))),Math.max.apply(null,t.map((function(e){return e[2]}))),Math.max.apply(null,t.map((function(e){return e[3]})))];return[[n[1],n[0]],[n[3],n[2]]]}(d),{padding:[15,15]}),2===h.length&&function(e){var t=Object(a.a)(h,2),n=t[0],r=t[1];new R(n,r).addTo(e)}(e)}}),[d,h]),i.a.createElement(Pe,{backButton:!0,className:"profile actor",title:o.properties.title,navigator:e.navigator},i.a.createElement("div",{className:"map-container"},i.a.createElement(w.a,{ref:n,zoomControl:!1,style:{height:"200px"}},i.a.createElement(j.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),d.map((function(e){return i.a.createElement(S.a,{key:e["@id"],data:e})})))),o.description.map((function(e,t){return i.a.createElement("div",{key:t,className:"description"},l(e.value))})),D(o)&&i.a.createElement(T,{depictions:o.depictions}),i.a.createElement(u.List,{className:"related places",dataSource:m,renderHeader:function(){return i.a.createElement(u.ListHeader,null,i.a.createElement(u.Icon,{icon:"md-pin"}),i.a.createElement("label",null,t("Places")))},renderRow:function(e,t){return i.a.createElement(u.ListItem,{key:t,className:"related residence",onClick:J(e,s)},i.a.createElement("span",{className:"title"},e.properties.title))}}))}),U=(n(116),{"crm:E18_Physical_Thing":function(e){var t=g(),n=b(),a=Object(r.useRef)(),l=e.item,o=e.navigator,c=e.store,s=K(l);Object(r.useEffect)((function(){a.current&&s&&a.current.leafletElement.fitBounds(function(e){var t=P()(e);return[[t[1],t[0]],[t[3],t[2]]]}(l))}),[l,s]);var m=A(l,c).actors;return i.a.createElement(Pe,{backButton:!0,className:"profile place",title:l.properties.title,navigator:e.navigator},i.a.createElement("div",{className:"map-container"},i.a.createElement(w.a,{ref:a,zoomControl:!1,attributionControl:!1},i.a.createElement(j.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s&&i.a.createElement(S.a,{data:l}))),l.description&&l.description.map((function(e,t){return i.a.createElement("div",{key:t,className:"description"},n(e.value))})),D(l)&&i.a.createElement(T,{depictions:l.depictions}),i.a.createElement(u.List,{className:"related actors",dataSource:m,renderHeader:function(){return i.a.createElement(u.ListHeader,null,i.a.createElement(u.Icon,{icon:"md-account"}),i.a.createElement("label",null,t("People")))},renderRow:function(e,t){return i.a.createElement(u.ListItem,{key:t,className:"related residence",onClick:J(e,o)},i.a.createElement("span",{className:"title"},e.properties.title))}}))},"crm:E21_Person":H,"crm:E74_Group":H}),V=function(e){return U[e.crmClass]},J=function(e,t){return function(n){return t.pushPage({component:V(e),item:e})}},K=function(e){var t,n,a;return!!e&&(!!e.geometry&&("GeometryCollection"===e.geometry.type?(null===(t=e.geometry.geometries)||void 0===t?void 0:t.length)>0&&e.geometry.geometries[0].coordinates:(null===(n=e.geometry)||void 0===n||null===(a=n.coordinates)||void 0===a?void 0:a.length)>0))},q=(n(117),function(e){var t=g(),n=Object(s.c)(d),r=Object(a.a)(n,2),l=r[0],o=r[1],c=Object(s.c)(h),m=Object(a.a)(c,2),f=m[0],p=m[1],E=function(t){var n=t.target.value.toLowerCase();if(l!==n){o(n);var a=e.store.searchAll(n);p(a)}},b=function(){o(""),p([])};return i.a.createElement(u.Page,{className:"search",renderToolbar:function(){return i.a.createElement(u.Toolbar,null,i.a.createElement("div",{className:"left"},i.a.createElement(u.BackButton,null)),i.a.createElement("div",{className:"center"},i.a.createElement(u.Input,{value:l,placeholder:t("Search"),onChange:E})),i.a.createElement("div",{className:"right"},i.a.createElement(u.ToolbarButton,null,i.a.createElement(u.Icon,{icon:"md-close",onClick:b}))))}},i.a.createElement(O,{results:f,onSelect:function(t){return e.navigator.pushPage({component:V(t),item:t})}}))}),Z=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"project-description"},'In diesem Forschungsprojekt wurden biographische Daten zu den orthodoxen Wiener SerbInnen von 1741 bis 1918, und hier zu bedeutenden Pers\xf6nlichkeiten des politischen, sozialen, wirtschaftlichen, wissenschaftlichen und kulturellen Lebens der Zeit, in den Wiener Archiven, zu ihren Wohnorten und zu ihren Wirkungsst\xe4tten in Wien recherchiert. Die biographischen Abrisse und Lokalisierungen von Wohnorten und Wirkungsst\xe4tten wurden in eine OpenAtlas Datenbank eingegeben und sind online \xfcber das "Digitale Geoportal der Geschichte der Orthodoxen in \xd6sterreich" f\xfcr interessierte InternetnutzerInnen frei abrufbar. Die Daten umfassen insgesamt 282 Personen und 256 Orte. Solch eine Forschung ist f\xfcr Wien unter anderem deshalb von gro\xdfer Bedeutung, weil die Spuren ber\xfchmter SerbInnen in Wien derzeit lediglich mit einigen wenigen Gedenktafeln im \xf6ffentlichen Raum dokumentiert sind. Mit Hilfe des Geoportals k\xf6nnen Stadtspazierg\xe4nge gezielt geplant und interessante, historische Pl\xe4tze aufgesucht werden.'),i.a.createElement("table",{className:"project-meta"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Laufzeit des Projekts:"),i.a.createElement("td",null,"1. J\xe4nner 2018-30. Juni 2019")),i.a.createElement("tr",null,i.a.createElement("td",null,"Gef\xf6rdert von:"),i.a.createElement("td",null,"Magistratsabteilung (MA) 7 \u2013Kultur, Wissenschafts-und Forschungsf\xf6rderung der Stadt Wien f\xfcr 2017")),i.a.createElement("tr",null,i.a.createElement("td",null,"Siehe dazu im Detail:"),i.a.createElement("td",null,i.a.createElement("a",{href:"https://orthodoxes-europa.at/projekte/Digitales-Geoportal-der-Geschichte-der-SerbInnen-in-Wien"},"Digitales Geoportal der Geschichte der SerbInnen in Wien")))))),$=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"project-description"},'In this project research on the biographies of the Orthodox Viennese Serbs from 1741 until 1918, i.e. significant personalities of the political, social, economic, scientific and cultural life of the time, was conducted in Viennese archives as well as on their places of residence and of work in Vienna. The biographical data and the respective localisations of places of residence and of work were embedded into an OpenAtlas database and may be accessed freely online by the general public via the "Digital Geoportal of the History of the Orthodox in Austria". The data comprises 282 personalities and 256 places. Such research is of great importance for Vienna, amongst others, because the traces of famous Serbs in Vienna are currently only documented with a few memorial plaques in public space. Based on the Geoportal specific city walks can be planned and interesting, historic places can be visited.'),i.a.createElement("table",{className:"project-meta"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Duration of the Project:"),i.a.createElement("td",null,"1 January 2018-30 June 2019")),i.a.createElement("tr",null,i.a.createElement("td",null,"Sponsored by:"),i.a.createElement("td",null,"Magistratsabteilung (MA) 7 \u2013Kultur, Wissenschafts-und Forschungsf\xf6rderung der Stadt Wien f\xfcr 2017")),i.a.createElement("tr",null,i.a.createElement("td",null,"Cf. in detail:"),i.a.createElement("td",null,i.a.createElement("a",{href:"https://orthodoxes-europa.at/projekte/Digitales-Geoportal-der-Geschichte-der-SerbInnen-in-Wien"},"Digitales Geoportal der Geschichte der SerbInnen in Wien")))))),Q={de:"SerbInnen in Wien 1741-1918",en:"Serbs in Vienna 1741-1918"},Y={de:"Ein digitales Geoportal der Geschichte der SerbInnen in Wien (1741-1918)",en:"A Digital Geoportal of the History of the Serbs in Vienna (1741-1918)"},X={de:Z,en:$},ee=function(e){var t=E();return i.a.createElement(Pe,{title:Q[t],navigator:e.navigator,backButton:!0},i.a.createElement("div",{className:"page-container"},i.a.createElement("h1",null,Y[t]),i.a.createElement("div",null,X[t])),i.a.createElement("footer",null,i.a.createElement("img",{src:"images/wienkultur_logo_RGB.png",alt:"Logo Wien Kultur"})))},te=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"project-description"},"In diesem Projekt besch\xe4ftigen wir uns mit dem schweren Los der Zivilbev\xf6lkerung im Ersten Weltkrieg (1914-1918) und hier im besonderen mit der \xf6stlichen Front \xd6sterreich-Ungarns in diesem weltumspannenden Konflikt. Mit dem Ausbruch des Ersten Weltkriegs am 28. Juli 1914 gelang es der Armee des Zarenreichs Russland zun\xe4chst, in der Bukowina und in Ostgalizien (d. h. im heutigen Polen, Rum\xe4nien und der Ukraine) tief auf das Staatsgebiet \xd6sterreich-Ungarns einzudringen. Dies hatte zur Folge, dass die dortige \u2013 zu einem betr\xe4chtlichen Teil orthodoxe \u2013 Bev\xf6lkerung floh/fliehen musste und in der Folge in andere Teile der Monarchie evakuiert werden musste. Daraufhin begann die Statthalterei von Nieder\xf6sterreich (damals das Erzherzogtum \xd6sterreich unter der Enns), zivile Fl\xfcchtlingslager \u2013 unter anderem in Oberhollabrunn \u2013 f\xfcr die eigenen Staatsb\xfcrger einzurichten."),i.a.createElement("p",{className:"project-description"},"Unser Forschungsprojekt verwendet unver\xf6ffentlichte Best\xe4nde des Archivs der griechisch-orthodoxen Kirchengemeinde zur Heiligen Dreifaltigkeit in der Metropolis von Austria (1010 Wien). Basierend auf 343 Totenbeschaubefunden zu den orthodoxen Fl\xfcchtlingen im Fl\xfcchtlingslager Oberhollabrunn k\xf6nnen wir nachvollziehen, wo die Verstorbenen geboren wurden, welchen Beruf sie hatten, aus welchen Orten sie geflohen sind etc. Dadurch entsteht ein Bild ihrer Flucht und ihres Schicksals vor unseren Augen. Dieses holen wir mit digitalen Karten und datenbankbasierten Suchfunktionen aus der Vergessenheit und machen es der interessierten \xd6ffentlichkeit zug\xe4nglich."),i.a.createElement("table",{className:"project-meta"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Laufzeit des Projekts:"),i.a.createElement("td",null,"1. Juli 2020 bis 1. August 2021")),i.a.createElement("tr",null,i.a.createElement("td",null,"Gef\xf6rdert von:"),i.a.createElement("td",null,"Zukunftsfonds der Republik \xd6sterreich")),i.a.createElement("tr",null,i.a.createElement("td",null,"Siehe dazu im Detail:"),i.a.createElement("td",null,i.a.createElement("a",{href:"https://orthodoxes-europa.at/projekte/Flucht-Gefangenschaft-Neubeginn-und-Widerstand"},"Flucht, Gefangenschaft, Neubeginn und Widerstand")))))),ne=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"project-description"},"In this project we deal with the severe fate of the civilian population in the First World War (1914-1918) and in particular with the Eastern Front of Austria-Hungary in this worldwide conflict. With the outbreak of the First World War on 28 July 1914, the army of the Tsardom of Russia first succeeded in penetrating deeply into the territory of Austria-Hungary in Bukovina and in Eastern Galicia (i.e. in today's Poland, Romania and Ukraine). As a result, the local population \u2013 to a considerable extent Orthodox \u2013 fled/had to flee and had to be evacuated to other parts of the Austro-Hungarian Monarchy. As a result, the governorship of Lower Austria (then the Archduchy of Austria below the River Enns) began to set up civilian refugee camps \u2013 amongst others in Oberhollabrunn \u2013 for their own citizens."),i.a.createElement("p",{className:"project-description"},"Our research project uses unpublished holdings of the archive of the Greek-Orthodox parish of the Holy Trinity in the Metropolis of Austria (1010 Vienna). Based on 343 post mortem examinations of the Orthodox refugees in the refugee camp Oberhollabrunn, we can trace where the deceased were born, what profession they had, from which places they fled, etc. This creates a vivid picture of their flight and their subsequent fate before our eyes. By means of digital maps and database-related search functions we bring this picture out of oblivion and make it accessible to the interested public."),i.a.createElement("table",{className:"project-meta"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Duration of the Project:"),i.a.createElement("td",null,"1 July 2020-1 August 2021")),i.a.createElement("tr",null,i.a.createElement("td",null,"Sponsored by:"),i.a.createElement("td",null,"Zukunftsfonds der Republik \xd6sterreich")),i.a.createElement("tr",null,i.a.createElement("td",null,"Cf. in detail:"),i.a.createElement("td",null,i.a.createElement("a",{href:"https://orthodoxes-europa.at/projekte/Flucht-Gefangenschaft-Neubeginn-und-Widerstand"},"Flucht, Gefangenschaft, Neubeginn und Widerstand")))))),ae={de:"Auf der Flucht in der Monarchie",en:"On the Run in the Austro-Hungarian Monarchy"},re={de:"Auf der Flucht in der Monarchie \u2013 das Schicksal der orthodoxen Fl\xfcchtlinge im Lager Oberhollabrunn (1914-1918)",en:"On the Run in the Austro-Hungarian Monarchy \u2013 the Fate of Orthodox Refugees in the Camp Oberhollabrunn (1914-1918)"},ie={de:te,en:ne},le=function(e){var t=E();return i.a.createElement(Pe,{title:ae[t],navigator:e.navigator,backButton:!0},i.a.createElement("div",{className:"page-container"},i.a.createElement("h1",null,re[t]),i.a.createElement("div",null,ie[t])),i.a.createElement("footer",null,i.a.createElement("img",{src:"images/zf_logo.png",alt:"Logo Zukunftsfonds der Republik \xd6sterreich"})))},oe=(n(118),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Sie k\xf6nnen die Datenbank entweder mit Hilfe der ",i.a.createElement("span",null,"Suchfunktion")," oder der ",i.a.createElement("span",null,"\xdcberblickskarte")," durchsuchen."),i.a.createElement("p",null,"Tippen sie das Zur\xfcck-Icon oder die R\xfccktaste ihres Ger\xe4tes um zur vorherigen Seite zu zur\xfcckzukehren."),i.a.createElement("p",null,"Benutzen sie das Hauptmen\xfc um zur Startseite, zur Suche, oder zu den Projektinformations-Seiten zu navigieren, oder um die Spracheinstellung zwischen Englisch und Deutsch umzuschalten."),i.a.createElement("h1",null,"App-Information"),i.a.createElement("p",null,"Diese Anwendung nutzt u.A. die folgenden Open Source Softwarebibliotheken und Datenquellen:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://leafletjs.com/",target:"_blank",rel:"noreferrer"},"Leaflet")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.openstreetmap.org/",target:"_blank",rel:"noreferrer"},"OpenStreetMap"))))),ce=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"You can explore the database either through the ",i.a.createElement("span",null,"Search")," function, or the ",i.a.createElement("span",null,"Overview Map"),"."),i.a.createElement("p",null,"Tap the Back icon or your device back button to return to the previous page."),i.a.createElement("p",null,"Use the main menu to go back to the start page, to the search, or the project information pages, or to toggle the language setting between English and German."),i.a.createElement("h1",null,"App Information"),i.a.createElement("p",null,"This application makes use of the following open source software libraries and data sources:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://leafletjs.com/",target:"_blank",rel:"noreferrer"},"Leaflet")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.openstreetmap.org/",target:"_blank",rel:"noreferrer"},"OpenStreetMap")))),se={de:"Hilfe",en:"Help"},ue={de:oe,en:ce},me=function(e){var t=E();return i.a.createElement(Pe,{className:"app-help",title:se[t],navigator:e.navigator,backButton:!0},i.a.createElement("div",{className:"page-container"},ue[t]))},de=n(26),he=n.n(de),fe=function(){function e(){Object(f.a)(this,e)}return Object(_.a)(e,[{key:"load",value:function(e){var t=this;return Promise.all([he.a.get("tours/".concat(e,"-track.json")),he.a.get("tours/".concat(e,"-waypoints.json"))]).then((function(e){t.track=e[0].data,t.waypoints=e[1].data,t.bounds=function(e){var t=P()(e);return[[t[1],t[0]],[t[3],t[2]]]}(t.track)}))}},{key:"getProp",value:function(e){return this.track.features[0].properties[e]}},{key:"description",get:function(){return this.getProp("description")}},{key:"duration",get:function(){return this.getProp("duration_minutes")}},{key:"image",get:function(){return this.getProp("image")}},{key:"title",get:function(){return this.getProp("title")}}]),e}(),pe=n(149),ge=n(150),Ee={radius:32,weight:1,color:"#739cff",fillColor:"#004aff",fillOpacity:.3},be={radius:5,stroke:!1,fillOpacity:1,fillColor:"#004aff"},ve=function(e){var t=e.pos.coords,n=[t.latitude,t.longitude];return i.a.createElement(pe.a,null,i.a.createElement(ge.a,Object(c.a)(Object(c.a)({},Ee),{},{center:n})),i.a.createElement(ge.a,Object(c.a)(Object(c.a)({},be),{},{center:n})))},ke=n(61),ye=(n(136),function(e){var t=e.tour.waypoints.features[e.waypoint],n=e.pos?{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[e.pos.coords.longitude,e.pos.coords.latitude]}}:null,a=n?Math.round(1e3*Object(ke.a)(n,t)):null;return i.a.createElement("div",{className:"tour-map-infopanel"},i.a.createElement("div",{className:"waypoint-image",style:{backgroundImage:"url('tours/images/".concat(t.properties.images[0],"')")}},i.a.createElement("h2",null,t.properties.title)),i.a.createElement("div",{className:"waypoint-description"},i.a.createElement("p",null,t.properties.description),i.a.createElement("div",{className:"shade-gradient"})),i.a.createElement("footer",{className:"tour-map-footer"},i.a.createElement(u.Icon,{icon:"md-walk"}),i.a.createElement("span",{className:"distance-to-waypoint"},"Distance ",a||"-","m")))}),Oe=(n(137),{color:"#000",dashArray:"6 6"}),we=function(e){var t=Object(r.useState)(0),n=Object(a.a)(t,2),l=n[0],o=n[1],s=Object(r.useState)(),u=Object(a.a)(s,2),m=u[0],d=u[1],h=Object(r.useRef)();return Object(r.useEffect)((function(){var t;h.current&&h.current.leafletElement.fitBounds(e.tour.bounds,{paddingTopLeft:[15,15],paddingBottomRight:[15,200]});var n=null===(t=navigator.geolocation)||void 0===t?void 0:t.watchPosition(d);return function(){var e;null===(e=navigator.geolocation)||void 0===e||e.clearWatch(n)}}),[]),i.a.createElement(Pe,{backButton:!0,className:"tour-gps",title:e.tour.title,navigator:e.navigator},i.a.createElement(w.a,{ref:h,zoomControl:!1,attributionControl:!1},i.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.a.createElement(S.a,Object(c.a)(Object(c.a)({},Oe),{},{data:e.tour.track})),m&&i.a.createElement(ve,{pos:m})),i.a.createElement(ye,{tour:e.tour,waypoint:l,pos:m,onNextWaypoint:function(){return o(Math.min(l+1,e.tour.waypoints.length-1))},onPrevWaypoint:function(){return o(Math.max(0,l-1))}}))},je=(n(138),{color:"#000",dashArray:"6 6"}),Se=function(e){var t=g(),n=Object(r.useRef)(),l=Object(r.useState)(),o=Object(a.a)(l,2),c=o[0],s=o[1];Object(r.useEffect)((function(){(function(e){var t=new fe;return t.load(e).then((function(){return t}))})("simulated").then(s)}),[]),Object(r.useEffect)((function(){n.current&&c&&n.current.leafletElement.fitBounds(c.bounds,{padding:[15,15]})}),[c]);return i.a.createElement(Pe,{backButton:!0,className:"tour-startpage",title:t("GPS Walking Tours"),navigator:e.navigator},c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"tour-start-header-image"},i.a.createElement("img",{src:"tours/images/waypoint-4.jpg",alt:"GPS walk header decoration"}),i.a.createElement("div",{className:"caption"},i.a.createElement("h1",null,c.title),i.a.createElement("h3",{className:"duration"},i.a.createElement(u.Icon,{icon:"md-time"})," ca. ",c.duration," ",t("Minutes")))),i.a.createElement("div",{className:"tour-description"},c.description),i.a.createElement("div",{className:"tour-overview-map"},i.a.createElement(w.a,{ref:n,zoomControl:!1,attributionControl:!1,style:{height:"200px"}},i.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.a.createElement(S.a,Object.assign({data:c.track},je))),i.a.createElement("div",{className:"clicktrap"})),i.a.createElement("div",{className:"start-buttons"},i.a.createElement(u.Button,{onClick:function(t){return function(){return e.navigator.pushPage({component:we,tour:t})}}(c)},i.a.createElement(u.Icon,{icon:"md-gps-dot"})," ",i.a.createElement("label",null,t("Start the tour"))),i.a.createElement(u.Button,{modifier:"outline",className:"outline"},i.a.createElement(u.Icon,{icon:"md-gps-off"})," ",i.a.createElement("label",null,t("View tour without GPS"))))))},Ne=(n(139),function(e){var t=Object(s.c)(m),n=Object(a.a)(t,2),r=n[0],l=n[1],o=g(),c=function(e){l(e),window.localStorage.setItem("zukunftsfonds.language",e)},d=function(t){return function(){var n=e.navigator.pages,a=n.length>0?n[n.length-1].props.component:null;t!==a?e.navigator.pushPage({component:t}):e.onClose()}};return i.a.createElement(u.Page,{className:"side-menu"},i.a.createElement(u.List,null,i.a.createElement(u.ListItem,{onClick:d(Ie)},i.a.createElement(u.Icon,{icon:"md-home"}),i.a.createElement("label",null,o("Home"))),i.a.createElement(u.ListItem,{onClick:d(q)},i.a.createElement(u.Icon,{icon:"md-search"}),i.a.createElement("label",null,o("Search")))),i.a.createElement(u.List,null,i.a.createElement(u.ListHeader,null,i.a.createElement(u.Icon,{icon:"md-info-outline"}),i.a.createElement("label",null,o("Information"))),i.a.createElement(u.ListItem,{onClick:d(me)},i.a.createElement("label",null,o("User Help & App Info"))),i.a.createElement(u.ListItem,{className:"projects"},i.a.createElement("div",null,i.a.createElement("label",null,o("Projects")),i.a.createElement("ul",null,i.a.createElement("li",{onClick:d(ee)},o("Serbs in Vienna 1741-1918")),i.a.createElement("li",{onClick:d(le)},o("Orthodox Refugees in Hollabrunn 1914-1918")))))),i.a.createElement(u.List,null,i.a.createElement(u.ListHeader,null,i.a.createElement(u.Icon,{icon:"md-walk"}),i.a.createElement("label",null,o("Walking Tours"))),i.a.createElement(u.ListItem,{onClick:d(Se)},i.a.createElement("label",null,"Oberhollabrunn"))),i.a.createElement(u.List,{className:"set-language"},i.a.createElement(u.ListHeader,null,i.a.createElement(u.Icon,{icon:"md-translate"}),i.a.createElement("label",null,o("Language"))),i.a.createElement(u.ListItem,null,i.a.createElement("label",{className:"left"},i.a.createElement(u.Radio,{inputId:"EN",name:"EN",onChange:function(){return c("en")},checked:"en"===r})),i.a.createElement("label",{htmlFor:"EN",className:"center"},"English")),i.a.createElement(u.ListItem,null,i.a.createElement("label",{className:"left"},i.a.createElement(u.Radio,{inputId:"DE",name:"DE",onChange:function(){return c("de")},checked:"de"===r})),i.a.createElement("label",{htmlFor:"DE",className:"center"},"Deutsch"))))}),Pe=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),l=n[0],o=n[1];return i.a.createElement(u.Page,{className:e.className},i.a.createElement(u.Splitter,null,i.a.createElement(u.SplitterContent,null,i.a.createElement(u.Page,{onDeviceBackButton:function(t){alert("on back"),e.navigator.popPage()},renderToolbar:function(){return i.a.createElement(u.Toolbar,null,e.backButton&&i.a.createElement(u.BackButton,null),i.a.createElement("div",{className:"center"},e.title),i.a.createElement("div",{className:"right"},i.a.createElement(u.ToolbarButton,{onClick:function(){return o(!0)}},i.a.createElement(u.Icon,{icon:"md-menu"}))))}},e.children)),i.a.createElement(u.SplitterSide,{animation:"overlay",mode:"collapse",side:"right",collapse:!0,width:"300px",isOpen:l,onClose:function(){return o(!1)}},i.a.createElement(Ne,{navigator:e.navigator,onClose:function(){return o(!1)}}))))},ze=(n(140),function(e){var t=g(),n=Object(r.useRef)();return Object(r.useEffect)((function(){if(n.current){var t=n.current.leafletElement;t.fitBounds(e.store.geoBounds),e.store.lifePaths.forEach((function(n){return function(e,t,n){var a=I()(e.begins).geometry.coordinates.reverse(),r=I()(e.ends).geometry.coordinates.reverse();new R(a,r).addTo(t).onClick(n)}(n,t,J(n.actor,e.navigator))}))}})),i.a.createElement(Pe,{className:"overview-map",title:t("Map"),backButton:!0,navigator:e.navigator},i.a.createElement("div",{className:"overview-map-container"},i.a.createElement(w.a,{ref:n,zoom:10,attributionControl:!1,style:{height:"100%"}},i.a.createElement(j.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}))))}),Ie=(n(141),function(e){var t=g(),n=b(),a=function(t){return function(){return e.navigator.pushPage({component:t})}};return i.a.createElement(Pe,{className:"splashpage",title:t("Orthodox Europe"),navigator:e.navigator},i.a.createElement("div",{className:"splash-page-container"},i.a.createElement("div",{className:"splash-image-container"},i.a.createElement("img",{className:"splash-image",src:"images/OrthodoxyInEurope.png",alt:"Orthodoxy in Europe - Map"})),i.a.createElement("div",{className:"buttons"},i.a.createElement(u.Button,{onClick:a(ze)},i.a.createElement(u.Icon,{icon:"md-globe"}),i.a.createElement("label",null,t("Map"))),i.a.createElement(u.Button,{onClick:a(q)},i.a.createElement(u.Icon,{icon:"md-search"}),i.a.createElement("label",null,t("Search")))),i.a.createElement("div",{className:"splash-message"},i.a.createElement("h1",null,t("Digital Geoportal of the History of the Orthodox in Austria")),i.a.createElement("p",null,n('Das "Digitale Geoportal der Geschichte der Orthodoxen in \xd6sterreich" hat das Ziel, die Geschichte,\n   den Glauben und die Kultur der orthodoxen Kirchen und von deren Gl\xe4ubigen in Europa, mit einem Schwerpunkt \n   auf \xd6sterreich, mit Hilfe von wissenschaftlichen Projekten zu erforschen und einer breiten \xd6ffentlichkeit \n   zug\xe4nglich zu machen. ------------ The "Digital Geoportal of the History of the Orthodox in Austria" has the \n   aim to research the history, faith and culture of the Orthodox churches and their believers in Europe, with \n   a special emphasis on Austria, based on scholarly projects and to popularise all of the aforesaid aspects in \n   the general public.'))),i.a.createElement("div",{className:"projects"},i.a.createElement("h2",null,t("Projects")),i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement(u.Button,{modifier:"large--quiet",onClick:a(ee)},t("Serbs in Vienna 1741-1918"))),i.a.createElement("li",null,i.a.createElement(u.Button,{modifier:"large--quiet",onClick:a(le)},t("Orthodox Refugees in Hollabrunn 1914-1918"))))),i.a.createElement("footer",null,i.a.createElement("strong",null,t("Imprint")),i.a.createElement("br",null),"Digitales Geoportal der Geschichte der Orthodoxen in \xd6sterreich",i.a.createElement("br",null),"Vertreten durch:",i.a.createElement("br",null),"Priv.-Doz. Mag. Dr. Mihailo Popovi\u0107, Projektleiter",i.a.createElement("br",null),"Kiningergasse 12/2/7",i.a.createElement("br",null),"1120 Wien",i.a.createElement("br",null),"\xd6sterreich",i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:mihailop@hotmail.com"},"mihailop@hotmail.com"))))}),_e=(n(142),n(143),n(151)),Me=(n(144),function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){window.onpopstate=function(){return t.current&&t.current.popPage()}}),[]),i.a.createElement(s.a,null,i.a.createElement(u.Navigator,{ref:t,renderPage:function(t,n){return i.a.createElement(t.component,Object(c.a)(Object(c.a)({},t),{},{navigator:n,key:e.key||Object(_e.a)(),store:e.store}))},initialRoute:{component:Ie,key:"SplashPage"},onPostPush:function(e){var t=e.routes.pushedRoute.component.name;window.history.pushState({name:t},"")},animation:"slide",swipeable:!0}))}),xe=(n(145),function(e){return i.a.createElement("div",{className:"loading-screen"},i.a.createElement("div",{className:"loading-wrapper"},i.a.createElement("label",null,"Loading"),i.a.createElement("div",null,i.a.createElement(u.ProgressCircular,{indeterminate:!0}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=n(14),Be=n(60),Ce=function(){function e(){Object(f.a)(this,e),this.actors=[],this.places=[],this.geoBounds=null,this.lifePaths=[],this.search=new Be.a("@id"),this.search.tokenizer={tokenize:function(e){return e.replace(/[.,'"#!$%^&*;:{}=\-_`~()]/g,"").split(/[\s,-]+/)}},this.search.addIndex(["properties","title"])}return Object(_.a)(e,[{key:"load",value:function(){var e=this,t=function(e){return he.a.get("data/items_".concat(e,".json")).then((function(e){return e.data[0].reduce((function(e,t){return e.concat(t.features)}),[])}))};return Promise.all([t("actor"),t("place")]).then((function(t){var n=Object(a.a)(t,2),r=n[0],i=n[1];e.actors=r,e.places=i,e.geoBounds=function(e){var t=e.reduce((function(e,t){var n=t.geometry.geometries[0];return n.coordinates?Array.isArray(n.coordinates[0])?Array.isArray(n.coordinates[0][0])?e.concat.apply(e,Object(Ae.a)(n.coordinates)):e.concat(n.coordinates):e.concat([n.coordinates]):e}),[]),n=t.map((function(e){return e[0]})),a=t.map((function(e){return e[1]})),r=Math.min.apply(Math,Object(Ae.a)(n)),i=Math.max.apply(Math,Object(Ae.a)(n));return[[Math.min.apply(Math,Object(Ae.a)(a)),r],[Math.max.apply(Math,Object(Ae.a)(a)),i]]}(i),e.lifePaths=function(e,t){return t.reduce((function(t,n){var a=A(n,e).places,r=a.begins_in,i=a.ends_in;return r=r.filter((function(e){return K(e)})),i=i.filter((function(e){return K(e)})),r.length>0&&i.length>0?[].concat(Object(Ae.a)(t),[{actor:n,begins:r[0],ends:i[0]}]):t}),[])}(e,r),e.search.addDocuments([].concat(Object(Ae.a)(r),Object(Ae.a)(i)))}))}},{key:"findById",value:function(e){return this.items.find((function(t){return t["@id"]===e}))}},{key:"searchAll",value:function(e){return this.search.search(e.toLowerCase())}},{key:"getPlaceWithLocation",value:function(e){return this.places.find((function(t){return t.relations.find((function(t){return t.relationTo===e&&"crm:P53_has_former_or_current_location"===t.relationType}))}))}},{key:"getActorsWithLocation",value:function(e){var t=["crm:OA8_begins_in","crm:OA9_ends_in","crm:P74_has_current_or_former_residence"];return this.actors.filter((function(n){return n.relations.find((function(n){return n.relationTo===e&&t.includes(n.relationType)}))}))}}]),e}();delete F.a.Icon.Default.prototype._getIconUrl,F.a.Icon.Default.mergeOptions({iconRetinaUrl:"images/leaflet/marker-icon-2x.png",iconUrl:"images/leaflet/marker-icon.png",shadowUrl:"images/leaflet/marker-shadow.png"});var Ge=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],l=t[1],o=new Ce;return o.load().then((function(){return l(!1)})),i.a.createElement(i.a.Fragment,null,n?i.a.createElement(xe,null):i.a.createElement(Me,{store:o}))};o.a.render(i.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){},73:function(e,t,n){var a={"./messages_de.json":74};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=73},74:function(e){e.exports=JSON.parse('{"About Us":"\xdcber Uns","GPS Walking Tours":"GPS Spazierg\xe4nge","Home":"Startseite","Imprint":"Impressum","Language":"Sprache","Map":"Karte","Minutes":"Minuten","Orthodox Europe":"Orthodoxes Europa","People":"Personen","Places":"Orte","Projects":"Projekte","Search":"Suche","Start the tour":"GPS Tour Starten","User Help & App Info":"Benutzerhilfe und App-Information","View tour without GPS":"Tour ohne GPS Ansehen","Walking Tours":"Spazierg\xe4nge","Digital Geoportal of the History of the Orthodox in Austria":"Digitales Geoportal der Geschichte der Orthodoxen in \xd6sterreich","Serbs in Vienna 1741-1918":"SerbInnen in Wien 1741-1918","Orthodox Refugees in Hollabrunn 1914-1918":"Auf der Flucht in der Monarchie"}')},75:function(e,t,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.45617b92.chunk.js.map