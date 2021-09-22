import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route} from "react-router-dom"

import "./App.css";
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import Header from "./components/header"
import TaskDetails from './components/TaskDatails'

const App = () => {


  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id:'2',
      title: 'Ler livros',
      completed: true
    }
  ])

  useEffect( () => {
    const fetchTasks = async () =>{
      
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')

      setTasks(data)
    }

    fetchTasks()
  
  }, [])



  const handleTaskClick = taskId =>{
    const newTasks = tasks.map( task => {
      if(task.id === taskId ) {
        return { ...task, completed: !task.completed}
      }else{
        return task;
      }
    });

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks, 
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      },
    ]; 

    setTasks(newTasks)

  };

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter( task => task.id !== taskId)
      setTasks(newTasks)
  }


  return(
    <Router>
      <div className='container'>
          <Header />
          <Route path='/' exact render={()=>(
            <>
              <AddTask handleTaskAddition = {handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick = { handleTaskClick } 
               handleTaskDeletion = { handleTaskDeletion }
              />


            </>
          )}/>

          <Route path='/:taskTitle' exact component={TaskDetails}/>
      </div>
      
    </Router>
  )
}


export default App;