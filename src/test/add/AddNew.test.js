import React from 'react';
import renderer from 'react-test-renderer';
import AddNew from '../../components/__mock__/AddNew';

describe('AddNew', () => {
  it('renders correctly', () => {
    const component = renderer.create(<AddNew />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
