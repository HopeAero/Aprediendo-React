import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search.length === 0) {
      setError('Debes ingresar un nombre de pelicula')
      return
    }

    if (search.match(/^[0-9]+$/)) {
      setError('No se permiten busquedas solo con numeros')
      return
    }

    if (search.length < 3) {
      setError('Debes ingresar al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return {
    search,
    updateSearch: setSearch,
    error
  }
}
