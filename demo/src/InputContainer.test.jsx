import React from 'react';
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    titleTask: 'New title',
  }));

  const { getByText } = render(<InputContainer />);

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/New Title/)).not.toBeNull();
});
