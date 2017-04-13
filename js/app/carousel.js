define(['jquery'], function($) {
    function Carousel($container) {
            this.$container = $container
            this.init();
            this.bind();
        }
        Carousel.prototype.init = function () {
            console.log(this)
            this.$album = this.$container.children('.album');
            this.$imgs = this.$album.children();
            this.curImg = 0;
            this.imgWidth = this.$imgs.first().outerWidth(true)
            this.imgNum = this.$album.children('li').length;
            this.lock = false;
            this.$album.append(this.$imgs.first().clone());
            this.$album.prepend(this.$imgs.last().clone());
            this.$album.css('width', (this.imgNum + 2) * this.imgWidth + 'px');
            this.$album.css('left', -this.imgWidth + 'px')
            console.log('done')
        }
        Carousel.prototype.bind = function () {
            var carousel = this;
            $('.btn-next').click(function () {
                carousel.playNext()
            })
            $('.btn-pre').click(function () {
                carousel.playPre()
            })
            $('.bullet li').click(function () {
                var gap = $(this).index() - carousel.curImg
                if (gap > 0) {
                    carousel.playNext(gap)
                } else {
                    carousel.playPre(-gap)
                }
            })
        }
        Carousel.prototype.playNext = function (n) {
            var carousel = this;
            if (carousel.lock || n === 0) {
                return void(0)
            } else {
                carousel.lock = true
            };
            if (!n) {
                n = 1
            }
            carousel.$album.animate({
                left: '-=' + carousel.imgWidth * n
            }, function () {
                carousel.curImg += n;
                if (carousel.curImg === carousel.imgNum) {
                    carousel.$album.css('left', -carousel.imgWidth + 'px')
                    carousel.curImg = 0
                }
                carousel.setBullet();
                carousel.lock = false;
            })
        }
        Carousel.prototype.playPre = function (n) {
            var carousel = this;
            if (carousel.lock || n === 0) {
                return void(0)
            } else {
                carousel.lock = true
            };
            if (!n) {
                n = 1
            }
            carousel.$album.animate({
                left: '+=' + carousel.imgWidth * n
            }, function () {
                carousel.curImg -= n;
                if (carousel.curImg === -1) {
                    carousel.$album.css('left', -carousel.imgNum * carousel.imgWidth + 'px')
                    carousel.curImg = carousel.imgNum - 1
                }
                carousel.setBullet();
                carousel.lock = false;
            })
        }
        Carousel.prototype.setBullet =function () {
            var carousel = this;
            console.log(this.curImg)
            console.log
            this.$container.find('.bullet .active').removeClass('active')
            this.$container.find('.bullet li').eq(this.curImg).addClass('active')
        }
        return Carousel;
}); 