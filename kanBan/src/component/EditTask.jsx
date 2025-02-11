import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditTask(props) {
  const { taskId } = useParams();
  const navigate = useNavigate();


  const task = props.taskArr.find((task) => task.id === taskId);
  
  if (!task) {
    navigate("/");
  }

  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
    assignee: task.assignee,
    priority: task.priority,
    createdDate: task.createdDate,
    status: task.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({
      ...updatedTask,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateTask(taskId, updatedTask);
    navigate(`/tasks/${taskId}`); 
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
        />
        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
        />
        <br />

        <label>Assignee:</label>
        <input
          type="text"
          name="assignee"
          value={updatedTask.assignee}
          onChange={handleChange}
        />
        <br />

        <label>Priority:</label>
        <select
          name="priority"
          value={updatedTask.priority}
          onChange={handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <br />

        <label>Status:</label>
        <select
          name="status"
          value={updatedTask.status}
          onChange={handleChange}
        >
          <option value="Not Assigned">Not Assigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}