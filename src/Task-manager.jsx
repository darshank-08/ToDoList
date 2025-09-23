import React, {useState} from "react";
import "./task.css"

function ToDoList(){

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [time, setTime] = useState("")
    const [newlist, setNewlist] = useState("")

    function handleInputChange(event){
        const input = event.target.value;
        setNewTask(input);
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTask(prevTask => [...prevTask, newTask]);
        setNewTask("");

        }
    }

    function removeTask(index){
        setTask(task.filter((_,i) => i !== index));
        (prevTask => [...prevTask, newTask])
    }

    function pinTask(index){

        if(index !== 0){
            const updatedTasks = [...task];

            [updatedTasks[index], updatedTasks[index -1]] = 
            [updatedTasks[index -1], updatedTasks[index]]

            setTask(updatedTasks);
        }
    }

    function archiveTask(index){

        if(index < task.length - 1){
            const updatedTasks = [...task];

              [updatedTasks[index], updatedTasks[index + 1]] = 
              [updatedTasks[index + 1], updatedTasks[index]]

            setTask(updatedTasks);
        }
    }

    return(
        <div className="container">
                        <div className="to-do-list">
                <h1>To Do List</h1>

                <div className="input-container">
                    <input type="text" placeholder="Add tasks" className="input" onChange={handleInputChange}/>
                    <button className="add-btn" onClick={addTask}>+</button>
                </div>

                    <ol className="main">
                        {task.map((task, index) => <li key={index}>
                            <span className="text-content">{task}</span>
                            <input type="checkbox" className="check"/>
                            <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>

                        </li>)}
                    </ol>
            </div>
        </div>

    );
}

export default ToDoList