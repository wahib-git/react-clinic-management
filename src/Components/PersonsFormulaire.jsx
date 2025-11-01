import React from "react";

export default class PersonsForm extends React.Component {
  state = {
    monTexte: "Bonjour tout le monde !",
    personnes: ["wahib", "chaima", "zaineb"],
    personne: "",
  };

  addPerson = (event) => {
    event.preventDefault();
    const name = this.state.personne;
    this.setState((s) => ({ personnes: [...s.personnes, name], personne: "" }));
  };

  changeHandler = (event) => {
    this.setState({ personne: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addPerson}>
        <h2>{this.state.monTexte}</h2>
        <h3>ecrivez un nom</h3>
        <input type="text" value={this.state.personne} onChange={this.changeHandler} id="personne" />
        <button type="submit">Ajouter</button>
        <ul>
          {this.state.personnes.map((person, id) => (
            <li key={id}>{person}</li>
          ))}
        </ul>
      </form>
    );
  }
}