import './gato.css'

import GatoSrc from '../../assets/img/gato.jpg'

export const Gato = ({ ancho, alto, nombre }) => {
  return (
    <div className='card'>

      <img style={{ width: ancho, height: alto }} src={GatoSrc} />
      <p>{nombre}</p>
    </div>
  )
}
