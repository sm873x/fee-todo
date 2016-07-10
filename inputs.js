(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //Form input - when 'enter'
    $('form').on( 'submit', function (e) {
        e.preventDefault();

        var newInput = $('.new-todo').val();
        addNewItem(newInput);

        $('.new-todo').val('');

        //add new todo item to incomplete counter
        var preVal = Number( $('.incomplete-items').val() );
        $('.incomplete-items')
            .val(preVal + 1)
            .text((preVal + 1).toString());
        console.log(preVal);
    });

    //Creates new list item
    ns.itemList = [];

    function addNewItem(newInput) {
        var li = '<li></li>';
        var article = '<article class="openItem"></article>';
        var checkButton = '<button class="check"></button>';
        var para = '<p class="todoText">' + newInput + '</p>';
        var delButton = '<button class="delete">X</button>';

        $('.items')
            .append(li)
            .find('li:last-child')
                .append(article)
                .find('.openItem')
                    .append(checkButton + para + delButton)

        ns.itemList.push({
            complete: false,
            text: newInput,
            timeStamp: Date.now(),
        });
        console.log(ns.itemList);
    }

    //Edit item inline
    $('.items').on('click', '.openItem p', editItem);

    $('.items').on( 'keypress', '.edit-todo', function (e) {
        if ( e.keyCode === 13) {
            // console.log('enter');
            var newText = $(this).val();
            var indexNum = $.inArray('', ns.listItem);
            // console.log(newText);
            $(this)
                .replaceWith('<p class="todoText">' + newText + '</p>');

            var todoText = $(event.target)
                .closest('.openItem')
                    .toggleClass('complete')
                    .find('.todoText')
                        .text();

            $.each(ns.itemList, function(i, todotext) {
                if (ns.itemList[i].text === todoText) {
                    ns.itemList[i].complete = !ns.itemList[i].complete;
                    console.log(ns.itemList[i]);
                }
            });
        }
    });

    function editItem(e) {
        //console.log('clicked');
        var input = '<input type="text" class="edit-todo" value=' + this.innerText + '>';

        $(this)
            .replaceWith(input)
    }

    //Complete item
    $('.items').on('click', '.check', function(e) {

        var todoText = $(event.target)
            .closest('.openItem')
                .toggleClass('complete')
                .find('.todoText')
                    .text();

        $.each(ns.itemList, function(i, todotext) {
            if (ns.itemList[i].text === todoText) {
                ns.itemList[i].complete = !ns.itemList[i].complete;
                console.log(ns.itemList[i]);
            }
        });

    });


    //Delete item
    $('.items').on('click', '.delete', function (e){
            $(this)
                .parent()
                .remove();
            confirm('You sure about that? Click OK to proceed.');

            var todoText = $(event.target)
                .closest('.openItem')
                    .find('.todoText')
                        .text();

            var i;
            for (i=0; i < ns.itemList.length; i++) {
                if (ns.itemList[i].text === todoText) {
                    ns.itemList.splice(i,1);
                    console.log(ns.itemList);
                }
            }
        }
    );




})(window.todo, window.jQuery);
