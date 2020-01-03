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
    const {pokedex, searchTerm} = this.props

    let pokemonCards
    if (!isEmpty(pokedex)) {
      pokemonCards = pokedex.filter(pokemon => pokemon.name.includes(searchTerm)).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
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
    searchTerm: state.searchTerm.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrievePokedex: () => dispatch(fetchPokedex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCollection)
