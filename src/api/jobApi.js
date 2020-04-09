import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/jobs/";

export function getJobs() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getJob(id) {
  return fetch(baseUrl + "/" + id)
    .then(handleResponse)
    .catch(handleError);
}

export function saveJob(job) {
  return fetch(baseUrl + (job.id || ""), {
    method: job.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(job)
  })
    .then(handleResponse)
    .catch(handleError);
}