import React from 'react'

function App(){
	const firstName = 'Aisha'
	const lastName = 'Jackson'
	
	const styles = {
		color:'blue', 
		backgroundColor:'yellow',
		fontSize: 20
	}
	return(
		<div>
		<h1 style={styles}>Hello {`${firstName} ${lastName}`}!</h1>
			<h1>Hello {firstName + " " + lastName}!</h1>
		</div>
	)
}

export default App