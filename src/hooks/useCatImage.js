import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?fontSize=50&fontBackground=none&position=centre&json=true`)
      .then(res => res.json())
      .then(data => {
        const { _id } = data
        const url = `${CAT_PREFIX_IMAGE_URL}/cat/says/${_id}`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
