import { useState } from "react";

export default function AddNewTask({ setNewTask }) {

  const [formData,setFormData] = useState({
    title: "",
    description:"",
    assignee:"",
    status: false,
    priority:"",
    createdDate:"",
    dueDate:"",
  })

  const handleChange =(event)=>{
    const {value, name, type, checked} = event.target;
    
    setFormData(val =>({
      ...val,
      [name]: type === "checkbox"? checked: value
    }));
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      ...formData
    };

    setNewTask((prevTasks) => [newTask, ...prevTasks]);
    
    setFormData({
      title: "",
      description:"",
      assignee:"",
      status: false,
      priority:"",
      createdDate:"",
      dueDate:"",
    })

  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="enter the title"
          required
        />
      </label>

      <label>
        Description:
        <input
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="enter the description"
          required
        />
      </label>

      <label>
        Assignee:
        <input
          name="assignee"
          type="text"
          value={formData.assignee}
          onChange={handleChange}
          placeholder="enter the assignee"
          required
        />
      </label>

      <label>
        Status:
        <select 
          name="status"
          value={formData.status} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Status</option>
          <option value="Not Assigned">Not Assigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>

      <label>
        Priority:
        <select 
          name="priority" 
          value={formData.priority} 
          onChange={handleChange}
          required
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <label>
        Date of creation:
        <input
          name="createdDate"
          type="date"
          value={formData.createdDate}
          onChange={handleChange}
          placeholder="enter the date of creation"
          required
        />
      </label>

      <label>
        Deadline:
        <input
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          placeholder="enter the due date"
          required
        />
      </label>

      <button>Create</button>
    </form>
  );
}
