import{API_KEY} from './Components/Constants/Constants'
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`
export const action =`discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance =`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const horror =`discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedy =`org/3/discover/movie?api_key=${API_KEY}&with_genres=35`