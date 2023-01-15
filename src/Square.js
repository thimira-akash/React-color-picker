import React from 'react'

const Square = ({ colorValue,hexValue,isDarkText }) => {
  return (
    <section className='square'
             style={{backgroundColor:colorValue, color: isDarkText ? "#000": "#FFF" }}   >
        <p> {colorValue ?  `Here your ${colorValue}` : "Color please!"} </p>
        <p> {hexValue ? hexValue : null}</p>
       
    </section>
  )
}

Square.defaultProps ={
    colorValue:"Empty Color Value"
}
export default Square