(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(2),o=a.n(i),s=a(3),l=a(4),r=a(6),m=a(5),d=a(7);a(14);var g=function(e){return c.a.createElement("header",{className:"jumbotron bg-info "},c.a.createElement("div",{className:"row text"},c.a.createElement("div",{className:"col-4 font-weight-bold "},c.a.createElement("span",null,"DC Clicky Game")),c.a.createElement("h1",{className:"col-4 message"}," ",e.alertMessage," "),c.a.createElement("div",{className:"col-2"}," ",c.a.createElement("span",null,"Score: ",e.count)," "),c.a.createElement("div",{className:"col-2"}," Top Score :",e.topCount," ")))},u=[{id:1,img:"https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/11/17-Supergirl.jpg",isClicked:!1},{id:2,img:"http://www.cheatsheet.com/wp-content/uploads/2016/09/booster-gold-e1473354674858.jpg",isClicked:!1},{id:3,img:"https://www.dckids.com/Portals/2/Content/Hero/HeroDCSFCyborg/Source/Default/dc-hero-dcsf-cyborg.png",isClicked:!1},{id:4,img:"https://www.thoughtco.com/thmb/Np-PirWT0_YmSyeV4Coj_7L-xMQ=/600x431/filters:no_upscale():max_bytes(150000):strip_icc()/captainmarvel22-58babd183df78c353c433e34.jpg",isClicked:!1},{id:5,img:"https://static01.nyt.com/images/2018/09/21/watching/batman-the-animated-series-watching/21dc-stream-slide-H1MA-videoSixteenByNineJumbo1600.jpg",isClicked:!1},{id:6,img:"https://i.pinimg.com/originals/90/9f/6d/909f6d6454222c40acd5332c9fe56567.jpg",isClicked:!1},{id:7,img:"http://townsquare.media/site/622/files/2013/02/32-sodam-yat-by-patrickgleason.jpg",isClicked:!1},{id:8,img:"https://pixel.nymag.com/imgs/daily/vulture/2015/02/11/harley-quinn/13-harley-quinn.w700.h700.jpg",isClicked:!1}],h=(a(16),function(e){return c.a.createElement("div",{value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",null,c.a.createElement("img",{className:"img grow",alt:"",src:e.photo})))}),p=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null," Click on an image but do not click the SAME image twice, otherwise you lose"))},f=(a(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)});a(20);var k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={count:0,topScore:0,clickedImage:[],Images:u,message:""},a.handleClick=function(e){-1===a.state.clickedImage.indexOf(e)?(a.handleIncrement(),a.setState({clickedImage:a.state.clickedImage.concat(e)}),console.log(e),console.log(a.state.clickedImage.indexOf(e))):(a.Reset(),console.log(e),console.log(a.state.clickedImage.indexOf(e)))},a.handleIncrement=function(){var e=a.state.count+1;a.setState({count:e,isClicked:a.state.clickedImage}),e>=a.state.topScore&&(a.setState({topScore:e,message:"Correct guess"}),console.log(a.state.message)),e===u.length?(a.setState({message:"You win! Click  to play again "}),console.log(a.state.message)):a.handleShuffle()},a.Reset=function(){a.setState({count:0,topScore:a.state.topScore,clickedImage:[],message:""}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(u);a.setState({Images:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(f,null,c.a.createElement("div",{className:"card text-center"},c.a.createElement(g,{count:this.state.count,topCount:this.state.topScore,alertMessage:this.state.message}),c.a.createElement("div",{className:"card-header bg-primary text-white"},c.a.createElement(p,null))),c.a.createElement("div",{className:"container"},this.state.Images.map(function(t){return c.a.createElement("span",{className:"container padding ",key:t.id},c.a.createElement("button",{className:"btn btn-danger grow padding"},"",c.a.createElement(h,{key:t.id,photo:t.img,id:t.id,handleClick:e.handleClick})))})))}}]),t}(c.a.Component);o.a.render(c.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.5b61a7e4.chunk.js.map