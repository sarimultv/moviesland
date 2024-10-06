export const movies_url = "https://imdb146.p.rapidapi.com/v1/find/?query=";
export const API_options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RA_API_KEY,
    "x-rapidapi-host": "imdb146.p.rapidapi.com",
  },
};
