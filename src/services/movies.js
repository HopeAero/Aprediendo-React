const API_KEY = 'd3bb6ff1'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error fetching movies')
  }
}
