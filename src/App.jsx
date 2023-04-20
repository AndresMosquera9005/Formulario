import { useRef } from "react"
import "../src/App.scss"
import Field from "./components/Field"

const App = () => {

  const data = { email: "", password: ""}
  const loginForm = useRef()

  const submit = e =>{
    e.preventDefault()
    console.log(loginForm.current);
    alert("Bienvenido Luis Felipiño al formulario en React ")
  }

  return(
    <div className="ed-grid" >
      <form className="ed-container l-30" onSubmit={submit} ref={loginForm} >
        <Field type="email" value={data.password} label="Correo electronico" />
        <div className="ed-item form__item">
          <label htmlFor="password">
            Contraseña
            <input 
              type="password" 
              name="password" 
              id="password" 
              defaultValue={data.password} 
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
