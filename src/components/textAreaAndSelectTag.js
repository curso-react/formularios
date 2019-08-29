import React from 'react';

export default class TextAreaAndSelectTag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectInputValue: 'notebook',
      textAreaInputValue: '...'
    }
  }

  handleChangeEvent = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.selectInputValue} <==> ${this.state.textAreaInputValue}`)
  }

  render() {
    return(
      <form onSubmit={ (event) => this.handleFormSubmit(event)}>
        <label>Pick your favourite movie</label>

        <select name="selectInputValue" value={ this.state.selectInputValue } onChange={ (event) => this.handleChangeEvent(event) }>
          <option value={ this.state.selectInputValue }>{this.state.selectInputValue}</option>
          <option value="Titanic">Titanic</option>
          <option value="Alien">Alien</option>
          <option value="Star Wars">Star Wars</option>
          <option value="Seven">Seven</option>
        </select>

        <label>Why is this your favourite movie?</label>
        <textarea name="textAreaInputValue" value={this.state.textAreaInputValue} onChange={ (event) => this.handleChangeEvent(event) }></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}