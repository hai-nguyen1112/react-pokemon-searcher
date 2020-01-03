import axios from 'axios'

let instance

switch (window.location.hostname) {
  case 'localhost':
    instance = axios.create({baseURL: 'https://localhost:3000/'})
    break
  default:
    instance = axios.create({baseURL: 'https://localhost:3000/'})
}

export default instance
