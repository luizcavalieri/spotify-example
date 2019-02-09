import axios from 'axios';

const EMPTY_PARAM_DATA = {
  params: null,
  data: null,
  responseType: null,
};

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_REST_DOMAIN}`,
  timeout: 3600,
});

/**
 * Executes ajax call using axios instance
 *
 * @param httpMethod
 * @param urlPath
 * @param data
 * @param headers
 * @return {Promise<any>}
 * */
const executeRestApi = (
  httpMethod, urlPath, { data = null } = EMPTY_PARAM_DATA, headers = null
) => {
  if (headers && headers.token) instance.defaults.headers.common['Authorization'] = 'Bearer ' + headers.token;

  return new Promise((resolve, reject) => instance({ method: httpMethod, url: urlPath, data })
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      console.log(error);
      reject(error);
    }));
};

export default executeRestApi;
