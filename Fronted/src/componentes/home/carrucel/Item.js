import React from 'react'
import {Paper  } from "@mui/material"
import "../Home.css"

export default function Item({item}) {
  return (
    <Paper className='carrusel' >
      <div className='imagendidac'>
        <img src={item.image} alt={item.title} className="carrucel"/>
        <div className='descriptionCarucel' >
          <h1 >{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </div>
      
   
    </Paper>

  )
}
