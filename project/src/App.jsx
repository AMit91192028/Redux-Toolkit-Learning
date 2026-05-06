import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  
  return (
    <>
    <div>
      <button onClick = {async ()=>console.log( await fetchPhotos('cat'))}>Get </button>
    </div>

     <div>
      <button onClick = {async ()=>console.log( await fetchVideos('cat'))}>Get </button>
    </div>
    </>
  )
}

export default App
