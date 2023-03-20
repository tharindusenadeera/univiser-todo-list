import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PreviewTodo from "./components/PreviewTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/list" element={<PreviewTodo />} />
        </Routes>
    </Router>
  );
}

export default App;
