import React from 'react';
import ReactDOM from 'react-dom';
import UserCreate from '../UserCreationComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
