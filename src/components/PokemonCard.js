import React from 'react'
import {Card} from 'semantic-ui-react'
import {useState} from 'react'
import {withRouter} from 'react-router-dom'

const PokemonCard = ({pokemon, history}) => {
  const [showFront, setShowFront] = useState(true)

  return (
    <Card
      onMouseEnter={() => setShowFront(!showFront)}
      onClick={() => history.push(`/pokedex/${pokemon.id}`)}
    >
      <div>
        <div className="image">
          <img alt={pokemon.name} src={showFront ? pokemon.sprites.front : pokemon.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.stats.find(stat => stat.name === 'hp').value} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default withRouter(PokemonCard)
