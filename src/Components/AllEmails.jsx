import { useState, useEffect } from "react";
import "./AllEmails.css"; // importa o CSS

const AllEmails = () => {
  const url = "http://localhost:433/api/emails";
  const [users, setUsers] = useState([]);
  const [emailParaPin, setEmailParaPin] = useState(null);
  const [pinDigitado, setPinDigitado] = useState("");

  const SolicitarPin = async (email) => {
    try {
      const response = await fetch("http://localhost:433/api/send-pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        console.log("PIN enviado com sucesso!");
        setEmailParaPin(email);
      } else if (response.status === 401) {
        alert("Erro: não foi possível enviar o PIN.");
      } else {
        alert("Erro inesperado.");
      }
    } catch (error) {
      console.error("Erro ao solicitar PIN:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  const validarPin = async () => {
    try {
      const response = await fetch("http://localhost:433/api/validate-pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailParaPin,
          pin: pinDigitado,
        }),
      });

      if (response.status === 200) {
        alert("PIN validado com sucesso!");
        setEmailParaPin(null);
        setPinDigitado("");
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } else if (response.status === 401) {
        alert("PIN inválido.");
      } else {
        alert("Erro inesperado ao validar PIN.");
      }
    } catch (error) {
      console.error("Erro ao validar PIN:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">📧 E-mails Cadastrados</h1>
      <ul className="email-list">
        {users.map((user) => (
          <li key={user.id} className="email-item">
            <div className="email-info">
              <span className={`status ${user.validado ? "validado" : "nao-validado"}`}>
                {user.validado ? "VALIDADO" : "NÃO VALIDADO"}
              </span>
              <span className="user-name">{user.name}</span> - <span className="user-email">{user.email}</span>
            </div>
            {!user.validado && (
              <button className="btn" onClick={() => SolicitarPin(user.email)}>
                Solicitar PIN
              </button>
            )}
          </li>
        ))}
      </ul>

      {emailParaPin && (
        <div className="pin-container">
          <h2>🔐 Digite o PIN para <span className="email-highlight">{emailParaPin}</span></h2>
          <input
            type="text"
            placeholder="Digite o PIN"
            value={pinDigitado}
            onChange={(e) => setPinDigitado(e.target.value)}
            className="input-pin"
          />
          <button className="btn btn-validate" onClick={validarPin}>
            Validar PIN
          </button>
        </div>
      )}
    </div>
  );
};

export default AllEmails;
