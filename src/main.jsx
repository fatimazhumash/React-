import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import React from 'react';
import LogReg from './LogReg';
import ToDoList1 from './ToDoList1';
import TodoApp from './TodoApp';
import Filmmoi from './Filmmoi';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Filmmoi />
  </StrictMode>
);