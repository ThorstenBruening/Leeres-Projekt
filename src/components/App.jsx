import React from "react"

import { Container } from "reactstrap"
import { Button } from "reactstrap"

const App = props => {
	return (
		<Container>
			<h3>App</h3>
			<br />
			<Container>
				<h3>Eingerückter Unterbereich im Container</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
					facilis tempora, minus sit delectus harum alias architecto eum nemo?
					Assumenda impedit maiores rerum eligendi repudiandae tempore
					voluptatibus laborum quas nihil.
				</p>

				<Button color="primary">Primarärer Doofer Knopf</Button>
				{"  "}
				<Button color="secundary">Sekundärer Doofer Knopf</Button>
			</Container>

			<br />
			<br />
		</Container>
	)
}

export default App
