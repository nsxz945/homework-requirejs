define([], function() {
    function Exposure(container){
        this.init();
        this.bind();
    }
    Exposure.prototype.showImg = function(i){      
        if (this.isVisible(i)){
            i.setAttribute('src', i.getAttribute('data-src'))
            i.classList.add('show')}
    }
    Exposure.prototype.isVisible = function(node){
        if (node.length === 0) {return void(0)}
        if (window.scrollY>=node.offsetTop-window.outerHeight && window.scrollY<=node.offsetTop+node.offsetHeight) {
        return true
        } 
        else {return false}
    }
    Exposure.prototype.bind = function(){
        var _this = this;
        window.onscroll=function(){
 		document.querySelectorAll('img:not(.show)').forEach(function(img){
             _this.showImg(img)})
    }
    }
    Exposure.prototype.init =function(){
        var _this = this;
        document.querySelectorAll('img:not(.show)').forEach(function(img){
             _this.showImg(img)})
    }

    var alubm = new Exposure(document.querySelectorAll('.alubm')[0])
});