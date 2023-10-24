import React, { useState } from 'react'
import Hero from '../Components/Hero'
import SearchExercises from '../Components/SearchExercises'
import Category from '../Components/Category'
import Results from '../Components/Results'

function Home() {
  const [resetPage, setResetPage] = useState(false)
  return (
    <>
    <Hero/>
    <SearchExercises/>
    <Category setResetPage={setResetPage}/>
    <Results resetPage={resetPage} setResetPage={setResetPage}/>
    </>
  )
}

export default Home