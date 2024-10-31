(function(){"use strict";var e={4587:function(e,t,n){var a=n(5130),o=n(6768);function r(e,t,n,a,r,s){const i=(0,o.g2)("HomeComponent");return(0,o.uX)(),(0,o.Wv)(i)}const s={class:"navbar navbar-expand-lg navbar-light custom-navbar"},i={class:"container-fluid"},c={class:"collapse navbar-collapse",id:"navbarNav"},l={class:"navbar-nav"},p={class:"nav-item"},u={class:"nav-item"};function d(e,t,n,a,r,d){const m=(0,o.g2)("router-link"),v=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("nav",s,[(0,o.Lk)("div",i,[t[2]||(t[2]=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},"My App",-1)),t[3]||(t[3]=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,o.Lk)("div",c,[(0,o.Lk)("ul",l,[(0,o.Lk)("li",p,[(0,o.bF)(m,{to:"/",class:"nav-link","active-class":"active",exact:""},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("li",u,[(0,o.bF)(m,{to:"/projects",class:"nav-link","active-class":"active"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Projects")]))),_:1})])])])])]),(0,o.bF)(v)])}var m={name:"HomeComponent"},v=n(1241);const f=(0,v.A)(m,[["render",d]]);var g=f,h={name:"App",components:{HomeComponent:g}};const b=(0,v.A)(h,[["render",r]]);var k=b,j=n(973),A=n.p+"media/bg-video.73a8b246.mp4",y=n.p+"img/profile3d.60c8ef3e.png";const L={class:"main"};function C(e,t,n,a,r,s){return(0,o.uX)(),(0,o.CE)("div",L,t[0]||(t[0]=[(0,o.Lk)("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"background-video"},[(0,o.Lk)("source",{src:A,type:"video/mp4"}),(0,o.eW)(" Your browser does not support the video tag. ")],-1),(0,o.Lk)("div",{class:"content"},[(0,o.Lk)("div",{class:"jumbotron"},[(0,o.Lk)("h1",{class:"display-4"},"Hello, world!"),(0,o.Lk)("p",{class:"lead"},[(0,o.eW)("My name is "),(0,o.Lk)("b",null,"Nikhil Kudupudi"),(0,o.eW)(", I'm a passionate about Data, and Currently exploring this field ,did some projects using Data such as Autonomous Cars Simulation, Heart Disease Analysis using Machine Learning . I worked as a Backend Developer for a fintech company working there seeing all the visual analytics,hadnling database etc., scenarios triggered me to pursue Masters in data analytics...So, I want to continue my career in the field of DataScience.")]),(0,o.Lk)("hr",{class:"my-4"}),(0,o.Lk)("p",null,"I had explored multiple fields such as Backend Web Developement, Data Science,Cloud.So you can expect some general knowledge in these domains. But I get to find the Data Field more intresting due exploration of data. "),(0,o.Lk)("a",{class:"btn btn-primary btn-lg",href:"#",role:"button"},"Learn more")]),(0,o.Lk)("img",{src:y,alt:"3D Model",width:"800 px",class:"three-d-image"})],-1)]))}var w={name:"AboutComponent"};const I=(0,v.A)(w,[["render",C]]);var E=I;const S={class:"main"},F={class:"projects-container"},O={class:"project-list"};function J(e,t,n,a,r,s){const i=(0,o.g2)("ProjectCard");return(0,o.uX)(),(0,o.CE)("div",S,[(0,o.Lk)("div",F,[t[0]||(t[0]=(0,o.Lk)("h2",null,"My Projects",-1)),(0,o.Lk)("div",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.projects,((e,t)=>((0,o.uX)(),(0,o.Wv)(i,{key:t,projectName:t,project:e},null,8,["projectName","project"])))),128))])])])}var N=n(4232);const x={class:"project-card-front"},X={class:"project-details"},D={class:"tools-container"},Q=["src"],z=["src"],B={class:"project-card-back"};function K(e,t,n,a,r,s){return(0,o.uX)(),(0,o.CE)("div",{class:"project-card",onClick:t[0]||(t[0]=e=>r.flipped=!r.flipped)},[(0,o.Lk)("div",{class:(0,N.C4)(["project-card-inner",{flipped:r.flipped}])},[(0,o.Lk)("div",x,[(0,o.Lk)("div",X,[(0,o.Lk)("h3",null,(0,N.v_)(n.projectName),1),(0,o.Lk)("div",D,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.project.tools,((e,t)=>((0,o.uX)(),(0,o.CE)("img",{key:t,class:"tool-icon",src:e,alt:"Tool Icon"},null,8,Q)))),128))])]),(0,o.Lk)("img",{class:"project-image",src:n.project.image,alt:"Project Image"},null,8,z)]),(0,o.Lk)("div",B,[(0,o.Lk)("h3",null,(0,N.v_)(n.projectName),1),(0,o.Lk)("p",null,[t[1]||(t[1]=(0,o.Lk)("strong",null,"Description:",-1)),(0,o.eW)(" "+(0,N.v_)(n.project.description),1)]),(0,o.Lk)("p",null,[t[2]||(t[2]=(0,o.Lk)("strong",null,"Results:",-1)),(0,o.eW)(" "+(0,N.v_)(n.project.results),1)])])],2)])}var G={name:"ProjectCard",props:{projectName:String,project:Object},data(){return{flipped:!1}}};const W=(0,v.A)(G,[["render",K],["__scopeId","data-v-bad65db0"]]);var H=W;const P={HeartDisease:{Tenure:2020,languages:"python",frameworks:"jupyter notebook",description:"In this project it utilizes cleaveland dataset to classify the heart diesease existence.multiple models were used and compared with accuracy, other metrics to get the better performing model",results:"Logistic Regression performed well when compared to other machine learning models",image:n(9935),tools:[n(4531),n(3514)]},AutonomousCarsSimulation:{Tenure:2022,languages:"python",framework:"jupyter notebook",description:"This projects simulates the autonomous cars in the real world using the deep learning algorithms.We have generated the training images by playing the simulation and each frmae will be seperated into a image and will be trained on the model",results:"the model is not able to completely detect the road borders",image:n(3233),tools:[n(4531),n(3514)]}};var T={name:"ProjectComponent",components:{ProjectCard:H},data(){return{projects:P}}};const M=(0,v.A)(T,[["render",J],["__scopeId","data-v-b974f230"]]);var U=M;const V=[{path:"/",name:"Home",component:E},{path:"/projects",name:"Projects",component:U}],q=(0,j.aE)({history:(0,j.LA)("/NikhilKudupudi.io/"),routes:V});var R=q;const Y=(0,a.Ef)(k);Y.use(R),Y.mount("#app")},3233:function(e,t,n){e.exports=n.p+"img/car.38e2a264.jpeg"},9935:function(e,t,n){e.exports=n.p+"img/heart.c2da812f.jpeg"},3514:function(e){e.exports="data:image/png;base64,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"},4531:function(e,t,n){e.exports=n.p+"img/python.f9127f43.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],o=e[p][1],r=e[p][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/NikhilKudupudi.io/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,s=a[0],i=a[1],c=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var p=c(n)}for(t&&t(a);l<s.length;l++)r=s[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(4587)}));a=n.O(a)})();
//# sourceMappingURL=app.3a63f428.js.map