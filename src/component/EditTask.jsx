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
    <form class="formManipulate" onSubmit={handleSubmit} >
      <h2>Edit Task</h2>
      <label>Title:
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
        />
        </label>

      <label>Description:
        <input
          type="text"
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
        />
      </label>
      

      <label>Assignee:
        <input
          type="text"
          name="assignee"
          value={updatedTask.assignee}
          onChange={handleChange}
        />
      </label>

      <label>Priority:
      <select
        name="priority"
        value={updatedTask.priority}
        onChange={handleChange}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      </label>
      

      <label>Status:
      <select
        name="status"
        value={updatedTask.status}
        onChange={handleChange}
      >
        <option value="Not Assigned">Not Assigned</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      </label>
      

      <button type="submit">Save Changes</button>
    </form>
  );
}