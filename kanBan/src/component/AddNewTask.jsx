import { useState } from "react";

export default function AddNewTask({ setNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState(false);
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      assignee,
      status,
      priority,
      createdDate,
      dueDate,
    };

    setNewTask((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("");
    setPriority(false);
    setCreatedDate("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter the title"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="enter the description"
        />
      </label>
      <label>
        Assignee:
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="enter the assignee"
        />
      </label>
      <label>
        Status:
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="enter the status"
        />
      </label>
      <label>
        Is this task high priority:
        <input
          type="checkbox"
          checked={priority}
          onChange={(e) => setPriority(e.target.checked)}
        />
      </label>
      <label>
        Date of creation:
        <input
          type="text"
          value={createdDate}
          onChange={(e) => setCreatedDate(e.target.value)}
          placeholder="enter the date of creation"
        />
      </label>
      <label>
        Deadline:
        <input
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="enter the due date"
        />
      </label>

      <button>Create</button>
    </form>
  );
}
