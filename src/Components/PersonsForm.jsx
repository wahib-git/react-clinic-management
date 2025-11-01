import React from "react";

export default class PersonsForm extends React.Component {
  state = {
    monTexte: "Bonjour tout le monde !",
    personnes: ["Alice", "Bob", "Charlie"],
    personne: "",
  };

  addPerson = (event) => {
    event.preventDefault();
    const name = this.state.personne.trim();
    if (!name) return;
    this.setState((s) => ({ personnes: [...s.personnes, name], personne: "" }));
  };

  changeHandler = (event) => {
    this.setState({ personne: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addPerson}>
        <h2>{this.state.monTexte}</h2>
        <h3>bonjour {this.state.personne || "..."}</h3>
        <input type="text" value={this.state.personne} onChange={this.changeHandler} />
        <button type="submit">Ajouter</button>
        <ul>
          {this.state.personnes.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </form>
    );
  }
}