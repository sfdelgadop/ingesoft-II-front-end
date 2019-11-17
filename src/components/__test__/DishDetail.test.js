import React from 'react';
import ReactDOM from 'react-dom';
import DishDetail from '../DishdetailComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DishDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
