import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import ViewSinglePokemon from './components/ViewSinglePokemon'
import EditSinglePokemon from './components/EditSinglePokemon'

const App = () => (
  <div className="App">
    <Switch>
      <Route path='/pokedex/:id/edit' component={EditSinglePokemon} />
      <Route path='/pokedex/:id' component={ViewSinglePokemon} />
      <Route path='/pokedex' component={PokemonIndex} />
      <Route path='/' render={() => <Redirect to='/pokedex' />} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
)

export default App
