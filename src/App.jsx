import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import PersonList from "./Components/PersonsAfficherList";
import PersonsForm from "./Components/PersonsFormulaire";

function Home() {
  return <p>Bienvenue. Testez la liste d'utilisateurs et le formulaire.</p>;
}

function NotFound() {
  return <p>Page introuvable.</p>;
}

export default function App() {
  return (
    <div className="App">
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/users">Utilisateurs (API)</NavLink>
        <NavLink to="/form">Formulaire</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<PersonList />} />
        <Route path="/form" element={<PersonsForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}