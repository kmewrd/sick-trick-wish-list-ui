import { Component } from 'react';
import fetchData from '../../apiCalls';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: [],
      error: null
    }
  }

  getAllTricks = () => fetchData().then(data => this.setState({ tricks: data })).catch(err => this.setState({ error: err }));

  componentDidMount = () => this.getAllTricks();

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;