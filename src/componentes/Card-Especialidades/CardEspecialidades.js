import './CardEspecialidades.css'
function CardEspe(){
  function entrar(event){
    event.target.firstChild.innerText = 'Clique aqui'
  }
  
  function sair(event){
    event.target.firstChild.innerText = event.target.getAttribute('data-espe')
  }

  return(
    <div className="especialidades" id="cardEspe">
      <a href="https://www.instagram.com/p/CNTC6TUAAep/?utm_source=ig_web_copy_link" target="_blank" className="card" data-espe="Autismo" onMouseEnter={entrar} onMouseLeave={sair}>
        <h3>Autismo</h3>
      </a>
      <a href="https://www.instagram.com/p/COjFFAqAQkc/?utm_source=ig_web_copy_link" target="_blank" className="card" data-espe="Depressão" onMouseEnter={entrar} onMouseLeave={sair}>
        <h3>Depressão</h3>
      </a>
      <a href="https://www.instagram.com/p/CMvDzM_J2oB/?utm_source=ig_web_copy_link" target="_blank" className="card" data-espe="Ansiedade" onMouseEnter={entrar} onMouseLeave={sair}>
        <h3>Ansiedade</h3>
      </a>
      <a href="https://www.instagram.com/p/CMNOt2dge19/?utm_source=ig_web_copy_link" target="_blank" className="card" data-espe="TDAH" onMouseEnter={entrar} onMouseLeave={sair}>
        <h3>TDAH</h3>
      </a>
      <a href="https://www.instagram.com/p/CNnrhtNAE23/?utm_source=ig_web_copy_link" target="_blank" className="card" data-espe="Traumas infantis" onMouseEnter={entrar} onMouseLeave={sair}>
        <h3>Traumas infantis</h3>
      </a>
      <a href="https://www.instagram.com/p/CM2zgyuJsOp/?utm_source=ig_web_copy_link" target="_blank" className="card" data-espe="Orientação Parental" onMouseEnter={entrar} onMouseLeave={sair}>
        <h3>Orientação Parental</h3>
      </a>
    </div>
  )
}


export default CardEspe