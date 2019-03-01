/* SIDEBAR - By: https://codepen.io/jscottsmith/ */

const nav = document.getElementsByTagName("nav")[0],
      menu = nav.getElementsByTagName("h1")[0],
      main = document.getElementsByTagName("main")[0]
      menuItems = nav.getElementsByTagName("li");

let open = false;

for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];

  console.log(menuItem);

  menuItem.addEventListener("click", function() {
    console.log("clicked");
    open = !open ? true : false;
    nav.classList.toggle('menu-active');
    main.classList.toggle('menu-active');
    nav.classList.remove('menu-hover');
    main.classList.remove('menu-hover');
    console.log(open);
  });
}

menu.onclick = function() {
  open = !open ? true : false;
  nav.classList.toggle('menu-active');
  main.classList.toggle('menu-active');
  nav.classList.remove('menu-hover');
  main.classList.remove('menu-hover');
  console.log(open);
};

menu.onmouseenter = function() {
  if (!open) {
      nav.classList.add('menu-hover');
      main.classList.add('menu-hover');
  }
};

menu.onmouseleave = function() {
  nav.classList.remove('menu-hover');
  main.classList.remove('menu-hover');
};

