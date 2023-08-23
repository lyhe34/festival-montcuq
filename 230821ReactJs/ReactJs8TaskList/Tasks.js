import React, { useState } from 'react'
import AddTask from './AddTask'
import CardTask from './CardTask'

export default function Tasks() {

    const [tasks, setTasks] = useState([])

    const handleAdd = e => {
        e.preventDefault()
        const newTask = e.target.elements[0].value
        setTasks([...tasks, newTask])
        e.target.elements[0].value = "" // efface les données de l'input
    }

    const handleDelete = taskToDelete => {
        return() => {
            const newTaskList = tasks.filter((task) => task != taskToDelete)
            // je crée un nouveau tableau avec les éléments qui sont différents de celui que je veux supprimer
            setTasks(newTaskList)
        }
    }

    const handleEdit = (index, updateTask) => {
        const updateTasks = [...tasks]
        updateTasks[index] = updateTask.trim()// supprime les blancs au début et à la fin de la chaine
        setTasks(updateTasks)
    }

  return (
    <div>
        <AddTask onAdd={handleAdd}/>
        {
            tasks.map((task, index) => <CardTask 
                key={index}
                task={task}
                onDelete={handleDelete(task)}
                onEdit={(updateTask) => handleEdit(index, updateTask)}
            />)
        }
    </div>
  )
}
