import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import PaginaProfessor from './Components/PaginaProfessor';
import { DarkModeProvider } from './Components/DarkModeContext';
import Home from "./pages/Home";


const App = () => {
    return (
        <DarkModeProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<PaginaProfessor />} />
                <Route path="/dashboard" element={<Home />} />
            </Routes>
        </DarkModeProvider>
    );
};

export default App;