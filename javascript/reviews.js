//review box
function changeText(n) {
    document.getElementById("review-text").innerHTML = filmItem.film[n].review;
}


// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("review-text").innerHTML = "review"},false);


// function changeText(id) {
//     return document.getElementById(id)
// }


//var content = document.getElementById("content");
var ReviewTemplate = document.getElementById("review-template").innerHTML;
var compiledReviewTemplate = Handlebars.compile(ReviewTemplate);

var filmItem = {
    "film": [
        {
            "film-title": "Casablanca",
            "review": "<p>something about Bogart</p>",
            "link": "via.placeholder.com/240x160",
            "number": 1
        },
        {
            "film-title": "Bill and Ted",
            "review": "<p>Totally savoury film</p>",
            "link": "via.placeholder.com/240x160",
            "number": 2
        },
        {
            "film-title": "Ghost",
            "review": "<p>Get off my train!!</p>",
            "link": "via.placeholder.com/240x160",
            "number": 3
        },
        {
            "film-title": "Rocky",
            "review": "<p>Eat lightning and crap thunder!</p>",
            "link": "via.placeholder.com/240x160",
            "number": 4
        },
    ]
};
//content.innerHTML = compiledReviewTemplate(reviewItem)

document.getElementById("review-content").innerHTML = compiledReviewTemplate(filmItem);

console.log(filmItem.film[0].review);