import axios from 'axios';
import { GET_REPOS } from './types';

const testData = [
  { name: 'Ankit', lastName: 'Baid' },
  { name: 'Naman', lastName: 'Baid' },
  { name: 'Sumesh', lastName: 'Rinwa' },
  { name: 'Toshi', lastName: 'Yadav' },
  { name: 'Mahilal', lastName: 'Swami' }
];

export const getRepos = () => {
  const request = axios.get('https://api.github.com/users/supreetsingh247/repos');
  // return {
  //   type: GET_REPOS,
  //   data: testData
  // };

  return dispatch => {
    request.then(res => {
      dispatch({ type: GET_REPOS, data: res.data });
    });
  };
};
