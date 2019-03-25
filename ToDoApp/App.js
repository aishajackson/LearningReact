import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App(){
	return(
		<div>
			<Navbar />
			<h1>To Do List</h1>
			<input type="checkbox" name="todo1" value="Clean" /> Clean my room<br />
			<input type="checkbox" name="todo2" value="Pack" /> Pack my clothes<br />
			<input type="checkbox" name="todo3" value="Workout" /> Workout in the morning<br />
			<br />
			<Footer />
		</div>
	)
}

export default App