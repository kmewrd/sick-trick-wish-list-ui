import { Component } from 'react';
import api from '../../apiCalls';
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

  getAllTricks = () => api.fetchData().then(data => this.setState({ tricks: data })).catch(err => this.setState({ error: err }));

  componentDidMount = () => this.getAllTricks();

  addTrick = trick => {
    api.postData(trick).then(() => this.getAllTricks()).catch(err => this.setState({ error: err }))
  }

  deleteTrick = id => {
    api.deleteItem(id).then(data => this.setState({ tricks: data })).catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks} deleteTrick={this.deleteTrick}/>
      </div>
    );
  }
}

export default App;