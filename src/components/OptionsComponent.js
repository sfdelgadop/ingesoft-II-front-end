import React, { Component } from 'react';
import { Button } from 'reactstrap';
import LoginForm from './LoginComponent';
import UserCreation from './UserCreationComponent';
import FilterByIngredient from './FilterByIngredientsComponent';
import { Link } from 'react-router-dom';

// this is the left menu
class Options extends Component {

	render() {
		return (
			<div className="container">
				<div className="row row-content">
					<div className="col-12">
						<br />
						<h3>Ingredientes</h3>
						<br />
						<FilterByIngredient ingredients={this.props.ingredients}/>
						<br />
						<Button color="secondary" size="lg" block >Ingredientes no deseados</Button>{' '}
						<br />
						<Button color="secondary" size="lg" block >Tipo de comida</Button>{' '}
						<br />
						<h3>O crea tus propias recetas</h3>
						<br />
						<Link to={`/create`} >
							<Button  size="lg" block >Crear receta</Button>
						</Link>
						<br />
					</div>
					<UserCreation postUser={this.props.postUser} />
					<LoginForm postLogin={this.props.postLogin} />

				</div>
			</div>
		);
	}
}
export default Options;