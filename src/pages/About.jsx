import { Routes, Route, Link, NavLink } from "react-router-dom";import React from 'react';
import "./About.css"
export default function AboutPage() {
  return (
    <div id="about-page">
      <h1>About Kanbanana 🍌</h1>
      <p>
        <strong>Kanbanana</strong> is a <strong>Kanban-style task management tool </strong>  
        designed to help users <strong> organize, assign, and track tasks efficiently</strong>.  
        Whether you're managing a project or keeping track of daily to-dos, Kanbanana makes 
        workflow management a<strong>peel</strong>ing easy! 😉
      </p>

      <h2> How to Use Kanbanana</h2>
      <ul>
        <li><strong>Create Tasks:</strong> Add a new task by entering details like title, assignee, priority, and due date.</li>
        <li><strong>Assign Tasks:</strong> Select an assignee from your team to manage responsibility.</li>
        <li><strong>Update Progress:</strong> Change task status to "Not Assigned," "In Progress," or "Completed."</li>
        <li><strong>Delete Tasks:</strong> Remove unwanted tasks from your board.</li>
      </ul>

      <h2>🔹 Features</h2>
      <ul>
        <li>📌 Task assignment & tracking</li>
        <li>🗂️ Organize tasks by priority</li>
        <li>📅 Set deadlines and due dates</li>
        <li>✅ Update status dynamically</li>
        <li>📊 Kanban-style workflow</li>
      </ul>

      <h2>💡 Why Use Kanbanana?</h2>
      <p>
        Kanbanana is <strong>simple, lightweight, and effective</strong> for project & task management.  
        It helps teams and individuals stay <strong>organized, productive, and in control</strong> of their workflow.
      </p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}