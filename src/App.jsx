import { useState } from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

function App() {
  

  return (
    <>
    <h1>Task Buddy</h1>
    <p>
      Your friendly TaskManager
    </p>
    <TaskForm />
    <TaskList />
    <ProgressTracker />
    <button> ClearAll Tasks</button>
 
    </>
  )
} 

export default App
