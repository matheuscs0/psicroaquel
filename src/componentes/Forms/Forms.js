import './Forms.css'

function Forms(){
  return(
    <div className="formulario">
      <form id="my-form" class="form" onsubmit="return validateForm()">
      <div className="input">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required></input>
      </div>
       
      <div className="input">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required></input>
      </div>
        
      <div className="rating" id="rating">
        <label for="star-1">
          <input type="radio" id="star-1" name="star-radio" value="star-1"></input>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-2">
          <input type="radio" id="star-2" name="star-radio" value="star-1"></input>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-3">
          <input type="radio" id="star-3" name="star-radio" value="star-1"></input>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-4">
          <input type="radio" id="star-4" name="star-radio" value="star-1"></input>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-5">
          <input type="radio" id="star-5" name="star-radio" value="star-1"></input>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
      </div>
        
      <div className="input">
        <label for="comment">Comentário:</label>
        <textarea id="comment" name="comment" required></textarea>
      </div>
        
        <button onclick="sendForm()" className="form-button">Enviar</button>
      </form>
    </div>
  )
}

export default Forms