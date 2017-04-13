define("app/carousel",[],function(){function i(i){this.$container=i,this.init(),this.bind()}return i.prototype.init=function(){console.log(this),this.$album=this.$container.children(".album"),this.$imgs=this.$album.children(),this.curImg=0,this.imgWidth=this.$imgs.first().outerWidth(!0),this.imgNum=this.$album.children("li").length,this.lock=!1,this.$album.append(this.$imgs.first().clone()),this.$album.prepend(this.$imgs.last().clone()),this.$album.css("width",(this.imgNum+2)*this.imgWidth+"px"),this.$album.css("left",-this.imgWidth+"px"),console.log("done")},i.prototype.bind=function(){var i=this;$(".btn-next").click(function(){i.playNext()}),$(".btn-pre").click(function(){i.playPre()}),$(".bullet li").click(function(){var t=$(this).index()-i.curImg;t>0?i.playNext(t):i.playPre(-t)})},i.prototype.playNext=function(i){var t=this;t.lock||0===i||(t.lock=!0,i||(i=1),t.$album.animate({left:"-="+t.imgWidth*i},function(){t.curImg+=i,t.curImg===t.imgNum&&(t.$album.css("left",-t.imgWidth+"px"),t.curImg=0),t.setBullet(),t.lock=!1}))},i.prototype.playPre=function(i){var t=this;t.lock||0===i||(t.lock=!0,i||(i=1),t.$album.animate({left:"+="+t.imgWidth*i},function(){t.curImg-=i,t.curImg===-1&&(t.$album.css("left",-t.imgNum*t.imgWidth+"px"),t.curImg=t.imgNum-1),t.setBullet(),t.lock=!1}))},i.prototype.setBullet=function(){console.log(this.curImg),console.log,this.$container.find(".bullet .active").removeClass("active"),this.$container.find(".bullet li").eq(this.curImg).addClass("active")},i}),define("app/falls",[],function(){function t(t){function n(){for(s=parseInt(t.outerWidth(!0)/o),t.css({width:s*o}),i=0;i<s;i++)u[i]=0,console.log(s)}function e(){n(),l()}function l(){c.each(function(i,n){var e=u.indexOf(Math.min.apply(null,u));$(this).css({left:o*e+"px",top:u[e]+"px"}),u[e]+=$(this).outerHeight(!0),t.css("height",Math.max.apply(null,u))})}var t,s,c=t.find(".item"),o=c.outerWidth(!0),u=[];e(),$(window).resize(function(){e()})}return console.log(1),t}),requirejs.config({baseUrl:"js",paths:{}}),requirejs(["app/carousel","app/falls"],function(i,t){new i($(".ct"));t($(".wall"))}),define("app",function(){});