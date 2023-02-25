import { data } from 'jquery'
import React from 'react'
import { useState ,useEffect} from 'react'





function UseFetch() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  

  useEffect(() => {
    const fetchData =async (url, options) => {
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        
        setData(data)
        setLoading(false)
        

       } catch (error) {
        setError(error)
        setLoading(false)
       }


     }
    fetchData()
  }, [])
  
  return {data,loading,error }
}

export default UseFetch