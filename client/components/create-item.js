import React, {Component} from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {addItemThunk} from '../store/item'

const defaultState = {
  text: '',
  done: false,
  errorMessage: ''
}

class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newItem = {text: this.state.text, done: this.state.done}
    try {
      this.props.addItem(newItem)
      this.setState(defaultState)
    } catch (err) {
      console.error(err)
      this.setState({
        errorMessage: `There was a problem creating the item: ${err.message}`
      })
    }
  }

  render() {
    return (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemThunk(item))
})

export default connect(null, mapDispatchToProps)(CreateItem)
