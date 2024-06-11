import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/Home";
import ExchangePage from "./pages/Exchange";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/exchange" element={<ExchangePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
