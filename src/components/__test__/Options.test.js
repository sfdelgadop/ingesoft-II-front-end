import React from 'react';
import ReactDOM from 'react-dom';
import Options from '../OptionsComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Options />, div);
  ReactDOM.unmountComponentAtNode(div);
});
