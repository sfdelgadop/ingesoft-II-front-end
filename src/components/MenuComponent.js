import React, {Component} from 'react';
import {
	Card, CardImg, CardText, CardBody, Button, Modal, ModalHeader, ModalBody,
	CardTitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
	return (
		<div >
			<Card>
				<CardImg top src={dish.photos} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

class CommentForm extends Component {

	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isNavOpen: false,
			isModalOpen: this.props.isModalOpen
		};
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	handleSubmit(values) {
		this.toggleModal();

	}
	render() {
		return (
			<div>
				<Card onClick={this.toggleModal}>
					<CardImg width="100%" src={this.props.dish.photos} alt={this.props.dish.name} />
					<CardBody>
						<CardTitle>{this.props.dish.name}</CardTitle>
						<CardText>{this.props.dish.description}</CardText>
					</CardBody>
				</Card>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>{this.props.dish.name}</ModalHeader>
					<ModalBody>
						<div className="col-12">
							<RenderDish dish={this.props.dish} />
						</div>
						<center>
							<Link to={`/script/${this.props.dish.id}`} >
								<Button >
									Ver Más
								</Button>
							</Link>
						</center>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

const Menu = (props) => {
	const menu = props.dishes.dishes.map((dish) => {
		return (
			<div className="col-12 col-md-4" key={dish.id}>
				<CommentForm dish={dish}  />
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