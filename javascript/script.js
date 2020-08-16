var menuTemplate = document.getElementById("menu-template").innerHTML;
var compiledMenuTemplate = Handlebars.compile(menuTemplate);

var  menuItem = compiledMenuTemplate ({
    menu: [
        {
            "name": "Home",
            "link": "index"
        },
        {
            "name": "Articles and Reviews",
            "link": "#"
        },
        {
            "name": "News and Events",
            "link": "#"
        },
        {
            "name": "How to Join",
            "link": "#"
        },
        {
            "name": "About",
            "link": "#"
        },
    ]
});

document.getElementById("target").innerHTML = menuItem;