import React from 'react';
import renderer from 'react-test-renderer';
import List from '../../components/myReservations/list';
import { allReservationsMock, bikesMock } from '../../components/__mock__/List';

describe('List Snapshot', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <List allReservations={allReservationsMock} bikes={bikesMock} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
