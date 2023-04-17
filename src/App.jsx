import { useState } from "react"

const App =() => {

  const [num, setNum] = useState(0)
  const [mail, setMail] =useState("")
  
  const calculateLong = e => {
    setNum(e.target.value.length)
  }

  const changeEmail = e => setMail(e.target.Value)


  return (
    <div>
      <form>        
        <input 
          type="email" 
          Value={mail}
          onChange={changeEmail}
        />
        <input 
          type="password"
          placeholder="Contraseña" 
          required 
          onChange={calculateLong}
        />
        <p>Usted ingresò {num} caracteres</p>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default App
