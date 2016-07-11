(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //Show ACTIVE only
    $('.show-active').on( 'click', function(e) {
        $('.openItem').show();
        $('.complete').hide();
    });

    //Show COMPLETED only
    $('.show-completed').on( 'click', function(e) {
        $('.openItem').hide();
        $('.complete').show();
    });

    //Show ALL
    $('.show-all-active').on( 'click', function(e) {
        //console.log('click');
        $('.openItem').show();
        $('.complete').show();
    });



})(window.todo, window.jQuery);
