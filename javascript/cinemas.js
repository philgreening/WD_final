//jquery AJAX call to import handlebars header template into each page
$.get('templates/cinemas.hbs', function(cinemasTemplate) {
    // once received, convert the raw template to a handlebars template
    var compiledCinemasTemplate = Handlebars.compile(cinemasTemplate);
    // compile the template with your context 'data' and set it on an element with an id
    $('#cinemas').html(compiledCinemasTemplate(cinemaData));
}, 'html'); // <-- tell jquery to load the file as html


var cinemaData = {
    "cinema": [
        {
            "name": "Everyman Cinema",
            "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.1660768645265!2d-1.9073460840480125!3d52.4761286472318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8b1dc8e4dd%3A0xfab9c25245a32b99!2sEveryman%20Mailbox%20Birmingham!5e0!3m2!1sen!2suk!4v1598801749734!5m2!1sen!2suk\" width=\"300\" height=\"225\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"",
            "address": {
                "street": "116 Wharfside Street",
                "line1": "The Mailbox",
                "city": "Birmingham",
                "postcode": "B1 1RF"
            },
            "link":"https://www.everymancinema.com/film-listings",
            "description":"Everyman Mailbox features three custom built screens with the highest picture quality and the latest in digital projection, complete with a bar and foyer.",
        },
        {
            "name": "Electric Cinema",
            "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19444.22925956467!2d-1.9088151041819994!3d52.46956318343963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21990d0a5a9cb1c8!2sThe%20Electric%20Cinema!5e0!3m2!1sen!2suk!4v1598802423937!5m2!1sen!2suk\" width=\"300\" height=\"225\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"",
            "address": {
                "street": "47-49",
                "line1": "Station Street",
                "city": "Birmingham",
                "postcode": "B5 4DY"
            },
            "link":"http://www.electricflix.com/cinema/",
            "description":"The Electric is a cinema and sound recording facility in Birmingham, England. It opened in Station Street in 1909, showing its first silent film on 27 December of that year, and is now the oldest working cinema in the country. It predates its namesake, the Electric Cinema in Notting Hill, London, by around two months.",
        },
        {
            "name": "Mockingbird Cinema",
            "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19444.22925956467!2d-1.9088151041819994!3d52.46956318343963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x821dfe2752fc699b!2sThe%20Mockingbird%20Cinema%20and%20Kitchen!5e0!3m2!1sen!2suk!4v1598802482119!5m2!1sen!2suk\" width=\"300\" height=\"225\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"",
            "address": {
                "street": "Mockingbird House",
                "line1": "The Custard Factory",
                "city": "Birmingham",
                "postcode": "B9 4AA"
            },
            "link":"https://www.mockingbirdcinema.com/",
            "description":"Situated within Birmingham's iconic Custard Factory, The Mockingbird Cinema and Kitchen offers a unique cinematic experience. Relax within the creative hub of the city, enjoy some food, then grab a drink, before watching a film in our fully independent cinema.",
        },
        {
            "name": "Midlands Arts Centre",
            "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.449990726798!2d-1.905966984048618!3d52.45287744895366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc3e860f7d4f%3A0xa4d283214b49be64!2sMidlands%20Arts%20Centre!5e0!3m2!1sen!2suk!4v1598803030989!5m2!1sen!2suk\" width=\"300\" height=\"225\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"",
            "address": {
                "street": "Midlands Arts Centre",
                "line1": "Cannon Hill Park",
                "city": "Birmingham",
                "postcode": "B1 9QH"
            },
            "link":"https://macbirmingham.co.uk/whats-on/cinema",
            "description":"Opened in 1962, mac birmingham is a hub of creativity and learning in the Midlands. With four performance auditoria, rehearsal and media studios, a cinema, and a visual art gallery, mac birmingham presents a broad range of contemporary work from both emerging and established artists across genres. mac birmingham is the most visited arts centre in the Midlands",
        },

    ]
};
