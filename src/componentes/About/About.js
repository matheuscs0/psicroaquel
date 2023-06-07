import './About.css'

function About(){
  return(
      <div className="About">
        <div className="LeftDiv">
          <h2>Raquel Oliveira</h2>
          <p>Graduada em Psicologia pela Universidade Anhanguera, possui especialiazção em Transtorno do Espectro Autista (TEA) e Terapia Cognitivo Comportamental (TCC).
             Sólida experiência no atendimento individualizado e com
              equipe multidisciplinar em clínica de especialidades tratando pacientes 
              com distúrbio do neurodesenvolvimento. Atualmente trabalha na área clínica, 
              atendendo público infantil e adolescentes, com demandas diversas.
              <br/> <br/>
            CRP: 159072</p>
        </div>
        <div className="RightDiv">
          <img src='imgs/raquel.jpg'></img>
        </div>

      </div>
    
  )
}

export default About 