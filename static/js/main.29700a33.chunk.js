(this["webpackJsonpfinlandchinanews-client-app"]=this["webpackJsonpfinlandchinanews-client-app"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a(13),i=a(20),s=a(15),o=a(14),u=a(22),m=a(16),h=a(26),p=a(32),d=a(9),g=a(7),f=a(74).stringify;var E=a(12);a(74).stringify;function b(e){return{type:"article_info",payload:e}}function y(e){return function(t){t(b(e))}}function v(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t={method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}};return function(a){return console.log("fetching article"),fetch("https://aqueous-coast-74759.herokuapp.com/getArticle/"+e,t).then((function(e){return e.json().then((function(t){return{article:t,response:e}}))})).then((function(e){var t=e.article;if(200!==e.response.status)return console.log("Article not received"),Promise.reject(t);console.log("gotten article"),console.log(t),a(b(t))})).catch((function(e){return console.log(e)}))}}function A(){var e={method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}};return function(t){return fetch("https://aqueous-coast-74759.herokuapp.com/getArticles",e).then((function(e){return e.json().then((function(t){return{articles:t,response:e}}))})).then((function(e){var a=e.articles;if(200!==e.response.status)return console.log("Articles not received"),Promise.reject(a);t({type:"articles_received",articles:a})})).catch((function(e){return console.log(e)}))}}var w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getArticles()}},{key:"renderArticle",value:function(e){this.props.gotoArticle(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,this.props.articles.map((function(t,a){return r.a.createElement("div",{key:a},(""===e.props.articleFilter||t.title.toLowerCase().includes(e.props.articleFilter))&&r.a.createElement(g.a,{className:"mt-4",style:{border:"none"}},r.a.createElement(g.a.Title,{className:"mt-3 ml-5",style:{fontSize:"1.5rem"}},t.title),r.a.createElement(d.a,null,r.a.createElement("a",{className:"ml-3"},new Date(t.date).toDateString()),r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),e.stopPropagation()},style:{color:"gray",marginLeft:"2rem",fontWeight:"bold"}},t.tags)),r.a.createElement(g.a.Body,{className:"row"},r.a.createElement(g.a.Img,{onClick:function(){return console.log("img clicked")},className:"img-fluid col-md-4",style:{maxHeight:"20rem",width:"auto",objectFit:"cover"},src:t.img_url})," ",r.a.createElement(g.a.Text,{className:"col-md-5 m-2"},t.lead),r.a.createElement(h.b,{className:"col-md-2 mr-5 text-right",to:"/article/"+t._id,onClick:function(){return e.renderArticle(t)}},"Read more"))))})))}}]),t}(n.Component);var k=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{articles:t.articles,isAuthenticated:a.isAuthenticated}}),{getArticles:A,gotoArticle:y})(w),j=(n.Component,a(48)),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("h2",null,this.props.article_info.title),r.a.createElement("p",null,this.props.article_info.lead),r.a.createElement("p",null,this.props.article_info.tag),r.a.createElement(j.a,null,r.a.createElement(j.a.Image,{src:this.props.article_info.img_url})),r.a.createElement("p",null,this.props.article_info.text))}}]),t}(n.Component);var _=Object(E.a)((function(e){return e.ArticleReducer,{isAuthenticated:e.AuthReducer.isAuthenticated}}),{getArticle:v,getArticles:A,gotoArticle:y})(N),O=a(38),C=a(27),x=a(6),S=a(24),T=a(10),P=a(111),L=a(112),F=a(113),R=a(114),D=a(115),z=a(116),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={paragraphs:0,text:"",img_url:"",date:new Date},e.renderParagraphs.bind(Object(u.a)(e)),e.renderEditor.bind(Object(u.a)(e)),e.renderArticle.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.text===this.state.text&&t.img_url===this.state.img_url||this.props.layoutDataCallback({text:this.state.text,img_url:this.state.img_url})}},{key:"renderArticle",value:function(){return r.a.createElement(d.a,{className:"bg-white mt-4 p-sm-1"},r.a.createElement("div",null,r.a.createElement("h2",null,this.props.editArticle?this.props.title:this.props.article_info.title),r.a.createElement("p",null,this.props.editArticle?this.props.lead:this.props.article_info.lead),r.a.createElement("p",null,this.state.date.toDateString(),", By ",this.props.editArticle?this.props.author:this.props.article_info.author),r.a.createElement(j.a,null,r.a.createElement(j.a.Image,{src:this.props.editArticle?this.state.img_url:this.props.article_info.img_url})),this.props.editArticle?this.state.text.split("\n").map((function(e,t){return r.a.createElement("p",{key:t},e)})):this.props.article_info.text.split("\n").map((function(e,t){return r.a.createElement("p",{key:t},e)})),"Sources:",r.a.createElement("br",null),r.a.createElement("div",{style:{wordWrap:"break-word"}},r.a.createElement("a",null,this.props.editArticle?this.props.sources:this.props.article_info.sources))),r.a.createElement("div",null,r.a.createElement(O.a,{className:"row-cols-xs-1 bg-light p-4"},r.a.createElement(P.a,{className:"m-2",url:window.location.href},r.a.createElement("span",null,r.a.createElement(L.a,{size:32}))),r.a.createElement(F.a,{className:"m-2",url:window.location.href},r.a.createElement("span",null,r.a.createElement(R.a,{size:32}))),r.a.createElement(D.a,{className:"m-2",url:window.location.href},r.a.createElement("span",null,r.a.createElement(z.a,{size:32}))),r.a.createElement("a",{className:"p-2 m-1 bg-secondary",style:{color:"white"},href:"#",onClick:function(e){e.preventDefault(),e.stopPropagation()}},this.props.editArticle?this.props.tag:this.props.article_info.tags))))}},{key:"renderParagraphs",value:function(){for(var e=this,t=[],a=0;a<this.state.paragraphs;a++)t.push(r.a.createElement(O.a,null,r.a.createElement(C.a,{md:10},r.a.createElement(x.a,{key:a},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Paragraph ",a+2)),r.a.createElement(S.a,{as:"textarea","aria-label":"Paragraph"}))),r.a.createElement(C.a,{md:2},r.a.createElement(T.a,{className:"btn-danger",size:"sm",onClick:function(){return e.setState({paragraphs:e.state.paragraphs-1})}},"x"))));return r.a.createElement(d.a,null,t)}},{key:"renderEditor",value:function(){var e=this;return r.a.createElement("div",{style:{padding:0,margin:0,width:"100%"}},r.a.createElement(x.a,{style:{height:"15rem"}},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Article text")),r.a.createElement(S.a,{onChange:function(t){return e.setState({text:t.target.value})},as:"textarea","aria-label":"Paragraph"})),r.a.createElement(T.a,{disabled:!0,size:"sm",onClick:function(){return e.setState({paragraphs:e.state.paragraphs+1})}},"Add"),this.renderParagraphs(),r.a.createElement(x.a,{className:"mt-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,{id:"label"},"Image url:")),r.a.createElement(S.a,{onChange:function(t){return e.setState({img_url:t.target.value})},placeholder:"image url","aria-label":"image url","aria-describedby":"label"})))}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.editArticle&&this.renderEditor(),this.props.showArticle&&this.renderArticle())}}]),t}(n.Component);var M=Object(E.a)((function(e){return{article_info:e.ArticleReducer.article_info}}),{})(I),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;if(null==this.props.article_info){var t=window.location.pathname.split("/article/")[1];this.props.getArticle(t)}0===this.props.articles.length&&this.props.getArticles(),window.scrollTo(0,0),window.onpopstate=function(){if(window.location.pathname.startsWith("/article/")){var t=window.location.pathname.split("/article/")[1],a=e.props.articles.find((function(e){return e._id===t}));null!==a?(e.props.gotoArticle(a),console.log("article exist")):e.props.getArticle(t)}}}},{key:"renderArticle",value:function(){if(this.props.article_info)switch(this.props.article_info.template){case"Simple":return r.a.createElement(M,{editArticle:!1,showArticle:!0,title:this.props.article_info.title,author:this.props.article_info.author,lead:this.props.article_info.lead,sources:this.props.article_info.sources,tag:this.props.article_info.tags,layoutDataCallback:function(e){return console.log(e)}});case 6:default:return r.a.createElement(_,{article_info:this.props.article_info})}}},{key:"handleGotoArticle",value:function(e){this.props.gotoArticle(e),window.scrollTo(0,300)}},{key:"renderArticlePreviews",value:function(){var e=this;return this.props.articles.map((function(t,a){return e.props.article_info._id!==t._id&&r.a.createElement(g.a,{key:a,className:"mt-4 bg-light",style:{border:"none"}},r.a.createElement(g.a.Title,{className:"mt-3 ml-5",style:{fontSize:"1.2rem"}},t.title),r.a.createElement(g.a.Body,{className:"row"},r.a.createElement(g.a.Img,{onClick:function(){return console.log("img clicked")},className:"img-fluid col-md-4",style:{maxHeight:"20rem",width:"auto",objectFit:"cover"},src:t.img_url}),r.a.createElement(g.a.Text,{className:"col-md-5"},t.lead),r.a.createElement(h.b,{className:"col-md-2 mr-0",to:"/article/"+t._id,onClick:function(){return e.handleGotoArticle(t)}},"Read more")))}))}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(d.a,{className:"bg-white mt-4",style:{padding:"2rem"}},this.renderArticle()),r.a.createElement(d.a,{style:{marginTop:"5rem"}},r.a.createElement("h4",null,"More articles:"),this.renderArticlePreviews()))}}]),t}(n.Component);var q=Object(E.a)((function(e){var t=e.ArticleReducer;return{articles:t.articles,article_info:t.article_info}}),{getArticle:v,getArticles:A,gotoArticle:y})(B),W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={createArticle:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getArticles()}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{style:{padding:"5rem"}},r.a.createElement("h2",null,"Manage articles"),r.a.createElement(O.a,null,r.a.createElement(C.a,{className:"col-sm-3"},r.a.createElement(p.a,{render:function(e){var t=e.history;return r.a.createElement(T.a,{size:"sm",onClick:function(){return t.push("/create")}},"New Article")}})),r.a.createElement(C.a,{className:"col-sm-5"},r.a.createElement(d.a,null,this.props.articles.map((function(t,a){return r.a.createElement(g.a,{key:a,className:"mt-1",style:{border:"none"}},r.a.createElement(g.a.Title,{className:"mt-3 ml-5"},t.title),r.a.createElement(g.a.Body,null,r.a.createElement(T.a,{className:"m-1",onClick:function(){e.props.deleteArticle(t._id),e.props.getArticles()}},"Delete"),r.a.createElement(T.a,{className:"m-1"},"Edit")))}))))))}}]),t}(n.Component);var K=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{articles:t.articles,isAuthenticated:a.isAuthenticated}}),{getArticles:A,gotoArticle:y,deleteArticle:function(e){var t={method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded",access_token:localStorage.getItem("access_token")}};return function(){return console.log("deleting article"),fetch("https://aqueous-coast-74759.herokuapp.com/deleteArticle/"+e,t).then((function(e){return e.json().then((function(t){return{message:t,response:e}}))})).then((function(e){var t=e.message;if(200!=e.response.status)return console.log("Failed to delete article"),Promise.reject(t);console.log(t)})).catch((function(e){return console.log(e)}))}}})(W),H=a(40),G=a(67),U=a(54),J=a(79),$=a(34),Q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={selectedLayout:"Layout template",paragraphs:0,preview:!1,title:"",author:"",lead:"",sources:"",tags:"",template:"",layoutData:null},e.titleNode=r.a.createRef(),e.authorNode=r.a.createRef(),e.leadNode=r.a.createRef(),e.sourcesNode=r.a.createRef(),e.tagsNode=r.a.createRef(),e.renderLayout.bind(Object(u.a)(e)),e.saveArticle.bind(Object(u.a)(e)),e.setLayoutData.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"setLayoutData",value:function(e){console.log("setting data"),this.setState({layoutData:e})}},{key:"saveArticle",value:function(){var e={title:this.state.title,author:this.state.author,lead:this.state.lead,sources:this.state.sources,tags:this.state.tags,template:this.state.template,layoutData:this.state.layoutData};console.log(e),this.props.createArticle(e)}},{key:"renderLayout",value:function(e){this.setState({selectedLayout:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:"1rem"}},r.a.createElement("h2",null,"Create new article"),r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,{id:"label"},"Article Title:")),r.a.createElement(S.a,{placeholder:"title","aria-label":"title","aria-describedby":"label",ref:this.titleNode,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,{id:"label"},"Author:")),r.a.createElement(S.a,{placeholder:"author name","aria-label":"Author","aria-describedby":"label",onChange:function(t){return e.setState({author:t.target.value})}})),r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,null,"Lead:")),r.a.createElement(S.a,{as:"textarea",placeholder:"lead text","aria-label":"Lead",ref:this.leadNode,onChange:function(t){return e.setState({lead:t.target.value})}})),r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,{id:"label"},"Sources:")),r.a.createElement(S.a,{placeholder:"sources","aria-label":"sources","aria-describedby":"label",onChange:function(t){return e.setState({sources:t.target.value})}})),r.a.createElement(x.a,{className:"mt-3"},r.a.createElement(x.a.Prepend,null,r.a.createElement(x.a.Text,{id:"label"},"Tags:")),r.a.createElement(S.a,{placeholder:"tags separated by comma","aria-label":"tags","aria-describedby":"tags",ref:this.tagsNode,onChange:function(t){return e.setState({tags:t.target.value})}})),r.a.createElement(x.a,{className:"mt-3 mb-3"},r.a.createElement(J.a,{as:x.a.Prepend,variant:"outline-secondary",title:"Layout template",id:"input-group-dropdown-1",onSelect:function(t){e.renderLayout(t),e.setState({template:t})}},r.a.createElement($.a.Item,{eventKey:"Simple"},"Simple"),r.a.createElement($.a.Item,{eventKey:"Basic"},"Basic"),r.a.createElement($.a.Item,{eventKey:"Custom"},"Complex"))),"Layout template"!=this.state.selectedLayout&&r.a.createElement("h3",null,this.state.selectedLayout," Article Layout"),"Simple"===this.state.selectedLayout&&r.a.createElement("div",{mt:2},r.a.createElement(M,{editArticle:!0,showArticle:this.state.preview,title:this.state.title,author:this.state.author,lead:this.state.lead,sources:this.state.sources,tag:this.state.tags,layoutDataCallback:function(t){return e.setLayoutData(t)}}),r.a.createElement(T.a,{style:{marginTop:"2rem"},size:"sm",onClick:function(){return e.setState({preview:!e.state.preview})}},this.state.preview&&r.a.createElement("a",null,"Hide preview"),!this.state.preview&&r.a.createElement("a",null,"Show preview"))),r.a.createElement(d.a,{style:{marginTop:"2rem"}},r.a.createElement(O.a,null,r.a.createElement(C.a,{md:2},r.a.createElement(p.a,{render:function(t){var a=t.history;return r.a.createElement(T.a,{size:"sm",onClick:function(){a.push("/management"),e.saveArticle()}},"Publish")}})),r.a.createElement(C.a,{md:2},r.a.createElement(p.a,{render:function(e){var t=e.history;return r.a.createElement(T.a,{size:"sm",onClick:function(){return t.push("/management")}},"Cancel")}})))))}}]),t}(n.Component);var V=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{articles:t.articles,isAuthenticated:a.isAuthenticated}}),{createArticle:function(e){var t={method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",access_token:localStorage.getItem("access_token")},body:JSON.stringify(e)};return function(){return console.log("Positing article to server.."),fetch("https://aqueous-coast-74759.herokuapp.com/createArticle",t).then((function(e){return e.json().then((function(t){return{message:t,response:e}}))})).then((function(e){var t=e.message;if(200!==e.response.status)return console.log(t),Promise.reject(t);console.log(t)})).catch((function(e){return console.log(e)}))}}})(Q),X=a(66),Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={search:!1,searchInput:""},e.onlogin.bind(Object(u.a)(e)),e.onlogout.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onlogin",value:function(e,t){console.log("login...");var a={name:e,password:t};this.props.loginUser(a)}},{key:"onlogout",value:function(){console.log("logout..."),this.props.logoutUser(),console.log("logout success:"+this.props.isAuthenticated)}},{key:"handleSubmit",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.isAuthenticated?this.onlogout():this.onlogin(e.currentTarget.elements[0].value,e.currentTarget.elements[1].value)}},{key:"renderAbout",value:function(){return window.scrollTo(0,300),r.a.createElement(d.a,{className:"fluid pt-5",style:{maxWidth:"50rem",border:"none"}},r.a.createElement(g.a,null,r.a.createElement(g.a.Header,{className:"text-center",style:{fontSize:"1.5rem"}},"About Finland China News"),r.a.createElement(O.a,null,r.a.createElement(C.a,{style:{maxWidth:"10%"}},r.a.createElement("div",{className:"bg-success",style:{height:"100%",width:"1rem"}})),r.a.createElement(C.a,{className:"col-xs-16 col-sm-16 col-md-16"},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Text,null,r.a.createElement("p",null,"Finland China News was established with the goal to build and expand the Finland China business community. The aim for this platform is to help companies and people make better decisions through access to highly relevant information."),r.a.createElement("p",null,"Today, there are around 400 Finnish companies in China, and around 100 Chinese companies in Finland. Our vision is to become the leading knowledge platform for accessing information that affect the companies, investors and people in this market.")))))))}},{key:"renderContact",value:function(){return r.a.createElement(d.a,{style:{padding:"5rem"}},r.a.createElement(g.a,null,r.a.createElement(g.a.Header,{className:"text-center",style:{fontSize:"1.5rem"}},"Contact Information"),r.a.createElement(O.a,null,r.a.createElement(C.a,{className:"col-sm-1"},r.a.createElement("div",{className:"bg-success",style:{height:"100%",width:"1rem"}})),r.a.createElement(C.a,null,r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Text,null))))))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"logo",style:{textAlign:"center",backgroundPosition:"center",height:"20rem",backgroundImage:"url(https://defaultwebresources.blob.core.windows.net/resources/forest_lake.jpg)"}},r.a.createElement("h1",{style:{paddingTop:"5rem",textAlign:"center",fontFamily:"Garamond",color:"white"}},"Finland China News",r.a.createElement("p",null,"\u82ac \u4e2d \u65b0 \u95fb\u200b"))),r.a.createElement(G.a,{collapseOnSelect:!0,className:"bg-light mb-2",expand:"lg"},r.a.createElement(G.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(G.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(H.a,{className:"justify-content-center",style:{width:"100%",fontSize:"1.8rem"}},r.a.createElement(H.a.Link,{eventKey:"1",className:"mr-5 ml-5 text-center"},r.a.createElement(h.b,{className:"nav-link",to:"/mainpage"},"Home")),r.a.createElement(H.a.Link,{eventKey:"2",className:"mr-5 ml-5 text-center"},r.a.createElement(h.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement(H.a.Link,{eventKey:"3",className:"mr-5 ml-5 text-center"},r.a.createElement(h.b,{className:"nav-link",to:"/contact"},"Contact")),r.a.createElement(H.a.Link,{className:"mr-5 ml-5 text-center"},r.a.createElement(H.a.Link,{eventKey:"4",onClick:function(){return e.setState({search:!e.state.search})}},"Search"))))),r.a.createElement(X.a,{in:this.state.search},r.a.createElement(d.a,null,r.a.createElement(U.a.Control,{className:"text-center",placeholder:"search for article",onChange:function(t){return e.setState({searchInput:t.target.value.toLowerCase()})}}))),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/mainpage"},r.a.createElement(k,{articleFilter:this.state.searchInput})),r.a.createElement(p.a,{path:"/article"},r.a.createElement(q,null)),r.a.createElement(p.a,{path:"/about"},this.renderAbout()),r.a.createElement(p.a,{path:"/contact"},this.renderContact()),this.props.isAuthenticated&&r.a.createElement(p.a,{path:"/management"},r.a.createElement(K,null)),this.props.isAuthenticated&&r.a.createElement(p.a,{path:"/create"},r.a.createElement(V,null))),r.a.createElement("div",{style:{width:"100%",height:"8rem",textAlign:"center"}},r.a.createElement("p",{style:{marginTop:"5rem"}},"\xa9 Finland China News"),r.a.createElement("p",null,"2020")),r.a.createElement(d.a,{style:{position:"relative",marginBottom:"2rem"}},r.a.createElement(U.a,{onSubmit:this.handleSubmit.bind(this),className:"align-text-bottom"},!this.props.isAuthenticated&&r.a.createElement(O.a,{className:"justify-content-center row-cols-sm-3",style:{margin:"auto",float:"none"}},r.a.createElement(C.a,{className:"col-sm-2"},r.a.createElement(U.a.Control,{required:!0,style:{paddingRight:"0",marginRight:"0"},size:"sm",placeholder:"username"})),r.a.createElement(C.a,{className:"col-sm-2"},r.a.createElement(U.a.Control,{required:!0,size:"sm",type:"password",placeholder:"password"})),r.a.createElement(C.a,{className:"col-sm-1"},r.a.createElement(T.a,{className:"btn-secondary",size:"sm",type:"submit"},"Login"),r.a.createElement("a",{href:"#",style:{color:"red",fontSize:"0.7rem"}},this.props.errorMessage))),this.props.isAuthenticated&&r.a.createElement(O.a,{className:"justify-content-center row-cols-sm-2",style:{margin:"auto",float:"none",width:"60%"}},r.a.createElement(C.a,{className:"col-sm-2"},r.a.createElement(p.a,{render:function(e){var t=e.history;return r.a.createElement(T.a,{className:"btn-secondary",size:"sm",onClick:function(){return t.push("/")},type:"submit"},"Logout")}})),r.a.createElement(C.a,{className:"col-sm-2"},r.a.createElement(p.a,{render:function(e){var t=e.history;return r.a.createElement(T.a,{className:"btn-secondary",size:"sm",onClick:function(){return t.push("/management")}},"Manage")}}))))))}}]),t}(n.Component);var Z=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{article_info:t.article_info,isAuthenticated:a.isAuthenticated,errorMessage:a.errorMessage}}),{loginUser:function(e){console.log(e.username);var t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f({name:e.name,password:e.password})};return function(a){return console.log("dispatching"),a(function(e){return{type:"login_request",isFetching:!0,isAuthenticated:!1,user:e}}(e)),fetch("https://aqueous-coast-74759.herokuapp.com/login",t).then((function(e){return e.json().then((function(t){return{user:t,response:e}}))})).then((function(e){var t=e.user;if(200!==e.response.status)return console.log("login not ok"),Promise.reject(t);console.log(t.access_token),localStorage.setItem("access_token",t.access_token),a(function(e){return{type:"login_success",isFetching:!1,isAuthenticated:!0,id_token:e.id_token}}(t))})).catch((function(e){return a({type:"login_failure",isFetching:!1,isAuthenticated:!1,errorMessage:e.message})}))}},logoutUser:function(){return function(e){e({type:"logout_request",isFetching:!0,isAuthenticated:!0}),localStorage.removeItem("access_token"),e({type:"logout_success",isFetching:!1,isAuthenticated:!1})}}})(Y);var ee=function(){return r.a.createElement(Z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);var te=a(37),ae=a(86),ne=a(36),re={isFetching:!1,isAuthenticated:!!localStorage.getItem("access_token"),errorMessage:"",user:null,id_token:null,login_success:!1},le={article_info:null,articles:[]},ce=Object(te.c)({ArticleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"article_info":return console.log(t.payload),Object(ne.a)({},e,{article_info:t.payload});case"articles_received":return Object(ne.a)({},e,{articles:t.articles});default:return e}},AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login_request":return Object(ne.a)({},e,{isFetching:!0,isAuthenticated:!1,user:t.payload});case"login_success":return Object(ne.a)({},e,{isFetching:!1,isAuthenticated:!0,errorMessage:""});case"login_failure":return console.log(t),Object(ne.a)({},e,{isFetching:!1,isAuthenticated:!1,errorMessage:t.errorMessage});case"logout_success":return Object(ne.a)({},e,{login_success:!0,isFetching:!0,isAuthenticated:!1});default:return e}}}),ie=a(85),se=Object(te.d)(ce,{},Object(te.a)(ie.a));Object(l.render)(r.a.createElement(ae.a,{store:se},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){e.exports=a(107)}},[[88,1,2]]]);
//# sourceMappingURL=main.29700a33.chunk.js.map