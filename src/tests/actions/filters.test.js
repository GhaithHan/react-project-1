import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate set start date section object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
 })
});

test('should generate set and date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter object text filter', () => {
  const text = 'Something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with default', () => {
  const action= setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})




test('should sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  });
});

test('should sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  });
});

