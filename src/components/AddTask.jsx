import react, {useState} from 'react'
import "./AddTask.css"
import Button from "./button"


const AddTask = ( {handleTaskAddition}  ) => {

  const [inputData, setInputData] = useState('')

  const handleInputChange = (event) => {
      setInputData(event.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
      <div className="add-task-container">
          <input  
            onChange = { handleInputChange } 
            value= {inputData}
            className="add-task-input" 
            type="text" 
          />
          <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>
                Adicionar
            </Button>
          </div>
      </div>
  )
}


export default AddTask