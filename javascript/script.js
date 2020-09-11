//handlebars template for navigation bar

//jquery AJAX call to import handlebars header template into each page
$.get('templates/header.hbs', function(menuTemplate) {
    // once received, convert the raw template to a handlebars template
    var compiledMenuTempate = Handlebars.compile(menuTemplate);
    // compile the template with your context 'data' and set it on an element with an id
    $('header').prepend(compiledMenuTempate(menuData));
}, 'html'); // <-- tell jquery to load the file as html

// var menuTemplate = document.getElementById("menu-template").innerHTML;
// var compiledMenuTemplate = Handlebars.compile(menuTemplate);

var  menuData = {
    menu: [
        {
            "name": "Home",
            "link": "index"
        },
        {
            "name": "Articles and Reviews",
            "link": "articles"
        },
        {
            "name": "News and Events",
            "link": "newsandevents"
        },
        {
            "name": "Local Cinemas",
            "link": "cinemas"
        },
        {
            "name": "About",
            "link": "about"
        },
    ]
}

// document.getElementById("target").innerHTML = menuItem;
//document.body.innerHTML += compiledMenuTemplate(menuItem);
//Handlebars.registerPartial('header', Handlebars.template[header.hbs], )
$.get('templates/footer.hbs', function(menuTemplate) {
    // once received, convert the raw template to a handlebars template
    var compiledMenuTempate = Handlebars.compile(menuTemplate);
    // compile the template with your context 'data' and set it on an element with an id
    $('footer').append(compiledMenuTempate(menuData));
}, 'html'); // <-- tell jquery to load the file as html
