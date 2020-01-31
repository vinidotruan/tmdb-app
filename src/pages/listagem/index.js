import React, { Component } from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import "./style.css";

export default class Listagem extends Component {

    state = {
        films: [],
        filmInfo: {},
        page: 1
    }

    loadFilms = async () => {
        const response = await api.get(`/discover/movie?api_key=46a2af708acd984af52d42e21d923934`);
        const { results, total_results, total_pages } = response.data;
        this.setState({films: results, filmInfo: {total_results, total_pages}});
    }

    componentDidMount() {
        this.loadFilms();
    }

    render() {
        const {films} = this.state;
        const mostPopFilm = films[0];
        const style = {
            backgroundImage:`url('https://image.tmdb.org/t/p/w500/${mostPopFilm?.poster_path}')`
        };
        return (
            <div className="film-list">
                <div className="info-box" style={ style }>
                    <button className="arrow-back">
                        <Link to="/">
                            <i className="material-icons">
                                keyboard_arrow_left
                            </i>
                        </Link>
                    </button>
                    <div className="info-content">
                        <p className="original-title">
                            { mostPopFilm?.original_title }
                        </p>
                        <p className="release-date">
                            <Moment format="DD/MM/YYYY">
                            { mostPopFilm?.release_date }
                            </Moment>
                        </p>
                    </div>               
                </div>
                {
                    films.map((film, index) => (
                        <article key={film.id}>
                            <img className="thumbnail" src={ `https://image.tmdb.org/t/p/w500/${film.poster_path}` }/>
                            <div className="index" >{index+1}.</div>
                            <Link to={`/movies/${film.id}`}>
                                <div className="main-content">
                                    <div className="title">
                                        <strong>
                                            {film.original_title}
                                        </strong>
                                    </div>
                                    <div className="date">
                                        <Moment format="DD/MM/YYYY">
                                            {film.release_date}
                                        </Moment>
                                    </div>
                                </div>

                            </Link>
                            <div className="popularity">
                                {film.popularity.toString().substring(0,3)}Mi
                                <p>Popularidade</p>
                            </div>
                        </article>
                    ))
                }
            </div>
        );
    }
}