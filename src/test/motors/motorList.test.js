import React from 'react';
import renderer from 'react-test-renderer';
import MotorList from '../../components/__mock__/MotorList';

describe('MotorList Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<MotorList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
