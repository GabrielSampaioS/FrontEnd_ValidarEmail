import { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const EnviarUser = async (email) => {
    try{
      const response = await fetch("http://localhost:433/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ //O banco no momento so tem email. NÂO NOME
          email : email
        }),
      });

      if(response.status === 200){
        alert("Usuário cadastrado com sucesso!");
        setNome("");
        email("");
      }
    }catch(error){
      console.error("Erro ao cadastrar usuer: ", error);
      alert("Erro de conecão com o servidor")
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-title">📬 Cadastro de E-mail</h1>
      <form 
        className="form-box"  
        onSubmit={(e) => {
          e.preventDefault();
          EnviarUser();
        }}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="submit" value="Enviar" className="btn-form" />
      </form>
    </div>
  );
};

export default Formulario;
