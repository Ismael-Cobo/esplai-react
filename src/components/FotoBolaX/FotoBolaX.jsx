
export const FotoBolaX = ({ src, talla }) => {
  return (
    <img
      src={src}
      style={{
        borderRadius: `${talla}px`,
        width: `${talla}px`,
        height: `${talla}px`
      }}
    />
  )
}
