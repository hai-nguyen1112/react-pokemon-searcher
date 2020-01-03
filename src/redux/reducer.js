import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pokedex: {
    pokedex: [],
    isLoadingPokedex: false,
    pokedexError: null
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

const pokedexReducer = (state = initialState.pokedex, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_START: return fetchPokedexStart(state, action)
    case actionTypes.FETCH_POKEDEX_SUCCESS: return fetchPokedexSuccess(state, action)
    case actionTypes.FETCH_POKEDEX_FAIL: return fetchPokedexFail(state, action)
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
