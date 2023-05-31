import { useState, useEffect } from 'react'
// const API_KEY="AIzaSyBykzO6Z9kTUHwMhofFn2xAs2GwJ9ZptGk"
// const API_KEY="AIzaSyAJYcVfN8LVZ1KMkSD5PQ-Ez6_iWHTVP4M"
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`
      https://www.googleapis.com/customsearch/v1?cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&key=${process.env.REACT_APP_SEARCH_API_KEY}&q=${term}`).then(response => response.json()).then(result => setData(result))
    }
    fetchData();
  }, [term])
  return (
    { data }
  )
}

export default useGoogleSearch