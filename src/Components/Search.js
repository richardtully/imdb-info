import React, { Component } from 'react'
require('dotenv').config()


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            trivia: ['trivia of all osrts of wonderful kinds that will amaze and adazzel yu and your family, even your friends tbh', 'will', 'show', 'up', 'here'],
            triviaObject: '',
            imageURL: '' };
    }

    getMovieObject = (searchText) => {
        let URL = `https://imdb8.p.rapidapi.com/title/find?q=${this.formatSearchText(searchText)}`
        fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.setState({imageURL: json.results[0].image.url})
            return this.getMovieCode(json);
        })
        .then(movieCode => {
            return this.getMovieTrivia(movieCode);
        })
        .catch(err => {
            console.error(err);
        });
    }

    getMovieCode = (movieObject) => {
        let movieCode = movieObject.results[0].id.split('/')[2]
        return movieCode
    }

    getMovieTrivia = (movieCode) => {
        let URL = `https://imdb8.p.rapidapi.com/title/get-trivia?tconst=${movieCode}`
        fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(response => {
            
            return response.json();
        })
        .then(json => {
            let triviaText = []
            json.unspoilt.slice(0,20).map(i => triviaText.push(i.text))

            this.setState({trivia: triviaText})
            this.state.trivia.map(i => console.log(i))
        })
        .catch(err => {
            console.error(err);
            });
    }

    formatSearchText = (searchText) => {
        let result = searchText.split(' ').join('%20')
        return result
    }

    triviaList = () => {
        let x = this.state.trivia
        const triviaList = x.map(trivia => <p>{trivia}</p>)
        return(<ul>{triviaList}</ul>)
    }


    render(){
        return (
            <div>
                <input placeholder = 'enter a movie name...' id = 'searchText' type="text"/>
                <button onClick = {() => this.getMovieObject(document.getElementById('searchText').value)}>Get Trivia</button>
                <div>
                    <img src = {this.state.imageURL}></img>
                </div>
                <div>
                    {this.triviaList()}
                </div>
            </div>
        )
    }
}

export default Search;