import React from 'react'
import {Card} from 'semantic-ui-react'
import {useState} from 'react'

const PokemonCard = ({pokemon}) => {
  const [showFront, setShowFront] = useState(true)

  return (
    <Card onMouseOver={() => setShowFront(!showFront)}>
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

export default PokemonCard
