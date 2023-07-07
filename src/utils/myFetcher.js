import axios from "axios";

export async function fetcher(resource) {
  try {
    let result = await axios.get(resource);

    let data = result.data;

    return data;
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // The client never received a response, and the request was never left
    }
  }
}
export function fetchAndCache(key) {
  const request = fetcher(key);
  mutate(key, request, false);
  return request;
}

export function getUsers() {
  return fetchAndCache("/api/dashboard/utilizatori");
}
export function getComenzi() {
  return fetchAndCache("/api/dashboard/comenzi");
}
export function getNrComenzi() {
  console.log(fetchAndCache("/api/dashboard/comenzi/nr-comenzi"));
  return fetchAndCache("/api/dashboard/comenzi/nr-comenzi");
}
export function getProduseInventar() {
  return fetchAndCache("/api/dashboard/inventar");
}
