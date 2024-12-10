import axios from 'axios'

const baseURL = import.meta.env.VITE_ANILIBRIA_API_URL

export const getLatestAnimeReleases = (limit) => {
  return axios.get(`${baseURL}/anime/releases/latest?limit=${limit}`)
}

export const getAnimeEpisodes = (name) => {
  return axios.get(`${baseURL}/anime/releases/${name}`)
}

export const getAnimeEpisode = (id) => {
  return axios.get(`${baseURL}/anime/releases/episodes/${id}`)
}

export const searchAnimeEpisodes = (query) => {
  return axios.get(`${baseURL}/app/search/releases`, {
    params: {
      query: query,
    },
  })
}
