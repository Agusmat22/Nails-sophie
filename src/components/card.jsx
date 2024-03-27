import React from 'react'

import './css/card.css'

export const Card = ({model}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
        <img src={model.img} className="card-img-top" alt="Error image" style={{width: '100%'}}/>
        <div className="card-body d-flex justify-content-center align-items-center flex-column text-center">
            <h5 className="card-title mb-4">{model.name}</h5>
            <p className="card-text">{model.description}</p>
            <button className='btn-card'>Ver precio</button>
        </div>
    </div>
  )
}
