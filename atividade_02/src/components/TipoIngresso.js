export default function TipoIngresso({tipo, preco}){
  return(
    <div>
      <tex>
        <text className="list">• {tipo}: </text>
        R$ {preco}
      </tex>
    </div>
  )
}