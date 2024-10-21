import { useState } from 'react'

import './App.css'
import DataComponent from './components/DataComponent'
function App() {

  return (
    <>
      <div>
      <h3 className='font-nova text-cyan-800 font-bold text-5xl p-3 pl-5 ml-16'>User Data</h3>

      <DataComponent/>
      </div>
     
     
    </>
  )
}

export default App
