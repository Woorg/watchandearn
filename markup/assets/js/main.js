import svg4everybody from 'svg4everybody';
// import exhibitionSlider from '../../blocks/exhibition/exhibition';
// import aboutSlider from '../../blocks/about/about';
// import featuredSlider from '../../blocks/featured/featured';

// import Tabby from 'tabbyjs';

// import levelsSlider from '../../blocks/levels/levels';
// import paymentSlider from '../../blocks/payment/payment';
// import faq from '../../blocks/faq/faq';

// import $ from 'jquery';
// import slick from 'slick-carousel';

(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #2948ff',
    'color: #fff',
    'display: inline-block',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
    'font-weight: 400'
  ].join(';');

  console.log('%c Made with love ❤️ by Igor Gorlov https://igrlv.ru' , styles);


  /*
    Lazyload images
  */


  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    // load_delay: 500,
    use_native: true
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }


  $(function() {



    // Popup

    // $('.open-popup').magnificPopup({
    //   type: 'inline',
    // });

    // let $hButton = $('.h-user__button');
    // let $hList = $('.h-user__list');

    // $hButton.on('click', function () {
    //   console.log('click');
    //   $hList.toggleClass('h-user__list_active');
    // });

    // $(document).on('click', function(e) {
    //   if (!$(e.target).closest('.h-user__button').length) {
    //     $hList.removeClass('h-user__list_active');
    //   }
    // });


    // $('.nav__button').on('click', function (e) {
    //   e.preventDefault()

    //   $('.header__nav').toggleClass('nav_active');

    // });


    // $(document).on('click', function(e) {
    //   if (!$(e.target).closest('.nav__button').length) {
    //     $('.header__nav').removeClass('nav_active');
    //   }
    // });


    // Auth form

    // const $hUserPreferences = $('.h-user__preferences'),
    //   $hUserAuth = $('.h-user__auth'),
    //   $hFormClose = $('.h-user__close');

    // $hUserPreferences.on( 'click', function () {
    //   $hUserAuth.toggleClass('h-user__auth_active');
    // });

    // $hFormClose.on( 'click', function () {
    //   $hUserAuth.removeClass('h-user__auth_active');
    // });



    // $('.catalog__category').on( 'click', function (e) {
    //   e.preventDefault();
    //   console.log(e);
    //   let offsetLeft = e.pageX;
    //   let offsetRight = (($('.catalog__bottom').outerWidth() - e.pageX) - 60);

    //   console.log(offsetLeft);
    //   console.log( $('.catalog__bottom').outerWidth() );


    //   $(this).toggleClass('catalog__category_active');
    //   $(this).siblings().removeClass('catalog__category_active');
    //   $(this).prev('.catalog__sub').toggleClass('catalog__sub_active');
    //   $(this).siblings().prev('.catalog__sub').removeClass('catalog__sub_active');

    // });


    // Sliders

    // exhibitionSlider();
    // aboutSlider();
    // featuredSlider();


    // Tabs

    // if ( $('.register__tabs').length > 0 ) {
    //   const tabs = new Tabby('.register__tabs');
    // }


    // List pages

    // function pageWidget(pages) {
    //   const widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    //   widgetWrap.prependTo("body");
    //   for (let i = 0; i < pages.length; i++) {
    //     $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    //   }
    //   const widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    //   widgetStilization.prependTo(".widget_wrap");
    // }

    // pageWidget([
    //   'index',
    //   'buy-ticket',
    //   'enter',
    //   'personal',

    // ]);



  });




})(jQuery);
