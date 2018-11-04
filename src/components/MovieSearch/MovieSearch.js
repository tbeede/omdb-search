import React from 'react'
import './MovieSearch.css'
import MovieTile from '../MovieTile/MovieTile'

class MovieSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList: [],
            errorMessage: []
        }
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    fetchMovieID() {
        console.log("Searching for movie: " + this.state.query)
        let urlString = `http://www.omdbapi.com/?s=${this.state.query}&apikey=f86c0e32`
        this.fetchApi(urlString)
    }

    fetchApi(url) {
        fetch(url)
            .then((res) => res.json())
            .then((response) => {

                // update state with API data
                let resultList = []

                resultList = (
                    response.Search.map(item => (
                        <MovieTile movieInfo={item} />
                    ))
                )
                this.setState({
                    moviesList: resultList
                })
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    errorMessage: error="End of results"
                });
            })
    }
    render() {
        return (
            <div>
                <table className="search">
                    <tbody>
                        <tr>
                            <td width="10">
                                <img alt="title icon" width="100" src="camera.png" />
                            </td>
                            <td>
                                <h1>Online Movie Database Search</h1>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div>
                        <input style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20, width: "80%" }}
                            className="search"
                            placeholder="Search for a movie or television show"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <button className="button"
                            style={{ fontSize: 15, backgroundColor: '#b666d2', color: 'white', width: 150, height: 30, borderRadius: 10, }}
                            onClick={() => this.fetchMovieID()}>Go!</button>
                    </div>
                    <div>
                        {this.state.moviesList}
                    </div>
                    <div style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20, }}>
                        {this.state.errorMessage}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieSearch
