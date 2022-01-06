import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../pages/Details';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

test('renders learn react link', () => {

    const history = createMemoryHistory();

    history.push('/details');

  render(<Router history={history}>
      <Details />
  </Router>);
  const details = screen.getByTestId("details");
  expect(details).toBeInTheDocument();
});