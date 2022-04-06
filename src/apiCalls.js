const api = {
  fetchData() {
    return fetch('http://localhost:3001/api/v1/tricks').then(response => response.json());
  },
  postData(trick) {
    return fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trick)
    })
  }
};

export default api;