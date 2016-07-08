(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //TODO input form - when 'enter'

    $('form').on( 'submit', function (e) {
        e.preventDefault();
        var newInput = $('.new-todo').val();
        addNewItem(newInput);
        $('.new-todo').val('');

    });

    function addNewItem(newInput) {
        var li = '<li></li>';
        var article = '<article class="newItem"></article>';
        var checkButton = '<button class="check"></button>';
        var para = '<p>' + newInput + '</p>';
        var delButton = '<button class="delete">X</button>';
        $('.items').append(li)
            .find('li:last-child')
                .append(article)
                .find('.newItem')
                    .append(checkButton + para + delButton);
    }


    console.log( $('form') );





})(window.todo, window.jQuery);
