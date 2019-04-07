import React from 'react'
import Joke from './Joke'

function App(){
	return(
		<div>
			<Joke 
			joke={{q: "Why is Cinderella so bad at soccer?",
					a: " Because she always runs away from the ball!"}}
			/>
			<Joke 
			joke={{q: "Why is Cinderella so bad at soccer?",
					a: " Because she always runs away from the ball!"}}
			/>
			<Joke 
			joke={{a: " Because she always runs away from the ball!"}}
			/>
			<Joke 
			joke={{q: "Why is Cinderella so bad at soccer?",
					a: " Because she always runs away from the ball!"}}
			/>
			<Joke 
			joke={{q: "Why is Cinderella so bad at soccer?",
					a: " Because she always runs away from the ball!"}}
			/>
		</div>
	)
}

export default App