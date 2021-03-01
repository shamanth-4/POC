
import '../App.css';
import React from "react";





class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: window.searchPanelJson,
    };
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <p> ID: {user.id} </p>
        <p> Name: {user.name} </p>
      </div>
    );
  }
}
 export default App;

