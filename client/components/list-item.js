import React from 'react'

const ListItem = ({onClick, done, text}) => {
  return (
    <div>
      <li
        onClick={onClick}
        style={{textDecoration: done ? 'line-through' : 'none'}}
      >
        {text}
      </li>
    </div>
  )
}

export default ListItem
