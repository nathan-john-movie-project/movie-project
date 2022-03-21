function getMovies(){
    fetch("https://tropical-horn-mustard.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data));
}

getMovies();