import { useState } from "react"
import "../src/App.scss"

const App = () => {

  const [data, setData] = useState({ email: "", password: ""})

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  
  const submit = e =>{
    e.preventDefault()
    console.log(data);
    alert("Bienvenido Luis Felipiño al formulario en React ")
  }

  return(
    <div className="ed-grid" >
      <form className="ed-container l-30" onSubmit={submit}>
        <div className="ed-item form__item">
          <label htmlFor="email">
            Correo electronico
            <input
              type="email" 
              name="email" 
              id="email" 
              value={data.email} 
              onChange={changeData}
            />
          </label>
        </div>
        <div className="ed-item form__item">
          <label htmlFor="password">
            Contraseña
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={data.password} 
              onChange={changeData}
            />
          </label>
        </div>
        <div className="ed-item form__item">
          <input type="submit" value="Ingresar" className="button full" />
        </div>
      </form>
    </div>
  )
}

export default App
