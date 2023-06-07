import './Footer.css'

function Footer(){
  return(
    <footer>
      <div className="footer">
        <div className="LeftFooter">
          <img src="imgs/logo.png"></img>
          <a href="https://www.instagram.com/psicoraqueloliveira/" target="_blank"><img src="svgs/instagram.svg"></img></a>
        </div>
         <div className="RightFooter">
          <h3>Contato</h3>
          <p>+55 11 91152-2129</p>
          <p>psicoraqueloliveira.silva@gmail.com</p>
        </div>
      </div>
      <div className="teaga">
        <p>© 2023 Matheus Silva - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer