import React, {Component} from 'react'
import ListItem from './list-item'
import {connect} from 'react-redux'
import {getItemsThunk, toggleDone} from '../store/item'

class Checklist extends Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await this.props.getItems()
  }
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <ListItem
            key={item.text}
            {...item}
            onClick={() => this.props.toggleDone(item)}
          />
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const showDone = state.item.items.filter(item => item.done)
  const showActive = state.item.items.filter(item => !item.done)

  const filterFunc = function() {
    if (state.item.visFilter === 'SHOW_DONE') {
      return showDone
    } else if (state.item.visFilter === 'SHOW_ACTIVE') {
      return showActive
    } else {
      return state.item.items
    }
  }

  return {
    items: filterFunc()
  }
}

const mapDispatchToProps = dispatch => ({
  toggleDone: item => dispatch(toggleDone(item)),
  getItems: () => dispatch(getItemsThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
