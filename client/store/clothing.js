import axios from 'axios'

//action type
const GET_ITEMS = 'GET_ITEMS'
const ADD_ITEM = 'ADD_ITEM'
const TOGGLE_ITEM = 'TOGGLE_ITEM'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SHOW_ALL = 'SHOW_ALL'
const SHOW_DONE = 'SHOW_DONE'
const SHOW_ACTIVE = 'SHOW_ACTIVE'

//action creator
const getItems = clothing => ({
  type: GET_ITEMS,
  clothing
})

const addItem = clothing => ({
  type: ADD_ITEM,
  clothing
})

export const toggleDone = clothing => ({
  type: TOGGLE_ITEM,
  clothing
})

export const setVisibilityFilter = visFilter => ({
  type: SET_VISIBILITY_FILTER,
  visFilter
})

export const getItemsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/clothing/')
    dispatch(getItems(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const addItemThunk = clothing => async dispatch => {
  try {
    const res = await axios.post('/api/clothing', clothing)
    dispatch(addItem(res.data))
  } catch (error) {
    console.error(error)
  }
}

const defaultState = {
  clothing: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, clothing: action.clothing}
    case ADD_ITEM:
      return {...state, clothing: [...state.clothing, action.clothing]}
    default:
      return state
  }
}
