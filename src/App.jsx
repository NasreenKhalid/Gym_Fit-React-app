import { useState } from 'react'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'

function App() {


  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm">
  <Hero />
  <Generator />
  <Workout />
       
    </main>
  )
}

export default App
