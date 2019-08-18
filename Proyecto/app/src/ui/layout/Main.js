import React from 'react';
import Container from '@material-ui/core/Container';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Peliculas from '../pages/Peliculas'
import Pelicula from '../pages/Pelicula'
import MiLista from '../pages/MiLista'
import Concurso from '../pages/Concurso'

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/peliculas" exact component={Peliculas} />
                    <Route path="/peliculas/pelicula/:id" exact component={Pelicula} />
                    <Route path="/miLista" component={MiLista} />
                    <Route path="/concurso" component={Concurso} />
                </Switch>
            </Container>
        </main>
    )
}

export default Main;