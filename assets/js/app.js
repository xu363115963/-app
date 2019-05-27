function loaded() {
	// 页面加载完 移除loading
	$('#loading').remove();
	//banner
    var swiper = new Swiper('.swiper-cat-index-ad', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false
    });
    //banner
    var swiper = new Swiper('.swiper-cat-index-ad2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    //banner
    var swiper = new Swiper('.swiper-cat-index-ad3', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false
    });
    //banner
    var swiper = new Swiper('.swiper-cat-index-ad4', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: false
    });
    //banner
    var swiper = new Swiper('.swiper-cat-index-ad5', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
}

//jq
(function($){
    //选项卡
	var n;
	$(".tabs a").click(function() {
		n = $('.tabs a').index(this);
		$('.tabs a').removeClass('active');
		$(this).addClass('active');
		$('.listTex .tplCom').hide().eq(n).show();
	})
})(jQuery);
