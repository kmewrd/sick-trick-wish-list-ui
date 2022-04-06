import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  updateForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitTrick = e => {
    e.preventDefault();
    let trick = {...this.state, id: Date.now()}
    this.props.addTrick(trick);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({ stance: '', name: '', obstacle: '', tutorial: '' })
  }
  
  render() {
    return (
      <form className='trick-form'>
        <select name='stance' value={this.state.stance} onChange={e => this.updateForm(e)}>
          <option value='' disabled>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input name='name' type='text' placeholder='Name of Trick' value={this.state.name} onChange={e => this.updateForm(e)}/>
        <select name='obstacle' value={this.state.obstacle} onChange={e => this.updateForm(e)}>
          <option value='' disabled>Choose your Obstacle</option>
          <option value='flat ground'>Flat Ground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input name='tutorial' type='text' placeholder='Link to Tutorial' value={this.state.tutorial} onChange={e => this.updateForm(e)}/>
        <button onClick={e => this.submitTrick(e)}>Send It!</button>
      </form>
    )
  }
}

export default Form;