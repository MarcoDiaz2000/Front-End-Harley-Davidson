import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../../components/myReservations/pagination';
import { currentPageMock, totalPagesMock, onPageChangeMock } from '../../components/__mock__/Pagination';

describe('Pagination Snapshot', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <Pagination
        currentPage={currentPageMock}
        totalPages={totalPagesMock}
        onPageChange={onPageChangeMock}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
