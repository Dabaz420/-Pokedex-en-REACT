import {createStore, applyMiddleware, combineReducers} from 'redux'
import pokemonReducer from './pokemons/pokemonReducer'
import evolutionReducer from './pokemons/evolutionReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    pokemonReducer,
    evolutionReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store