(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    // Show ALL
    // $('.show-all active').on( 'click', function(e) {
    //     $('.items').fadeIn('.completed', '.openItem');
    // });

    //Show ACTIVE only
    $('.show-active').on( 'click', function(e) {
        //$('.openItem').css('opacity', '1');
        $('.complete').css('display', 'none');
        // $('.items').fadeOut('.complete');
        // $('.items').fadeIn('.openItem');
    });

    //Show COMPLETED only
    // $('.show-completed').on( 'click', function(e) {
    //     // $('.items').fadeOut('.openItem');
    //     // $('.items').fadeIn('.complete');
    // });

})(window.todo, window.jQuery);
