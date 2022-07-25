
import './capital.css'

export const Capital = ({ nom }) => {
  return (
    <div>
      <span className='letra_grande' >{nom.charAt(0).toUpperCase()}</span>
      <p style={{ textTransform: "capitalize" }}>{nom}</p>
    </div>
  )
}
