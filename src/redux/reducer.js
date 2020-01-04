import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pokedex: {
    pokedex: [],
    isLoadingPokedex: false,
    pokedexError: null,
    isAddingAPokemon: false,
    addAPokemonError: null
  },
  searchTerm: {
    searchTerm: ''
  }
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// pokedex reducer
const fetchPokedexStart = (state, action) => {
  return updateObject(state, {
    pokedex: action.pokedex,
    isLoadingPokedex: action.isLoadingPokedex,
    pokedexError: action.pokedexError
  })
}

const fetchPokedexSuccess = (state, action) => {
  return updateObject(state, {
    pokedex: action.pokedex,
    isLoadingPokedex: action.isLoadingPokedex,
    pokedexError: action.pokedexError
  })
}

const fetchPokedexFail = (state, action) => {
  return updateObject(state, {
    pokedex: action.pokedex,
    isLoadingPokedex: action.isLoadingPokedex,
    pokedexError: action.pokedexError
  })
}

const addAPokemonStart = (state, action) => {
  return updateObject(state, {
    isAddingAPokemon: action.isAddingAPokemon,
    addAPokemonError: action.addAPokemonError
  })
}

const addAPokemonSuccess = (state, action) => {
  let updatedPokedex = JSON.parse(JSON.stringify(state.pokedex))
  updatedPokedex.push(action.addedPokemon)

  return updateObject(state, {
    isAddingAPokemon: action.isAddingAPokemon,
    addAPokemonError: action.addAPokemonError,
    pokedex: updatedPokedex
  })
}

const addAPokemonFail = (state, action) => {
  return updateObject(state, {
    isAddingAPokemon: action.isAddingAPokemon,
    addAPokemonError: action.addAPokemonError
  })
}

const pokedexReducer = (state = initialState.pokedex, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_START: return fetchPokedexStart(state, action)
    case actionTypes.FETCH_POKEDEX_SUCCESS: return fetchPokedexSuccess(state, action)
    case actionTypes.FETCH_POKEDEX_FAIL: return fetchPokedexFail(state, action)
    case actionTypes.ADD_POKEMON_START: return addAPokemonStart(state, action)
    case actionTypes.ADD_POKEMON_SUCCESS: return addAPokemonSuccess(state, action)
    case actionTypes.ADD_POKEMON_FAIL: return addAPokemonFail(state, action)
    default: return state
  }
}
// end of pokedex reducer

// search term reducer
const onSearchTermChange = (state, action) => {
  return updateObject(state, {
    searchTerm: action.searchTerm
  })
}
const searchTermReducer = (state = initialState.searchTerm, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_TERM_WAS_CHANGED: return onSearchTermChange(state, action)
    default: return state
  }
}
// end of search term reducer

const appReducers = combineReducers({
  pokedex: pokedexReducer,
  searchTerm: searchTermReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
