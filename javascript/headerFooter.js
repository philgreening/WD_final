//handlebars template for header and footer navigation

//JSON event data to pass into handlebars template header.hbs and Footer.hbs
const menuData = {
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
};
//jquery AJAX call to import handlebars header.hbs template
$.get('templates/header.hbs', function(menuTemplate) {
    // convert the html to a handlebars template
    const compiledMenuTempate = Handlebars.compile(menuTemplate);
    // compile the handlebars template with data above and pass it to the target id
    $('header').prepend(compiledMenuTempate(menuData));
}, 'html');

//same as above for footer.hbs
$.get('templates/footer.hbs', function(menuTemplate) {
    const compiledMenuTempate = Handlebars.compile(menuTemplate);
    $('footer').append(compiledMenuTempate(menuData));
}, 'html');
