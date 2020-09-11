//review box

//jquery AJAX call to import handlebars header template into each page
$.get('templates/reviews.hbs', function(reviewTemplate) {
    // once received, convert the raw template to a handlebars template
    var compiledReviewTemplate = Handlebars.compile(reviewTemplate);
    // compile the template with your context 'data' and set it on an element with an id
    $('#reviews').html(compiledReviewTemplate(filmData));
}, 'html'); // <-- tell jquery to load the file as html

function changeText(n) {
    document.getElementById("review-text-container").innerHTML = filmData.film[n].review;
    var reviewText = document.getElementById("review-text-container")
    if (reviewText.style.display !== "block") {
        reviewText.style.display = "block";
    } else {
        reviewText.style.display = "none";
    }
}

// var reviewTemplate = document.getElementById("review-template").innerHTML;
// var compiledReviewTemplate = Handlebars.compile(reviewTemplate);

var filmData = {
    "film": [
        {
            "film-title": "Pandora's Box",
            "review": "<p>something about Bogart</p>",
            "link": "via.placeholder.com/240x160",
            "image": "assets/images/pandorasBoxReview.png",
            "date": "(1929)",
            "director": "G.W.Pabst",
            "alt-text": "Image from Pandora's Box",
            "number": 1
        },
        {
            "film-title": "Princess Mononoke",
            "review": "<p>Totally savoury film</p>",
            "link": "via.placeholder.com/240x160",
            "image": "assets/images/mononokeReview.png",
            "date": "(1997)",
            "director": "Hayao Miyazaki",
            "alt-text": "Image from Princess Mononoke",
            "number": 2
        },
        {
            "film-title": "Tokyo Story",
            "review": "<p>Get off my train!!</p>",
            "link": "via.placeholder.com/240x160",
            "image": "assets/images/tokyoStoryReview.png",
            "date": "(1953)",
            "director": "Yasujirô Ozu",
            "alt-text": "Image from Tokyo Story",
            "number": 3
        },
        {
            "film-title": "Knives Out",
            "review": "<p>Eat lightning and crap thunder!</p>",
            "link": "via.placeholder.com/240x160",
            "image":"assets/images/knivesOutReview.png",
            "date": "(2019)",
            "director": "Rian Johnson",
            "alt-text": "Image from Knives Out",
            "number": 4
        },
    ]
};

// document.getElementById("review-content").innerHTML = compiledReviewTemplate(filmItem);
//
// console.log(filmItem.film[0].review);