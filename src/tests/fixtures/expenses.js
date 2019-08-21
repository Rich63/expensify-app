import moment from 'moment'

export default [{
  id: '1',
  description: 'Just',
  note: '',
  amount: 111,
  createdAt: moment(0).valueOf()
},
{
  id: '2',
  description: 'Rent',
  note: '',
  amount: 2220,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 33300,
  createdAt: moment(0).add(4, 'days').valueOf()
}]