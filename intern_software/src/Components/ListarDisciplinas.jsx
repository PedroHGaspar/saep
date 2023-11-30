import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../style/listarDisciplinas.css";

const ListarDisciplinas = () => {
  const [disciplinas, setDisciplinas] = useState([
    { id_discip: 1, nm_disciplina: "Matemática", qtd_dias: 5, num_fase: 1 },
    { id_discip: 2, nm_disciplina: "Português", qtd_dias: 4, num_fase: 2 },
    // Add more disciplines as needed
  ]);

  const [newDisciplina, setNewDisciplina] = useState("");
  const [newQtdDias, setNewQtdDias] = useState("");
  const [newNumFase, setNewNumFase] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDisciplinas, setSelectedDisciplinas] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDisciplinas(null);
    setNewDisciplina("");
    setNewQtdDias("");
    setNewNumFase("");
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };

  const openDeleteModal = (idDelete) => {
    setIsDeleteModalOpen(true);
    setSelectedDisciplinas(idDelete);
  };

  const openEditModal = (disciplina) => {
    setSelectedDisciplinas(disciplina.id_discip);
    setNewDisciplina(disciplina.nm_disciplina);
    setNewQtdDias(disciplina.qtd_dias);
    setNewNumFase(disciplina.num_fase);
    setIsEditModalOpen(true);
  };

  const handleNameChange = (e) => {
    setNewDisciplina(e.target.value);
  };

  const handleQtdDias = (e) => {
    setNewQtdDias(e.target.value);
  };

  const handleNumFase = (e) => {
    setNewNumFase(e.target.value);
  };

  const handleCadastrar = () => {
    if (newDisciplina && newQtdDias && newNumFase) {
      const newDisciplinaObject = {
        id_discip: disciplinas.length + 1,
        nm_disciplina: newDisciplina,
        qtd_dias: parseInt(newQtdDias),
        num_fase: parseInt(newNumFase),
      };
      setDisciplinas([...disciplinas, newDisciplinaObject]);
      closeModal();
    }
  };

  const handleExcluir = () => {
    const updatedDisciplinas = disciplinas.filter(
      (disciplina) => disciplina.id_discip !== selectedDisciplinas
    );
    setDisciplinas(updatedDisciplinas);
    closeModal();
  };

  const handleEditar = (disciplina) => {
    openEditModal(disciplina);
  };

  const handleSalvarEdicao = () => {
    const updatedDisciplinas = disciplinas.map((disciplina) => {
      if (disciplina.id_discip === selectedDisciplinas) {
        return {
          ...disciplina,
          nm_disciplina: newDisciplina,
          qtd_dias: parseInt(newQtdDias),
          num_fase: parseInt(newNumFase),
        };
      }
      return disciplina;
    });
    setDisciplinas(updatedDisciplinas);
    closeModal();
  };

  return (
    <div className="container">
      <h1 className="title-header">Lista de Disciplinas</h1>
      <ul className="container-lista lista-scroll">
        {disciplinas.map((disciplina) => (
          <li className="lista-disciplinas" key={disciplina.id_discip}>
            {disciplina.nm_disciplina}
            <div className="buttons-lista">
              <button
                className="button-editar"
                onClick={() => handleEditar(disciplina)}
              >
                <FaEdit />
              </button>
              <button
                className="button-excluir"
                onClick={() => openDeleteModal(disciplina.id_discip)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={openModal} className="botao-cadastrar">
        Cadastrar Disciplina
      </button>
      {isModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h2>
              {selectedDisciplinas
                ? "Editar disciplina"
                : "Cadastrar disciplina"}
            </h2>
            <div className="input-grupo-modal">
              <input
                type="text"
                placeholder="Nome"
                value={newDisciplina}
                onChange={handleNameChange}
              />
              <input
                type="text"
                placeholder="Quantidade de dias"
                value={newQtdDias}
                onChange={handleQtdDias}
              />
              <input
                type="text"
                placeholder="Número da Fase"
                value={newNumFase}
                onChange={handleNumFase}
              />
            </div>
            <div className="button-grupo-modal">
              <button
                className="botao-salvar-modal"
                onClick={
                  selectedDisciplinas
                    ? handleSalvarEdicao
                    : handleCadastrar
                }
              >
                {selectedDisciplinas ? "Salvar" : "Cadastrar"}
              </button>
              <button onClick={closeModal} className="botao-fechar-modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h2>Tem certeza que deseja excluir?</h2>
            <div className="button-grupo-modal">
              <button
                className="botao-salvar-modal"
                onClick={() => handleExcluir(selectedDisciplinas)}
              >
                Sim
              </button>
              <button onClick={closeModal} className="botao-fechar-modal">
                Não
              </button>
            </div>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h2>Editar Disciplina</h2>
            <div className="input-grupo-modal">
              <input
                type="text"
                placeholder="Nome"
                value={newDisciplina}
                onChange={handleNameChange}
              />
              <input
                type="text"
                placeholder="Quantidade de dias"
                value={newQtdDias}
                onChange={handleQtdDias}
              />
              <input
                type="text"
                placeholder="Número da Fase"
                value={newNumFase}
                onChange={handleNumFase}
              />
            </div>
            <div className="button-grupo-modal">
              <button
                className="botao-salvar-modal"
                onClick={handleSalvarEdicao}
              >
                Salvar
              </button>
              <button onClick={closeModal} className="botao-fechar-modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListarDisciplinas;
