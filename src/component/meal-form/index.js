import React from 'react'
import {connect} from 'react-redux'


class MealForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      pickup: true,
      deliver: false,
      portions: '',
      photos: null,
      ingredients: '',
      date: null,
      location: '',
      price: '',
    }
    console.log('ninja')
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let {type, name} = e.target

    if(name === 'title'){
      this.setState({title: e.target.value})
    }
    if(name === 'description'){
      this.setState({description: e.target.value})
    }
  }
  render(){
    return(
      <form className='meal-form' onSubmit={this.handleSubmit}>
        <h1> Ninja </h1>
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange} />
      </form>
    )
  }
}
export default MealForm
