import React, {Component} from 'react';
import {Button} from 'reactstrap';
import LoginForm from './LoginComponent';

class Options extends Component {

    render(){

        return(
            <div className="container">
                <div className = "row row-content">
                    <div className="col-12">
                        <br/>
                        <h3>Ingredientes</h3>
                        <br/>
                        <Button color="secondary" size="lg" block >Ingredientes disponibles</Button>{' '}
                        <br/>
                        <Button color="secondary" size="lg" block >Ingredientes no deseados</Button>{' '}
                        <br/>
                        <Button color="secondary" size="lg" block >Tipo de comida</Button>{' '}
                        <br/>
                        <LoginForm postLogin={this.props.postLogin} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Options;