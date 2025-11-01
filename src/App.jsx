import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { ListPersons: [] };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ ListPersons: persons });
    });
  }
  render() {
    return (
      <ul>
        {this.state.ListPersons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default App;
