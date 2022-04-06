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
  
  render() {
    return (
      <form>
        <select name='stance' value={this.state.stance}>
          <option value=''>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input type='text' placeholder='Name of Trick' value={this.state.name}/>
        <select name='obstacle' value={this.state.obstacle}>
          <option value=''>Choose your Obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input type='text' placeholder='Link to Tutorial' value={this.state.link}/>
      </form>
    )
  }
}

export default Form;