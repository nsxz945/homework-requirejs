define(['jquery'], function($) {
  console.log(1)
    function Falls($container){
        var $container
        var $item = $container.find('.item');
        var itemWidth = $item.outerWidth(true)
        var cloumNum
        var heightArr=[];
        setView()
        $(window).resize(function(){
         setView()
        })
        function init(){
 cloumNum=parseInt($container.outerWidth(true)/itemWidth);
  $container.css({'width':cloumNum*itemWidth});
  for (i=0;i<cloumNum;i++){
  heightArr[i]=0;
  console.log(cloumNum)
}}//数组初始化

function setView(){
  init()
  postImg();
}//页面布局

function postImg(){$item.each(function(i,element){
  var cloum=heightArr.indexOf(Math.min.apply(null,heightArr));
  $(this).css({
    'left':itemWidth*cloum+'px',
    'top':heightArr[cloum]+'px'
  })
  heightArr[cloum]+=$(this).outerHeight(true)
  $container.css('height',Math.max.apply(null,heightArr))
})}//放置图片    
    }
    return Falls
});