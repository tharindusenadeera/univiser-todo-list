import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';


describe('Header', () => {
    test('renders header', () => {
      const title = "Todo App";
      const description= "Add your Todos Here ..."
      render(<Header title={title} description={description} />);
      const titleMain = screen.getByText(title);
      const descriptionMain = screen.getByText(description);
      expect(titleMain).toBeInTheDocument();
      expect(descriptionMain).toBeInTheDocument();
    });
  });
