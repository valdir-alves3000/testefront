(this.webpackJsonpweb2=this.webpackJsonpweb2||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.47c4581a.svg"},44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},50:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(41),r=a.n(c),o=(a(49),a(15)),i=a(1),m=a(24),u=(a(50),a(19)),s=a.n(u),d=function(){return l.a.createElement("div",{id:"page-home"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"})),l.a.createElement("main",null,l.a.createElement("h1",null,"Seu marketplace de coleta de res\xedduos."),l.a.createElement("p",null,"Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente."),l.a.createElement(o.b,{to:"/create-point"},l.a.createElement("span",null,l.a.createElement(m.b,null)),l.a.createElement("strong",null,"Cadastre um ponto de coleta")))))},p=a(29),E=a.n(p),f=a(42),b=a(43),h=a(22),g=a(30),v=a(12),j=a(78),O=a(79),y=a(77),S=a(18),w=a.n(S),C=w.a.create({baseURL:"http://localhost:3333"}),N=(a(74),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),u=Object(v.a)(r,2),d=u[0],p=u[1],S=Object(n.useState)([]),N=Object(v.a)(S,2),x=N[0],k=N[1],F=Object(i.e)(),U=Object(n.useState)([0,0]),z=Object(v.a)(U,2),D=z[0],I=z[1],J=Object(n.useState)({name:"",email:"",whatsapp:""}),M=Object(v.a)(J,2),P=M[0],A=M[1],B=Object(n.useState)([]),H=Object(v.a)(B,2),L=H[0],R=H[1],V=Object(n.useState)("0"),W=Object(v.a)(V,2),_=W[0],q=W[1],G=Object(n.useState)("0"),K=Object(v.a)(G,2),Q=K[0],T=K[1],X=Object(n.useState)([0,0]),Y=Object(v.a)(X,2),Z=Y[0],$=Y[1];function ee(e){var t=e.target,a=t.name,n=t.value;A(Object(g.a)(Object(g.a)({},P),{},Object(h.a)({},a,n)))}function te(){return(te=Object(f.a)(E.a.mark((function e(t){var a,n,l,c,r,o,i,m,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=P.name,n=P.email,l=P.whatsapp,c=_,r=Q,o=Object(v.a)(Z,2),i=o[0],m=o[1],u={name:a,email:n,whatsapp:l,uf:c,city:r,latitude:i,longitude:m,items:L},e.next=9,C.post("points",u);case 9:alert("Ponto de coleta criado"),F.push("/");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;I([a,n]),$([a,n])}))}),[]),Object(n.useEffect)((function(){C.get("items").then((function(e){c(e.data)}))}),[]),Object(n.useEffect)((function(){w.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((function(e){var t=e.data.map((function(e){return e.sigla}));p(t)}))}),[]),Object(n.useEffect)((function(){"0"!==_&&w.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(_,"/municipios")).then((function(e){var t=e.data.map((function(e){return e.nome}));k(t)}))}),[_]),l.a.createElement("div",{id:"page-create-point"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"}),l.a.createElement(o.b,{to:"/"},l.a.createElement(m.a,null),"Voltar para Home")),l.a.createElement("form",{onSubmit:function(e){return te.apply(this,arguments)}},l.a.createElement("h1",null,"Cadastro do ",l.a.createElement("br",null)," ponto de coleta"),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome da entidade"),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:ee})),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{type:"email",name:"email",id:"email",onChange:ee})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"whatsapp"},"Whatsapp"),l.a.createElement("input",{type:"text",name:"whatsapp",id:"whatsapp",onChange:ee})))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Endere\xe7o"),l.a.createElement("span",null,"Selecione o endere\xe7o no mapa")),l.a.createElement(j.a,{center:D,zoom:15,onclick:function(e){$([e.latlng.lat,e.latlng.lng])}},l.a.createElement(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(y.a,{position:Z})),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"uf"},"Estado (UF)"),l.a.createElement("select",{onChange:function(e){var t=e.target.value;q(t)},value:_,name:"uf",id:"uf"},l.a.createElement("option",{value:"0"},"Selecione uma UF"),d.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"city"},"Cidade"),l.a.createElement("select",{name:"city",id:"city",value:Q,onChange:function(e){var t=e.target.value;T(t)}},l.a.createElement("option",{value:"0"},"Selecione uma cidade "),x.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"\xcdtens de coleta"),l.a.createElement("span",null,"Selecione um ou mais \xedtens abaixo")),l.a.createElement("ul",{className:"items-grid"},a.map((function(e){return l.a.createElement("li",{key:e.id,onClick:function(){return function(e){if(L.findIndex((function(t){return t===e}))>=0){var t=L.filter((function(t){return t!==e}));R(t)}else R([].concat(Object(b.a)(L),[e]))}(e.id)},className:L.includes(e.id)?"selected":""},l.a.createElement("img",{src:e.image_url,alt:e.title}),l.a.createElement("span",null,e.title))})))),l.a.createElement("button",{type:"submit"},"Cadastrar ponto de coleta")))}),x=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{component:d,path:"/",exact:!0}),l.a.createElement(i.a,{component:N,path:"/create-point"}))};var k=function(){return l.a.createElement(x,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7396ad0f.chunk.js.map