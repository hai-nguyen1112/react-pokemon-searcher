import React from 'react'
import PokemonCard from './PokemonCard'
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchPokedex} from '../redux/actions'
import {isEmpty} from 'lodash'

class PokemonCollection extends React.Component {
  componentDidMount() {
    this.props.retrievePokedex()
  }

  render() {
    const {pokedex, searchTerm, sortOption} = this.props

    let pokemonCards
    if (!isEmpty(pokedex)) {
      pokemonCards
      =
      pokedex
      .filter(pokemon => pokemon.name.includes(searchTerm))
      .sort(
        sortOption.value === 'sort-by-name'
        ?
        (a, b) => a.name.localeCompare(b.name)
        :
        sortOption.value === 'sort-by-hp'
        ?
        (a, b) => a.stats.find(stat => stat.name === 'hp').value - b.stats.find(stat => stat.name === 'hp').value
        :
        () => null
      )
      .map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
    }

    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCards}
      </Card.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokedex: state.pokedex.pokedex,
    searchTerm: state.searchTerm.searchTerm,
    sortOption: state.sortOption.sortOption
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrievePokedex: () => dispatch(fetchPokedex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCollection)
