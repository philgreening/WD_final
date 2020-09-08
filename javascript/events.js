

//jquery AJAX call to import handlebars header template into each page
$.get('partials/events.hbs', function(eventsTemplate) {
    // once received, convert the raw template to a handlebars template
    var compiledEventsTemplate = Handlebars.compile(eventsTemplate);
    // compile the template with your context 'data' and set it on an element with an id
    $('#events').html(compiledEventsTemplate(eventData));
}, 'html'); // <-- tell jquery to load the file as html


var eventData = {
    "event": [
        {
            "event-title": "Friendly Neighbourhood Cinema",
            "description": "<p>something about Bogart</p>",
            "date":1,
            "location":"Kingsway, Kings Heath",
            "link": "www.friendlyneighbourhoodcinema.co.uk/",
            "image": "assets/images/eventFNC.png",
            "alt":"Event-Friendly Neighbourhood Cinema",
        },
        {
            "event-title": "The Great British Drive In",
            "description": "<p>something about Bogart</p>",
            "date":2,
            "location":"Sandon Hall, Staffordshire" ,
            "link": "www.thegbdrivein.com/",
            "image": "assets/images/eventGreatBritishDriveIn.png",
            "alt":"Event-The Great British Drive In",
        },
        {
            "event-title": "Open City Documentary Festival",
            "description": "<p>something about Bogart</p>",
            "date":3,
            "location":"Online",
            "link": "opencitylondon.com/",
            "image": "assets/images/eventOpenCity.svg",
            "alt":"Event-Open City Documentary Festival",
        },
        {
            "event-title": "Blackstar Film Festival",
            "description": "<p>something about Bogart</p>",
            "date":4,
            "location":"Online",
            "link": "www.blackstarfest.org/",
            "image": "assets/images/eventBlackstar.png",
            "alt":"Event-Blackstar Film Festival",

        },
        {
            "event-title": "Adventures for the Bold and Brave",
            "description": "<p>something about Bogart</p>",
            "date":5,
            "location":"Online",
            "link": "flatpackfestival.org.uk/event/adventures-for-the-bold-and-brave",
            "image": "assets/images/eventABB.png",
            "alt":"Event-Adventures for the Bold and Brave",
        },
        {
            "event-title": "BFI Japan 2020",
            "description": "<p>something about Bogart</p>",
            "date":6,
            "location":"Online",
            "link": "bfi.org.uk/japan",
            "image": "assets/images/eventJapan2020.png",
            "alt":"Event-BFI Japan 2020",
        },
    ]
};
