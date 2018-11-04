import React from 'react';
import './MovieTile.css'

class MovieTile extends React.Component {
    // take user to movie IMDB page when "View Movie Details" is clicked
    viewMovieDetails() {
        window.location.href = "https://www.imdb.com/title/" + this.props.movieInfo.imdbID
    }
    render() {
        return (
            <div className="container">
                <div>
                    <table className="movie-tile" key="movie-tile-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img alt="poster" className="movie-header" src={this.props.movieInfo.Poster} />
                                    </div>
                                </td>
                                <td>
                                    <div className="movie-content">
                                        <div className="movie-content-header">
                                            <h1 className="movie-title">{this.props.movieInfo.Title}</h1>
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div className="info-section">
                                            <span><h3>{this.props.movieInfo.Year}</h3></span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.viewMovieDetails()}><h3>View Movie Details</h3></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}

export default MovieTile;