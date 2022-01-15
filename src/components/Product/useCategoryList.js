import { useCallback, useEffect, useState } from 'react'
export const useCategoryList = () => {
  const [categories, setCategories] = useState([])

  const getCategories = useCallback(() => {
    fetch(`/api/category`)
      .then(res => {
        if (!res.ok || res.status !== 200) {
          throw new Error(`Request failed with status code ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        setCategories(data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    getCategories()
  }, [])

  return categories
}
