import React, {useState} from "react";
import "./task.css"

function ToDoList(){

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState({ text: "add to do", completed: false });

    function handleInputChange(event) {
        const input = event.target.value;
        setNewTask({ text: input, completed: false });  // update state
        console.log(input);
    }

    function toggleTask(index) {
            const updated = [...task];          
            updated[index].completed = !updated[index].completed; // flip completed
            setTask(updated);                   
    }


    function addTask() {
        if (newTask.text.trim() !== "") {
            setTask(prevTask => [...prevTask, newTask]);  // add object
            setNewTask({ text: "", completed: false });   // reset properly
        }
    }


    function removeTask(index){
        setTask(task.filter((_,i) => i !== index));
    }


    return(
        <div className="container">
            <div className="to-do-list">
                <h1>To Do List</h1>

                <div className="input-container">
                    <input type="text"  className="input" value={newTask.text} onChange={handleInputChange}/>
                    <button className="add-btn" onClick={addTask}>+</button>
                </div>

                    <ol className="main">
                        {task.map((task, index) => <li key={index}>
                            <span className={`text-content ${task.completed ? "done" : ""}`}>
                                {task.text}
                            </span>

                            <input type="checkbox" className="check" checked={task.completed} onChange={() => toggleTask(index)}  value={newTask}/>
                            <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>

                        </li>)}
                    </ol>
            </div>
        </div>

    );
}

export default ToDoList