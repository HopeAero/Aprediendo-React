export function ListOfMovies ({ movies }) {
  const hasMovies = movies?.length > 0

  const renderMovies = () => {
    if (hasMovies) {
      return (
        <ul className='movies'>
          {
            movies.map(movie => (
              <li className='movie' key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
              </li>
            ))
          }
        </ul>
      )
    }
  }

  return (
    <>
      {renderMovies()}
    </>
  )
}
