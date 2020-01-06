import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card, Image, Container, Button} from 'semantic-ui-react'
import {isEmpty} from 'lodash'
import {deleteAPokemon} from '../redux/actions'

const ViewSinglePokemon = ({pokemon, history, deleteAPokemon}) => {
  const onDeletePokemon = () => {
    deleteAPokemon(pokemon.id)
    history.push('/pokedex')
  }

  return (
    <Container fluid style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {
        isEmpty(pokemon)
        ?
        null
        :
        <Card>
          <Image src={pokemon.sprites.front} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Header>
            <Card.Meta>
              <span className='date'></span>
            </Card.Meta>
            <Card.Description>
              {pokemon.stats.find(stat => stat.name === 'hp').value} HP
            </Card.Description>
          </Card.Content>
          <Card.Content extra style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button onClick={() => history.push('/pokedex')}>Back</Button>
            &nbsp;
            <Button onClick={() => history.push(`/pokedex/${pokemon.id}/edit`)}>Edit</Button>
            &nbsp;
            <Button onClick={onDeletePokemon}>Delete</Button>
          </Card.Content>
        </Card>
      }
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokedex.pokedex.find(pokemon => pokemon.id === parseInt(ownProps.match.params.id, 10))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteAPokemon: id => dispatch(deleteAPokemon(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewSinglePokemon))
