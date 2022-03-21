function getMovies(){
    fetch("https://tropical-horn-mustard.glitch.me/movies").then(resp => resp.json()).then(data => $("#info").html(movieTitles(data)));
}

getMovies();

function movieTitles(data){
    let html = ""
    for (let i = 0 ; i < data.length; i++){
       var title = html += data[i].title
        html += "<div>"+ title +"</div>";
    }
    return html
}
