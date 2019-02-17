import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"

import App from "./components/App"

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root"),
)
