(this["webpackJsonpreddit-react-redux"]=this["webpackJsonpreddit-react-redux"]||[]).push([[0],{163:function(e,t,c){"use strict";c.r(t);var s,n,r,a,i,o=c(2),l=c.n(o),d=c(37),u=c.n(d),j=(c(73),c(12)),b=c(6),O=c(3),m=c(7),h=c(10),f=c.n(h),p=c(21),x=c(5),v=Object(x.c)({}),N=v.getInitialState({subreddits:[],error:null,status:"idle"}),A=Object(x.b)("posts/fetchSubreddits",Object(p.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.reddit.com","/subreddits.json?limit=40"));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c.data.children.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})))),w=Object(x.d)({name:"subreddits",initialState:N,reducers:{},extraReducers:(s={},Object(m.a)(s,A.pending,(function(e,t){e.status="loading"})),Object(m.a)(s,A.fulfilled,(function(e,t){e.status="succeeded",v.setAll(e,t.payload)})),Object(m.a)(s,A.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),s)}).reducer,g=v.getSelectors((function(e){return e.subreddits})),k=g.selectAll,S=g.selectById,q=Object(x.c)({selectId:function(e){return e.id}}),C=q.getInitialState({entities:{},status:"idle",error:null,selectedSubreddit:"/r/pics/"}),I=Object(x.b)("posts/fetchPosts",function(){var e=Object(p.a)(f.a.mark((function e(t){var c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.reddit.com").concat(t,".json?limit=100"));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s.data.children.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(x.d)({name:"posts",initialState:C,reducers:{setSelectedSubreddit:function(e,t){e.selectedSubreddit=t.payload}},extraReducers:(n={},Object(m.a)(n,I.pending,(function(e,t){e.status="loading"})),Object(m.a)(n,I.fulfilled,(function(e,t){e.status="succeeded",q.setAll(e,t.payload)})),Object(m.a)(n,I.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),n)}),y=V.actions.setSelectedSubreddit,K=V.reducer,X=q.getSelectors((function(e){return e.posts})),H=(X.selectAll,X.selectById),E=X.selectIds,U=c(27),W=Object(x.c)({selectId:function(e){return e.id}}),T=W.getInitialState({status:"idle",error:null,searchInput:""}),Y=Object(x.b)("search/fetchSearch",function(){var e=Object(p.a)(f.a.mark((function e(t){var c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.reddit.com","/search.json?q=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s.data.children.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(x.d)({name:"search",initialState:T,reducers:{setSearchInput:function(e,t){e.searchInput=t.payload}},extraReducers:(r={},Object(m.a)(r,Y.pending,(function(e,t){e.status="loading"})),Object(m.a)(r,Y.fulfilled,(function(e,t){e.status="succeeded",W.setAll(e,t.payload)})),Object(m.a)(r,Y.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),r)}).reducer,L=W.getSelectors((function(e){return e.search})),G=(L.selectAll,L.selectById),Q=L.selectIds,R=c(1),z=function(){var e=Object(O.b)(),t=Object(o.useState)(""),c=Object(U.a)(t,2),s=c[0],n=c[1];return Object(R.jsx)("div",{children:Object(R.jsxs)("form",{className:"AddSearchForm",onSubmit:function(t){t.preventDefault(),s&&s.length>0&&e(Y(s))},children:[Object(R.jsx)(j.c,{className:"postLink",to:"/search",children:Object(R.jsx)("input",{type:"text","aria-label":"What's on your mind?",placeholder:"What's on your mind?",value:s,onChange:function(e){n(e.target.value)}})}),Object(R.jsx)("input",{type:"submit",value:"Search"})]})})},M=function(e){var t=e.subredditId,c=Object(O.c)((function(e){return S(e,t)})),s=Object(O.b)();return Object(R.jsx)("div",{className:"dropdown-button",children:Object(R.jsx)(j.c,{className:"postLink",to:"/posts",children:Object(R.jsxs)("button",{type:"button",onClick:function(){return s(y(c.url))},children:[Object(R.jsx)("img",{className:"subreddit-icon",src:c.icon_img?c.icon_img:c.header_img||"data:image/png;base64,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",alt:"".concat(c.display_name)}),Object(R.jsx)("p",{className:"subreddit-name",children:c.display_name})]})})},t)},B=function(){var e,t=Object(O.b)(),c=Object(O.c)(k),s=Object(O.c)((function(e){return e.subreddits.status})),n=Object(O.c)((function(e){return e.subreddits.error}));return Object(o.useEffect)((function(){"idle"===s&&t(A())}),[s,t]),"loading"===s?e=Object(R.jsx)("div",{children:"Loading..."}):"succeeded"===s?e=Object(R.jsx)("div",{className:"dropdown-content",children:c.map((function(e){return Object(R.jsx)(M,{subredditId:e.id},e.id)}))}):"failed"===s&&(e=Object(R.jsx)("div",{children:n})),Object(R.jsxs)("div",{className:"navbar",children:[Object(R.jsxs)("div",{className:"dropdown",children:[Object(R.jsxs)("button",{className:"dropbtn",children:["Subreddits",Object(R.jsx)("i",{className:"fa fa-caret-down"})]}),e]}),Object(R.jsx)("div",{className:"dropdown",children:Object(R.jsx)(z,{})})]})},J=c(39),P=Object(x.c)({selectId:function(e){return e.name}}),D=P.getInitialState({users:[],userStatus:"idle",userError:null}),Z=Object(x.b)("users/fetchUsers",function(){var e=Object(p.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.reddit.com","/user/").concat(t,"/about.json")).then((function(e){return e.json()}));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(x.d)({name:"users",initialState:D,reducers:{},extraReducers:(a={},Object(m.a)(a,Z.pending,(function(e,t){e.userStatus="loading"})),Object(m.a)(a,Z.fulfilled,(function(e,t){e.userStatus="succeeded",P.upsertOne(e,t.payload)})),Object(m.a)(a,Z.rejected,(function(e,t){e.userStatus="failed",e.userError=t.error.message})),a)}).reducer,$=P.getSelectors((function(e){return e.users})),ee=$.selectAll,te=$.selectById,ce=($.selectIds,Object(J.a)([ee,function(e,t){return t}],(function(e,t){return e.filter((function(e){return e.post===t}))})),c.p+"static/media/reddit.8f94c063.png"),se=c(20),ne=c.n(se),re=function(e){var t,c=e.postAuthor,s=Object(O.b)(),n=Object(O.c)((function(e){return e.users.userStatus})),r=Object(O.c)((function(e){return e.users.userError})),a=Object(O.c)((function(e){return te(e,c)}));return Object(o.useEffect)((function(){s(Z(c))}),[c,s]),"loading"===n?t=Object(R.jsxs)("div",{children:[" ",Object(R.jsx)(ne.a,{variant:"circle",width:45,height:45})]}):"succeeded"===n&&a?t=Object(R.jsx)("img",{src:"".concat(a.snoovatar_img&&0!==a.snoovatar_img.length?a.snoovatar_img:ce),alt:"".concat(a.snoovatar_img&&0!==a.snoovatar_img.length?a.snoovatar_img:"../users/avatar1.png"," profile"),className:"avatar-profile-image"}):"failed"===n&&(t=Object(R.jsx)("div",{children:r})),Object(R.jsx)("section",{children:t})},ae=c(17),ie=c.n(ae),oe=c(22),le=c(18),de=Object(x.c)({}),ue=de.getInitialState({error:null,commentsStatus:"idle",permalink:"/r/pics/comments/mdh3v6/dirt_soothes_her/"}),je=Object(x.b)("comments/fetchComments",function(){var e=Object(p.a)(f.a.mark((function e(t){var c,s,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.reddit.com").concat(t,".json"));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,n=s[1].data.children.map((function(e){return e.data})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),be=Object(x.d)({name:"comments",initialState:ue,reducers:{setPermalink:function(e,t){e.permalink=t.payload}},extraReducers:(i={},Object(m.a)(i,je.pending,(function(e,t){e.commentsStatus="loading"})),Object(m.a)(i,je.fulfilled,(function(e,t){e.commentsStatus="succeeded",de.setAll(e,t.payload)})),Object(m.a)(i,je.rejected,(function(e,t){e.commentsStatus="failed",e.error=t.error.message})),i)}),Oe=be.reducer,me=(be.actions.setPermalink,de.getSelectors((function(e){return e.comments}))),he=(me.selectAll,me.selectById),fe=me.selectIds,pe=c(13),xe=c.n(pe),ve=function(e){var t=e.commentId,c=Object(O.c)((function(e){return he(e,t)}));return Object(R.jsxs)("div",{className:"comment",children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("hr",{}),Object(R.jsx)("p",{className:"comment-author",children:c.author}),Object(R.jsx)(xe.a,{className:"commentText",source:c.body}),Object(R.jsxs)("div",{className:"commentInfo",children:[Object(R.jsx)("p",{className:"infoCom",children:ie.a.unix(c.created_utc).fromNow()}),Object(R.jsxs)("p",{className:"infoCom likes",children:[Object(R.jsx)(le.a,{})," ",c.ups]})]})]}),Object(R.jsx)("div",{className:"subCommentInfo",children:c.replies?c.replies.data.children.map((function(e){return Object(R.jsxs)("div",{children:[Object(R.jsx)("p",{className:"comment-author",children:e.data.author}),Object(R.jsx)(xe.a,{className:"commentText",source:e.data.body}),Object(R.jsxs)("div",{className:"commentInfo",children:[Object(R.jsx)("p",{className:"infoCom",children:ie.a.unix(e.data.created_utc).fromNow()}),Object(R.jsxs)("div",{className:"infoCom likes",children:[" ",Object(R.jsx)(le.a,{})," ",e.data.ups," "]})]})]})})):""})]},t)},Ne=function(){var e,t=Object(O.c)((function(e){return e.comments.commentStatus})),c=Object(O.c)((function(e){return e.comments.userError})),s=Object(O.c)(fe);return"loading"===t?e=Object(R.jsxs)("div",{children:[" ",Object(R.jsx)(ne.a,{variant:"circle",width:45,height:45}),Object(R.jsx)(ne.a,{variant:"circle",width:45,height:45}),Object(R.jsx)(ne.a,{variant:"circle",width:45,height:45}),Object(R.jsx)(ne.a,{variant:"circle",width:45,height:45})]}):s?e=s.map((function(e){return Object(R.jsx)(ve,{commentId:e},e)})):"failed"===t&&(e=Object(R.jsx)("div",{children:c})),Object(R.jsx)("div",{children:e})},Ae=function(){var e=Object(o.useState)(!1),t=Object(U.a)(e,2),c=t[0],s=t[1];return window.addEventListener("scroll",(function(){!c&&window.pageYOffset>400?s(!0):c&&window.pageYOffset<=400&&s(!1)})),Object(R.jsx)(oe.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:c?"flex":"none"}})};function we(e){var t=e.match.params.postId,c=Object(O.c)((function(e){return H(e,t)})),s=Object(O.b)();return c?c?Object(R.jsxs)("article",{className:"post-content",children:[Object(R.jsxs)("div",{className:"postContent",children:[Object(R.jsxs)("div",{className:"userInfo",children:[Object(R.jsx)(re,{postAuthor:c.author}),Object(R.jsxs)("h5",{id:"home",className:"userName",children:[" by  ",c.author]})]}),Object(R.jsx)("hr",{}),Object(R.jsx)("h4",{className:"post-title",children:c.title}),Object(R.jsx)("p",{children:c.selftext?Object(R.jsx)(xe.a,{className:"selfText",source:c.selftext}):""}),Object(R.jsxs)("div",{className:"post-media",children:[Object(R.jsx)("img",{className:"image",src:c.url,alt:""}),c.media&&!c.media.oembed?Object(R.jsx)("video",{className:"video",src:c.media.reddit_video.fallback_url,controls:!0,children:" Your browser does not support the video tag. "}):""]}),"clips.twitch.tv"===c.domain||"link"===c.post_hint||"imgur.com"===c.domain?Object(R.jsx)("a",{className:"postUrl",href:c.url,children:"Click here to see the post"}):"",Object(R.jsxs)("div",{className:"postInfo",children:[Object(R.jsx)("p",{className:"info",children:ie.a.unix(c.created_utc).fromNow()}),Object(R.jsxs)("p",{className:"info likes",children:[Object(R.jsx)(le.a,{})," ",c.ups]}),Object(R.jsxs)("p",{className:"info",onClick:function(){return e=c.permalink,s(je(e)),window.scrollTo(0,0);var e},children:[" ",Object(R.jsx)(oe.b,{})," ",c.num_comments," "]})]}),Object(R.jsx)(Ne,{post:c})]}),Object(R.jsx)(Ae,{})]},c.id):void 0:Object(R.jsx)("section",{children:Object(R.jsx)("h2",{children:"Post not found!"})})}function ge(e){var t=e.match.params.postId,c=Object(O.c)((function(e){return G(e,t)})),s=Object(O.b)();return c?c?Object(R.jsx)("article",{className:"post-content",children:Object(R.jsxs)("div",{className:"postContent",children:[Object(R.jsxs)("div",{className:"userInfo",children:[Object(R.jsx)(re,{postAuthor:c.author}),Object(R.jsxs)("h5",{id:"home",className:"userName",children:[" by  ",c.author]})]}),Object(R.jsx)("hr",{}),Object(R.jsx)("h4",{className:"post-title",children:c.title}),Object(R.jsx)("p",{children:c.selftext?Object(R.jsx)(xe.a,{className:"selfText",source:c.selftext}):""}),Object(R.jsxs)("div",{className:"post-media",children:[Object(R.jsx)("img",{className:"image",src:c.url,alt:""}),c.media?Object(R.jsx)("video",{className:"video",src:c.media.reddit_video.fallback_url,controls:!0,children:" Your browser does not support the video tag. "}):""]}),"clips.twitch.tv"===c.domain||"imgur.com"===c.domain||"link"===c.post_hint?Object(R.jsx)("a",{className:"postUrl",href:c.url,children:"Click here to see the post"}):"",Object(R.jsxs)("div",{className:"postInfo",children:[Object(R.jsx)("p",{className:"info",children:ie.a.unix(c.created_utc).fromNow()}),Object(R.jsxs)("p",{className:"info likes",children:[Object(R.jsx)(le.a,{})," ",c.ups]}),Object(R.jsxs)("p",{className:"info",onClick:function(){return e=c.permalink,s(je(e)),window.scrollTo(0,0);var e},children:[" ",Object(R.jsx)(oe.b,{})," ",c.num_comments," "]})]}),Object(R.jsx)(Ae,{}),Object(R.jsx)(Ne,{post:c})]})},c.id):void 0:Object(R.jsx)("section",{children:Object(R.jsx)("h2",{children:"Post not found!"})})}var ke=function(){return Object(R.jsx)("section",{children:Object(R.jsx)("ul",{className:"list",children:Array(9).fill().map((function(e,t){return Object(R.jsxs)("li",{className:"card",children:[Object(R.jsxs)("h4",{className:"card-title",children:[Object(R.jsx)(ne.a,{circle:!0,height:50,width:50}),Object(R.jsx)("p",{className:"card-channel",children:Object(R.jsx)(ne.a,{width:"90%"})})]}),Object(R.jsx)(ne.a,{height:260})]},t)}))})})},Se=function(e){var t,c=e.postId,s=Object(O.b)(),n=Object(O.c)((function(e){return H(e,c)})),r=function(e){return s(je(e))},a=Object(o.useState)(!1),i=Object(U.a)(a,2),l=i[0],d=i[1],u=l?"Read Less << ":"Read More >> ";if(n.selftext&&n.selftext.length>200&&!l?t=Object(R.jsx)("div",{children:Object(R.jsx)(xe.a,{className:"selfText",source:n.selftext.substring(0,200)+"  ..."})}):n.selftext&&l&&(t=Object(R.jsx)(xe.a,{className:"selfText",source:n.selftext})),n)return Object(R.jsx)("article",{className:"post-content",children:Object(R.jsxs)("div",{className:"postContent",children:[Object(R.jsxs)(j.c,{className:"postLink",to:"/posts/".concat(n.id),onClick:function(){return r(n.permalink),window.scrollTo(0,0)},children:[Object(R.jsxs)("div",{className:"userInfo",children:["[deleted]"!==n.author?Object(R.jsx)(re,{postAuthor:n.author}):Object(R.jsx)(re,{postAuthor:"AutoModerator"}),Object(R.jsxs)("h5",{id:"home",className:"userName",children:[" by  ",n.author]})]}),Object(R.jsx)("hr",{}),Object(R.jsx)("h4",{className:"post-title",children:n.title}),Object(R.jsxs)("div",{className:"post-media",children:[Object(R.jsx)("img",{className:"post-image",src:n.url,alt:""}),Object(R.jsx)("div",{children:n.media&&n.media.reddit_video?Object(R.jsx)("video",{className:"video",src:n.media.reddit_video.fallback_url,controls:!0,children:" Your browser does not support the video tag. "}):""})]}),t]}),"clips.twitch.tv"===n.domain||"imgur.com"===n.domain||"link"===n.post_hint?Object(R.jsx)("a",{className:"postUrl",href:n.url,children:"Click here to see the post "}):"",Object(R.jsx)("p",{className:"readmore",onClick:function(){d(!l)},children:n.selftext&&u}),Object(R.jsxs)("div",{className:"postInfo",children:[Object(R.jsx)("p",{className:"info",children:ie.a.unix(n.created_utc).fromNow()}),Object(R.jsxs)("p",{className:"info likes",children:[Object(R.jsx)(le.a,{})," ",n.ups]}),Object(R.jsx)(j.c,{className:"postLink",to:"/posts/".concat(n.id),children:Object(R.jsxs)("p",{className:"info",onClick:function(){return r(n.permalink),window.scrollTo(0,0)},children:[" ",Object(R.jsx)(oe.b,{})," ",n.num_comments," "]})})]})]})},n.id)},qe=function(){var e,t=Object(O.b)(),c=Object(O.c)((function(e){return e.posts.status})),s=Object(O.c)(E),n=Object(O.c)((function(e){return e.posts.error})),r=Object(O.c)((function(e){return e.posts.selectedSubreddit}));return Object(o.useEffect)((function(){t(I(r))}),[r,t]),"loading"===c?e=Object(R.jsx)(ke,{}):"succeeded"===c&&s?e=s.map((function(e){return Object(R.jsx)(Se,{postId:e},e)})):"failed"===c&&(e=Object(R.jsx)("div",{children:n})),Object(R.jsxs)("section",{children:[Object(R.jsx)("h2",{className:"subredditTitle",children:r}),e,Object(R.jsx)(Ae,{})]})},Ce=function(e){var t,c=e.postId,s=Object(O.b)(),n=Object(O.c)((function(e){return G(e,c)})),r=function(e){return s(je(e))},a=Object(o.useState)(!1),i=Object(U.a)(a,2),l=i[0],d=i[1],u=l?"Read Less << ":"Read More >> ";if(n.selftext&&n.selftext.length>200&&!l?t=Object(R.jsx)("div",{children:Object(R.jsx)(xe.a,{className:"selfText",source:n.selftext.substring(0,200)+"  ..."})}):n.selftext&&l&&(t=Object(R.jsx)(xe.a,{className:"selfText",source:n.selftext})),n)return Object(R.jsx)("article",{className:"post-content",children:Object(R.jsxs)("div",{className:"postContent",children:[Object(R.jsxs)(j.c,{className:"postLink",to:"/search/".concat(n.id),onClick:function(){return r(n.permalink),window.scrollTo(0,0)},children:[Object(R.jsxs)("div",{className:"userInfo",children:["[deleted]"!==n.author?Object(R.jsx)(re,{postAuthor:n.author}):Object(R.jsx)(re,{postAuthor:"AutoModerator"}),Object(R.jsxs)("h5",{id:"home",className:"userName",children:[" by  ",n.author]})]}),Object(R.jsx)("hr",{}),Object(R.jsx)("h4",{className:"post-title",children:n.title}),Object(R.jsxs)("div",{className:"post-media",children:[Object(R.jsx)("img",{className:"post-image",src:n.url,alt:""}),Object(R.jsx)("div",{children:n.media&&n.media.reddit_video?Object(R.jsx)("video",{className:"video",src:n.media.reddit_video.fallback_url,controls:!0,children:" Your browser does not support the video tag. "}):""})]}),t]}),"clips.twitch.tv"===n.domain||"imgur.com"===n.domain||"link"===n.post_hint?Object(R.jsx)("a",{className:"postUrl",href:n.url,children:"Click here to see "}):"",Object(R.jsx)("p",{className:"readmore",onClick:function(){d(!l)},children:n.selftext&&u}),Object(R.jsxs)("div",{className:"postInfo",children:[Object(R.jsx)("p",{className:"info",children:ie.a.unix(n.created_utc).fromNow()}),Object(R.jsxs)("p",{className:"info likes",children:[Object(R.jsx)(le.a,{})," ",n.ups]}),Object(R.jsx)(j.c,{className:"postLink",to:"/search/".concat(n.id),children:Object(R.jsxs)("p",{className:"info",onClick:function(){return r(n.permalink),window.scrollTo(0,0)},children:[" ",Object(R.jsx)(oe.b,{})," ",n.num_comments," "]})})]})]})},n.id)},Ie=function(){var e,t=Object(O.c)((function(e){return e.search.status})),c=Object(O.c)(Q),s=Object(O.c)((function(e){return e.search.error}));return"loading"===t?e=Object(R.jsx)(ke,{}):"succeeded"===t&&c?e=c.map((function(e){return Object(R.jsx)(Ce,{postId:e},e)})):"failed"===t&&(e=Object(R.jsx)("div",{children:s})),Object(R.jsxs)("section",{children:[e,Object(R.jsx)(Ae,{})]})},Ve=function(){return Object(R.jsx)("section",{children:Object(R.jsx)("h2",{className:"StartMessage",children:"Start searching or simply choose a subreddit to begin!"})})};function ye(){return Object(R.jsx)(j.a,{children:Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)("div",{className:"App-navbar",children:Object(R.jsx)(B,{})}),Object(R.jsxs)(b.d,{children:[Object(R.jsx)(b.b,{exact:!0,path:"/",component:Ve}),Object(R.jsx)(b.b,{exact:!0,path:"/search",component:Ie}),Object(R.jsx)(b.b,{exact:!0,path:"/posts",component:qe}),Object(R.jsx)(b.b,{path:"/posts/:postId",component:we}),Object(R.jsx)(b.b,{path:"/search/:postId",component:ge}),Object(R.jsx)(b.a,{to:"/"})]})]})})}j.b;var Ke=ye,Xe=Object(x.a)({reducer:{posts:K,users:_,subreddits:w,comments:Oe,search:F}}),He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}u.a.render(Object(R.jsx)(l.a.StrictMode,{children:Object(R.jsx)(O.a,{store:Xe,children:Object(R.jsx)(Ke,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");He?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var s=c.headers.get("content-type");404===c.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()},73:function(e,t,c){}},[[163,1,2]]]);
//# sourceMappingURL=main.22dfb592.chunk.js.map