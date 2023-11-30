import { useNavigate } from "react-router-dom";
import '../style/professor.css'

const PaginaProfessor = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout");
    navigate("/login");
  };

  return (
    <div className="default-pages-template">
      <header className="header-pagina-professor">
        <h1>Nome do Professor</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div>
        <p>Vamos fazer um template de página de clientes.</p>
      </div>
      <div className="buttonLightMode">
      </div>
    </div>
  );
};

export default PaginaProfessor;
