import React from "react"
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

import './App.css'

export default function App() {
  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  )
}