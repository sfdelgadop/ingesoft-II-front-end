import React, { Component, useCallback } from 'react';
import {
	Button, Label, Col, Row, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
var image = "";

function Preview(){
	if (image === ""){
		return(
			<img src='assets/images/drag.png' alt="preview" width="100%" height="100%"/>
		)
	}else{
		return(
			<img src={image} alt="preview" width="100%" height="100%"/>
		)
	}
}

function Dropzone() {
	const onDrop = useCallback(acceptedFiles => {
		const reader = new FileReader()

		reader.onabort = () => alert('file reading was aborted')
		reader.onerror = () => alert('file reading has failed')
		reader.onload = () => {
			const binaryStr = reader.result;
			image = binaryStr;
			console.log(binaryStr);
		}

		acceptedFiles.forEach(file => reader.readAsDataURL(file))
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<Preview/>
		</div>
	)
}

function LoadIngredients( ingredients ){
	var data = ingredients.ingredients.dishes.data;
	console.log(JSON.stringify(data));
	return(
		<div>
		</div>
	)
}

class Create extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(values) {
		console.log("el json es " + JSON.stringify(values));
		alert("El json es " + JSON.stringify(values));
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Crear receta</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Crear receta</h3>
					</div>

				</div>
				<div className="row row-content">
					<div className="col-12">

						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="image" md={2}>Imagen</Label>
								<Col md={10}>
									<Dropzone />
									<LoadIngredients ingredients = {this.props.ingredients} />
								</Col>								
							</Row>
							
							<Row className="form-group">
								<Label htmlFor="name" md={2}>Nombre de la receta</Label>
								<Col md={10}>
									<Control.text model=".name" id="name" name="name"
										placeholder="Arroz con pollo"
										className="form-control"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(25)
										}}
									/>
									<Errors
										className="text-danger"
										model=".firstname"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be greater than 2 characters',
											maxLength: 'Must be 25 characters or less'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="message" md={2}>Descripción</Label>
								<Col md={10}>
									<Control.textarea model=".description" id="description" name="description"
										rows="8"
										className="form-control" />
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="message" md={2}>Procedimiento</Label>
								<Col md={10}>
									<Control.textarea model=".Procedure" id="procedure" name="procedure"
										rows="22"
										className="form-control" />
								</Col>
							</Row>

							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Send Feedback
                  </Button>
								</Col>
							</Row>
						</LocalForm>
					</div>
				</div>
			</div>
		);
	}
}

export default Create;