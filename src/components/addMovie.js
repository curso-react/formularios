import React from 'react';

export default class AddMovie extends React.Component {
  cleanState = {
    title: '',
    director:'',
    hasOscar: false,
    imdbRate: ''
  }
  constructor(props) {
    super(props);
    this.state = this.cleanState;
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state)
    this.setState(this.cleanState);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === 'hasOscar' ? e.target.checked : value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => this.handleFormSubmit(e) }>
          <label>Title</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleInputChange(e)}></input>

          <label>Director</label>
          <input type="text" name="director" value={this.state.director} onChange={ e => this.handleInputChange(e)}></input>

          <label>Has Oscar</label>
          <input type="checkbox" name="hasOscar" checked={this.state.hasOscar} onChange={ e => this.handleInputChange(e)}></input>

          <label>IMDB Rate</label>
          <input type="text" name="imdbRate" value={this.state.imdbRate} onChange={ e => this.handleInputChange(e)}></input>
          
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}