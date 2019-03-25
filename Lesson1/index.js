import React from "react"
import ReactDOM from "react-dom"

// ReactDOM.render(what do I want to render, where do I want to render it)

function MyApp() {
	return (
		<div> 
			<ul> 
				<li> Aisha </li>
				<li>Arielle</li> 
				<li> Jackson </li>
			</ul> 
		</div>
	)
}
//JSX - javascript rendition of html
ReactDOM.render( <MyApp /> , document.getElementById("root"))