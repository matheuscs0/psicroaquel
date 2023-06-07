import './Unidade.css'

function Unidade(){
  return(
    <div className="Unidade">
     <div className="ContactUnidade">
      <h3>Marque uma consulta agora mesmo</h3>
      <a href="https://wa.me/5511911522129?text=Olá, gostaria de marcar uma consulta." target="_blank"><button><span>Clique aqui</span></button></a>
     </div>

    <div className="AboutUnidade">
    <div className="LeftUnidade">
      <h3>Unidade de Taboão da Serra</h3>
      <p>Estr. São Francisco, 2008 - Vila Sonia do Taboão, Taboão da Seraa - SP, 06764-290</p>
      <p>+55 11 91152-2129</p>
      <p>Seg - Sex: 09h - 18h</p>
      <p>psicoraqueloliveira.silva@gmail.com</p>
    </div>

    <div className="RigthUnidade">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.9081689677074!2d-46.775191!3d-23.617503099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce546845ac048b%3A0xdc1dea21498cc4e4!2sEstr.%20S%C3%A3o%20Francisco%2C%202008%20-%20Jardim%20Wanda%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006765-904!5e0!3m2!1spt-BR!2sbr!4v1682629220942!5m2!1spt-BR!2sbr"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"/>
    </div>
    </div>

    </div>
  )
}
export default Unidade