import * as Config  from '../apiConfigs/API';
import axios from 'axios';

export const callApi = (
    endpoint = '',
    method = 'GET',
    body = null,
    token = '',
  ) => {
    try {
      let apiConfigs = {
        method: method,
        url: `${Config.BASE_URL}/${endpoint}`,
        data: body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
      return axios(apiConfigs);
    } catch (e) {
      console.log(e);
    }
};