import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: ''
    }
  }

  updateForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    return (
      <form>
        <select name='stance' value={this.state.stance} onChange={e => this.updateForm(e)}>
          <option value='' disabled>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input type='text' placeholder='Name of Trick' value={this.state.name} onChange={e => this.updateForm(e)}/>
        <select name='obstacle' value={this.state.obstacle} onChange={e => this.updateForm(e)}>
          <option value='' disabled>Choose your Obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input type='text' placeholder='Link to Tutorial' value={this.state.link} onChange={e => this.updateForm(e)}/>
      </form>
    )
  }
}

export default Form;