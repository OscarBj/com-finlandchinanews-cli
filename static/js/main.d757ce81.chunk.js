(this["webpackJsonpfinlandchinanews-client-app"]=this["webpackJsonpfinlandchinanews-client-app"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(30),c=a(13),i=a(21),s=a(15),o=a(14),u=a(23),m=a(16),h=a(20),p=a(34),d=a(9),g=a(7),f=a(74).stringify;var E=a(12);a(74).stringify;function b(e){return{type:"article_info",payload:e}}function y(e){return function(t){t(b(e))}}function v(e){return function(t){t({type:"article_filter",payload:e})}}function A(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t={method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}};return function(a){return console.log("fetching article: "+e),fetch("https://aqueous-coast-74759.herokuapp.com/getArticle/"+e,t).then((function(e){return e.json().then((function(t){return{article:t,response:e}}))})).then((function(e){var t=e.article;if(200!==e.response.status)return console.log("Article not received"),Promise.reject(t);console.log("gotten article"),console.log(t),a(b(t))})).catch((function(e){return console.log(e)}))}}function w(){var e={method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}};return function(t){return fetch("https://aqueous-coast-74759.herokuapp.com/getArticles",e).then((function(e){return e.json().then((function(t){return{articles:t,response:e}}))})).then((function(e){var a=e.articles;if(200!==e.response.status)return console.log("Articles not received"),Promise.reject(a);t({type:"articles_received",articles:a})})).catch((function(e){return console.log(e)}))}}var k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getArticles()}},{key:"renderArticle",value:function(e){this.props.gotoArticle(e)}},{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,this.props.articles.map((function(t,a){return n.a.createElement("div",{key:a},(""===e.props.filter||t.title.toLowerCase().includes(e.props.filter.toLowerCase())||t.tags.toLowerCase().includes(e.props.filter.toLowerCase()))&&n.a.createElement(g.a,{className:"mt-4",style:{border:"none"}},n.a.createElement(g.a.Title,{className:"mt-3 ml-5",style:{fontSize:"1.5rem"}},t.title),n.a.createElement(d.a,null,n.a.createElement("a",{className:"ml-3"},new Date(t.date).toDateString()),n.a.createElement("a",{href:"#",onClick:function(a){a.preventDefault(),a.stopPropagation(),e.props.setArticleFilter(t.tags)},style:{color:"gray",marginLeft:"2rem",fontWeight:"bold"}},t.tags)),n.a.createElement(g.a.Body,{className:"row"},n.a.createElement(p.b,{render:function(a){var r=a.history;return n.a.createElement(g.a.Img,{onClick:function(){r.push("/article/"+t._id),e.renderArticle(t)},className:"img-fluid col-md-4",style:{maxHeight:"20rem",width:"auto",objectFit:"cover"},src:t.img_url})}}),n.a.createElement(g.a.Text,{className:"col-md-5 m-2"},t.lead),n.a.createElement(h.b,{className:"col-md-2 mr-5 text-right",to:"/article/"+t._id,onClick:function(){return e.renderArticle(t)}},"Read more"))))})))}}]),t}(r.Component);var _=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{articles:t.articles,filter:t.filter,isAuthenticated:a.isAuthenticated}}),{getArticles:w,gotoArticle:y,setArticleFilter:v})(k),j=(r.Component,a(44)),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("h2",null,this.props.article_info.title),n.a.createElement("p",null,this.props.article_info.lead),n.a.createElement("p",null,this.props.article_info.tag),n.a.createElement(j.a,null,n.a.createElement(j.a.Image,{src:this.props.article_info.img_url})),n.a.createElement("p",null,this.props.article_info.text))}}]),t}(r.Component);var C=Object(E.a)((function(e){return e.ArticleReducer,{isAuthenticated:e.AuthReducer.isAuthenticated}}),{getArticle:A,getArticles:w,gotoArticle:y})(N),O=a(31),x=a(25),S=a(6),T=a(26),L=a(10),F=a(111),P=a(112),R=a(113),D=a(114),z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={paragraphs:0,text:"",img_url:"",date:new Date},e.renderParagraphs.bind(Object(u.a)(e)),e.renderEditor.bind(Object(u.a)(e)),e.renderArticle.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.text===this.state.text&&t.img_url===this.state.img_url||this.props.layoutDataCallback({text:this.state.text,img_url:this.state.img_url})}},{key:"renderArticle",value:function(){var e=this;return n.a.createElement(d.a,{className:"bg-white mt-4 p-sm-1"},n.a.createElement("div",null,n.a.createElement("h2",null,this.props.editArticle?this.props.title:this.props.article_info.title),n.a.createElement("p",null,new Date(this.props.editArticle?this.props.date:this.props.article_info.date).toDateString()),n.a.createElement(j.a,null,n.a.createElement(j.a.Image,{src:this.props.editArticle?this.state.img_url:this.props.article_info.img_url})),this.props.editArticle?this.state.text.split("\n").map((function(e,t){return n.a.createElement("p",{key:t},e)})):this.props.article_info.text.split("\n").map((function(e,t){return n.a.createElement("p",{key:t},e)})),"Sources:",n.a.createElement("br",null),n.a.createElement("div",{style:{wordWrap:"break-word"}},n.a.createElement("a",null,this.props.editArticle?this.props.sources:this.props.article_info.sources))),n.a.createElement("div",null,n.a.createElement(O.a,{className:"row-cols-xs-1 bg-light p-4 mt-1"},n.a.createElement(F.a,{className:"m-2",url:window.location.href},n.a.createElement("span",null,n.a.createElement(P.a,{size:32}))),n.a.createElement(R.a,{className:"m-2",url:window.location.href},n.a.createElement("span",null,n.a.createElement(D.a,{size:32}))),n.a.createElement(p.b,{render:function(t){var a=t.history;return n.a.createElement("a",{className:"p-2 m-1 bg-secondary",style:{color:"white"},href:"#",onClick:function(t){t.preventDefault(),t.stopPropagation(),e.props.setArticleFilter(e.props.editArticle?e.props.tag:e.props.article_info.tags),a.push("/mainpage")}},e.props.editArticle?e.props.tag:e.props.article_info.tags)}}))))}},{key:"renderParagraphs",value:function(){for(var e=this,t=[],a=0;a<this.state.paragraphs;a++)t.push(n.a.createElement(O.a,null,n.a.createElement(x.a,{md:10},n.a.createElement(S.a,{key:a},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,null,"Paragraph ",a+2)),n.a.createElement(T.a,{as:"textarea","aria-label":"Paragraph"}))),n.a.createElement(x.a,{md:2},n.a.createElement(L.a,{className:"btn-danger",size:"sm",onClick:function(){return e.setState({paragraphs:e.state.paragraphs-1})}},"x"))));return n.a.createElement(d.a,null,t)}},{key:"renderEditor",value:function(){var e=this;return n.a.createElement("div",{style:{padding:0,margin:0,width:"100%"}},n.a.createElement(S.a,{style:{height:"15rem"}},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,null,"Article text")),n.a.createElement(T.a,{onChange:function(t){return e.setState({text:t.target.value})},as:"textarea","aria-label":"Paragraph"})),n.a.createElement(L.a,{disabled:!0,size:"sm",onClick:function(){return e.setState({paragraphs:e.state.paragraphs+1})}},"Add"),this.renderParagraphs(),n.a.createElement(S.a,{className:"mt-3"},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,{id:"label"},"Image url:")),n.a.createElement(T.a,{onChange:function(t){return e.setState({img_url:t.target.value})},placeholder:"image url","aria-label":"image url","aria-describedby":"label"})))}},{key:"render",value:function(){return n.a.createElement("div",null,this.props.editArticle&&this.renderEditor(),this.props.showArticle&&this.renderArticle())}}]),t}(r.Component);var I=Object(E.a)((function(e){return{article_info:e.ArticleReducer.article_info}}),{setArticleFilter:v})(z),M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={articleId:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;if(null==this.props.article_info){var t=window.location.hash.split("#/article/")[1];this.setState({articleId:t}),this.props.getArticle(t)}0===this.props.articles.length&&this.props.getArticles(),window.scrollTo(0,0),window.onpopstate=function(){if(window.location.hash.startsWith("#/article/")){var t=window.location.hash.split("#/article/")[1],a=e.props.articles.find((function(e){return e._id===t}));null!==a?e.props.gotoArticle(a):e.props.getArticle(t)}}}},{key:"renderArticle",value:function(){if(this.props.article_info)switch(this.props.article_info.template){case"Simple":return n.a.createElement(I,{editArticle:!1,showArticle:!0,title:this.props.article_info.title,author:this.props.article_info.author,lead:this.props.article_info.lead,sources:this.props.article_info.sources,tag:this.props.article_info.tags,layoutDataCallback:function(e){return console.log(e)}});case 6:default:return n.a.createElement(C,{article_info:this.props.article_info})}}},{key:"handleGotoArticle",value:function(e){this.props.gotoArticle(e),window.scrollTo(0,300)}},{key:"renderArticlePreviews",value:function(){var e=this;return this.props.articles.map((function(t,a){return(null==e.props.article_info?e.state.articleId:e.props.article_info._id)!==t._id&&n.a.createElement(g.a,{key:a,className:"mt-4 bg-light",style:{border:"none"}},n.a.createElement(g.a.Title,{className:"mt-3 ml-5",style:{fontSize:"1.2rem"}},t.title),n.a.createElement(g.a.Body,{className:"row"},n.a.createElement(p.b,{render:function(a){var r=a.history;return n.a.createElement(g.a.Img,{onClick:function(){r.push("/article/"+t._id),e.props.gotoArticle(t)},className:"img-fluid col-md-4",style:{maxHeight:"20rem",width:"auto",objectFit:"cover"},src:t.img_url})}}),n.a.createElement(g.a.Text,{className:"col-md-5"},t.lead),n.a.createElement(h.b,{className:"col-md-2 mr-0",to:"/article/"+t._id,onClick:function(){return e.handleGotoArticle(t)}},"Read more")))}))}},{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(d.a,{className:"bg-white mt-4",style:{padding:"2rem"}},this.renderArticle()),n.a.createElement(d.a,{style:{marginTop:"5rem"}},n.a.createElement("h4",null,"More articles:"),this.renderArticlePreviews()))}}]),t}(r.Component);var q=Object(E.a)((function(e){var t=e.ArticleReducer;return{articles:t.articles,article_info:t.article_info}}),{getArticle:A,getArticles:w,gotoArticle:y})(M),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={createArticle:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getArticles()}},{key:"render",value:function(){var e=this;return n.a.createElement(d.a,{style:{padding:"5rem"}},n.a.createElement("h2",null,"Manage articles"),n.a.createElement(O.a,null,n.a.createElement(x.a,{className:"col-sm-3"},n.a.createElement(p.b,{render:function(e){var t=e.history;return n.a.createElement(L.a,{size:"sm",onClick:function(){return t.push("/create")}},"New Article")}})),n.a.createElement(x.a,{className:"col-sm-5"},n.a.createElement(d.a,null,this.props.articles.map((function(t,a){return n.a.createElement(g.a,{key:a,className:"mt-1",style:{border:"none"}},n.a.createElement(g.a.Title,{className:"mt-3 ml-5"},t.title),n.a.createElement(g.a.Body,null,n.a.createElement(L.a,{className:"m-1",onClick:function(){e.props.deleteArticle(t._id),e.props.getArticles()}},"Delete"),n.a.createElement(L.a,{className:"m-1"},"Edit")))}))))))}}]),t}(r.Component);var W=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{articles:t.articles,isAuthenticated:a.isAuthenticated}}),{getArticles:w,gotoArticle:y,deleteArticle:function(e){var t={method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded",access_token:localStorage.getItem("access_token")}};return function(){return console.log("deleting article"),fetch("https://aqueous-coast-74759.herokuapp.com/deleteArticle/"+e,t).then((function(e){return e.json().then((function(t){return{message:t,response:e}}))})).then((function(e){var t=e.message;if(200!=e.response.status)return console.log("Failed to delete article"),Promise.reject(t);console.log(t)})).catch((function(e){return console.log(e)}))}}})(B),K=a(39),H=a(67),G=a(51),U=a(79),J=a(36),V=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={selectedLayout:"Layout template",paragraphs:0,preview:!1,title:"",author:"",lead:"",sources:"",tags:"",template:"",layoutData:null},e.titleNode=n.a.createRef(),e.authorNode=n.a.createRef(),e.leadNode=n.a.createRef(),e.sourcesNode=n.a.createRef(),e.tagsNode=n.a.createRef(),e.renderLayout.bind(Object(u.a)(e)),e.saveArticle.bind(Object(u.a)(e)),e.setLayoutData.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"setLayoutData",value:function(e){console.log("setting data"),this.setState({layoutData:e})}},{key:"saveArticle",value:function(){var e={title:this.state.title,author:this.state.author,lead:this.state.lead,sources:this.state.sources,tags:this.state.tags,template:this.state.template,layoutData:this.state.layoutData};console.log(e),this.props.createArticle(e)}},{key:"renderLayout",value:function(e){this.setState({selectedLayout:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{padding:"1rem"}},n.a.createElement("h2",null,"Create new article"),n.a.createElement(S.a,{className:"mb-3"},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,{id:"label"},"Article Title:")),n.a.createElement(T.a,{placeholder:"title","aria-label":"title","aria-describedby":"label",ref:this.titleNode,onChange:function(t){return e.setState({title:t.target.value})}})),n.a.createElement(S.a,{className:"mb-3"},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,{id:"label"},"Author:")),n.a.createElement(T.a,{placeholder:"author name","aria-label":"Author","aria-describedby":"label",onChange:function(t){return e.setState({author:t.target.value})}})),n.a.createElement(S.a,{className:"mb-3"},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,null,"Lead:")),n.a.createElement(T.a,{as:"textarea",placeholder:"lead text","aria-label":"Lead",ref:this.leadNode,onChange:function(t){return e.setState({lead:t.target.value})}})),n.a.createElement(S.a,{className:"mb-3"},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,{id:"label"},"Sources:")),n.a.createElement(T.a,{placeholder:"sources","aria-label":"sources","aria-describedby":"label",onChange:function(t){return e.setState({sources:t.target.value})}})),n.a.createElement(S.a,{className:"mt-3"},n.a.createElement(S.a.Prepend,null,n.a.createElement(S.a.Text,{id:"label"},"Tags:")),n.a.createElement(T.a,{placeholder:"tags separated by comma","aria-label":"tags","aria-describedby":"tags",ref:this.tagsNode,onChange:function(t){return e.setState({tags:t.target.value})}})),n.a.createElement(S.a,{className:"mt-3 mb-3"},n.a.createElement(U.a,{as:S.a.Prepend,variant:"outline-secondary",title:"Layout template",id:"input-group-dropdown-1",onSelect:function(t){e.renderLayout(t),e.setState({template:t})}},n.a.createElement(J.a.Item,{eventKey:"Simple"},"Simple"),n.a.createElement(J.a.Item,{eventKey:"Basic"},"Basic"),n.a.createElement(J.a.Item,{eventKey:"Custom"},"Complex"))),"Layout template"!=this.state.selectedLayout&&n.a.createElement("h3",null,this.state.selectedLayout," Article Layout"),"Simple"===this.state.selectedLayout&&n.a.createElement("div",{mt:2},n.a.createElement(I,{editArticle:!0,showArticle:this.state.preview,title:this.state.title,author:this.state.author,lead:this.state.lead,sources:this.state.sources,tag:this.state.tags,layoutDataCallback:function(t){return e.setLayoutData(t)}}),n.a.createElement(L.a,{style:{marginTop:"2rem"},size:"sm",onClick:function(){return e.setState({preview:!e.state.preview})}},this.state.preview&&n.a.createElement("a",null,"Hide preview"),!this.state.preview&&n.a.createElement("a",null,"Show preview"))),n.a.createElement(d.a,{style:{marginTop:"2rem"}},n.a.createElement(O.a,null,n.a.createElement(x.a,{md:2},n.a.createElement(p.b,{render:function(t){var a=t.history;return n.a.createElement(L.a,{size:"sm",onClick:function(){a.push("/management"),e.saveArticle()}},"Publish")}})),n.a.createElement(x.a,{md:2},n.a.createElement(p.b,{render:function(e){var t=e.history;return n.a.createElement(L.a,{size:"sm",onClick:function(){return t.push("/management")}},"Cancel")}})))))}}]),t}(r.Component);var $=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{articles:t.articles,isAuthenticated:a.isAuthenticated}}),{createArticle:function(e){var t={method:"POST",headers:{"Content-Type":"application/json",access_token:localStorage.getItem("access_token")},body:JSON.stringify(e)};return function(){return console.log("Positing article to server.."),fetch("https://aqueous-coast-74759.herokuapp.com/createArticle",t).then((function(e){return e.json().then((function(t){return{message:t,response:e}}))})).then((function(e){var t=e.message;if(200!==e.response.status)return console.log(t),Promise.reject(t);console.log(t)})).catch((function(e){return console.log(e)}))}}})(V),Q=a(65),X=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={search:!1},e.searchRef=n.a.createRef(),e.onlogin.bind(Object(u.a)(e)),e.onlogout.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onlogin",value:function(e,t){console.log("login...");var a={name:e,password:t};this.props.loginUser(a)}},{key:"onlogout",value:function(){console.log("logout..."),this.props.logoutUser(),console.log("logout success:"+this.props.isAuthenticated)}},{key:"handleSubmit",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.isAuthenticated?this.onlogout():this.onlogin(e.currentTarget.elements[0].value,e.currentTarget.elements[1].value)}},{key:"renderAbout",value:function(){return window.scrollTo(0,300),n.a.createElement(d.a,{className:"fluid pt-5",style:{maxWidth:"50rem",border:"none"}},n.a.createElement(g.a,null,n.a.createElement(g.a.Header,{className:"text-center",style:{fontSize:"1.5rem"}},"About Finland China News"),n.a.createElement(O.a,null,n.a.createElement(x.a,{style:{maxWidth:"10%"}},n.a.createElement("div",{className:"bg-success",style:{height:"100%",width:"1rem"}})),n.a.createElement(x.a,{className:"col-xs-16 col-sm-16 col-md-16"},n.a.createElement(g.a.Body,null,n.a.createElement(g.a.Text,{style:{fontFamily:"Verdana"}},n.a.createElement("p",null,"Finland China News was established with the goal to build and expand the Finland China business community. The aim for this platform is to help companies and people make better decisions through access to highly relevant information."),n.a.createElement("p",null,"Today, there are around 400 Finnish companies in China, and around 100 Chinese companies in Finland. Our vision is to become the leading knowledge platform for accessing information that affect the companies, investors and people in this market.")))))))}},{key:"renderContact",value:function(){return n.a.createElement(d.a,{style:{padding:"5rem"}},n.a.createElement(g.a,null,n.a.createElement(g.a.Header,{className:"text-center",style:{fontSize:"1.5rem"}},"Contact Information"),n.a.createElement(O.a,null,n.a.createElement(x.a,{className:"col-sm-1"},n.a.createElement("div",{className:"bg-success",style:{height:"100%",width:"1rem"}})),n.a.createElement(x.a,null,n.a.createElement(g.a.Body,null,n.a.createElement(g.a.Text,null))))))}},{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{basename:"/"},n.a.createElement("div",{className:"logo",style:{textAlign:"center",backgroundPosition:"center",height:"20rem",backgroundImage:"url(https://defaultwebresources.blob.core.windows.net/resources/forest_lake.jpg)"}},n.a.createElement("h1",{style:{paddingTop:"5rem",textAlign:"center",fontFamily:"Garamond",color:"white"}},"Finland China News",n.a.createElement("p",null,"\u82ac \u4e2d \u65b0 \u95fb\u200b"))),n.a.createElement(H.a,{onClick:function(){e.state.search&&e.setState({search:!1}),e.props.setArticleFilter(""),e.searchRef.value=""},collapseOnSelect:!0,className:"bg-light mb-2",expand:"lg"},n.a.createElement(H.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(H.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(K.a,{className:"justify-content-center",style:{width:"100%",fontSize:"1.8rem"}},n.a.createElement(K.a.Link,{eventKey:"1",className:"mr-5 ml-5 text-center"},n.a.createElement(h.b,{className:"nav-link",to:"/mainpage"},"Home")),n.a.createElement(K.a.Link,{eventKey:"2",className:"mr-5 ml-5 text-center"},n.a.createElement(h.b,{className:"nav-link",to:"/about"},"About")),n.a.createElement(K.a.Link,{eventKey:"3",className:"mr-5 ml-5 text-center"},n.a.createElement(h.b,{className:"nav-link",to:"/contact"},"Contact")),n.a.createElement(K.a.Link,{className:"mr-5 ml-5 text-center"},n.a.createElement(K.a.Link,{eventKey:"4",onClick:function(){return e.setState({search:!e.state.search})}},"Search"))))),n.a.createElement(Q.a,{in:this.state.search},n.a.createElement(d.a,null,n.a.createElement(G.a.Control,{ref:function(t){return e.searchRef=t},className:"text-center",placeholder:"search for article",onChange:function(t){return e.props.setArticleFilter(t.target.value.toLowerCase())}}))),""!==this.props.filter&&"#/mainpage"===window.location.hash&&n.a.createElement(d.a,null,n.a.createElement(O.a,null,n.a.createElement(L.a,{onClick:function(){e.props.setArticleFilter(""),e.setState({search:!1}),e.searchRef.value=""},style:{fontWeight:"bold",border:"none",color:"gray",background:"transparent"}},"\u274c"),n.a.createElement("h3",null,"Showing articles with keyword '",this.props.filter,"':"))),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/"},n.a.createElement(p.a,{to:"/mainpage"})),n.a.createElement(p.b,{path:"/mainpage"},n.a.createElement(_,null)),n.a.createElement(p.b,{path:"/article"},n.a.createElement(q,null)),n.a.createElement(p.b,{path:"/about"},this.renderAbout()),n.a.createElement(p.b,{path:"/contact"},this.renderContact()),this.props.isAuthenticated&&n.a.createElement(p.b,{path:"/management"},n.a.createElement(W,null)),this.props.isAuthenticated&&n.a.createElement(p.b,{path:"/create"},n.a.createElement($,null))),n.a.createElement("div",{style:{width:"100%",height:"8rem",textAlign:"center"}},n.a.createElement("p",{style:{marginTop:"5rem"}},"\xa9 Finland China News"),n.a.createElement("p",null,"2020")),n.a.createElement(d.a,{style:{position:"relative",marginBottom:"2rem"}},n.a.createElement(G.a,{onSubmit:this.handleSubmit.bind(this),className:"align-text-bottom"},!this.props.isAuthenticated&&n.a.createElement(O.a,{className:"justify-content-center row-cols-sm-3",style:{margin:"auto",float:"none"}},n.a.createElement(x.a,{className:"col-sm-2"},n.a.createElement(G.a.Control,{required:!0,style:{paddingRight:"0",marginRight:"0"},size:"sm",placeholder:"username"})),n.a.createElement(x.a,{className:"col-sm-2"},n.a.createElement(G.a.Control,{required:!0,size:"sm",type:"password",placeholder:"password"})),n.a.createElement(x.a,{className:"col-sm-1"},n.a.createElement(L.a,{className:"btn-secondary",size:"sm",type:"submit"},"Login"),n.a.createElement("a",{href:"#",style:{color:"red",fontSize:"0.7rem"}},this.props.errorMessage))),this.props.isAuthenticated&&n.a.createElement(O.a,{className:"justify-content-center row-cols-sm-2",style:{margin:"auto",float:"none",width:"60%"}},n.a.createElement(x.a,{className:"col-sm-2"},n.a.createElement(p.b,{render:function(e){var t=e.history;return n.a.createElement(L.a,{className:"btn-secondary",size:"sm",onClick:function(){return t.push("/")},type:"submit"},"Logout")}})),n.a.createElement(x.a,{className:"col-sm-2"},n.a.createElement(p.b,{render:function(e){var t=e.history;return n.a.createElement(L.a,{className:"btn-secondary",size:"sm",onClick:function(){return t.push("/management")}},"Manage")}}))))))}}]),t}(r.Component);var Y=Object(E.a)((function(e){var t=e.ArticleReducer,a=e.AuthReducer;return{article_info:t.article_info,filter:t.filter,isAuthenticated:a.isAuthenticated,errorMessage:a.errorMessage}}),{loginUser:function(e){console.log(e.username);var t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f({name:e.name,password:e.password})};return function(a){return console.log("dispatching"),a(function(e){return{type:"login_request",isFetching:!0,isAuthenticated:!1,user:e}}(e)),fetch("https://aqueous-coast-74759.herokuapp.com/login",t).then((function(e){return e.json().then((function(t){return{user:t,response:e}}))})).then((function(e){var t=e.user;if(200!==e.response.status)return console.log("login not ok"),Promise.reject(t);console.log(t.access_token),localStorage.setItem("access_token",t.access_token),a(function(e){return{type:"login_success",isFetching:!1,isAuthenticated:!0,id_token:e.id_token}}(t))})).catch((function(e){return a({type:"login_failure",isFetching:!1,isAuthenticated:!1,errorMessage:e.message})}))}},logoutUser:function(){return function(e){e({type:"logout_request",isFetching:!0,isAuthenticated:!0}),localStorage.removeItem("access_token"),e({type:"logout_success",isFetching:!1,isAuthenticated:!1})}},setArticleFilter:v})(X);var Z=function(){return n.a.createElement(Y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);var ee=a(38),te=a(86),ae=a(29),re={isFetching:!1,isAuthenticated:!!localStorage.getItem("access_token"),errorMessage:"",user:null,id_token:null,login_success:!1},ne={article_info:null,articles:[],filter:""},le=Object(ee.c)({ArticleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"article_info":return console.log(t.payload),Object(ae.a)({},e,{article_info:t.payload});case"articles_received":return Object(ae.a)({},e,{articles:t.articles});case"article_filter":return console.log(t.payload),Object(ae.a)({},e,{filter:t.payload});default:return e}},AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login_request":return Object(ae.a)({},e,{isFetching:!0,isAuthenticated:!1,user:t.payload});case"login_success":return Object(ae.a)({},e,{isFetching:!1,isAuthenticated:!0,errorMessage:""});case"login_failure":return console.log(t),Object(ae.a)({},e,{isFetching:!1,isAuthenticated:!1,errorMessage:t.errorMessage});case"logout_success":return Object(ae.a)({},e,{login_success:!0,isFetching:!0,isAuthenticated:!1});default:return e}}}),ce=a(85),ie=Object(ee.d)(le,{},Object(ee.a)(ce.a));Object(l.render)(n.a.createElement(te.a,{store:ie},n.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){e.exports=a(107)}},[[88,1,2]]]);
//# sourceMappingURL=main.d757ce81.chunk.js.map