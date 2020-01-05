import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  pokedex: {
    pokedex: [],
    isLoadingPokedex: false,
    pokedexError: null,
    isAddingAPokemon: false,
    addAPokemonError: null,
    isEditingAPokemon: false,
    editAPokemonError: null
  },
  searchTerm: {
    searchTerm: ''
  },
  sortOption: {
    sortOption: {
      key: 'choose-a-sort-option',
      text: 'choose-a-sort-option',
      value: 'choose-a-sort-option'
    }
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

const editAPokemonStart = (state, action) => {
  return updateObject(state, {
    isEditingAPokemon: action.isEditingAPokemon,
    editAPokemonError: action.editAPokemonError
  })
}

const editAPokemonSuccess = (state, action) => {
  let currentPokedex = JSON.parse(JSON.stringify(state.pokedex))
  let updatedPokedex = currentPokedex.map(pokemon => {
    if (pokemon.id !== action.editedPokemon.id) {
      return pokemon
    } else {
      return action.editedPokemon
    }
  })

  return updateObject(state, {
    isEditingAPokemon: action.isEditingAPokemon,
    editAPokemonError: action.editAPokemonError,
    pokedex: updatedPokedex
  })
}

const editAPokemonFail = (state, action) => {
  return updateObject(state, {
    isEditingAPokemon: action.isEditingAPokemon,
    editAPokemonError: action.editAPokemonError
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
    case actionTypes.EDIT_POKEMON_START: return editAPokemonStart(state, action)
    case actionTypes.EDIT_POKEMON_SUCCESS: return editAPokemonSuccess(state, action)
    case actionTypes.EDIT_POKEMON_FAIL: return editAPokemonFail(state, action)
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

// sort option reducer
const onSortOptionChange = (state, action) => {
  return updateObject(state, {
    sortOption: action.sortOption
  })
}

const sortOptionReducer = (state = initialState.sortOption, action) => {
  switch (action.type) {
    case actionTypes.SORT_OPTION_WAS_CHANGED: return onSortOptionChange(state, action)
    default: return state
  }
}
// end of sort option reducer

const appReducers = combineReducers({
  pokedex: pokedexReducer,
  searchTerm: searchTermReducer,
  sortOption: sortOptionReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
