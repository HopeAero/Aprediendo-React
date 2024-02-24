import React from 'react'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h2>App de gatitos</h2>
      <section>
        <button onClick={handleClick}>Get new Fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando las primeras 3 palabras ${fact}`} />}
      </section>

    </main>
  )
}
