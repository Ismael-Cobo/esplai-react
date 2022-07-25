import React from 'react'

export const BolaX = ({ talla, margen, fondo }) => {
  return (
    <div style={{ width: talla, height: talla, margin: margen, backgroundColor: fondo, borderRadius: "999px" }} />
  )
}
