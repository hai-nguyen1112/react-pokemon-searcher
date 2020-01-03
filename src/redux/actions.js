import axios from '../utils/axiosInstance'
import * as actionTypes from './actionTypes'

// retrieve pokedex
export const fetchPokedex = () => {
  return dispatch => {
    dispatch(fetchPokedexStart())

    axios.get('pokemon', {
      headers: {}
    })
    .then(response => {
      dispatch(fetchPokedexSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchPokedexFail(error))
    })
  }
}

const fetchPokedexStart = () => {
  return {
    type: actionTypes.FETCH_POKEDEX_START,
    pokedex: [],
    pokedexError: null,
    isLoadingPokedex: true
  }
}

const fetchPokedexSuccess = pokedex => {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    pokedex: pokedex,
    pokedexError: null,
    isLoadingPokedex: false
  }
}

const fetchPokedexFail = error => {
  return {
    type: actionTypes.FETCH_POKEDEX_FAIL,
    pokedex: [],
    pokedexError: error,
    isLoadingPokedex: false
  }
}
// end of retrieve pokedex

// search term
export const onSearchTermChange = text => {
  return {
    type: actionTypes.SEARCH_TERM_WAS_CHANGED,
    searchTerm: text
  }
}
// end of search term
