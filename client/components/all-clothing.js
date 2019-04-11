import React, {Component} from 'react'
import ClothingItem from './list-item'
import CreateItem from './create-item'
import {connect} from 'react-redux'
import {getItemsThunk} from '../store/clothing'

class Checklist extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getItems()
  }
  render() {
    const clothingList = this.props.clothing.map(clothing => {
      return (
        <div key={clothing.id}>
          <Link to={`/clothing/` + clothing.id}>
            <ClothingItem clothing={clothing} />
          </Link>
        </div>
      )
    })
    return (
      <div>
        <h3 className="center">All Mittens</h3>
        <div className="row">{clothingList}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clothing: state.clothing.clothing
})

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItemsThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
