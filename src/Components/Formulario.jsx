import { useState } from "react";
import "./Formulario.css"

//const API_URL = "http://localhost:433";


const Formulario = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("")


    return(
        <div>
            <h1>Formulario</h1>
            <form >
                <label>
                    <span>Nome</span>
                    <input 
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <span>Email</span>
                    <input 
                        type="email"
                        placeholder="Seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <input type="submit" value="Enviar" />
               
            </form>
        </div>
    )
}

export default Formulario