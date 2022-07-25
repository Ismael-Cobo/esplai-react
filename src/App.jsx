import {
  Bola,
  Titulo,
  BolaX,
  CuadradoB,
  Linea,
  Capital,
  Gato,
  FotoBola,
  BolaBingo,
  FotoBolaX
} from "./components"

export const App = () => {

  return (
    <>
      <h1>Hello world</h1>
      <Titulo mensaje="hola react" />
      <Bola />
      <BolaX talla="80px" margen="10px" fondo="red" />
      <CuadradoB talla="70px" margen="8px" grosor="5px" color="red" />
      <Linea style={{ marginTop: "1px", border: "1px solid black" }} />
      <Linea style={{ marginTop: "3px", border: "1px solid black" }} />
      <Capital nom="barcelona" />
      <Gato ancho="200px" alto="200px" nombre="Garfield" />
      <FotoBola src="http://via.placeholder.com/200x200" radio="100" />
      <BolaBingo num={22} />
      <FotoBolaX src="http://via.placeholder.com/200x200" talla="200" />
    </>
  )
}
