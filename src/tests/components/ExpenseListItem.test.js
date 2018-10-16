import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render one Expense from expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});