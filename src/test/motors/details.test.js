import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../components/__mock__/Details';

describe('MotorItem', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Details />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
