import React from 'react';
import renderer from 'react-test-renderer';
import MotorcycleList from '../../components/__mock__/MotorcycleList';

describe('MotorcycleList', () => {
  it('renders correctly', () => {
    const mockBikes = [
      { id: 1, name: 'Bike1', removed: false },
      { id: 2, name: 'Bike2', removed: true },
    ];

    const component = renderer.create(<MotorcycleList bikes={mockBikes} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
