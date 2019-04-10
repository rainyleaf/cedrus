import React from 'react'

const ListItem = ({onClick, bought, text}) => {
  return (
    <div>
      <li
        onClick={onClick}
        style={{textDecoration: bought ? 'line-through' : 'none'}}
      >
        {text}
      </li>
    </div>
  )
}

export default ListItem
