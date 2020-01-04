import React from 'react'
import {Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {addAPokemon} from '../redux/actions'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    let pokemonData = {}
    pokemonData['name'] = this.state.name
    pokemonData['stats'] = []
    pokemonData['stats'].push({name: 'hp', value: this.state.hp})
    pokemonData['sprites'] = {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }

    this.props.addAPokemon(pokemonData)
    this.clearFields()
  }

  clearFields = () => {
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} required />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange} required/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange} required/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange} required/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAPokemon: pokemonData => dispatch(addAPokemon(pokemonData))
  }
}

export default connect(null, mapDispatchToProps)(PokemonForm)
