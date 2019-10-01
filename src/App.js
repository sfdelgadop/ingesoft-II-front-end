import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Master Chief</NavbarBrand>
          </div>
        </Navbar>

        <div className = "row">
          <div  className="col-9">
            <Menu dishes={this.state.dishes} />
          </div>
          <div  className="col-3">
            <p>perra vida</p>
            <p>aqui iran un poco de pendejadas</p>
            <p>aqui tambien</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
