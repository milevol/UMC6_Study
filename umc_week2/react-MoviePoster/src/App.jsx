import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviePoster from './components/MoviePoster'
import MovieDetail from './components/MovieDetail'
import styled from 'styled-components'

function App() {

  return (
    <>
      <MoviePoster/>
      <MovieDetail/>
    </>
  )
}

export default App
