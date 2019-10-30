import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

// the function that shows the diferent elements in the main menu
function RenderMenuItem({ dish }) {
	return (
		<Card>
			<Link to={`/menu/${dish.id}`} >
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Link>
		</Card>
	);
}

const Menu = (props) => {

	const menu = props.dishes.dishes.map((dish) => {
		return (
			<div className="col-12 col-md-4" key={dish.id}>
				<RenderMenuItem dish={dish} onClick={props.onClick} />
			</div>
		);
	});

	if (props.dishes.isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	}
	else if (props.dishes.errMess) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h4>{props.dishes.errMess}</h4>
					</div>
				</div>
			</div>
		);
	}
	else
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<center>
							<h1>Populares</h1>
						</center>
						<hr />
					</div>
				</div>
				<div className="row">
					{menu}
				</div>
			</div>
		);
}

export default Menu;