import $api from '../../http/index'
import axios from 'axios'

export const addProduct = (values) => async(dispatch) =>{
  console.log('values ---> ', values)
  axios.post('http://localhost:3001/api/upload', values, {
    withCredentials: true,
  })
  .then((data) => {
    console.log('data --> ', data);
  })
}
