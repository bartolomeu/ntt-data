export function getMovie(term) {
  return fetch('http://localhost:3005/film?title=' + encodeURIComponent(term));
}