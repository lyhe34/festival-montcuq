import React, { useState } from 'react'

export default function CardTask({task, onDelete, onEdit}) {

    const [isEditing, setIsEditing] = useState(false)
    const [editTask, setEditTask] = useState(task)

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleUpdate = () => {
        setIsEditing(false)
        onEdit(editTask)
    }
  return (
    <div>
        {
            isEditing ? (
                <>
                <input 
                    type='text'
                    value={editTask}
                    onChange={e => setEditTask(e.target.value)}
                />
                <button onClick={handleUpdate}>Sauvegarder</button>
                </>
            ) : (
                <>
                <h3>{task}</h3>
                <button onClick={handleEdit}>Modifier</button>
                <button onClick={onDelete}>Supprimer</button>
                </>
            )
        }
    </div>
  )
}