import React from 'react'
import { userContext } from './context'
import Header from './context-header'


export default function App() {
  return (
  <userContext.Provider value={'Tom Jerry'}>
    <Header/>
  </userContext.Provider>
  )
}
