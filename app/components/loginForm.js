import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit = e => {
    axios.post('http://localhost:7777/api/v1/login', {
      "username":this.state.email,
      "password":this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="login">
        <img src="./public/img/backbone-logo.png"/>
        <form>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Username" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Login</button>
      </form>
      </div>
    </div>
    );
  }

}

export default LoginForm;
