const moviesURL = "https://rumbling-bejewled-chatter.glitch.me/movies"

function getMovies(){
    fetch("https://rumbling-bejewled-chatter.glitch.me/movies").then(resp => resp.json()).then(data => $("#info").html(movieTitles(data)));
}

getMovies();


function movieTitles(data){
    let html = ""
    for (let i = 0 ; i < data.length; i++){
       var title = data[i].title
       var rating = data[i].rating
        var id = data[i].id
        var poster = data[i].poster
        console.log(title);
        console.log(rating);
        console.log(data, data.length)
        console.log(poster)
        html += "<div class='parent col-3 d-flex flex-column container-fluid'>" +"<div class='poster d-flex justify-content-end'>"+'<img src="('+poster+')">' +"<div>"+ "  <button onclick='deleteMovie (" + id + ")' type=\"submit\" class=\"btn btn-danger delete-btn\">X</button>" +"</div>" +"</div>"+ "<div class='title text-center'>"+ title +"</div>"
        +"<div class='rating text-center'>"+ "Rating: " + rating +"</div>"+"</div>";
    }
    console.log(html)
    return html
}




$('#submitMovie').click(function(){
    const addingMovie = document.querySelector('#movieInput').value;
    const addingRating = document.querySelector('#rating-dropdown').value;
    const movieToPost = {
        title: addingMovie,
        rating: addingRating
    }
    console.log(movieToPost)
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movieToPost)
    };

    fetch(moviesURL, postOptions).then(function (){
        getMovies()
    })
})



function deleteMovie(id) {
    let deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(id,"id")
    fetch(moviesURL + '/' + id , deleteOptions).then(getMovies);
    }

