import React from 'react'

export const CuadradoB = ({ talla, margen, grosor, color }) => {
  return (
    <div style={{ width: talla, height: talla, margin: margen, border: `${grosor} solid ${color}` }} />
  )
}
