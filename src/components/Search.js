import React from 'react'
import {connect} from 'react-redux'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={props.onChange}
          value={props.searchTerm}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
