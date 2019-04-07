import React from 'react'

function Joke(props){
	console.log(props)
	
		return(
			<div>
				<h3 style={{display: props.joke.q ? "block": "none"}}>{props.joke.q}</h3>
				<h2 style={{color: props.joke.q ? "grey": "black"}}>{props.joke.a}</h2>
			</div>
		)
	
}

export default Joke