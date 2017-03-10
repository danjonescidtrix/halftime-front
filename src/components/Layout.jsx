import React from "react";
import {Link} from "react-router";

import Footer from "./modules/Footer.jsx";
import Nav from "./modules/Nav.jsx";

//Import React Grid System
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender
} from 'react-grid-system';

export default class Layout extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super()
		this.state = {
			name: 'Aagentah',
			age: "",
			dateOfBirth: "",
			genre: "Drum & Bass",
			subGenre: "Halftime",
			country: "England",
			city: "Manchester",
			influences: [
				"Ivy Lab",
				"Deft",
				"Noisia",
				"Alix Perez",
				"EPROM",
				"Tsuruda",
				"GJONES",
				"Posij",
				"Kursa",
				"Chee",
				"Balatron",
				"Ak:Hash",
				"Yokaze",
				"Vue",
				"Shield",
				"Fixate",
				"Visceral",
				"Architek"
			]

		}
	}

	// BEFORE COMPONENT RENDER (For Ajax / Dispatcher Events)
	componentWillMount = () => {
		var date = new Date();
		var datestring = ("0" + (date.getMonth() + 1).toString()).substr(-2) + "/" + ("0" + date.getDate().toString()).substr(-2) + "/" + (date.getFullYear().toString()).substr(2)
		this.calculateAge("08/17/1996", datestring); // Format: MM/DD/YYYY
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {}

	calculateAge = (birthDate, otherDate) => {
		birthDate = new Date(birthDate);
		otherDate = new Date(otherDate);
		var years = (otherDate.getFullYear() - birthDate.getFullYear());
		if (otherDate.getMonth() < birthDate.getMonth() || otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
			years--;
		}
		this.setState({age: years})
		this.setState({dateOfBirth: birthDate.toLocaleDateString()})
	}

	render() {
		const {location} = this.props;
		var childrenWithProps = React.cloneElement(this.props.children, {data: this.state});

		return (
			<div>
				<Nav location={location}/>
				<Container fluid={true}>
					<Row>
						<Col sm={12}>
							{childrenWithProps}
						</Col>
					</Row>
					<Footer/>
				</Container>
			</div>
		);
	}
}
