requirejs.config({
    baseUrl: 'js',
    paths: {
    }
});

requirejs(['app/carousel', 'app/falls'],
function  (Carousel, Falls) {
    var carousel1=new Carousel($('.ct'))
    Falls($('.wall'))
});