import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/uploadfile/";


export function upload(file) {
    const formData = new FormData();
    formData.append('document',file)

    return fetch(baseUrl, {
      method: "POST",
      body: formData,
    })
      .then(handleResponse)
      .catch(handleError);
  }