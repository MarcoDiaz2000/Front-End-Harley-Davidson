import React from 'react';
import renderer from 'react-test-renderer';
import Reservation from '../../components/__mock__/Reservation';

describe('Reservation', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Reservation />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
