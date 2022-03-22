function getMovies(){
    fetch("https://tropical-horn-mustard.glitch.me/movies").then(resp => resp.json()).then(data => $("#info").html(movieTitles(data)));
}

getMovies();

function movieTitles(data){
    let html = ""
    for (let i = 0 ; i < data.length; i++){
       var title = data[i].title
       var rating = data[i].rating
        html += "<div class='parent col-3'>" + "<div class='title text-center'>"+ title +"</div>"
        +"<div class='rating text-center'>"+ "Rating: " + rating +"</div>" + "</div>";
    }
    return html
}

const moviesURL = "https://tropical-horn-mustard.glitch.me/movies"

var addingMovieName = addingMovie.value;
var ratingAdd = addingRating.value;

const movieToPost = {
    title: addingMovieName,
    rating: ratingAdd
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(movieToPost)
};

function getMovies(){
    fetch(moviesURL).then(resp => resp.json()).then(data => console.log(data))
}

getMovies()



var addingMovie = document.querySelector('#movieInput');
var addingRating = document.querySelector('#rating-dropdown')
var addSubmit = document.querySelector('#submitMovie');