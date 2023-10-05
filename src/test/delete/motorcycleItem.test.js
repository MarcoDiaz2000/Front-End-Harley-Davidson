import React from 'react';
import renderer from 'react-test-renderer';
import MotorcycleItem from '../../components/__mock__/MotorcycleItem';

describe('MotorcycleItem', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MotorcycleItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
