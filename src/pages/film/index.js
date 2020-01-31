import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import api from '../../services/api';
import "./style.css";

export default class Film extends Component {
    state = {
        film: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/movie/${id}?api_key=46a2af708acd984af52d42e21d923934`);
        this.setState({ film: response.data });
    }

    render() {
        const { film } = this.state;
        const style = {
            backgroundImage:`url('https://image.tmdb.org/t/p/w500/${film.poster_path}')`
        };
        return (
            <div className="film-info">
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
                            { film.original_title }
                        </p>
                        <p className="release-date">
                            <Moment format="DD/MM/YYYY">
                            { film.release_date }
                            </Moment>
                        </p>
                    </div>             
                </div>

                <div className="info-list">
                    <div className="info-item budget">
                        <p className="info-title">Orçamen.</p>
                        <p className="info-content">{ film.budget?.toString().substr(0,3) }Bi</p>
                    </div>
                    <div className="info-item adult">
                        <p className="info-title">Adulto</p>
                        <p className="info-content">{ film.adult ? "Sim": "Não" }</p>
                    </div>
                    <div className="info-item  runtime">
                        <p className="info-title">Duração</p>
                        <p className="info-content">{ film.runtime }min</p>
                    </div>
                    <div className="info-item popularity">
                        <p className="info-title">Popular.</p>
                        <p className="info-content">{ film.popularity?.toString().substring(0,3) }Mi</p>
                    </div>
                </div>

                <div className="overview">
                    <p className="title">Resume</p>
                    <p className="content">{ film.overview }</p>
                </div>
            </div>
        )
    }
}