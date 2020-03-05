import React from 'react';
import { render } from 'enzyme';

// Componente
import Menu from '../Menu';
import App from '../Menu';
import { store } from '../store';

describe("Menu", () => {
  it('renders correctly', () => {
    const wrapper = render(<Menu />);
    expect(wrapper).toMatchSnapshot();
  });
})
