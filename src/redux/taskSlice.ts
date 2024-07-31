import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
description: string;
  isDone: boolean;
}

interface TaskState {
  tasks: Task[];
    filter: 'all' | 'done' | 'not_done';
}

const initialState: TaskState = {
  tasks: [],
    filter: 'all', // Default filter to 'all'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(), // Simple unique ID generator
description: action.payload,
        isDone: false,     
     };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
     toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
  },
  editTask: (state, action: PayloadAction<{ id: number; description: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.description = action.payload.description;
      }
    },
    setFilter: (state, action: PayloadAction<'all' | 'done' | 'not_done'>) => {
      state.filter = action.payload;
    },
    },

});

export const { addTask, deleteTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
