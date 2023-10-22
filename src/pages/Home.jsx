import React from 'react'
import Hero from '../Components/Hero'
import SearchExercises from '../Components/SearchExercises'
import Category from '../Components/Category'
import Results from '../Components/Results'

function Home() {
  return (
    <>
    <Hero/>
    <SearchExercises/>
    <Category/>
    <Results/>
    </>
  )
}

export default Home