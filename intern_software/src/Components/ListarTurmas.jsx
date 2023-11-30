import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../style/listarTurmas.css";

const ListarTurmas = () => {
  const [turmas, setTurmas] = useState([
    { id_turma: 1, nm_turma: "Turma A", qtd_alunos: 30 },
    { id_turma: 2, nm_turma: "Turma B", qtd_alunos: 25 },
    // Adicione mais turmas conforme necessário
  ]);

  const [newTurma, setNewTurma] = useState("");
  const [newQtdAlunos, setNewQtdAlunos] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTurmas, setSelectedTurmas] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTurmas(null);
    setNewTurma("");
    setNewQtdAlunos("");
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };

  const openDeleteModal = (idDelete) => {
    setIsDeleteModalOpen(true);
    setSelectedTurmas(idDelete);
  };

  const openEditModal = (turma) => {
    setSelectedTurmas(turma.id_turma);
    setNewTurma(turma.nm_turma);
    setNewQtdAlunos(turma.qtd_alunos);
    setIsEditModalOpen(true);
  };

  const handleNameChange = (e) => {
    setNewTurma(e.target.value);
  };

  const handleQtdAlunos = (e) => {
    setNewQtdAlunos(e.target.value);
  };

  const handleCadastrar = () => {
    if (newTurma && newQtdAlunos) {
      const newTurmaObject = {
        id_turma: turmas.length + 1,
        nm_turma: newTurma,
        qtd_alunos: parseInt(newQtdAlunos),
      };
      setTurmas([...turmas, newTurmaObject]);
      closeModal();
    }
  };

  const handleExcluir = () => {
    const updatedTurmas = turmas.filter((turma) => turma.id_turma !== selectedTurmas);
    setTurmas(updatedTurmas);
    closeModal();
  };

  const handleEditar = (turma) => {
    openEditModal(turma);
  };

  const handleSalvarEdicao = () => {
    const updatedTurmas = turmas.map((turma) => {
      if (turma.id_turma === selectedTurmas) {
        return {
          ...turma,
          nm_turma: newTurma,
          qtd_alunos: parseInt(newQtdAlunos),
        };
      }
      return turma;
    });
    setTurmas(updatedTurmas);
    closeModal();
  };

  return (
    <div className="container">
      <h1 className="title-header">Lista de Turmas</h1>
      <ul className="container-lista lista-scroll">
        {turmas.map((turma) => (
          <li className="lista-turma" key={turma.id_turma}>
            {turma.nm_turma}
            <div className="buttons-lista">
              <button className="button-editar" onClick={() => handleEditar(turma)}>
                <FaEdit />
              </button>
              <button className="button-excluir" onClick={() => openDeleteModal(turma.id_turma)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={openModal} className="botao-cadastrar">
        Cadastrar Turma
      </button>
      {isModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h2>{selectedTurmas ? "Editar turma" : "Cadastrar turma"}</h2>
            <div className="input-grupo-modal">
              <input
                type="text"
                placeholder="Nome"
                value={newTurma}
                onChange={handleNameChange}
              />
              <input
                type="text"
                placeholder="Quantidades de alunos"
                value={newQtdAlunos}
                onChange={handleQtdAlunos}
              />
            </div>
            <div className="button-grupo-modal">
              <button
                className="botao-salvar-modal"
                onClick={selectedTurmas ? handleSalvarEdicao : handleCadastrar}
              >
                {selectedTurmas ? "Salvar" : "Cadastrar"}
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
              <button className="botao-salvar-modal" onClick={handleExcluir}>
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
            <h2>Editar Turma</h2>
            <div className="input-grupo-modal">
              <input
                type="text"
                placeholder="Nome"
                value={newTurma}
                onChange={handleNameChange}
              />
              <input
                type="text"
                placeholder="Quantidades de alunos"
                value={newQtdAlunos}
                onChange={handleQtdAlunos}
              />
            </div>
            <div className="button-grupo-modal">
              <button className="botao-salvar-modal" onClick={handleSalvarEdicao}>
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

export default ListarTurmas;
