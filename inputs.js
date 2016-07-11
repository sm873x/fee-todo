(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    /**
     * [Increments incomplete todo items counter when new list item added]
     * @return {void}
     */
    function incompleteCounter() {

         var numIncomplete = $.grep(ns.itemList, function(elem) {
             return !elem.complete;
         }).length;

        $('.incomplete-items').text(numIncomplete);
    }

    $('form').on( 'submit', function (e) {
        e.preventDefault();

        var newInput = $('.new-todo').val();
        addNewItem(newInput);

        $('.new-todo').val('');

        incompleteCounter();

    });

    ns.itemList = [];

    /**
     * [Creates new list item with all elements]
     * @param {string} newInput [new edited text of list item]
     */
    function addNewItem(newInput) {
        var li = '<li></li>';
        var article = '<article class="openItem"></article>';
        var checkButton = '<button class="check"><i class="fa fa-check" aria-hidden="true"></i></button>';
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

    $('.items').on('click', '.openItem p', editItem);

    $('.items').on( 'keypress', '.edit-todo', function (e) {
        if ( e.keyCode === 13) {
            console.log('enter');
            var newText = $(this).val();

            console.log(newText);
            $(this)
                .replaceWith('<p class="todoText">' + newText + '</p>');

            var todoText = $(this)
                .closest('.openItem')
                    .find('.todoText')
                        .text();
            console.log(todoText);
            $.each(ns.itemList, function(i, todotext) {
                if (ns.itemList[i].text === todoText) {
                    ns.itemList[i].text = newText;
                    console.log(ns.itemList);
                }
            });
        }
    });

    /**
     * [When editing item, click on text will create new input box with previous text within it]
     * @param  {event} e [click]
     * @return {voic}
     */
    function editItem(e) {
        console.log('clicked');
        var input = '<input type="text" class="edit-todo" value=' + this.innerText + '>';

        $(this).replaceWith(input);
    }

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

        checkMark();
    });

    /**
     * [Reveal or hide checkmark when clicking on check button]
     * @return {void}
     */
    function checkMark() {
        var checkMark = $('.check i').css('opacity');
        console.log(checkMark);

        if (checkMark === 0) {
            $(this)
                .find('i')
                .css('opacity', 1);
        } else if (checkMark === 1) {
            $(this)
                .find('i')
                .css('opacity', 0);
        }
    }

    $('.items').on('click', '.delete', function (e){
            $(this)
                .parent()
                .remove();

            confirm('You sure about that? Click OK to proceed.');

            var todoText = $(event.target)
                .closest('.openItem')
                    .find('.todoText')
                        .text();

            for(var i=0; i<ns.itemList.length; i++) {
                if (ns.itemList[i].text === todoText) {
                    ns.itemList.splice(i,1);
                    i--;
                    console.log(ns.itemList);
                }
            }

            $('.incomplete-items').text(ns.itemList.length);
        }
    );

})(window.todo, window.jQuery);
