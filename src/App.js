import React, { Component } from "react";
import Counter from "./components/counter.component";
import Navbar from "./components/navbar.component";

class App extends Component {
	state = {
		counters: [1],
	};

  handleAdd = () => {
    const counters = [...this.state.counters];
    counters.push(1);
    this.setState ({counters})
  }

	render() {
		return (
			<>
				<Navbar />
				<button onClick={this.handleAdd} className="btn btn-primary">Add</button>
				{this.state.counters.map((counter, index) => (
					<>
						<Counter key={index}/>
						<br />
					</>
				))}
			</>
		);
	}
}

export default App;
