import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//the conditions during the creation of user Form
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isNumber = (val) => !isNaN(Number(val));


//The user creation Form
class UserCreationForm extends Component {
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
		this.props.postUser(values.firstName, values.lastName, values.username,
			values.email, values.password, values.age, values.gender);

	}
	render() {
		return (
			<div>
				<Button outline onClick={this.toggleModal}><span>Crear Usuario</span></Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>Crear Usuario</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="firstName" md={2}>Nombres</Label>
								<Col md={10}>
									<Control.text model=".firstName" id="firstName" name="firstName"
										placeholder="Nombres"
										className="form-control"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".firstName"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Debe ser más largo de 2 carácteres',
											maxLength: 'Debe ser de 15 carácteres o menos'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="lastName" md={2}>Apelldos</Label>
								<Col md={10}>
									<Control.text model=".lastName" id="lastName" name="lastName"
										placeholder="Apellidos"
										className="form-control"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".lastName"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Debe ser más largo de 2 carácteres',
											maxLength: 'Debe ser de 15 carácteres o menos'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="username" md={2}>Usuario</Label>
								<Col md={10}>
									<Control.text model=".username" id="username" name="username"
										placeholder="Usuario"
										className="form-control"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".username"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Debe ser más largo de 2 carácteres',
											maxLength: 'Debe ser de 15 carácteres o menos'
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="email" md={2}>Email</Label>
								<Col md={10}>
									<Control.text model=".email" id="email" name="email"
										placeholder="Email"
										className="form-control"
										validators={{
											required, validEmail
										}}
									/>
									<Errors
										className="text-danger"
										model=".email"
										show="touched"
										messages={{
											required: 'Required',
											validEmail: 'Invalid Email Address'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="password" md={2}>Contraseña</Label>
								<Col md={10}>
									<Control.text model=".password" id="password" name="password"
										placeholder="Contraseña"
										className="form-control"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".password"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Debe ser más largo de 2 carácteres',
											maxLength: 'Debe ser de 15 carácteres o menos'
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="gender" md={8}>Tu género</Label>
								<Col md={4}>
									<Control.select model=".gender" id="gender" name="gender"
										className="form-control">
										<option> </option>
										<option>Másculino</option>
										<option>Femenino</option>
										<option>Otro</option>
									</Control.select>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="age" md={2}>edad.</Label>
								<Col md={10}>
									<Control.text model=".age" id="age" name="age"
										placeholder="edad"
										className="form-control"
										validators={{
											required, minLength: minLength(0), maxLength: maxLength(3), isNumber
										}}
									/>
									<Errors
										className="text-danger"
										model=".age"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be greater than 2 numbers',
											maxLength: 'Must be 15 numbers or less',
											isNumber: 'Must be a number'
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit">
										Crear
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

export default UserCreationForm;