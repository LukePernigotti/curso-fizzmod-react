import React, { Component, Fragment } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { requestMovies, addMovie, movieDetails } from "../../api/actions"
import { Link as RouterLink, withRouter } from "react-router-dom"

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import '../../css/peliculas.css'

const styles = {
    card: {
        maxWidth: 345,
        margin: 10
    },
};

class Peliculas extends Component {
    componentDidMount() {
        if (this.props.movies_fetched) return;
        this.props.requestMovies()
    }

    render() {
        let { movies, movies_fetched, classes, myMovieList } = this.props;
        return (
            <section className="peliculas-section">
                <h2>PELICULAS:</h2>
                <div className="buttons">
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button>Todas</Button>
                        <Button>Acción</Button>
                        <Button>Animación</Button>
                        <Button>Ciencia Ficción</Button>
                        <Button>Comedia</Button>
                        <Button>Drama</Button>
                        <Button>Terror</Button>
                        <Button>Thriller</Button>
                    </ButtonGroup>
                </div>
                {movies_fetched
                    ? <p>LOADING</p>
                    : movies.map((movie, i) =>
                        <Card key={i} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    height="140"
                                    image={`img/movies/${movie.img}.jpg`}
                                    title={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" noWrap title={movie.title}>
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movie.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={addMovie}>
                                    Agregar
                                </Button>
                                <Button size="small" color="primary" onClick={movieDetails.bind(null, movie.id)} >
                                    Ver más
                                </Button>
                            </CardActions>
                        </Card>
                    )}
            </section>
        );
    }
}


export default withRouter(withStyles(styles)(connect(
    store => ({
        movies: store.movies,
        movies_fetched: store.movies_fetched
    }),
    dispatch => ({
        requestMovies: bindActionCreators(requestMovies, dispatch),
        addMovie: bindActionCreators(addMovie, dispatch),
        movieDetails: bindActionCreators(movieDetails, dispatch),
    })
)(Peliculas)))