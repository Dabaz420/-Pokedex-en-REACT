const INITIAL_STATE = {
    pokemons: []
}

function pokemonReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "LOADPOKEMONS":
            const newArr = [...state.pokemons]
            newArr.push(action.payload)
            newArr.sort((a, b) => a.id - b.id)
            return{
                ...state,
                pokemons: newArr
            }   
        case "LOADPOKEMON":
            return{
                pokemons: action.payload
            }
    
        default:
            return state;
    }
}

export default pokemonReducer

export const getPokemons = () => dispatch => {
    for (let i = 1; i < 152; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: "LOADPOKEMONS",
                payload: data
            })
        })
    }
}

export const getPokemon = (name) => dispatch => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: "LOADPOKEMON",
            payload: data
        })
    })
}