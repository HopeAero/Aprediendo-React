import { useCallback, useState } from 'react'
import './App.css'
import { ListOfMovies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Oval } from 'react-loader-spinner'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading, errorMovie } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 500)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const { value } = event.target
    if (value.startsWith(' ')) return
    updateSearch(value)
    debounceGetMovies(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} name='query' placeholder='Put your movie ' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {errorMovie && <p style={{ color: 'red' }}>{errorMovie}</p>}
        {loading ? <Oval style={{ marginTop: '20px' }} /> : <ListOfMovies movies={movies} />}
      </main>
    </div>
  )
}

export default App
