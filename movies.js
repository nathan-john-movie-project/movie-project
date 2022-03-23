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
        html += "<div class='parent col-3 d-flex flex-column container-fluid'>"
            +"<div class='poster d-flex justify-content-end'>"
            +'<img class="movie-poster" src="/img/MV5BNGMwNGI0NzAtY2U1Zi00MTI3LTk2NWQtMTU0ZmQ3OGZmMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR86,0,630,1200_AL_.jpg">'
            +"<div>"
            + "<button type='submit' class='edit-btn'>edit</button>"
            + "  <button onclick='deleteMovie (" + id + ")' type=\"submit\" class=\"btn btn-danger delete-btn\">X</button>"
            +"</div>"
            +"</div>"
            + "<div class='title text-center'>" + title +"</div>"
            +"<div class='rating text-center'>"+ "Rating: " + rating +"</div>"
            +"</div>";
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


//EDIT MOVIE
let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}







// function editMovie(){
//     let userEdit = document.querySelector('.edit-btn')
//     const patchOptions = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(modification)
//     }
//     fetch(userEdit + '/1', patchOptions).then(getMovies);
// }

$('.edit-btn').click(function (e){
    e.preventDefault();
    const selectedMovie = $('#movies-list').val();
    editMovie(selectedMovie);
    clearValue();
});

function editMovie(id) {
    const movieToPost = {
        Title: $('#edit-movie-title').val(),
        Rating: $('#edit-movie-rating').val()
    };
    const putOptions = {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movieToPost)
    };
    fetch(moviesURL + '/' + id, putOptions).then(getMovies);
}