
import './bola.css'

export const Bola = ({ num = '', className = '' }) => {
  return (
    <div className={`${className} bola`} >{num && num}</div>
  )
}
