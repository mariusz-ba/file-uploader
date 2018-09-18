import axios from 'axios';

export default class API {
  constructor({ url }) {
    this.url = url;
  }

  async getFiles({ path, filter }) {
    const res = await axios.get(`${this.url}/files`, { path, filter });
    return res.data;
  }

  async uploadFiles({ path, files }) {
    const config = {
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // TODO: pass it as a callback
      }
    }
    const res = await axios.post(`${this.url}/files`, files, config);
    return res.data;
  }

  async downloadFile({ filename }) {
    return axios.get(
      `${this.url}/files/download/${filename}`,
      {
        responseType: 'stream',
      }
    );
  }

  async deleteFile({ filename }) {
    const res = await axios.delete(`${this.url}/files/${filename}`);
    return res.data;
  }
}
