import React, { Component } from 'react'


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {jsonObjext: '' };
    }

    getMovieObject = (searchText) => {
        let URL = `https://imdb8.p.rapidapi.com/title/find?q=${this.formatSearchText(searchText)}`
        fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "831d7632b6msh11d653534c9f4bep1e6499jsn0e50582918e6",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            this.getMovieInfo(json);
        })
        .catch(err => {
            console.error(err);
        });
    }

    getMovieInfo = (movieObject) => {
        console.log(movieObject.results[0].id)

    }



    formatSearchText = (searchText) => {
        // searchText = searchtext.split(' ')
        let result = searchText.split(' ').join('%20')
        console.log(result)
        return result
    }


    render(){
        return (
            <div>
                <input placeholder = 'enter a movie name...' id = 'searchText' type="text"/>
                <input type="submit" value='Get Trivia' onClick = {() => this.getMovieObject(document.getElementById('searchText').value)} />
                {/* <input type="submit" value='Get Trivia' onClick = {this.getMovieCode} /> */}

            </div>
        )
    }
}

export default Search;