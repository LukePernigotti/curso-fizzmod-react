import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from "react-router-dom"

const CollisionLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
));

const useStyles = makeStyles({
    root: {
        backgroundColor: 'skyblue'
    },
    link: {
        marginRight: "1rem",
        cursor: "pointer"
    }
});


function Header() {
    const classes = useStyles();
    return (
        <header>
            <CssBaseline>
                <Grid container alignItems="center" className={classes.root}>
                    <Grid item xs={6}>
                        <Container>
                            <Link component={RouterLink} to="/" variant="h1" underline='none' className={classes.link}>
                                App
                            </Link>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Link component={RouterLink} to="/peliculas" className={classes.link}>Peliculas</Link>
                        <Link component={RouterLink} to="/miLista" className={classes.link}>Mi Lista</Link>
                        <Link component={RouterLink} to="/concurso" className={classes.link}>Concurso</Link>
                    </Grid>
                </Grid>
            </CssBaseline>
        </header>
    )
}

export default Header;