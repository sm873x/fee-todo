(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //Form input - when 'enter'

    $('form').on( 'submit', function (e) {
        e.preventDefault();
        var newInput = $('.new-todo').val();
        addNewItem(newInput);
        $('.new-todo').val('');
    });

    //Creates new list item
    function addNewItem(newInput) {
        var li = '<li></li>';
        var article = '<article class="openItem"></article>';
        var checkButton = '<button class="check"></button>';
        var para = '<p>' + newInput + '</p>';
        var delButton = '<button class="delete">X</button>';

        $('.items')
            .append(li)
            .find('li:last-child')
                .append(article)
                .find('.openItem')
                    .append(checkButton + para + delButton);
    }


    //Edit item inline
    $('.items').on('click', '.openItem', editItem);

    function editItem() {
        console.log('clicked');
        var input = '<input type="text" class="edit-todo"></input>';
        $('.openItem p')
            .replaceWith(input);
    }

    

})(window.todo, window.jQuery);
