/*!
 * Start Bootstrap - Heroic Features v4.3.0 (https://startbootstrap.com/template/heroic-features)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project




// our aprtner Slider
var vox_news = 0;

$('.voxNews li').each(function() {
    vox_news += $(this).outerWidth(true);
});

$('.voxNews').parent().append($('.voxNews').clone());

function setupNews(w) {
    function phase1() {
        var voxNews = $('.voxNews').first(),
            curMargin = voxNews.css('margin-left').replace("px", ""),
            animSpeed = (w * 20) - (Math.abs(curMargin) * 20);

        voxNews.animate({ 'margin-left': '-' + w + 'px' }, animSpeed, 'linear', phase2);
    }

    function phase2() {
        $('.voxNews').first().css({ 'margin-left': '0px' });
        phase1();
    }
    $('.voxNews img').hover(function() {
        $('.voxNews').stop();
    }, function() {
        phase1();
    });
    phase1();
}

setupNews(vox_news);




// footer Menu 

function footerMenu() {
    var x = document.getElementById("footerNav");
    if (x.style.display === "block") {
        x.style.display = "none";
        var element = document.getElementById('footerBtn');
        element.classList.remove('tooglrIcon');

    } else {
        x.style.display = "block";
        var element = document.getElementById('footerBtn');
        element.classList.add('tooglrIcon');
    }
}

// Select DropDown JS
$('select[data-menu]').each(function() {

    let select = $(this),
        options = select.find('option'),
        menu = $('<div />').addClass('select-menu'),
        button = $('<div />').addClass('button'),
        list = $('<ul />'),
        arrow = $('<em />').prependTo(button);

    options.each(function(i) {
        let option = $(this);
        list.append($('<li />').text(option.text()));
    });

    menu.css('--t', select.find(':selected').index() * -41 + 'px');

    select.wrap(menu);

    button.append(list).insertAfter(select);

    list.clone().insertAfter(button);

});

$(document).on('click', '.select-menu', function(e) {

    let menu = $(this);

    if(!menu.hasClass('open')) {
        menu.addClass('open');
    }

});

$(document).on('click', '.select-menu > ul > li', function(e) {

    let li = $(this),
        menu = li.parent().parent(),
        select = menu.children('select'),
        selected = select.find('option:selected'),
        index = li.index();

    menu.css('--t', index * -41 + 'px');
    selected.attr('selected', false);
    select.find('option').eq(index).attr('selected', true);

    menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');

    setTimeout(() => {
        menu.removeClass('open tilt-up tilt-down');
    }, 500);

});

$(document).click(e => {
    e.stopPropagation();
    if($('.select-menu').has(e.target).length === 0) {
        $('.select-menu').removeClass('open');
    }
})


