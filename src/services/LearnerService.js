const baseURL = 'http://localhost:8080/students';

 const LearnerService = {
  getLearners() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postLearners(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteLearner(id) {
    return fetch(baseURL + "/"+ id, {
      method: 'DELETE',

    })
  }
}

export default LearnerService;