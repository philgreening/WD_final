//JSON event data to pass into handlebars template events.hbs
const eventData = {
    "event": [
        {
            "event-title": "Friendly Neighbourhood Cinema",
            "description": "<p>Promising a pandemic proof outdoor cinema experience the old bingo hall becomes an outdoor cinema" +
                " throughout August with a slate of films including El Topo and Holy Mountain double bill," +
                " The Warriors and The Lord of the Rings Trilogy (you might need a cushion for that one). </p>",
            "date":"August-September 2020",
            "location":"Kingsway, Kings Heath",
            "link": "www.friendlyneighbourhoodcinema.co.uk/",
            "image": "assets/images/eventFNC.png",
            "alt":"Event-Friendly Neighbourhood Cinema",
        },
        {
            "event-title": "The Great British Drive In",
            "description": "<p>The trend for drive-ins continues across the Midlands with this one boasting \"the biggest drive-in screen in the UK\"." +
            " Serving up the usual big hitters alongside the likes of The Nun, Superbad and Hindi buddy movie Zindagi Na Milegi Dobar. On until 13 September.</p>",
            "date": "Until 13th September 2020",
            "location":"Sandon Hall, Staffordshire" ,
            "link": "www.thegbdrivein.com/",
            "image": "assets/images/eventGreatBritishDriveIn.png",
            "alt":"Event-The Great British Drive In",
        },
        {
            "event-title": "Open City Documentary Festival",
            "description": "<p>Thoughtful line-up of non-fiction features and shorts from the London-based fest.</p>",
            "date":"9th-15th September 2020",
            "location":"Online",
            "link": "opencitylondon.com/",
            "image": "assets/images/eventOpenCity.svg",
            "alt":"Event-Open City Documentary Festival",
        },
        {
            "event-title": "Blackstar Film Festival",
            "description": "<p>The BlackStar Film Festival is an annual celebration showcasing films by Black," +
                " Brown and Indigenous people from around the world. The festival includes more than 90 films," +
                " live panels, and special events and takes place online</p>",
            "date": "20th-26th August 2020",
            "location":"Online",
            "link": "www.blackstarfest.org/",
            "image": "assets/images/eventBlackstar.png",
            "alt":"Event-Blackstar Film Festival",

        },
        {
            "event-title": "Adventures for the Bold and Brave",
            "description": "<p>This month’s selection of short films for kids sees various people and creatures embark upon adventures," +
                " explore uncharted territories, and ponder ‘new normals’ (we all know about those…). Featuring Ernesto (pictured above)" +
                " with his singing teeth, a musical sink that helps with washing up in It’s All Gravy, and the beautiful Papergee and the Spider" +
                " about a young refugee woman who overcomes so many challenges to join her new family.</p>",
            "date":"5th September 2020",
            "location":"Online",
            "link": "flatpackfestival.org.uk/event/adventures-for-the-bold-and-brave",
            "image": "assets/images/eventABB.png",
            "alt":"Event-Adventures for the Bold and Brave",
        },
        {
            "event-title": "BFI Japan 2020",
            "description": "<p>In this major season, we spotlight filmmakers who have inspired admiration " +
                "and fascination around the world. We begin our story with Akira Kurosawa, and over the coming months" +
                " we’ll present films from the Golden Age, a focus on Yasujiro Ozu, new wave rebels, the visionary creations of anime," +
                " the netherworlds of J-horror, and so much more from archive rarities to contemporary works and cult classics.</p>",
            "date":"Until 31st December 2020",
            "location":"Online",
            "link": "bfi.org.uk/japan",
            "image": "assets/images/eventJapan2020.png",
            "alt":"Event-BFI Japan 2020",
        },
    ]
};
//jquery AJAX call to import handlebars events.hbs template
$.get('templates/events.hbs', function(eventsTemplate) {
    // convert the html to a handlebars template
    const compiledEventsTemplate = Handlebars.compile(eventsTemplate);
    // compile the handlebars template with data above and pass it to the target id
    $('#events').html(compiledEventsTemplate(eventData));
}, 'html');

//API call to TMDB.com to retraive JSON data for top 5 showing now films
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=083752e16e6ad8d97b6edb9058118829&language=en-US&page=1&region=GB`
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();

    //holder for generated data received from API
    let output = ""
    //for loop iterates through the first 5 objects retried from the API, retrieving the release date, title and overview of film
    for (let i = 0; i < 5; i++) {
        let title = data.results[i].title
        let release = data.results[i].release_date
        let overview = data.results[i].overview

        //add html and data together
        output += "<h5><li>" + title + "</li></h5>"
        output += "<p>" + overview + "</p>"
        output += "<p><b>" + "Release date: "+ "</b>" + release + "</p>"
    }
    //output data from API and HTML above to target ID
    document.getElementById("film-list").innerHTML = output
}

getData();
