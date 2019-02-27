
/* SIDEBAR - By: https://codepen.io/jscottsmith/ */
(function() {

    var nav = $('nav'),
      menu = $('nav h1'),
      tab = $('nav li'), // My added line
      main = $('main'),
        open = false,
        hover = false;
  
    menu.on('click', function() {
          open = !open ? true : false;
      nav.toggleClass('menu-active');
      main.toggleClass('menu-active');
      nav.removeClass('menu-hover');
      main.removeClass('menu-hover');
      console.log(open);
    });

    tab.on('click', function() { /* My added code */
      open = !open ? true : false;
      nav.toggleClass('menu-active');
      main.toggleClass('menu-active');
      nav.removeClass('menu-hover');
      main.removeClass('menu-hover');
      console.log(open);
    }); /* Up to here */

    menu.hover( 
      function() {
        if (!open) {
            nav.addClass('menu-hover');
            main.addClass('menu-hover');
        }
      }, function() {
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
      }
    );
  
  })();