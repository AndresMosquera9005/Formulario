import "../src/App.scss"
import Field from "./components/Field"
import Submit from "./components/Submit"
import Form from "./components/Form"
import useForm from "./assets/hook/useForm"

const App = () => {

  const [data, loginForm, submit] = useForm({  email: "", password: "" })

  return(
    <Form submit={submit} formRef={loginForm} >
      <Field type="email" value={data.email} label="Correo electronico" />
      <Field type="password" value={data.password} label="Contraseña" />
      <Submit value="Ingresar" />
    </Form>
    
  )
}

export default App
