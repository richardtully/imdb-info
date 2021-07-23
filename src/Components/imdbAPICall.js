

// getMovieObject = (searchText) => {
//     let URL = `https://imdb8.p.rapidapi.com/title/find?q=${this.formatSearchText(searchText)}`
//     fetch(URL, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": process.env.REACT_APP_API_KEY,
//             "x-rapidapi-host": "imdb8.p.rapidapi.com"
//         }
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(json => {
//         this.setState({imageURL: json.results[0].image.url})
//         return this.getMovieCode(json);
//     })
//     .then(movieCode => {
//         return this.getMovieTrivia(movieCode);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

class imdbAPICall {

}


export default imdbAPICall