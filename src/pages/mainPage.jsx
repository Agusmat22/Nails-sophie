import React from 'react'
import {models} from '../data/models.js'
import {colours} from '../data/colours.js'
import './css/mainPage.css'
import { Card } from '../components/card.jsx'

console.log(colours)

export const MainPage = () => {
  return (
    <div>

        <div className='container-presentation d-flex flex-column align-items-center justify-content-start'>

            <div id='main' className='presentation d-flex flex-column align-items-center justify-content-center'>

                <div className='title-presentation d-flex flex-column align-items-center justify-content-center'>
                  <h1 className='h1-presentation'>Nails Sofia</h1>
                  <p className='p-presentation'>Brilla con tus uñas</p>
                </div>
                
            </div>


            <div id='model' className='container-model mb-5 pb-5'>
              <div className='d-flex flex-column align-items-center justify-content-start mt-5 '>
                <h2 className='h2-model mt-2 mb-3'>Modelos</h2>
                <div className="container-models row  mt-1 g-5" style={{maxWidth: '100%'}}>

                  {models.map((model, index) => (

                    <div key={index}  className='col-md-6 col-lg-4 d-flex justify-content-center col-card'>
                      <Card model={model} key={index} />
                    </div>
                
                ))}
                </div>
              </div>
            </div>

            <div id='colour' className='container-colores ' style={{width: '100%'}}>
              <div className=' d-flex flex-column align-items-center align-content-center justify-content-start mt-5 'style={{width: '100%'}}>
                  <h2 className='h2-model mb-5 pb-3'>Colores</h2>
                  <div className='row d-flex justify-content-center align-content-center container-pallet' style={{maxWidth: '70%'}}>

                  

                    {colours.map( (col,index)=> (

                      <div key={index} className='col-12 circle-colour m-5' style={{backgroundColor: col}}>
                                 
                      </div>

                    ) )}
                    </div>
                  
              </div>
            </div>

            <div className='mb-4' style={{height: '0.5px', width: '100%', backgroundColor: '#CDB1B0'}}></div>

            <footer className='' style={{width: '100%', height: '5rem'}}>
              <div className='d-flex flex-column justify-content-center align-items-end' style={{width: '100%', height: '100%'}}>
                <p className='text-end author-derech me-3 fw-semibold'>Instagram</p>
                <p className='text-end author-derech me-3 fw-semibold'>© 2024 AGUSTMAT22</p>
              </div>
            </footer>


        </div>
        
    </div>
  )
}
