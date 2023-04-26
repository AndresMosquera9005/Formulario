import { useRef } from "react";

const useForm = (data ={}) => {


    const myRef = useRef()

    const submit = e =>{
        e.preventDefault()
        console.log(myRef.current);
        alert("Bienvenido Luis Felipiño al formulario en React ")
    }

    return [data, myRef, submit ]

}

export default useForm