import { useState } from 'react'
import moment from 'moment'
import { save } from '../services/sheet'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const contactHandler = async (e) => {
    e.preventDefault()

    const data = {
      Nome: name,
      Email: email,
      Mensagem: message,
      Data: moment().format('DD-MM-YYYY')
    }
  
    const result = await save(data)
    if (result) {
      setSuccess(result)
      resetForm()
    } else {
      setError(!result)
    }
  }

  return (
    <form className="row g-3" onSubmit={contactHandler}>
      <div className="col-xs-12">
        <label htmlFor="inputZip" className="form-label">Nome</label>
        <input 
          type="text" 
          className="form-control" 
          id="inputZip" 
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>
      <div className="col-xs-12">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          id="inputEmail4" 
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </div>
      <div className="col-xs-12">
        <label htmlFor="floatingTextarea" className="form-label">Mensagem</label>
        <textarea 
          className="form-control" 
          id="floatingTextarea"
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
        ></textarea>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-secondary">Enviar</button>
      </div>
      <div>
        {success && <h4>Mensagem enviada com sucesso!</h4>}
        {error && <h4>Erro ao enviar mensagem</h4>}
      </div>
    </form>
  );
}

export default Form;