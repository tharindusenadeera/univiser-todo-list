import React from 'react';
import { render, screen } from '@testing-library/react';
import { PreviewItem } from '../components/PreviewItem';

describe('PreviewItem', () => {
    test('renders Preview Item', () => {
      const key = 1;
      const itemObj = {
        id : 1,
        description: "First Object",
        done: true
      }
      render(<PreviewItem key={key} itemObj={itemObj} />);
      const descriptionMain = screen.getByText(itemObj.description);
      expect(descriptionMain).toBeInTheDocument();
    });
  });