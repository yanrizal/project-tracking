import React, { Component } from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import LoginForm from '../components/loginForm'

export default class App extends Component {

	render(){
		return(
			<Router history={hashHistory}>
				<Route path="/" component={LoginForm}></Route>
			</Router>
		)
	}
}