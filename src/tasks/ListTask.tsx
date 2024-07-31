import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { RootState } from "../redux/store";
import { deleteTask, toggleTask, editTask, setFilter } from "../redux/taskSlice";

const ListTask: React.FC = () => {
  // Correctly access the `tasks` array within the state
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id: number, description: string) => {
    dispatch(editTask({ id, description }));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value as 'all' | 'done' | 'not_done'));
  };

   const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true;
  });

  return (
   <div>
      <select onChange={handleFilterChange} value={filter}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not_done">Not Done</option>
      </select>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      ))}
    </div>

  );
};

export default ListTask;
