import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from '../../components/__mock__/Sidebar';

describe('MotorItem', () => {
  it('renders correctly', () => {
    const component = renderer.create(<SideBar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
