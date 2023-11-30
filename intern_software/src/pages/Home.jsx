import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaDoorOpen,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";
import ListarTurma from "../Components/ListarTurmas";
import ListarDisciplinas from "../Components/ListarDisciplinas";
import { useNavigate } from "react-router-dom";
import "../style/professor.css";

const Home = () => {
  const [mostrarTurma, setMostrarTurma] = useState(false);
  const [mostrarDisciplina, setMostrarDisciplina] = useState(false);

  const toggleTurma = () => {
    setMostrarTurma(true);
    setMostrarDisciplina(false);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout");
    navigate("/login");
  };

  const toggleDisciplinas = () => {
    setMostrarTurma(false);
    setMostrarDisciplina(true);
  };
  return (
    <div className="container">
      <div className="default-pages-template">
        <header className="header-pagina-professor">
          <h1>Nome do Professor</h1>
          <button onClick={handleLogout}>Logout</button>
        </header>
        <div className="buttonLightMode"></div>
      </div>
      <section className="home">
        <div>
          <ul className="lista-container">
            <li className="lista-icones-menu" onClick={toggleTurma}>
              <FaUsers className="icon" /> <p>Turmas</p>
            </li>
            <li className="lista-icones-menu" onClick={toggleDisciplinas}>
              <FaBookOpen className="icon" /> <p>Disciplinas</p>
            </li>
          </ul>
        </div>
        <div>
          <h3></h3>
          <div>
            {mostrarTurma && <ListarTurma />}
            {mostrarDisciplina && <ListarDisciplinas />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
