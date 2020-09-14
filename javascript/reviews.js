//JSON event data to pass into handlebars template reviews.hbs
const filmData = {
    "film": [
        {
            "film-title": "Pandora's Box",
            "review": "<p><span class='drop-cap'>L</span> ulu (Louise Brooks) a woman whose fortunes take a turn for the worst when her" +
                " lover announces his intention to marry a woman deemed from a respectable class." +
                " To get by, she falls in with a showman who promises to make a her a star, " +
                "but a plan to trick her former lover into marrying her goes awry.</p>" +
                "<p>Pabst’s visuals complement the story with dramatic closeups and creative" +
                "angles are only enhanced by the energy that Louise Brooks brings to her portrayal of Lulu</p> ",
            "image": "assets/images/pandorasBoxReview.png",
            "date": "(1929)",
            "director": "G.W.Pabst",
            "alt-text": "Image from Pandora's Box",
            "number": 1
        },
        {
            "film-title": "Princess Mononoke",
            "review": "<p><span class='drop-cap'>A</span>n epic story set in medieval Japan when some lived in harmony with nature and some tried to tame and defeat it" +
                " It is not a simple tale of good vs evil, but the story of humans, animals and the balance of nature.</p>" +
                "<p>The film revolves around the character Ashitaka, who was initially their heir to the throne, but banished" +
                " when a demonic boar bites and infects him. As a result, he embarks on journey to find a cure and finds a town lead by Lady Eboshi" +
                " being attacked by a ‘wolf girl’ known as Princess Mononoke. Later he realised that Lady Eboshi is attacked for wreaking havoc across" +
                " nature to industrialise the town.</p>",
            "image": "assets/images/mononokeReview.png",
            "date": "(1997)",
            "director": "Hayao Miyazaki",
            "alt-text": "Image from Princess Mononoke",
            "number": 2
        },
        {
            "film-title": "Tokyo Story",
            "review": "<p><span class='drop-cap'>T</span>okyo story sees Shukishi and Tomi Hirayama (Chishu Ryu and Chieko Higashiyama)" +
                " visit their adult children full of hope and the wish to be recognised, but they find the children are busy with their jobs and lives and are often preoccupied.</p>" +
                "<p>Director Yasujiro Ozu's social commentary does not depict this as a negative, but more of a changing in culture," +
                " that things are perpetually moving on. The acting is humane and reserved and there are no stars or heroes and" +
                " that the cycle of family continues again and again.</p>",
            "image": "assets/images/tokyoStoryReview.png",
            "date": "(1953)",
            "director": "Yasujirô Ozu",
            "alt-text": "Image from Tokyo Story",
            "number": 3
        },
        {
            "film-title": "Knives Out",
            "review": "<p><span class='drop-cap'>R</span>hian Johnson’s Knives out is a homage to whodunit mysteries of the past," +
                " familiar settings with numerous twists and turns along the way.</p>" +
                "<p>Benoit Blanc (Daniel Craig) investigates the murder of mystery writer Harlan Thrombey (Christopher Plumber)," +
                " initially thought to be a suicide. Blanc suspects something is awry, and the entire Thrombey family and staff come under suspicion." +
                " Blanc sifts through numerous red herrings and lies to eventually uncover the killer’s identity.</p>",
            "image":"assets/images/knivesOutReview.png",
            "date": "(2019)",
            "director": "Rian Johnson",
            "alt-text": "Image from Knives Out",
            "number": 4
        },
    ]
};
//jquery AJAX call to import handlebars reviews.hbs template
$.get('templates/reviews.hbs', function(reviewTemplate) {
    // convert the html to a handlebars template
    const compiledReviewTemplate = Handlebars.compile(reviewTemplate);
    // compile the handlebars template with data above and pass it to the target id
    $('#reviews').html(compiledReviewTemplate(filmData));
}, 'html');

//Function to display review article on click of button. Uses object
// index with handlebars template to select correct review
function changeText(n) {
    document.getElementById("review-text-container").innerHTML = filmData.film[n].review;
    const reviewText = document.getElementById("review-text-container");
    //open box when clicked
    if (reviewText.style.display !== "block") {
        reviewText.style.display = "block";
    } else {
        //close box onclick if open
        reviewText.style.display = "none";
    }
}
