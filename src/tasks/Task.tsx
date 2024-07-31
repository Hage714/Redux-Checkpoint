import React, { useState } from "react";

interface TaskProps {
  id: number;
  description: string;
  isDone: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, description: string) => void;
}

const Task: React.FC<TaskProps> = ({
  id,
  description,
  isDone,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>(description);

  const handleEdit = () => {
    onEdit(id, newDescription);
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={() => onToggle(id)} />

      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
