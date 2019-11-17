import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { withRouter } from "react-router-dom";

var listOfIngredient = "";

function LoadIngredients(ingredients) {
	if (ingredients.ingredients.dishes.data) {
		return (
			<div>
				<Row className="form-group">
					<Label htmlFor="ingredients" md={2}></Label>
							{ingredients.ingredients.dishes.data.map((data) => {
								return(
									<Col md={2}>
										<Label check>
											<Control.checkbox model= {`. ${data.name}`} id={data._id} name={data.name}
											className="form-check-input"
											/>
										<strong>{data.name}</strong>
									</Label>
								</Col>
								)
							})}
				</Row>
			</div>
		)
	} else {
		return (
			<div></div>
		)
	}
}

function IngredientsToList(values){
	listOfIngredient = ""
	for (var key in values) 
		if (values.hasOwnProperty(key))
			if(values[key] === true)
				if(listOfIngredient === ""){
					listOfIngredient += key.trim();	
				}else{
					listOfIngredient = listOfIngredient.trim() + "," + key.trim();
				}
	//alert(JSON.stringify(listOfIngredient));
}


//the filter of ingredients
class FilterByIngredient extends Component {
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	handleSubmit(values) {
		this.toggleModal();
		IngredientsToList(values);
		this.props.history.push(`/by/${listOfIngredient}`);
	}
	render() {
		return (
			<div>
				<Button  size="lg" block outline onClick={this.toggleModal}><span>Filtrar por ingredientes</span></Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>Seleccione los ingredientes de los que dispone</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<LoadIngredients ingredients={this.props.ingredients} />
							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit">
										Filtrar
                  </Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

export default withRouter(FilterByIngredient);