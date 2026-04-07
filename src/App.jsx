import React from 'react'
import Feed from './Feed'
import Suggestions from './Suggestions'
import './App.css'
import Sidebar from './Sidebar'
function App() {
  return (
    <div className="d-flex vh-100">
      <div className="w-20"><Sidebar/></div>
      <div className="w-50"><Feed/></div>
      <div className="w-30"><Suggestions/></div>
    </div>
  )
}

export default App

// npx json-server --watch db/db.json --port 8000 --static ./data