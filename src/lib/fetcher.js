import config from '../config'

export default function fetcher(url, method = 'GET', params = {}) {
  const form = params.form
  delete params.form
  
  const headers = {
    'Content-Type': 'application/json'
  }

  const apiUrl = `${config.apiHost}${url}`

  let options = {
    method,
  }

  if (form) {
    const formData = new FormData()
    Object.keys(params).forEach(key => formData.append(key, params[key]))
    options.body = formData
    delete headers['Content-Type']
  } else {
    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify(params)
    }
  }

  options.headers = headers

  return fetch(apiUrl, options).then(res => res.json())
}
