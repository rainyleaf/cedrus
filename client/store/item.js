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
const getItems = items => ({
  type: GET_ITEMS,
  items
})

export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const toggleDone = item => ({
  type: TOGGLE_ITEM,
  item
})

export const setVisibilityFilter = visFilter => ({
  type: SET_VISIBILITY_FILTER,
  visFilter
})

export const getItemsThunk = () => async dispatch => {
  console.log('made it into the thunk')
  try {
    const res = await axios.get('/api/items/')
    dispatch(getItems(res.data))
  } catch (error) {
    console.error(error)
  }
}

const defaultState = {
  items: [],
  visFilter: SHOW_ALL
}

export default function(state = defaultState, action) {
  console.log('ACTION: ', action)
  switch (action.type) {
    case GET_ITEMS:
      return {...state, items: action.items}
    case ADD_ITEM:
      return {...state, items: [...state.items, action.item]}
    case TOGGLE_ITEM:
      action.item.done = !action.item.done
      //change so that this isn't adding a new item every time
      return {...state, items: [...state.items, action.item]}
    case SET_VISIBILITY_FILTER:
      return {...state, visFilter: action.visFilter}
    default:
      return state
  }
}
