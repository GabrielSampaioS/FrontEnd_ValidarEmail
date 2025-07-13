


const AllEmails = ({ users }) => {



  return (
    <div>
      <h1>Todos os e-mails cadastrados:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.validado ? (
              <span style={{ color: "green" }}>VALIDADO</span>
            ) 
              : 
            (
              <span style={{ color: "red" }}>NÂO validado</span>
            )
            }

            {user.name} - {user.email}

            <div>
              <button onClick={() => SolicitarPin(user.email)}>Solicitar PIN()</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllEmails;
