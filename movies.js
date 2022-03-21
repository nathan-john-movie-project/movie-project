function getMovies(){
    fetch("https://tropical-horn-mustard.glitch.me/movies").then(resp => resp.json()).then(data => $("#info").text(movieTitles(data)));
}

getMovies();

function movieTitles(data){
    let titles = ""
    for (let i = 0 ; i < data.length; i++){
        data[i].title += titles
    }
    return "<h1>"+ titles +"</h1>"
}
