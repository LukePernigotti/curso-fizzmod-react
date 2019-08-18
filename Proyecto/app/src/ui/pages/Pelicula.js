import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { movieDetails } from "../../api/actions"

class Pelicula extends Component {
    render() {
        console.log(this.props);
        let { movie_select } = this.props;
        return (
            <section className="peliculas-section">
                <h2>PELICULA</h2>
            </section>
        );
    }
}

export default withRouter(connect(
    store => ({
        movie: store.movie,
        movie_select: store.movie_select,
    }),
    dispatch => ({
        movieDetails: bindActionCreators(movieDetails, dispatch),
    })
)(Pelicula))