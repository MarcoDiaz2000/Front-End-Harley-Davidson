import React from 'react';
import renderer from 'react-test-renderer';
import MotorItem from '../../components/__mock__/MotorItem';

describe('MotorItem', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MotorItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
