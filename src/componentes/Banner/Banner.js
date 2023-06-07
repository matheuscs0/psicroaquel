import './Banner.css'
import { useState } from 'react'
function Banner(){
const [active, setMode] = useState(false)
const ToggleMode = () =>{
  setMode(!active)
}

return (
    <header className="banner">
    <div className="logo"><img src='imgs/logo2.png'></img></div>
      <nav className={active ? 'menuOpen' : 'menuClose'}>
        <ul>
          <li><a href="#About">Sobre mim</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="https://wa.me/5511911522129?text=Olá, gostaria de marcar uma consulta." target="_blank">Marque uma consulta</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Banner