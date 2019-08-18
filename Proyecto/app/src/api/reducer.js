let initialState = {
    movies: [],
    myMovieList: [],
    movies_fetching: false,

    movie_select: null,

    form_done: false,
    form_nombre: "",
    form_edad: "",
    form_dni: "",
    form_correo: "",
    form_domicilio: ""
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIES_FETCHING":
            return { ...state, movies_fetching: true }
        case "MOVIES_FETCH":
            return { ...state, movies: [...action.payload], movies_fetching: false }
        case "MOVIE_SELECTION":
            return { ...state, movie_select: { ...state.movies[action.payload], indice: action.payload } }
        case "MY_MOVIES_ADD":
            return { ...state, movies_fetching: true }
        case "FORM_CHANGE_NOMBRE":
            return { ...state, form_nombre: action.payload }
        case "FORM_CHANGE_EDAD":
            return { ...state, form_edad: action.payload }
        case "FORM_DONE":
            return { ...state, formDone: true }
        default:
            return state
    }
}

export default reducer