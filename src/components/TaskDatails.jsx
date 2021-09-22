import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from './button'

import "./TaskDetails.css";

const TaskDatails = () =>{
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return (
    <>
      <div className="back-button-container">
          <Button onClick={handleBackButtonClick}> Voltar</Button>
      </div>
      <div className="task-datails-container">
          <h2>{params.taskTitle}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, veniam? Nulla repellendus eligendi explicabo voluptas reprehenderit, blanditiis, mollitia pariatur sequi quaerat eos iure dignissimos, cupiditate suscipit facilis ipsum obcaecati ut.</p>
      </div>
    </>
  )
}
export default TaskDatails