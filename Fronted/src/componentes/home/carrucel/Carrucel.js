import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import carousel from './carosuel.json'
import "../Home.css"

export default function Carrucel() {
  return (
    <Carousel>
      {
        carousel.map( item => <Item key={item.id} item={item}/>)
      }
    </Carousel>
  )
}
