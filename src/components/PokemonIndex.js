import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import {Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onSearchTermChange} from '../redux/actions'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={e => this.props.onSearchTermChange(e.target.value)} />
        <br />
        <PokemonCollection />
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchTermChange: text => dispatch(onSearchTermChange(text))
  }
}

export default connect(null, mapDispatchToProps)(PokemonPage)
