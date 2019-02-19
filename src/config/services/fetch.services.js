import { baseURL } from '../GlobalConfig'
let handparams = (url, params) => {
  let temp = Object.keys(params).map(key => `${key}=${params[key]}`);
  return (url.search(/\?/) === -1) ? url + '?' + temp.join('&') : url + '&' + temp.join('&')
}
let fetchApi = (url, type, params) =>
  type === 'get'
  ? window.fetch(`${baseURL}${handparams(url, params)}`, { method: type }).then(
      response => response.json()
      /* response => response.ok
      ? response.json()
      : Promise.reject('something went wrong!') */
  ).catch(error => console.error('Error:', error))
  : window.fetch(`${baseURL + url}`, { method: type, body: JSON.stringify(params) }).then(
      response => response.json()
  ).catch(error => console.error('Error:', error))

export default fetchApi;
