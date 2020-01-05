import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card, Image, Container, Button, Form} from 'semantic-ui-react'
import {isEmpty} from 'lodash'
import {useState} from 'react'
import {editAPokemon} from '../redux/actions'

const EditSinglePokemon = ({pokemon, history, editAPokemon}) => {
  const [name, setName] = useState(pokemon.name)
  const [hp, setHP] = useState(pokemon.stats.find(stat => stat.name === 'hp').value)

  const handleSubmit = e => {
    e.preventDefault()
    let dataToEdit = {}
    dataToEdit['name'] = name
    dataToEdit['stats'] = [...pokemon.stats]
    dataToEdit['stats'].map(stat => {
      if (stat.name === 'hp') {
        stat['value'] = parseInt(hp)
        return stat
      } else {
        return stat
      }
    })
    
    editAPokemon(dataToEdit, pokemon.id)
    history.push(`/pokedex/${pokemon.id}`)
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
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Name</label>
                  <input value={name} type="text" name="name" onChange={e => setName(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                  <label>HP</label>
                  <input value={hp} type="text" name="hp" onChange={e => setHP(e.target.value)} required/>
                </Form.Field>
                <Button onClick={() => history.push(`/pokedex/${pokemon.id}`)}>Cancel</Button>
                &nbsp;
                <Button type='submit'>Submit</Button>
              </Form>
            </Card.Content>
          </Card>
      }
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokedex.pokedex.find(pokemon => pokemon.id === parseInt(ownProps.match.params.id))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editAPokemon: (dataToEdit, id) => dispatch(editAPokemon(dataToEdit, id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSinglePokemon))
