import axios from 'axios';

export default class API {
  constructor({ url }) {
    this.url = url;
  }

  async getFiles({ path, filter }) {
    return axios.get(`${this.url}/files`, { path, filter });
  }
}
