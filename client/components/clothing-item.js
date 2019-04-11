import React from 'react'

const ClothingItem = props => {
  return (
    <div className="container">
      <div className="col s12 l6">
        <div className="card hoverable horizontal small">
          <div className="card-image">
            <img className="responsive-img" src={props.clothing.imageUrl} />
          </div>
          <div className="card-content">
            <span className="card-title">
              <strong>{props.clothing.category}</strong>
            </span>
            <p className="product-description">
              Color: {props.clothing.dominantColor}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothingItem
