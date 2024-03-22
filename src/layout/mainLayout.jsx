import React from 'react'
import { Navbar } from '../components/navbar'



import './mainLayout.css'

export const MainLayout = ({children}) => {
  return (
    <div className='main-layout'>

        <Navbar />


        {children}
        
    </div>
  )
}
