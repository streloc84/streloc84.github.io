(this.webpackJsonpwhoiam=this.webpackJsonpwhoiam||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e){e.exports=JSON.parse('[{"id":1388534400000,"author":"Pete Hunt","text":"Hey there!"},{"id":1420070400000,"author":"Paul O\u2019Shannessy","text":"React is *great*!"},{"id":1464988635157,"author":"ben","text":"*abc*"},{"id":1464988636500,"author":"ben","text":"*abc*"},{"id":1464988717637,"author":"evil","text":"<a href=\\"javascript:alert(1)\\">alert(1)</a>"}]')},19:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),r=a(4),l=a.n(r);a(16);var c=function(){return m.a.createElement("header",{className:"container__header"},m.a.createElement("p",{className:"container__hello"},"\u041f\u0440\u0438\u0432\u0435\u0442! \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043d\u0434\u0440\u0435\u0439 \u0438 \u044f \u0443\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439"),m.a.createElement("div",{className:"container__selfie"},m.a.createElement("img",{className:"img__selfie",src:"img/selfie.jpg",srcSet:"img/selfie.webp",alt:"selfie"})))};var o=function(){return m.a.createElement("footer",{className:"container__footer"},m.a.createElement("a",{href:"https://github.com/streloc84"},m.a.createElement("img",{src:"img/iconmonstr-github-3.svg",alt:"github link"})),m.a.createElement("a",{href:"https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B1%D0%B5%D1%81%D0%BF%D0%B0%D0%BB%D0%BE%D0%B2-44270217a/"},m.a.createElement("img",{src:"img/iconmonstr-linkedin-1.svg",alt:"linkedin link"})),m.a.createElement("a",{href:"https://www.instagram.com/streloc84"},m.a.createElement("img",{src:"img/iconmonstr-instagram-11.svg",alt:"instagram link"})))},s=(a(17),a(1)),i=a(2),u=a(8),h=a(5),d=a(6),E=a(9),p=a(7),f=a(10),g=m.a.createContext({num1:{name:"Andrey",comment:"\u0442\u0430\u0440\u0430\u0442\u0430\u0440"},num2:{name:"Vasiliy",comment:"nnnnn"}}),b=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(E.a)(this,Object(p.a)(t).call(this))).addComment=function(){e.props.num;e.setState({comments:[].concat(Object(u.a)(e.state.comments),[{id:e.state.comments.length?e.state.comments.reduce((function(e,t){return e.id>t.id?e:t})).id+1:1,name:e.state.form.name,comment:e.state.form.comment,date:new Date}]),form:{name:"",comment:""}},(function(){return localStorage.setItem("state"+e.props.num,JSON.stringify(e.state))}))},e.removeComment=function(t){e.setState({comments:e.state.comments.filter((function(e){return e.id!==t}))},(function(){return localStorage.setItem("state"+e.props.num,JSON.stringify(e.state))}))},e.handleChange=function(t){e.setState({form:Object(i.a)({},e.state.form,Object(s.a)({},t.target.name,t.target.value))})},e.state={comments:[],form:{name:"",comment:""}},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("state")&&this.setState(Object(i.a)({},JSON.parse(localStorage.getItem("state"+this.props.num))));var e="state"+this.props.num;this.context[e]=this.state.form,console.log(this.context[e])}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"Comment"},this.state.comments.map((function(t){return m.a.createElement("div",{key:t.id},m.a.createElement("span",{style:{fontStyle:"italic"}},t.id," - "," "),m.a.createElement("strong",null,t.name,": "),m.a.createElement("span",null,t.comment),m.a.createElement("button",{onClick:e.removeComment.bind(null,t.id)},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})),m.a.createElement("div",null,m.a.createElement("ul",{className:"wrapper"},m.a.createElement("li",{className:"form-row"},m.a.createElement("label",{className:"nameComment"},"\u0418\u043c\u044f:"," ",m.a.createElement("input",{type:"text",value:this.state.form.name,name:"name",onChange:this.handleChange}))),m.a.createElement("li",{className:"form-row"},m.a.createElement("label",{className:"textComment"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:"," ",m.a.createElement("textarea",{name:"comment",value:this.state.form.comment,onChange:this.handleChange}))),m.a.createElement("button",{onClick:this.addComment},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"))))}}]),t}(n.Component);b.contextType=g;var v=b;var N=function(){return m.a.createElement("div",null,m.a.createElement("section",{className:"about",itemScope:!0,itemType:"http://schema.org/Person"},m.a.createElement("p",null,"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u043e \u0441\u0435\u0431\u0435:",m.a.createElement("br",null),"\u041c\u043d\u0435 35 \u043b\u0435\u0442.",m.a.createElement("span",{itemProp:"address"}," \u042f \u0436\u0438\u0432\u0443 \u0432 \u0421\u0430\u043c\u0430\u0440\u0435."),m.a.createElement("span",{itemProp:"alumniOf"}," ","\u0423 \u043c\u0435\u043d\u044f \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435(alma mater - \u0423\u0440\u0413\u042d\u0423) \u0438 \u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435."," "),"\u0417\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0441\u043f\u043e\u0440\u0442\u043e\u043c (\u0436\u0435\u043b\u0435\u0437\u043e \u0438 \u0431\u0435\u0433), \u043b\u044e\u0431\u043b\u044e \u0447\u0438\u0442\u0430\u0442\u044c \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044c\u0441\u044f. \u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u044f \u0443\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439. \u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u043f\u0440\u043e\u0431\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430 \u0434\u043b\u044f \u043e\u0442\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0440\u0430\u0437\u043d\u044b\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432."),m.a.createElement("input",{type:"checkbox",id:"hd-1",className:"hide"}),m.a.createElement("label",{htmlFor:"hd-1"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),m.a.createElement(v,{num:"0"})),m.a.createElement("section",{className:"about"},m.a.createElement("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0441\u044c:"),m.a.createElement("input",{type:"checkbox",id:"hd-2",className:"hide"}),m.a.createElement("label",{htmlFor:"hd-2"},"Roadmap \u043e\u0442 \u0443\u0432\u0430\u0436\u0430\u0435\u043c\u043e\u0433\u043e"," ",m.a.createElement("a",{href:"https://github.com/kamranahmedse/kamranahmedse.github.io"},"kamranahmedse")),m.a.createElement("div",null,m.a.createElement("img",{src:"img/frontendScheme.png",alt:"\u0441\u0445\u0435\u043c\u0430_\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f",className:"scheme__about",srcSet:"img\\frontendScheme.webp"})),m.a.createElement("input",{type:"checkbox",id:"hd-4",className:"hide"}),m.a.createElement("label",{htmlFor:"hd-4"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),m.a.createElement(v,{num:"1"})))};var y=function(){return m.a.createElement("section",{className:"about"},m.a.createElement("p",null,"\u0421\u0434\u0435\u043b\u0430\u043b \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u044f\u0442\u044c-\u0442\u0430\u043a\u0438 \u043d\u0430 React",m.a.createElement("br",null),"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 navigator.geolocation (\u0438\u043b\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e). \u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u044f\u043d\u0435\u0442 \u043f\u043e API \u0441 metaweather.com",m.a.createElement("br",null),m.a.createElement("a",{href:"https://streloc84.github.io/weather/"},"https://streloc84.github.io/weather/"),m.a.createElement("br",null)),m.a.createElement("div",null),m.a.createElement("input",{type:"checkbox",id:"hd-3",className:"hide"}),m.a.createElement("label",{htmlFor:"hd-3"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),m.a.createElement(v,{num:"2"}))};a(18),m.a.createContext("yellow");var k=function(){return m.a.createElement("body",null,m.a.createElement("div",{className:"container"},m.a.createElement(c,null),m.a.createElement("main",null,m.a.createElement(N,null),m.a.createElement(y,null)),m.a.createElement(o,null)))};l.a.render(m.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.05b2474a.chunk.js.map