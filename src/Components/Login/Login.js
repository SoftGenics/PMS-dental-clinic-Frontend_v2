import React, {Component} from 'react'
import { Navigate } from 'react-router-dom';
import './Login.css'
import { Container, Form, InputGroup, FormControl } from 'react-bootstrap';
import {FcLock} from 'react-icons/fc'
export default class Login extends Component {
 constructor(props) {
   super(props)
   const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
  this.state = {
     username: "",
     password: "",
     loggedIn
   }
   this.onChange = this.onChange.bind(this)
   this.submitForm = this.submitForm.bind(this)
 }
 onChange(e) {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 submitForm(e){
   e.preventDefault()
   const { username, password} = this.state

   //login 

   if(username === "admins" && password=== "12342") {
    localStorage.setItem("token", "ihdhjkbcxvkfdjshlk")
    this.setState({
       loggedIn: true
     })
   }
   
 }
 render() {
  if(this.state.loggedIn){
    return <Navigate to='/Dashboard' />
  } 
  return (
    <div className='Login-bg'>
        <Container className='form-container'>
        <h1><span style={{color:'#198754'}}>Admin </span>Login</h1>
        <FcLock /> 
        <Form onSubmit={this.submitForm}>
        <Form.Label htmlFor='username'>Username</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"><i className="fas fa-user"></i></InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="text"
            name="username" 
            value={this.state.username} onChange = {this.onChange}
            required
          />
        </InputGroup>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"><i className="fas fa-key"></i></InputGroup.Text>
          <FormControl
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon1"
            type="password"
            name="password"
            value={this.state.password} onChange={this.onChange}
            required
          />
        </InputGroup>
        <br></br>
<button className='btn btn-success'> Login </button>
        </Form>
        </Container>
    </div>
  )
}
}
