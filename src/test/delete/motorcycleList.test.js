import React from 'react';
import renderer from 'react-test-renderer';
import MotorcycleList from '../../components/__mock__/MotorcycleList';

describe('MotorcycleList', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MotorcycleList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
