import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onSortOptionChange} from '../redux/actions'

const sortOptions = [
  {
    key: 'choose-a-sort-option',
    text: 'choose-a-sort-option',
    value: 'choose-a-sort-option'
  },
  {
    key: 'sort-by-name',
    text: 'sort-by-name',
    value: 'sort-by-name'
  },
  {
    key: 'sort-by-hp',
    text: 'sort-by-hp',
    value: 'sort-by-hp'
  }
]

const Sort = ({sortOption, onSortOptionChange}) => {
  const handleChange = e => {
    if (e.target.innerText === 'choose-a-sort-option') {
      onSortOptionChange({
        key: 'choose-a-sort-option',
        text: 'choose-a-sort-option',
        value: 'choose-a-sort-option'
      })
    }
    if (e.target.innerText === 'sort-by-name') {
      onSortOptionChange({
        key: 'sort-by-name',
        text: 'sort-by-name',
        value: 'sort-by-name'
      })
    }
    if (e.target.innerText === 'sort-by-hp') {
      onSortOptionChange({
        key: 'sort-by-hp',
        text: 'sort-by-hp',
        value: 'sort-by-hp'
      })
    }
  }

  return (
    <Dropdown
      selection
      options={sortOptions}
      onChange={handleChange}
      placeholder={sortOptions.find(option => option.value === sortOption.value).value}
    />
  )
}

const mapStateToProps = state => {
  return {
    sortOption: state.sortOption.sortOption
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSortOptionChange: sortOption => dispatch(onSortOptionChange(sortOption))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
