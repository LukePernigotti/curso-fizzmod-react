export let addMovie = payload => dispatch => {
    dispatch({
        type: "MY_MOVIES_ADD",
        //
    })
}

export let requestMovies = () => {
    return dispatch => {
        dispatch({ type: "MOVIES_FETCHING" })
        fetch(`http://localhost:8080/movies`)
            .then(res => res.json())
            .then(res => dispatch({
                type: "MOVIES_FETCH",
                payload: res
            }))
            .catch(err => dispatch({
                type: "MOVIES_ERROR",
                payload: "Error al traer las películas"
            }))
    }
}

export let movieDetails = payload => { console.log(payload); return ({ type: "MOVIE_SELECTION", payload }) }

export let handleChangeNombre = e => ({ type: "FORM_CHANGE_NOMBRE", payload: e.target.value })
export let handleChangeEdad = e => ({ type: "FORM_CHANGE_EDAD", payload: e.target.value })

export let formSubmit = () => ({ type: "FORM_DONE" })
