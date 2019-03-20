import React, { Component } from 'react';
import axios from 'axios';
 
class App extends Component {
  state = { users: [] }
 
  componentDidMount(){
    axios.get(`http://localhost:3000/v1/users.json`)
      .then((response) => {
        this.setState({ users: response.data })
      })
      .catch((error) => { console.log(error) })
  }
 
  render() {
    return (
      <ul>
        {this.state.users.map((user) => {
          return(
            <li key={user.id}>{user.first_name}</li>
          )
        })}
      </ul>
    );
  }
}
 
export default App
