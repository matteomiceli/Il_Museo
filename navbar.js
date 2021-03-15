const nav = $('.navbar');

console.log(nav);

$(window).scroll(() => {
    const scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll > 90) {
        scroll.addClass('navbar-hide');
    }
});
