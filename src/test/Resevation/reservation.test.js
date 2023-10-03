import React from 'react';
import { render } from '@testing-library/react';
import Reservation from '../../components/myReservations/reservation';
import { mockReservation, mockBikes } from '../../components/__mock__/Reservation';

test('Reservation component snapshot', () => {
  // Render the component with mock data
  const { asFragment } = render(
    <Reservation reservation={mockReservation} bikes={mockBikes} />,
  );

  // Use toMatchSnapshot to create and compare the snapshot
  expect(asFragment()).toMatchSnapshot();
});
