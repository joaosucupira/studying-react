import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoList() {

    // Array de tarefas
    const [tasks, setTasks] = useState(["Buscar fulano", "Lavar a louça", "Passear com o gato"]);
    // Nova tarega
    const [newTask, setNewTask] = useState([""]);
    
    // 1 - RECEBER ENTRADAS
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    // 2 - NOVA TAREFA
    function addTask() {

        // A lista não aceita tarefas sem nada escrito
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");    
        }
    }
    // 3 - DELETAR TAREFA
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    // 4.1 - MOVER TAREFA PARA CIMA
    function moveTaskUp(index) {
        if(index > 0){ // Se está no topo, não sobe mais
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [ updateTasks[index - 1], updateTasks[index]];  
            setTasks(updateTasks);
        }
    }
    // 4.2 - MOVER TAREFA PARA BAIXO 
    function moveTaskDown(index) {
        if(index < tasks.length - 1){ // Se está no fundo, não desce mais
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = [ updateTasks[index + 1], updateTasks[index]];  
            setTasks(updateTasks);

        }

    }



    // "main"
    return(
        <>
            <div className="to-do-list text-center m-5 gap-2">
                <div className="d-flex justify-content-center">
                    <h1 className="fw-bold">To-Do List</h1>
                </div>
                <div className='ig m-4 gap-1'>
                    <input 
                    type="text"
                    placeholder='Enter task...'
                    value={newTask} 
                    className='fs-4 input-group-text'
                    onChange={handleInputChange}/>
                    <button
                    className='add-button fs-4 btn btn-warning'
                    onClick={addTask}
                    
                    >Add task</button>
                </div>

            <ol className=''>
                {tasks.map((task, index) => 
                <li key={index}
                    className='list-text d-flex align-items-center'>
                    <span className='text'>{task}</span>
                    <button
                        className='delete-button fw-bold btn btn-danger fs-5'
                        onClick={() => deleteTask(index)}
                    >Delete</button>
                    <button
                        className='move-button fw-bold btn btn-dark fs-5'
                        onClick={() => moveTaskUp(index)}
                    >Up</button>
                    <button
                        className='move-button fw-bold btn btn-primary fs-5'
                        onClick={() => moveTaskDown(index)}
                    >Down</button>
                </li>)}
            </ol>

            </div>

        </>
    );
}

export default ToDoList